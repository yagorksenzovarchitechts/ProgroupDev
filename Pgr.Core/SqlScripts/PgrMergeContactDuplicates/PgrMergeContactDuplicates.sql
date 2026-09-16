/*
** Project: ProGroup
** DBMS   : PostgreSQL
** Type   : Function
** Name   : PgrMergeContactDuplicates
** Note   : Postgres port of the base platform's tsp_MergeDuplicates /
**          tsp_MergeDuplicatesDetail / tsp_MergeFolders / tsp_MergeRights
**          (package CrtBase, MSSQL only), scoped to the Contact schema only.
*/
DROP FUNCTION IF EXISTS "public"."PgrMergeContactDuplicates";
CREATE FUNCTION "public"."PgrMergeContactDuplicates"(
	"PrimaryEntityId" uuid,
	"EntitiesToMerge" text
)
RETURNS void
AS $BODY$
DECLARE
	mergeIds uuid[];
	duplicateStatusId uuid;
	r RECORD;
	sql TEXT;
	additionalSets TEXT;
	minPosition INT;
	firstRightId uuid;
	op INT;
BEGIN
	mergeIds := ARRAY(SELECT btrim(x)::uuid FROM unnest(string_to_array("EntitiesToMerge", ',')) x);
	SELECT "Id" INTO duplicateStatusId FROM "DuplicateStatus" WHERE "Code" = 'Duplicate';

	/* Backfill empty primary fields from the merged records, in mergeIds order (the newly created record first) */
	UPDATE "Contact" p
	SET
		"GivenName" = COALESCE(NULLIF(p."GivenName", ''), (
			SELECT NULLIF(d."GivenName", '') FROM "Contact" d
			WHERE d."Id" = ANY(mergeIds) AND NULLIF(d."GivenName", '') IS NOT NULL
			ORDER BY array_position(mergeIds, d."Id") LIMIT 1
		)),
		"Surname" = COALESCE(NULLIF(p."Surname", ''), (
			SELECT NULLIF(d."Surname", '') FROM "Contact" d
			WHERE d."Id" = ANY(mergeIds) AND NULLIF(d."Surname", '') IS NOT NULL
			ORDER BY array_position(mergeIds, d."Id") LIMIT 1
		)),
		"JobTitle" = COALESCE(NULLIF(p."JobTitle", ''), (
			SELECT NULLIF(d."JobTitle", '') FROM "Contact" d
			WHERE d."Id" = ANY(mergeIds) AND NULLIF(d."JobTitle", '') IS NOT NULL
			ORDER BY array_position(mergeIds, d."Id") LIMIT 1
		)),
		"TypeId" = COALESCE(p."TypeId", (
			SELECT d."TypeId" FROM "Contact" d
			WHERE d."Id" = ANY(mergeIds) AND d."TypeId" IS NOT NULL
			ORDER BY array_position(mergeIds, d."Id") LIMIT 1
		)),
		"AccountId" = COALESCE(p."AccountId", (
			SELECT d."AccountId" FROM "Contact" d
			WHERE d."Id" = ANY(mergeIds) AND d."AccountId" IS NOT NULL
			ORDER BY array_position(mergeIds, d."Id") LIMIT 1
		))
	WHERE p."Id" = "PrimaryEntityId";

	FOR r IN
		SELECT DISTINCT ss."Name" AS table_name, esr."ColumnName" AS column_name
		FROM "SysEntitySchemaReference" esr
		INNER JOIN "SysSchema" ss ON ss."Id" = esr."SysSchemaId"
		INNER JOIN pg_catalog.pg_class pc ON pc.relname = ss."Name" AND pc.relkind = 'r'
		INNER JOIN pg_catalog.pg_namespace pn ON pn.oid = pc.relnamespace AND pn.nspname = 'public'
		WHERE
			EXISTS (
				SELECT 1 FROM "VwSysSchemaInWorkspace" ws
				WHERE ws."Name" = 'Contact' AND esr."ReferenceSchemaId" = ws."Id"
			)
			AND esr."ColumnName" NOT IN ('ModifiedBy', 'CreatedBy', 'LockedBy')
		UNION ALL
		SELECT 'SysContactRight', 'Record'
		UNION ALL
		SELECT 'SysSyncMetaData', 'Local'
	LOOP
		additionalSets := '';
		IF r.table_name = 'ContactCommunication' THEN
			additionalSets := ', "Position" = 0';
		ELSIF r.table_name = 'ContactAddress' THEN
			additionalSets := ', "Primary" = false';
		ELSIF r.table_name = 'ContactCareer' THEN
			additionalSets := ', "DueDate" = CASE WHEN "Current" AND "Primary" THEN now() ELSE "DueDate" END, ' ||
				'"Current" = CASE WHEN "Current" AND "Primary" THEN false ELSE "Current" END';
		END IF;

		sql := format(
			'UPDATE %I SET %I = $1 %s WHERE %I = ANY($2)',
			r.table_name, r.column_name || 'Id', additionalSets, r.column_name || 'Id'
		);
		EXECUTE sql USING "PrimaryEntityId", mergeIds;
	END LOOP;

	/* tsp_MergeFolders: dedup ContactInFolder by (ContactId, FolderId) */
	DELETE FROM "ContactInFolder"
	WHERE "Id" IN (
		SELECT "Id" FROM (
			SELECT "Id",
				row_number() OVER (PARTITION BY "ContactId", "FolderId" ORDER BY "ContactId", "FolderId") AS rn
			FROM "ContactInFolder"
			WHERE "ContactId" = "PrimaryEntityId"
		) tmp
		WHERE tmp.rn > 1
	);

	/* tsp_MergeRights: dedup SysContactRight, keep MAX(RightLevel)/MIN(Position) per group */
	INSERT INTO "SysContactRight" ("RecordId", "SysAdminUnitId", "RightLevel", "Operation", "Position", "SourceId")
	SELECT "RecordId", "SysAdminUnitId", MAX("RightLevel"), "Operation", MIN("Position"), "SourceId"
	FROM "SysContactRight"
	WHERE "RecordId" = "PrimaryEntityId"
	GROUP BY "RecordId", "SysAdminUnitId", "SourceId", "Operation"
	HAVING COUNT("RecordId") > 1;

	DELETE FROM "SysContactRight"
	WHERE "Id" IN (
		SELECT "Id" FROM (
			SELECT "Id",
				row_number() OVER (
					PARTITION BY "RecordId", "SysAdminUnitId", "SourceId", "Operation"
					ORDER BY "RightLevel" DESC, "Position"
				) AS rk
			FROM "SysContactRight"
			WHERE "RecordId" = "PrimaryEntityId"
		) tmp
		WHERE tmp.rk > 1
	) AND "RecordId" = "PrimaryEntityId";

	FOR op IN 0..2 LOOP
		SELECT MIN("Position") INTO minPosition
		FROM "SysContactRight"
		WHERE "RecordId" = "PrimaryEntityId" AND "Operation" = op;

		IF minPosition IS NOT NULL THEN
			SELECT "Id" INTO firstRightId
			FROM "SysContactRight"
			WHERE "RecordId" = "PrimaryEntityId" AND "Position" = minPosition AND "Operation" = op
			LIMIT 1;

			IF firstRightId IS NOT NULL THEN
				PERFORM "tsp_SetRecordPosition"('SysContactRight', 'Id', firstRightId, 'RecordId,Operation', minPosition);
			END IF;
		END IF;
	END LOOP;

	/* tsp_MergeDuplicatesDetail: clean up ContactDuplicate */
	DELETE FROM "ContactDuplicate"
	WHERE "Id" IN (
		SELECT "Id" FROM (
			SELECT "Id",
				row_number() OVER (
					PARTITION BY "Entity1Id", "Entity2Id"
					ORDER BY "Entity1Id", "Entity2Id",
						CASE WHEN "StatusOfDuplicateId" = duplicateStatusId THEN 0 ELSE 1 END
				) AS rn
			FROM "ContactDuplicate"
		) tmp
		WHERE tmp.rn > 1
	) AND ("Entity1Id" = "PrimaryEntityId" OR "Entity2Id" = "PrimaryEntityId");

	DELETE FROM "ContactDuplicate" WHERE "Entity1Id" = "Entity2Id";

	DELETE FROM "ContactDuplicate"
	WHERE "Id" IN (
		SELECT "Id" FROM (
			SELECT o."Id",
				row_number() OVER (
					PARTITION BY CASE WHEN o."Entity1Id" = "PrimaryEntityId" THEN o."Entity2Id" ELSE o."Entity1Id" END
					ORDER BY CASE WHEN o."StatusOfDuplicateId" = duplicateStatusId THEN 0 ELSE 1 END
				) AS rn
			FROM "ContactDuplicate" o
			INNER JOIN "ContactDuplicate" i ON o."Entity1Id" = i."Entity2Id" AND o."Entity2Id" = i."Entity1Id"
			WHERE o."Entity1Id" = "PrimaryEntityId" OR o."Entity2Id" = "PrimaryEntityId"
		) tmp
		WHERE tmp.rn > 1
	);

	/* Cleanup: remove the merged Contact rows */
	DELETE FROM "Contact" WHERE "Id" = ANY(mergeIds);
END;
$BODY$ LANGUAGE plpgsql;
