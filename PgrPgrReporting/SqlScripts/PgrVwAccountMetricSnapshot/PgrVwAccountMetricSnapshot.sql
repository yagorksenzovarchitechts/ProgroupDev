CREATE OR REPLACE VIEW "PgrVwAccountMetricSnapshot" AS
WITH cal_lwd AS (
         SELECT cal."Id" AS "CalendarId", MAX(d.d::date) AS "Lwd"
           FROM "Calendar" cal
             CROSS JOIN generate_series(CURRENT_DATE - 21, CURRENT_DATE - 1, '1 day'::interval) d(d)
          WHERE NOT EXISTS (SELECT 1 FROM "DayOff" o
                  WHERE o."CalendarId" IN (cal."Id", cal."ParentId")
                    AND o."DayTypeId" = '078c9b1e-9312-43ef-b890-e5298db62827'::uuid
                    AND (o."Date"::date = d.d::date OR (o."IsRepeated" AND to_char(o."Date", 'MMDD') = to_char(d.d, 'MMDD'))))
            AND NOT EXISTS (SELECT 1 FROM "DayInCalendar" dc JOIN "DayOfWeek" w ON w."Id" = dc."DayOfWeekId"
                  WHERE dc."CalendarId" = cal."Id"
                    AND dc."DayTypeId" = '078c9b1e-9312-43ef-b890-e5298db62827'::uuid
                    AND w."Code" = (ARRAY['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'])[EXTRACT(dow FROM d.d)::int + 1])
            AND (EXISTS (SELECT 1 FROM "DayInCalendar" dc2 WHERE dc2."CalendarId" = cal."Id" AND dc2."DayOfWeekId" IS NOT NULL)
                 OR EXTRACT(dow FROM d.d)::int NOT IN (0, 6))
          GROUP BY cal."Id"
        ), acct_lwd AS (
         SELECT a."Id" AS "AccountId",
            COALESCE(cl."Lwd", CURRENT_DATE - (CASE EXTRACT(dow FROM CURRENT_DATE)::int WHEN 1 THEN 3 WHEN 0 THEN 2 ELSE 1 END)) AS "Lwd"
           FROM "Account" a
             LEFT JOIN "Country" c ON c."Id" = a."CountryId"
             LEFT JOIN cal_lwd cl ON cl."CalendarId" = COALESCE(c."PgrCalendarId", 'f0ff1f0e-f46b-1410-1787-0026185bfcd3'::uuid)
        ), latest_budget AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "BudgetValue",
            v."PgrDate" AS "BudgetDate",
            v."CreatedOn" AS "BudgetCreatedOn",
            v."ModifiedOn" AS "BudgetModifiedOn",
            v."CreatedById" AS "BudgetCreatedById",
            v."ModifiedById" AS "BudgetModifiedById"
           FROM "PgrAccountMetricValue" v
             JOIN acct_lwd l ON l."AccountId" = v."PgrAccountIdId"
          WHERE v."PgrMetricTypeIdId" = 'abad9912-b6a4-4777-b445-d55d9e9a7ae1'::uuid AND v."PgrPeriodUnitIdId" = 'deda94c4-255e-4def-b4e7-d991b44d3f74'::uuid AND date_trunc('month'::text, v."PgrDate"::timestamp with time zone) = date_trunc('month'::text, l."Lwd"::timestamp with time zone)
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), latest_order_intake AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "OrderIntakeValue",
            v."PgrDate" AS "OrderIntakeDate",
            v."CreatedOn" AS "OiCreatedOn",
            v."ModifiedOn" AS "OiModifiedOn",
            v."CreatedById" AS "OiCreatedById",
            v."ModifiedById" AS "OiModifiedById"
           FROM "PgrAccountMetricValue" v
             JOIN acct_lwd l ON l."AccountId" = v."PgrAccountIdId"
          WHERE v."PgrMetricTypeIdId" = 'e6c7bd63-bdd2-4eb8-a1cf-ecd8f0a8503d'::uuid AND v."PgrDate"::date = l."Lwd"
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), latest_deviation AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "DeviationValue",
            v."PgrDate" AS "DeviationDate",
            v."CreatedOn" AS "DevCreatedOn",
            v."ModifiedOn" AS "DevModifiedOn",
            v."CreatedById" AS "DevCreatedById",
            v."ModifiedById" AS "DevModifiedById"
           FROM "PgrAccountMetricValue" v
          WHERE v."PgrMetricTypeIdId" = 'b962c96f-b5ca-47d2-83e8-8abbe755e3a3'::uuid
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), latest_nine_day_avg AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "NineDayAvgValue",
            v."PgrDate" AS "NineDayAvgDate"
           FROM "PgrAccountMetricValue" v
          WHERE v."PgrMetricTypeIdId" = '1a24cfe1-2dc9-410b-9c7f-10cc0ab7c058'::uuid
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), latest_three_day_avg AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "ThreeDayAvgValue",
            v."PgrDate" AS "ThreeDayAvgDate"
           FROM "PgrAccountMetricValue" v
          WHERE v."PgrMetricTypeIdId" = 'deaf43be-659a-48b8-bea6-d8e9527a1cc3'::uuid
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), relevant_accounts AS (
         SELECT latest_budget."AccountId"
           FROM latest_budget
        UNION
         SELECT latest_order_intake."AccountId"
           FROM latest_order_intake
        UNION
         SELECT latest_deviation."AccountId"
           FROM latest_deviation
        )
 SELECT ra."AccountId" AS "Id",
    GREATEST(b."BudgetCreatedOn", oi."OiCreatedOn", d."DevCreatedOn") AS "CreatedOn",
    COALESCE(b."BudgetCreatedById", oi."OiCreatedById", d."DevCreatedById") AS "CreatedById",
    GREATEST(b."BudgetModifiedOn", oi."OiModifiedOn", d."DevModifiedOn") AS "ModifiedOn",
    COALESCE(oi."OiModifiedById", d."DevModifiedById", b."BudgetModifiedById") AS "ModifiedById",
    0 AS "ProcessListeners",
    ra."AccountId" AS "PgrAccountId",
    acc."Name" AS "PgrCustomerName",
    b."BudgetValue" AS "PgrBudgetValue",
    b."BudgetDate" AS "PgrBudgetMonth",
    oi."OrderIntakeValue" AS "PgrOrderIntakeValue",
    oi."OrderIntakeDate" AS "PgrOrderIntakeDate",
    d."DeviationValue" AS "PgrDeviationValue",
    d."DeviationDate" AS "PgrDeviationDate",
    d."DeviationValue" / NULLIF(b."BudgetValue", 0::numeric) * 100::numeric AS "PgrDeviationPctBudget",
    n."NineDayAvgValue" AS "PgrNineDayAvgOrderIntake",
    t3."ThreeDayAvgValue" AS "PgrThreeDayAvgOrderIntake",
    n."NineDayAvgDate" AS "PgrNineDayAvgOrderIntakeDate",
    t3."ThreeDayAvgDate" AS "PgrThreeDayAvgOrderIntakeDate",
    t3."ThreeDayAvgValue" - b."BudgetValue" AS "PgrBudgetVsThreeDayAvgDeviation",
    acc."PgrWepaformName",
    (t3."ThreeDayAvgValue" - b."BudgetValue") / NULLIF(b."BudgetValue", 0::numeric) * 100::numeric AS "PgrBudgetVsThreeDayAvgDeviationPct"
   FROM relevant_accounts ra
     LEFT JOIN latest_budget b ON b."AccountId" = ra."AccountId"
     LEFT JOIN latest_order_intake oi ON oi."AccountId" = ra."AccountId"
     LEFT JOIN latest_deviation d ON d."AccountId" = ra."AccountId"
     LEFT JOIN latest_nine_day_avg n ON n."AccountId" = ra."AccountId"
     LEFT JOIN latest_three_day_avg t3 ON t3."AccountId" = ra."AccountId"
     LEFT JOIN "Account" acc ON acc."Id" = ra."AccountId";
