using System;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using SysSettings = Terrasoft.Core.Configuration.SysSettings;

namespace Pgr.Core
{
    #region Enum: Pgr369DailyAction

    /// <summary>
    ///     Result of the daily 3-6-9 evaluation for a single customer.
    ///     Task creation (CMVP-124) and the reminder (CMVP-125) are performed inside
    ///     <see cref="Pgr369Helper" /> itself; the value is only reported back to the
    ///     daily BPMN process for logging/branching, escalation (CMVP-126) still TODO.
    /// </summary>
    public enum Pgr369DailyAction
    {
        /// <summary>Nothing to do this run (recovery, suspended, non-working day, in-between days).</summary>
        None = 0,

        /// <summary>Day 3 reached below threshold and no open task — create the alert task (CMVP-124).</summary>
        CreateAlertTask = 3,

        /// <summary>Open task's Measure task still not filled in at day 6 — a reminder was sent (CMVP-125).</summary>
        Remind = 6,

        /// <summary>Day 10 reached — escalate the open task to the Sales Director (CMVP-126). TODO.</summary>
        Escalate = 10
    }

    #endregion

    #region Class: Pgr369Helper

    /// <summary>
    ///     Day-counter and alert-task logic for the 3-6-9 order-intake deviation process (CMVP-64).
    ///     Owns the daily counter (CMVP-123), the day-3 decision (CMVP-124) and the day-6 reminder
    ///     (CMVP-125). The budget compare value / deviation calculation lives in
    ///     <see cref="Pgr369BudgetCalculator" /> (CMVP-194); this class only reads the precomputed
    ///     deviation flag. Escalation (CMVP-126) is only signalled here; the BPMN process performs it.
    /// </summary>
    public class Pgr369Helper
    {
        #region Constants

        /// <summary>Day-counter sentinel meaning "suspended by Sales Director" (CMVP-127).</summary>
        private const int SuspendedCounter = -1;

        private const string DayThresholdSettingCode = "Pgr369ProcessDay3Threshold";
        private const int DefaultDayThreshold = 3;

        private const string Day6ThresholdSettingCode = "Pgr369ProcessDay6Threshold";
        private const int DefaultDay6Threshold = 6;

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

            // Suspended by Sales Director (CMVP-127), or a non-working day (CMVP-123: the
            // counter only advances on working days) — nothing to do this run.
            if (counter == SuspendedCounter || !_workingDayHelper.IsWorkingDay(DateTime.Today, accountId))
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

            var updatedCounter = AdvanceDayCounter(accountId, counter, isDeviation.Value);
            if (updatedCounter == null)
            {
                // Diagram "Order intake less than threshold? No" — intake recovered this run.
                return Pgr369DailyAction.None;
            }

            return DecideAction(accountId, updatedCounter.Value);
        }

        #endregion

        #region Methods: Private

        /// <summary>
        ///     Diagram "369 order intake deviation": increments the day counter, then either persists
        ///     it (still deviating) or resets it to 0 and auto-closes any open 3-6-9 measure task
        ///     (CMVP-123 AC, recovered). Returns the new counter value, or null when it recovered.
        /// </summary>
        private int? AdvanceDayCounter(Guid accountId, int counter, bool isDeviation)
        {
            counter += 1;
            if (!isDeviation)
            {
                SetCounter(accountId, 0);
                CloseOpenMeasureTasks(accountId);
                return null;
            }

            SetCounter(accountId, counter);
            return counter;
        }

        /// <summary>
        ///     Day-threshold decision (CMVP-124/125/126) once the counter for today has been persisted.
        /// </summary>
        private Pgr369DailyAction DecideAction(Guid accountId, int counter)
        {
            var openAlertTask = GetOpenAlertTask(accountId);

            // CMVP-124: at day 3 with no open task → create the alert task.
            if (counter == GetDayThreshold() && openAlertTask == null)
            {
                return Pgr369DailyAction.CreateAlertTask;
            }

            // CMVP-125: at day 6, if the open task's Measure task still has no reason/measure
            // filled in, remind the sales person (the alert task's Owner). If it is already
            // filled in, no reminder is sent and the daily cycle ends here for this account.
            if (openAlertTask != null && counter == GetDay6Threshold() &&
                !HasFilledMeasureTask(openAlertTask.PrimaryColumnValue))
            {
                SendMeasureTaskReminder(openAlertTask);
                return Pgr369DailyAction.Remind;
            }

            // TODO CMVP-126: escalate to the Sales Director at day 10 if still not filled in.
            return Pgr369DailyAction.None;
        }

        /// <summary>Day value (SysSettings "Pgr369ProcessDay3Threshold") at which the alert task is created. Default 3.</summary>
        private int GetDayThreshold()
        {
            return SysSettings.GetValue(_userConnection, DayThresholdSettingCode, DefaultDayThreshold);
        }

        /// <summary>
        ///     Day value (SysSettings "Pgr369ProcessDay6Threshold") at which an unfilled open task triggers a reminder.
        ///     Default 6.
        /// </summary>
        private int GetDay6Threshold()
        {
            return SysSettings.GetValue(_userConnection, Day6ThresholdSettingCode, DefaultDay6Threshold);
        }

        /// <summary>New ESQ against the given schema with the standard non-privileged always-select setup.</summary>
        private EntitySchemaQuery CreateQuery(string schemaName)
        {
            return new EntitySchemaQuery(_userConnection.EntitySchemaManager, schemaName)
            {
                UseAdminRights = false,
                PrimaryQueryColumn =
                {
                    IsAlwaysSelect = true
                }
            };
        }

        private EntitySchemaQuery CreateActivityQuery()
        {
            return CreateQuery("Activity");
        }

        /// <summary>ESQ for the account's open (not finished) activities of the given category.</summary>
        private EntitySchemaQuery CreateOpenActivityQuery(Guid accountId, Guid activityCategoryId)
        {
            var esq = CreateActivityQuery();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                activityCategoryId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "Status.Finish",
                true));
            return esq;
        }

        /// <summary>The customer's open (not finished) 3-6-9 alert task, or null if there is none.</summary>
        private Entity GetOpenAlertTask(Guid accountId)
        {
            var esq = CreateOpenActivityQuery(accountId, PgrConstants.ActivityCategory.Category369);
            esq.AddColumn("Owner");
            return esq.GetEntityCollection(_userConnection).FirstOrDefault();
        }

        /// <summary>
        ///     True if the Measure task linked to the alert task (PgrParentTask) is filled in (CMVP-125 AC):
        ///     it has a deviation reason and is in the "Completed" ("Done") status. The reason/measure
        ///     fields are only shown on the activity card at that status (page business rule), so an
        ///     unfinished Measure task counts as "not filled in" and still triggers the reminder.
        /// </summary>
        private bool HasFilledMeasureTask(Guid alertTaskId)
        {
            var esq = CreateActivityQuery();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrParentTask", alertTaskId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                PgrConstants.ActivityCategory.Measure));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Status",
                ActivityConsts.CompletedStatusUId));
            esq.Filters.Add(esq.CreateIsNotNullFilter("PgrReasonCode"));
            return esq.GetEntityCollection(_userConnection).Count > 0;
        }

        /// <summary>
        ///     Creates a Reminding record (communication-panel notification, CMVP-125 AC) addressed
        ///     to the alert task's Owner (the sales person), using the platform's own reminder
        ///     infrastructure (<see cref="RemindingUtilities" />) — the same one that backs the
        ///     Activity "Remind to owner" checkbox.
        /// </summary>
        private void SendMeasureTaskReminder(Entity alertTask)
        {
            var ownerId = alertTask.GetTypedColumnValue<Guid>("Owner");
            if (ownerId == Guid.Empty)
            {
                return;
            }

            var activitySchemaUId = _userConnection.EntitySchemaManager.GetInstanceByName("Activity").UId;
            var config = new RemindingConfig(activitySchemaUId)
            {
                SubjectId = alertTask.PrimaryColumnValue,
                AuthorId = _userConnection.CurrentUser.ContactId,
                ContactId = ownerId,
                SourceId = RemindingConsts.RemindingSourceOwnerId,
                NotificationTypeId = RemindingConsts.NotificationTypeRemindingId,
                Description = GetLocalizableString("MeasureReminderMessage"),
                PopupTitle = GetLocalizableString("MeasureReminderTitle")
            };
            new RemindingUtilities().CreateReminding(_userConnection, config);
        }

        /// <summary>Reads a localized string of this schema by its resource name.</summary>
        private string GetLocalizableString(string name)
        {
            return new LocalizableString(_userConnection.ResourceStorage,
                nameof(Pgr369Helper), $"LocalizableStrings.{name}.Value").ToString();
        }

        private Entity GetAccount(Guid accountId, params string[] columns)
        {
            var esq = CreateQuery("Account");
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
            var esq = CreateOpenActivityQuery(accountId, PgrConstants.ActivityCategory.Measure);
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