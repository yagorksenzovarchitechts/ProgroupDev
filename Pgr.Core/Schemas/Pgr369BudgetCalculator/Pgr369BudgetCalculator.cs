using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;

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
        private const int RollingWindowDays = 3;

        // --- Test fixed values (CMVP-124, comment answer to question 2 & CMVP-194) ---
        // "use test fixed values for now. use Order.Amount for order intake and budget is
        //  fixed to 10000 (square meters)." The tolerance values match the "thesholds example"
        //  worksheet (absolute = 1000, percentage = 5%). Replace with the real per-customer /
        //  per-period budget + tolerance source (matrix / Account override) once CMVP-122/194
        //  land — see ResolveDailyThreshold.
        private const decimal TestDailyBudget = 10000m;
        private const decimal TestAbsoluteTolerance = 1000m;
        private const decimal TestPercentTolerance = 5m;

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
            var calculation = new Pgr369DailyCalculation
            {
                AccountId = accountId,
                CalculationDate = DateTime.Today,
                CalendarId = _workingDayHelper.GetCalendarId(accountId),
                FullBudget = TestDailyBudget,
                ToleranceAdjustedBudget = ResolveDailyThreshold(accountId, DateTime.Today)
            };

            // Trailing 3-working-day window ending yesterday; both averages share it (CMVP-194).
            var window = GetLastWorkingDays(accountId, RollingWindowDays);
            if (window.Count > 0)
            {
                calculation.WindowFrom = window.Min();
                calculation.WindowTo = window.Max();
                calculation.BudgetCompareValue = GetBudgetCompareValue(accountId, window);
                calculation.OrderIntakeAvg = GetAvg3OrderIntake(accountId, window);
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
        private decimal GetBudgetCompareValue(Guid accountId, List<DateTime> window)
        {
            var sum = 0m;
            foreach (var day in window)
            {
                var dailyThreshold = ResolveDailyThreshold(accountId, day);
                sum += GetDayType(day, accountId) == Pgr369DayType.Half
                    ? dailyThreshold / 2m
                    : dailyThreshold;
            }

            return sum / window.Count;
        }

        /// <summary>
        ///     Tolerance-adjusted daily threshold for a customer on a given date (CMVP-194):
        ///     applied tolerance = MIN(absolute, budget × %/100) — the smaller tolerance gives the
        ///     stricter (larger) threshold — and daily threshold = daily budget − applied tolerance.
        ///     TODO CMVP-122/194: replace the test fixed values with the real per-customer /
        ///     per-period budget and tolerance (customer override on Account takes precedence over
        ///     the PgrCustomerThresholdMatrix row). The <paramref name="date" /> is already threaded
        ///     through so a per-period budget can be resolved without changing the callers.
        /// </summary>
        private decimal ResolveDailyThreshold(Guid accountId, DateTime date)
        {
            var dailyBudget = TestDailyBudget;
            var percentToleranceValue = dailyBudget * TestPercentTolerance / 100m;
            var appliedTolerance = Math.Min(TestAbsoluteTolerance, percentToleranceValue);
            return dailyBudget - appliedTolerance;
        }

        /// <summary>
        ///     Average order intake over the supplied trailing working-day window (CMVP-194).
        ///     Uses <c>Order.Amount</c> as-reported (not scaled on half days) and divides by the
        ///     size of the window — the same window used for the budget compare value.
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
                FilterComparisonType.GreaterOrEqual, "PgrWorkingDayDate", window.Min()));
            esq.Filters.Add(esq.CreateFilterWithParameters(
                FilterComparisonType.LessOrEqual, "PgrWorkingDayDate", window.Max()));
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