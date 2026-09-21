/*
** Project: ProGroup
** DBMS   : PostgreSQL
** Type   : One-time data fix
** Name   : PgrSetDefaultUserFormatsBackfill
** Note   : CMVP-256. Backfills NumberFormat/DateTimeFormat for existing
**          users of type User (SysAdminUnitTypeValue = 4) with culture
**          en-US or de-DE that don't already have them set. Scoped to
**          User only, not roles/org units/service accounts. Companion
**          to the TRPgrSysAdminUnitDefaultFormats trigger, which only
**          covers newly created users.
*/
UPDATE "SysAdminUnit" au
SET
	"NumberFormatId" = COALESCE(au."NumberFormatId", (SELECT "Id" FROM "SysNumberFormat" WHERE "Name" = '123 456,00' LIMIT 1)),
	"DateTimeFormatId" = COALESCE(au."DateTimeFormatId", (SELECT "Id" FROM "SysLanguage" WHERE "Code" = 'en-GB' LIMIT 1))
FROM "SysCulture" c
WHERE c."Id" = au."SysCultureId"
	AND c."Name" IN ('en-US', 'de-DE')
	AND au."SysAdminUnitTypeValue" = 4
	AND (au."NumberFormatId" IS NULL OR au."DateTimeFormatId" IS NULL);
