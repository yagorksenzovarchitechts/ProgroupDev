CREATE OR REPLACE VIEW "PgrVwAccountBudgetRank" AS
SELECT
  s."Id", s."CreatedOn", s."CreatedById", s."ModifiedOn", s."ModifiedById", s."ProcessListeners",
  s."PgrAccountId", s."PgrCustomerName", s."PgrBudgetValue", s."PgrBudgetMonth",
  s."PgrOrderIntakeValue", s."PgrOrderIntakeDate", s."PgrDeviationValue", s."PgrDeviationDate",
  s."PgrDeviationPctBudget", s."PgrNineDayAvgOrderIntake",
  acc."PgrSalesManagerId", acc."PgrSalesDirectorId", acc."TerritoryId" AS "PgrTerritoryId",
  ROW_NUMBER() OVER (PARTITION BY acc."PgrSalesManagerId" ORDER BY s."PgrBudgetValue" DESC) AS "PgrRankBySalesManager",
  ROW_NUMBER() OVER (PARTITION BY acc."PgrSalesDirectorId" ORDER BY s."PgrBudgetValue" DESC) AS "PgrRankBySalesDirector",
  ROW_NUMBER() OVER (PARTITION BY acc."TerritoryId" ORDER BY s."PgrBudgetValue" DESC) AS "PgrRankByTerritory",
  ROW_NUMBER() OVER (PARTITION BY acc."PgrSalesManagerId" ORDER BY s."PgrDeviationValue" ASC) AS "PgrDeviationRankBySalesManager",
  ROW_NUMBER() OVER (PARTITION BY acc."PgrSalesDirectorId" ORDER BY s."PgrDeviationValue" ASC) AS "PgrDeviationRankBySalesDirector",
  ROW_NUMBER() OVER (PARTITION BY acc."TerritoryId" ORDER BY s."PgrDeviationValue" ASC) AS "PgrDeviationRankByTerritory"
FROM "PgrVwAccountMetricSnapshot" s
JOIN "Account" acc ON acc."Id" = s."PgrAccountId"
WHERE s."PgrBudgetValue" IS NOT NULL OR s."PgrDeviationValue" IS NOT NULL;