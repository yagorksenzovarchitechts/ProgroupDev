CREATE OR REPLACE VIEW "PgrVwSalesManagerMetricSnapshot" AS
 WITH latest_nine_day_avg AS (
         SELECT DISTINCT ON (v."PgrAccountIdId") v."PgrAccountIdId" AS "AccountId",
            v."PgrValue" AS "NineDayAvgValue"
           FROM "PgrAccountMetricValue" v
          WHERE v."PgrMetricTypeIdId" = '1a24cfe1-2dc9-410b-9c7f-10cc0ab7c058'::uuid
          ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
        ), per_manager AS (
         SELECT acc."PgrSalesManagerId" AS "SalesManagerId",
            sum(s."PgrBudgetValue") AS "BudgetValue",
            sum(s."PgrOrderIntakeValue") AS "OrderIntakeValue",
            sum(n."NineDayAvgValue") AS "NineDayAvgValue",
            max(s."CreatedOn") AS "CreatedOn",
            max(s."ModifiedOn") AS "ModifiedOn"
           FROM "PgrVwAccountMetricSnapshot" s
             JOIN "Account" acc ON acc."Id" = s."PgrAccountId"
             LEFT JOIN latest_nine_day_avg n ON n."AccountId" = s."PgrAccountId"
          WHERE acc."PgrSalesManagerId" IS NOT NULL
          GROUP BY acc."PgrSalesManagerId"
        )
 SELECT pm."SalesManagerId" AS "Id",
    pm."CreatedOn",
    NULL::uuid AS "CreatedById",
    pm."ModifiedOn",
    NULL::uuid AS "ModifiedById",
    0 AS "ProcessListeners",
    pm."SalesManagerId" AS "PgrSalesManagerIdId",
    con."Name" AS "PgrSalesManagerName",
    pm."BudgetValue" AS "PgrBudgetMtd",
    pm."OrderIntakeValue" AS "PgrActualMtd",
    (pm."OrderIntakeValue" - pm."BudgetValue") / NULLIF(pm."BudgetValue", 0::numeric) * 100::numeric AS "PgrDeviationPct",
    pm."NineDayAvgValue" AS "PgrNineDayAvgOrderIntake"
   FROM per_manager pm
     LEFT JOIN "Contact" con ON con."Id" = pm."SalesManagerId";