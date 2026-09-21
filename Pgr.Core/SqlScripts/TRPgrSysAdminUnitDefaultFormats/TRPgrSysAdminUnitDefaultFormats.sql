/*
** Project: ProGroup
** DBMS   : PostgreSQL
** Type   : Trigger
** Name   : TRPgrSysAdminUnitDefaultFormats
** Note   : CMVP-256. For a new SysAdminUnit of type User (SysAdminUnitTypeValue = 4)
**          with culture en-US or de-DE, default NumberFormat to "123 456,00" and
**          DateTimeFormat to "English (United Kingdom)" (en-GB, gives dd/MM/yyyy)
**          when not already set. Scoped to User only, not roles/org units/service
**          accounts (Organization, Division, Manager, Team, Self-service portal
**          user, Functional role, Service user). Fires on INSERT so it also covers
**          users created outside the Creatio business layer (import, replication).
*/
DROP TRIGGER IF EXISTS "TRPgrSysAdminUnitDefaultFormats" ON "SysAdminUnit";
DROP FUNCTION IF EXISTS "public"."TRPgrSysAdminUnitDefaultFormatsI_Func";

CREATE FUNCTION "public"."TRPgrSysAdminUnitDefaultFormatsI_Func"()
RETURNS trigger
AS $BODY$
DECLARE
	cultureCode varchar;
BEGIN
	SELECT "Name" INTO cultureCode FROM "SysCulture" WHERE "Id" = NEW."SysCultureId";

	IF NEW."SysAdminUnitTypeValue" = 4 AND cultureCode IN ('en-US', 'de-DE') THEN
		IF NEW."NumberFormatId" IS NULL THEN
			SELECT "Id" INTO NEW."NumberFormatId" FROM "SysNumberFormat" WHERE "Name" = '123 456,00' LIMIT 1;
		END IF;

		IF NEW."DateTimeFormatId" IS NULL THEN
			SELECT "Id" INTO NEW."DateTimeFormatId" FROM "SysLanguage" WHERE "Code" = 'en-GB' LIMIT 1;
		END IF;
	END IF;

	RETURN NEW;
END;
$BODY$ LANGUAGE plpgsql;

CREATE TRIGGER "TRPgrSysAdminUnitDefaultFormats"
BEFORE INSERT ON "SysAdminUnit"
FOR EACH ROW
EXECUTE FUNCTION "public"."TRPgrSysAdminUnitDefaultFormatsI_Func"();
