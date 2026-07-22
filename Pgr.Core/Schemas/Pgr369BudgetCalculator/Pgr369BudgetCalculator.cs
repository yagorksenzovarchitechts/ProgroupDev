using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using SysSettings = Terrasoft.Core.Configuration.SysSettings;

namespace Pgr.Core
{
    #region Class: Pgr369BudgetCalculator

    /// <summary>
    ///     Budget-compare-value engine for the 3-6-9 order-intake deviation process (CMVP-194).
    ///     Owns the calendar-adjusted daily threshold, the 3-day rolling averages (budget compare
    ///     value and order intake) and the deviation decision, and materializes one row per
    ///     customer per day into the Pgr369BudgetCalculation entity. The heavy calculation is meant
    ///     to run nightly (~03:00) via <see cref="SaveDailyCalculation" />; the daily 3-6-9 evaluation
    ///     (<see cref="Pgr369Helper" />, ~06:00) only reads the result via <see cref="GetTodayDeviation" />.
    /// </summary>
    public class Pgr369BudgetCalculator
    {
        #region Constants

        private const string EntityName = "Pgr369BudgetCalculation";
        private const string ThresholdMatrixEntityName = "PgrCustomerThresholdMatrix";
        private const int RollingWindowDays = 3;

        // Fixed daily budget for the real (production) branch — used when the test-values switch is
        // off. Still a placeholder for the real per-customer / per-period budget (TODO CMVP-122/194).
        private const decimal DailyBudget = 10000m;

        // System setting (Boolean, "369 process" folder). When ON, the daily budget and the 3-day
        // order intake are taken from tester-controlled Account fields (PgrCurrentDailyBudget /
        // PgrActual3DayOrderIntake) for testing transparency (CMVP-194); when OFF (default) the real
        // logic runs (fixed budget + Order.Amount aggregate). The deviation tolerance always comes
        // from the Customer threshold matrix, regardless of this switch.
        private const string UseTestValuesSettingCode = "Pgr369UseTestValues";

        #endregion

        #region Fields

        private readonly UserConnection _userConnection;

        private readonly PgrAccountWorkingDayHelper _workingDayHelper;

        #endregion

        #region Constructor

        public Pgr369BudgetCalculator(UserConnection userConnection)
        {
            _userConnection = userConnection;
            _workingDayHelper = new PgrAccountWorkingDayHelper(userConnection);
        }

        #endregion

        #region Methods: Public

        /// <summary>
        ///     Computes today's 3-6-9 budget calculation for a customer (CMVP-194): the trailing
        ///     3-working-day window, the calendar-adjusted daily threshold, the Budget compare
        ///     value (3-day average), the order-intake average and the resulting deviation flag.
        /// </summary>
        public Pgr369DailyCalculation CalculateDaily(Guid accountId)
        {
            // CMVP-194: when the Pgr369UseTestValues system setting is ON, the daily budget and the
            // 3-day order intake come from tester-controlled Account fields; otherwise the real logic
            // runs (fixed budget + Order.Amount 3-day aggregate). Tolerance is customer-scoped and
            // date-independent; resolve it (and the test values, only when needed) once for the calc.
            var useTestValues = SysSettings.GetValue(_userConnection, UseTestValuesSettingCode, false);
            var testValues = useTestValues ? GetAccountTestValues(accountId) : Pgr369TestValues.Zero;
            var tolerance = ResolveTolerance(accountId);
            var dailyBudget = useTestValues ? testValues.DailyBudget : DailyBudget;
            var calculation = new Pgr369DailyCalculation
            {
                AccountId = accountId,
                CalculationDate = DateTime.Today,
                CalendarId = _workingDayHelper.GetCalendarId(accountId),
                FullBudget = dailyBudget,
                ToleranceAdjustedBudget = ResolveDailyThreshold(dailyBudget, tolerance)
            };

            // Trailing 3-working-day window ending yesterday. The budget compare value averages the
            // daily threshold over it (half days halved); the order intake is either the Account field
            // (test) or the Order.Amount average over the same window (real).
            var window = GetLastWorkingDays(accountId, RollingWindowDays);
            if (window.Count > 0)
            {
                calculation.WindowFrom = window.Min();
                calculation.WindowTo = window.Max();
                calculation.BudgetCompareValue = GetBudgetCompareValue(accountId, window, dailyBudget, tolerance);
                calculation.OrderIntakeAvg = useTestValues
                    ? testValues.OrderIntake
                    : GetAvg3OrderIntake(accountId, window);
                calculation.IsDeviation = calculation.OrderIntakeAvg < calculation.BudgetCompareValue;
            }

            return calculation;
        }

        /// <summary>
        ///     Computes and persists today's 3-6-9 budget calculation into Pgr369BudgetCalculation,
        ///     replacing any existing row for the same customer and date (idempotent re-run).
        ///     Returns the Id of the saved row.
        /// </summary>
        public Guid SaveDailyCalculation(Guid accountId)
        {
            var calculation = CalculateDaily(accountId);
            DeleteDailyCalculation(accountId, calculation.CalculationDate);

            var schema = _userConnection.EntitySchemaManager.GetInstanceByName(EntityName);
            var entity = schema.CreateEntity(_userConnection);
            entity.SetDefColumnValues();
            entity.SetColumnValue("PgrAccountId", calculation.AccountId);
            entity.SetColumnValue("PgrCalculationDate", calculation.CalculationDate);
            if (calculation.CalendarId != Guid.Empty)
            {
                entity.SetColumnValue("PgrCalendarId", calculation.CalendarId);
            }

            if (calculation.WindowFrom.HasValue)
            {
                entity.SetColumnValue("PgrWindowFrom", calculation.WindowFrom.Value);
            }

            if (calculation.WindowTo.HasValue)
            {
                entity.SetColumnValue("PgrWindowTo", calculation.WindowTo.Value);
            }

            entity.SetColumnValue("PgrFullBudget", calculation.FullBudget);
            entity.SetColumnValue("PgrToleranceAdjustedBudget", calculation.ToleranceAdjustedBudget);
            entity.SetColumnValue("PgrBudgetCompareValue", calculation.BudgetCompareValue);
            entity.SetColumnValue("PgrOrderIntakeAvg", calculation.OrderIntakeAvg);
            entity.SetColumnValue("PgrIsDeviation", calculation.IsDeviation);
            entity.Save(false);

            return entity.PrimaryColumnValue;
        }

        /// <summary>
        ///     Today's precomputed deviation flag from Pgr369BudgetCalculation (CMVP-194), or
        ///     <c>null</c> when the nightly calculation produced no row for today.
        /// </summary>
        public bool? GetTodayDeviation(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, EntityName)
            {
                UseAdminRights = false
            };
            esq.AddColumn("PgrIsDeviation");
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrAccount", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal, "PgrCalculationDate", DateTime.Today));
            var rows = esq.GetEntityCollection(_userConnection);
            return rows.Count == 0
                ? (bool?) null
                : rows[0].GetTypedColumnValue<bool>("PgrIsDeviation");
        }

        #endregion

        #region Methods: Private

        /// <summary>
        ///     Budget compare value (CMVP-194): the 3-day rolling average of the calendar-adjusted
        ///     daily threshold over the supplied trailing working-day window.
        ///     Full day → daily threshold as-is; half day → daily threshold / 2 (non-working days
        ///     are never in <paramref name="window" />, so they are neither counted nor averaged).
        ///     Each day keeps the threshold of the period it actually occurred in, so a window that
        ///     spans a period boundary is averaged as-is (period boundary handling, CMVP-194).
        /// </summary>
        private decimal GetBudgetCompareValue(
            Guid accountId, List<DateTime> window, decimal dailyBudget, Pgr369Tolerance tolerance)
        {
            var sum = 0m;
            foreach (var day in window)
            {
                var dailyThreshold = ResolveDailyThreshold(dailyBudget, tolerance);
                sum += GetDayType(day, accountId) == Pgr369DayType.Half
                    ? dailyThreshold / 2m
                    : dailyThreshold;
            }

            return sum / window.Count;
        }

        /// <summary>
        ///     Tolerance-adjusted daily threshold (CMVP-194):
        ///     applied tolerance = MIN(absolute, budget × %/100) — the smaller tolerance gives the
        ///     stricter (larger) threshold — and daily threshold = daily budget − applied tolerance.
        ///     The <paramref name="tolerance" /> (absolute units + percentage) is resolved once per
        ///     calculation from the Customer threshold matrix; <paramref name="dailyBudget" /> is the
        ///     tester-controlled Account value (PgrCurrentDailyBudget).
        /// </summary>
        private decimal ResolveDailyThreshold(decimal dailyBudget, Pgr369Tolerance tolerance)
        {
            var percentToleranceValue = dailyBudget * tolerance.Percentage / 100m;
            var appliedTolerance = Math.Min(tolerance.Absolute, percentToleranceValue);
            return dailyBudget - appliedTolerance;
        }

        /// <summary>
        ///     Resolves the deviation tolerance (absolute units + percentage) for a customer from
        ///     the Customer threshold matrix (CMVP-194): a row keyed on the customer takes
        ///     precedence; otherwise the row matching the customer's Region + Category is used; if
        ///     neither exists both values are 0.
        /// </summary>
        private Pgr369Tolerance ResolveTolerance(Guid accountId)
        {
            return GetToleranceByCustomer(accountId)
                   ?? GetToleranceByRegionCategory(accountId)
                   ?? Pgr369Tolerance.Zero;
        }

        /// <summary>
        ///     Tolerance from the Customer threshold matrix row whose customer is
        ///     <paramref name="accountId" />, or <c>null</c> when there is no such row.
        /// </summary>
        private Pgr369Tolerance? GetToleranceByCustomer(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, ThresholdMatrixEntityName)
            {
                UseAdminRights = false
            };
            var absoluteColumn = esq.AddColumn("PgrAbsolute").Name;
            var percentageColumn = esq.AddColumn("PgrPercentage").Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrCustomer", accountId));
            return ReadTolerance(esq, absoluteColumn, percentageColumn);
        }

        /// <summary>
        ///     Tolerance from the Customer threshold matrix row matching the customer's Region
        ///     (Account.Territory) and Category (Account.PgrAccountClassification), or <c>null</c>
        ///     when the customer has no region/category or there is no matching row.
        /// </summary>
        private Pgr369Tolerance? GetToleranceByRegionCategory(Guid accountId)
        {
            var accountEsq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Account")
            {
                UseAdminRights = false
            };
            var regionColumn = accountEsq.AddColumn("Territory").Name;
            var categoryColumn = accountEsq.AddColumn("PgrAccountClassification").Name;
            accountEsq.Filters.Add(accountEsq.CreateFilterWithParameters(
                FilterComparisonType.Equal, "Id", accountId));
            var accountRows = accountEsq.GetEntityCollection(_userConnection);
            if (accountRows.Count == 0)
            {
                return null;
            }

            var regionId = accountRows[0].GetTypedColumnValue<Guid>(regionColumn);
            var categoryId = accountRows[0].GetTypedColumnValue<Guid>(categoryColumn);
            if (regionId == Guid.Empty || categoryId == Guid.Empty)
            {
                return null;
            }

            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, ThresholdMatrixEntityName)
            {
                UseAdminRights = false
            };
            var absoluteColumn = esq.AddColumn("PgrAbsolute").Name;
            var percentageColumn = esq.AddColumn("PgrPercentage").Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrRegion", regionId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrCategory", categoryId));
            return ReadTolerance(esq, absoluteColumn, percentageColumn);
        }

        /// <summary>
        ///     Runs a prepared Customer threshold matrix query and reads the tolerance from its
        ///     first row (<c>PgrAbsolute</c> = units, <c>PgrPercentage</c> = %), or <c>null</c>
        ///     when the query returns no rows.
        /// </summary>
        private Pgr369Tolerance? ReadTolerance(EntitySchemaQuery esq, string absoluteColumn, string percentageColumn)
        {
            var rows = esq.GetEntityCollection(_userConnection);
            if (rows.Count == 0)
            {
                return null;
            }

            return new Pgr369Tolerance(
                rows[0].GetTypedColumnValue<int>(absoluteColumn),
                rows[0].GetTypedColumnValue<decimal>(percentageColumn));
        }

        /// <summary>
        ///     Reads the tester-controlled test transparency values off the customer's Account
        ///     (CMVP-194): <c>PgrCurrentDailyBudget</c> (the daily budget, replacing the former fixed
        ///     10000) and <c>PgrActual3DayOrderIntake</c> (the 3-day order intake, replacing the
        ///     former Order.Amount aggregate). Both are integer columns; a missing Account yields 0/0.
        /// </summary>
        private Pgr369TestValues GetAccountTestValues(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Account")
            {
                UseAdminRights = false
            };
            var budgetColumn = esq.AddColumn("PgrCurrentDailyBudget").Name;
            var orderIntakeColumn = esq.AddColumn("PgrActual3DayOrderIntake").Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", accountId));
            var rows = esq.GetEntityCollection(_userConnection);
            if (rows.Count == 0)
            {
                return Pgr369TestValues.Zero;
            }

            return new Pgr369TestValues(
                rows[0].GetTypedColumnValue<int>(budgetColumn),
                rows[0].GetTypedColumnValue<int>(orderIntakeColumn));
        }

        /// <summary>
        ///     Real (production) average order intake over the supplied trailing working-day window
        ///     (CMVP-194), used when the test-values switch is off. Uses <c>Order.Amount</c>
        ///     as-reported (not scaled on half days) and divides by the size of the window — the same
        ///     window used for the budget compare value. Filters on the exact set of working days
        ///     (IN), not a date range, so orders dated on a non-working day that falls inside the
        ///     window's span are excluded — non-working days are skipped in both averages symmetrically.
        /// </summary>
        private decimal GetAvg3OrderIntake(Guid accountId, List<DateTime> window)
        {
            if (window.Count == 0)
            {
                return 0m;
            }

            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Order")
            {
                UseAdminRights = false
            };
            var sumColumn = esq.AddColumn(esq.CreateAggregationFunction(
                AggregationTypeStrict.Sum, "Amount")).Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "PgrIsCancelled",
                true));
            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.Equal, "PgrWorkingDayDate", window.Cast<object>().ToArray()));
            var sum = 0m;
            foreach (var row in esq.GetEntityCollection(_userConnection))
            {
                sum = row.GetTypedColumnValue<decimal>(sumColumn);
                break;
            }

            return sum / window.Count;
        }

        /// <summary>
        ///     Last <paramref name="count" /> working days (full or half) before today.
        ///     Non-working days are skipped and do not count toward <paramref name="count" />
        ///     (CMVP-194). The window ends the day before today.
        /// </summary>
        private List<DateTime> GetLastWorkingDays(Guid accountId, int count)
        {
            var days = new List<DateTime>();
            var day = DateTime.Today.AddDays(-1);
            // Guard against an empty/misconfigured calendar (all days non-working).
            var guard = 0;
            while (days.Count < count && guard < 366)
            {
                if (GetDayType(day, accountId) != Pgr369DayType.NonWorking)
                {
                    days.Add(day.Date);
                }

                day = day.AddDays(-1);
                guard++;
            }

            return days;
        }

        /// <summary>
        ///     Working-day classification for a date/customer (CMVP-194): Full / Half / Non-working.
        ///     A half day is the calendar's "Reduced working" DayType (counted as 0.5), which shares
        ///     the same IsWeekend / NonWorking flags as a full working day and can only be told apart
        ///     by its DayType Id — see <see cref="PgrConstants.DayType" />.
        /// </summary>
        private Pgr369DayType GetDayType(DateTime date, Guid accountId)
        {
            if (!_workingDayHelper.IsWorkingDay(date, accountId))
            {
                return Pgr369DayType.NonWorking;
            }

            return _workingDayHelper.GetDayTypeId(date, accountId) == PgrConstants.DayType.ReducedWorking
                ? Pgr369DayType.Half
                : Pgr369DayType.Full;
        }

        /// <summary>Removes any existing calculation row for the customer on the given date (upsert helper).</summary>
        private void DeleteDailyCalculation(Guid accountId, DateTime date)
        {
            new Delete(_userConnection)
                .From(EntityName)
                .Where("PgrAccountId").IsEqual(Column.Parameter(accountId))
                .And("PgrCalculationDate").IsEqual(Column.Parameter(date.Date))
                .Execute();
        }

        #endregion

        #region Struct: Pgr369Tolerance

        /// <summary>
        ///     A deviation tolerance pair resolved from the Customer threshold matrix (CMVP-194):
        ///     the absolute allowance (units) and the percentage allowance.
        /// </summary>
        private struct Pgr369Tolerance
        {
            public Pgr369Tolerance(decimal absolute, decimal percentage)
            {
                Absolute = absolute;
                Percentage = percentage;
            }

            /// <summary>Absolute deviation allowance in units (PgrAbsolute).</summary>
            public decimal Absolute { get; }

            /// <summary>Percentage deviation allowance (PgrPercentage).</summary>
            public decimal Percentage { get; }

            /// <summary>The "no matching matrix row" tolerance — both allowances are 0.</summary>
            public static Pgr369Tolerance Zero => new Pgr369Tolerance(0m, 0m);
        }

        #endregion

        #region Struct: Pgr369TestValues

        /// <summary>
        ///     The tester-controlled test transparency inputs read off the Account (CMVP-194):
        ///     the current daily budget and the actual 3-day order intake.
        /// </summary>
        private struct Pgr369TestValues
        {
            public Pgr369TestValues(decimal dailyBudget, decimal orderIntake)
            {
                DailyBudget = dailyBudget;
                OrderIntake = orderIntake;
            }

            /// <summary>Daily budget (Account.PgrCurrentDailyBudget).</summary>
            public decimal DailyBudget { get; }

            /// <summary>Actual 3-day order intake (Account.PgrActual3DayOrderIntake).</summary>
            public decimal OrderIntake { get; }

            /// <summary>The "no Account found" values — both 0.</summary>
            public static Pgr369TestValues Zero => new Pgr369TestValues(0m, 0m);
        }

        #endregion
    }

    #endregion

    #region Class: Pgr369DailyCalculation

    /// <summary>
    ///     One day's 3-6-9 budget calculation for a customer (CMVP-194), mirroring the columns of
    ///     the Pgr369BudgetCalculation entity. Produced by <see cref="Pgr369BudgetCalculator.CalculateDaily" />.
    /// </summary>
    public class Pgr369DailyCalculation
    {
        public Guid AccountId { get; set; }

        public DateTime CalculationDate { get; set; }

        public Guid CalendarId { get; set; }

        public DateTime? WindowFrom { get; set; }

        public DateTime? WindowTo { get; set; }

        public decimal FullBudget { get; set; }

        public decimal ToleranceAdjustedBudget { get; set; }

        public decimal BudgetCompareValue { get; set; }

        public decimal OrderIntakeAvg { get; set; }

        public bool IsDeviation { get; set; }
    }

    #endregion

    #region Enum: Pgr369DayType

    /// <summary>Working-day classification used by the 3-6-9 threshold averaging (CMVP-194).</summary>
    internal enum Pgr369DayType
    {
        /// <summary>No trading data for this day; skipped in both averages, not counted toward the 3.</summary>
        NonWorking = 0,

        /// <summary>Half working day; the day's threshold is halved before averaging.</summary>
        Half = 1,

        /// <summary>Full working day; the day's threshold is used as-is.</summary>
        Full = 2
    }

    #endregion
}