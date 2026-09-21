SELECT "Id",
    "CreatedOn",
    "CreatedById",
    "ModifiedOn",
    "ModifiedById",
    "ProcessListeners",
    "PgrAccountId",
    "PgrCustomerName",
    "PgrDeviationValue",
    ("PgrDeviationValue" / NULLIF("PgrBudgetValue", 0) * 100) AS "PgrDeviationPctBudget",
    ("PgrDeviationValue" / NULLIF("PgrOrderIntakeValue", 0) * 100) AS "PgrDeviationPctOrderIntake"
   FROM "PgrVwAccountMetricSnapshot"
  WHERE "PgrDeviationValue" IS NOT NULL AND "PgrDeviationValue" < 0::numeric
  ORDER BY "PgrDeviationValue"
 LIMIT 5;