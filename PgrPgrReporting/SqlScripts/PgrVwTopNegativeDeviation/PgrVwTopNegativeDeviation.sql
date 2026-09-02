DROP VIEW IF EXISTS "PgrVwTopNegativeDeviation";
CREATE OR REPLACE VIEW "PgrVwTopNegativeDeviation" AS
SELECT
    "Id", "CreatedOn", "CreatedById", "ModifiedOn", "ModifiedById", "ProcessListeners",
    "PgrAccountId", "PgrCustomerName", "PgrDeviationValue"
FROM "PgrVwAccountMetricSnapshot"
WHERE "PgrDeviationValue" IS NOT NULL AND "PgrDeviationValue" < 0
ORDER BY "PgrDeviationValue" ASC
LIMIT 5;