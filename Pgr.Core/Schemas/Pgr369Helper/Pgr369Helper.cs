using System;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using SysSettings = Terrasoft.Core.Configuration.SysSettings;

namespace Pgr.Core
{
    #region Enum: Pgr369DailyAction

    /// <summary>
    ///     Result of the daily 3-6-9 evaluation for a single customer.
    ///     The daily BPMN process branches on this value; task creation, reminders and
    ///     escalation are performed by the process (ActivityUserTask) so that they
    ///     surface in the communication panel (Reminding).
    /// </summary>
    public enum Pgr369DailyAction
    {
        /// <summary>Nothing to do this run (recovery, suspended, non-working day, in-between days).</summary>
        None = 0,

        /// <summary>Day 3 reached below threshold and no open task — create the alert task (CMVP-124).</summary>
        CreateAlertTask = 3,

        /// <summary>Open task not filled at day 6/9 — send a reminder (CMVP-125). TODO.</summary>
        Remind = 6,

        /// <summary>Day 10 reached — escalate the open task to the Sales Director (CMVP-126). TODO.</summary>
        Escalate = 10
    }

    #endregion

    #region Class: Pgr369Helper

    /// <summary>
    ///     Day-counter and alert-task logic for the 3-6-9 order-intake deviation process (CMVP-64).
    ///     Owns the daily counter (CMVP-123) and the day-3 decision (CMVP-124). The budget compare
    ///     value / deviation calculation lives in <see cref="Pgr369BudgetCalculator" /> (CMVP-194);
    ///     this class only reads the precomputed deviation flag. Reminders (CMVP-125) and escalation
    ///     (CMVP-126) are only signalled here; the BPMN process performs them.
    /// </summary>
    public class Pgr369Helper
    {
        #region Constants

        /// <summary>Day-counter sentinel meaning "suspended by Sales Director" (CMVP-127).</summary>
        private const int SuspendedCounter = -1;

        private const string DayThresholdSettingCode = "Pgr369ProcessDay3Threshold";
        private const int DefaultDayThreshold = 3;

        #endregion

        #region Fields

        private readonly UserConnection _userConnection;

        private readonly PgrAccountWorkingDayHelper _workingDayHelper;

        private readonly Pgr369BudgetCalculator _budgetCalculator;

        #endregion

        #region Constructor

        public Pgr369Helper(UserConnection userConnection)
        {
            _userConnection = userConnection;
            _workingDayHelper = new PgrAccountWorkingDayHelper(userConnection);
            _budgetCalculator = new Pgr369BudgetCalculator(userConnection);
        }

        #endregion

        #region Methods: Public

        /// <summary>
        ///     Daily evaluation of one customer (CMVP-123/124). Updates PgrOrderIntakeDayCounter
        ///     from the deviation flag precomputed by <see cref="Pgr369BudgetCalculator" /> and
        ///     returns the action the process must take next.
        /// </summary>
        public Pgr369DailyAction ProcessAccount(Guid accountId)
        {
            var account = GetAccount(accountId, "PgrOrderIntakeDayCounter");
            if (account == null)
            {
                return Pgr369DailyAction.None;
            }

            var counter = account.GetTypedColumnValue<int>("PgrOrderIntakeDayCounter");

            // Suspended by Sales Director (CMVP-127) — skip entirely.
            if (counter == SuspendedCounter)
            {
                return Pgr369DailyAction.None;
            }

            // Count only working days (CMVP-123): on a non-working day do not increment.
            if (!_workingDayHelper.IsWorkingDay(DateTime.Today, accountId))
            {
                return Pgr369DailyAction.None;
            }

            // 06:00 evaluation reads the deviation flag precomputed by the 03:00 nightly
            // calculation (CMVP-194): the heavy 3-day averaging runs at night and is materialized
            // in Pgr369BudgetCalculation, so this run only reads the result.
            var isDeviation = _budgetCalculator.GetTodayDeviation(accountId);
            if (isDeviation == null)
            {
                // No calculation row for today (nightly job has not run yet) — nothing to do.
                return Pgr369DailyAction.None;
            }

            // Diagram "369 order intake deviation": "Increment the day counter by one" happens
            // FIRST (right after the suspended check), BEFORE the deviation result is applied.
            counter += 1;

            if (!isDeviation.Value)
            {
                // Diagram "Order intake less than threshold? No" → reset counter to 0 (the increment
                // above is overwritten) and auto-close any open 3-6-9 measure task (CMVP-123 AC).
                SetCounter(accountId, 0);
                CloseOpenMeasureTasks(accountId);
                return Pgr369DailyAction.None;
            }

            // Diagram "Order intake less than threshold? Yes" → persist the incremented counter.
            SetCounter(accountId, counter);

            var dayThreshold = GetDayThreshold();
            var hasOpenTask = HasOpenAlertTask(accountId);

            // CMVP-124: at day 3 with no open task → create the alert task.
            if (counter == dayThreshold && !hasOpenTask)
            {
                return Pgr369DailyAction.CreateAlertTask;
            }

            // TODO CMVP-125/126: when an open task exists, branch at day 6/9 (Remind)
            // and day 10 (Escalate) after checking whether reason + measure are filled.
            return Pgr369DailyAction.None;
        }

        #endregion

        #region Methods: Private

        /// <summary>Day value (SysSettings "Pgr369ProcessDay3Threshold") at which the alert task is created. Default 3.</summary>
        private int GetDayThreshold()
        {
            return SysSettings.GetValue(_userConnection, DayThresholdSettingCode, DefaultDayThreshold);
        }

        /// <summary>True if the customer already has an open (not finished) 3-6-9 alert task.</summary>
        private bool HasOpenAlertTask(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Activity")
            {
                UseAdminRights = false,
                PrimaryQueryColumn =
                {
                    IsAlwaysSelect = true
                }
            };
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                PgrConstants.ActivityCategory.Category369));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "Status.Finish", true));
            return esq.GetEntityCollection(_userConnection).Count > 0;
        }

        private Entity GetAccount(Guid accountId, params string[] columns)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Account")
            {
                UseAdminRights = false,
                PrimaryQueryColumn =
                {
                    IsAlwaysSelect = true
                }
            };
            foreach (var column in columns)
            {
                esq.AddColumn(column);
            }

            return esq.GetEntity(_userConnection, accountId);
        }

        private void SetCounter(Guid accountId, int value)
        {
            var schema = _userConnection.EntitySchemaManager.GetInstanceByName("Account");
            var entity = schema.CreateEntity(_userConnection);
            entity.UseAdminRights = false;
            if (entity.FetchFromDB(accountId, false))
            {
                entity.SetColumnValue("PgrOrderIntakeDayCounter", value);
                entity.Save(false);
            }
        }

        /// <summary>
        ///     Closes any open 3-6-9 measure task (ActivityCategory = "Measure") for the specified
        ///     account when order intake recovers (CMVP-123 AC). Sets the task status to "Canceled".
        /// </summary>
        private void CloseOpenMeasureTasks(Guid accountId)
        {
            var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Activity")
            {
                UseAdminRights = false,
                PrimaryQueryColumn =
                {
                    IsAlwaysSelect = true
                }
            };
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                PgrConstants.ActivityCategory.Measure));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "Status.Finish",
                true));
            var tasks = esq.GetEntityCollection(_userConnection);
            var canceledStatusId = ActivityConsts.CanceledStatusUId;
            foreach (var task in tasks)
            {
                task.SetColumnValue("StatusId", canceledStatusId);
                task.Save(false);
            }
        }

        #endregion
    }

    #endregion
}
