DROP VIEW IF EXISTS "PgrVwAccountMetricSnapshot";
CREATE OR REPLACE VIEW "PgrVwAccountMetricSnapshot" AS
WITH latest_budget AS (
    SELECT DISTINCT ON (v."PgrAccountIdId")
        v."PgrAccountIdId" AS "AccountId",
        v."PgrValue" AS "BudgetValue",
        v."PgrDate" AS "BudgetDate",
        v."CreatedOn" AS "BudgetCreatedOn",
        v."ModifiedOn" AS "BudgetModifiedOn",
        v."CreatedById" AS "BudgetCreatedById",
        v."ModifiedById" AS "BudgetModifiedById"
    FROM "PgrAccountMetricValue" v
    WHERE v."PgrMetricTypeIdId" = 'abad9912-b6a4-4777-b445-d55d9e9a7ae1'
      AND v."PgrPeriodUnitIdId" = 'deda94c4-255e-4def-b4e7-d991b44d3f74'
      AND date_trunc('month', v."PgrDate") = date_trunc('month', CURRENT_DATE)
    ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
),
latest_order_intake AS (
    SELECT DISTINCT ON (v."PgrAccountIdId")
        v."PgrAccountIdId" AS "AccountId",
        v."PgrValue" AS "OrderIntakeValue",
        v."PgrDate" AS "OrderIntakeDate",
        v."CreatedOn" AS "OiCreatedOn",
        v."ModifiedOn" AS "OiModifiedOn",
        v."CreatedById" AS "OiCreatedById",
        v."ModifiedById" AS "OiModifiedById"
    FROM "PgrAccountMetricValue" v
    WHERE v."PgrMetricTypeIdId" = 'e6c7bd63-bdd2-4eb8-a1cf-ecd8f0a8503d'
    ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
),
latest_deviation AS (
    SELECT DISTINCT ON (v."PgrAccountIdId")
        v."PgrAccountIdId" AS "AccountId",
        v."PgrValue" AS "DeviationValue",
        v."PgrDate" AS "DeviationDate",
        v."CreatedOn" AS "DevCreatedOn",
        v."ModifiedOn" AS "DevModifiedOn",
        v."CreatedById" AS "DevCreatedById",
        v."ModifiedById" AS "DevModifiedById"
    FROM "PgrAccountMetricValue" v
    WHERE v."PgrMetricTypeIdId" = 'b962c96f-b5ca-47d2-83e8-8abbe755e3a3'
    ORDER BY v."PgrAccountIdId", v."PgrDate" DESC, v."ModifiedOn" DESC
),
relevant_accounts AS (
    SELECT "AccountId" FROM latest_budget
    UNION
    SELECT "AccountId" FROM latest_order_intake
    UNION
    SELECT "AccountId" FROM latest_deviation
)
SELECT
    ra."AccountId" AS "Id",
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
    d."DeviationDate" AS "PgrDeviationDate"
FROM relevant_accounts ra
LEFT JOIN latest_budget b ON b."AccountId" = ra."AccountId"
LEFT JOIN latest_order_intake oi ON oi."AccountId" = ra."AccountId"
LEFT JOIN latest_deviation d ON d."AccountId" = ra."AccountId"
LEFT JOIN "Account" acc ON acc."Id" = ra."AccountId";