DROP VIEW IF EXISTS "PgrVwTopAccountsByBudget";
CREATE OR REPLACE VIEW "PgrVwTopAccountsByBudget" AS
SELECT
    "Id", "CreatedOn", "CreatedById", "ModifiedOn", "ModifiedById", "ProcessListeners",
    "PgrAccountId", "PgrCustomerName", "PgrBudgetValue", "PgrOrderIntakeValue"
FROM "PgrVwAccountMetricSnapshot"
WHERE "PgrBudgetValue" IS NOT NULL
ORDER BY "PgrBudgetValue" DESC
LIMIT 5;