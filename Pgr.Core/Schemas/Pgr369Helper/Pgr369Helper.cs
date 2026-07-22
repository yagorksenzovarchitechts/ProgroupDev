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

        /// <summary>Day 10 reached and still unfilled — the task was escalated to the Sales Director (CMVP-126).</summary>
        Escalate = 10
    }

    #endregion

    #region Class: Pgr369Helper

    /// <summary>
    ///     Day-counter and alert-task logic for the 3-6-9 order-intake deviation process (CMVP-64).
    ///     Owns the daily counter (CMVP-123), the day-3 decision (CMVP-124), the day-6 reminder
    ///     (CMVP-125) and the day-10 escalation to the Sales Director (CMVP-126). The budget compare
    ///     value / deviation calculation lives in <see cref="Pgr369BudgetCalculator" /> (CMVP-194);
    ///     this class only reads the precomputed deviation flag.
    /// </summary>
    public class Pgr369Helper
    {
        #region Constants

        /// <summary>Day-counter sentinel meaning "suspended by Sales Director" (CMVP-127).</summary>
        private const int SuspendedCounter = -1;

        private const string Day3ThresholdSettingCode = "Pgr369ProcessDay3Threshold";
        private const int DefaultDay3Threshold = 3;

        private const string Day6ThresholdSettingCode = "Pgr369ProcessDay6Threshold";
        private const int DefaultDay6Threshold = 6;

        private const string Day10ThresholdSettingCode = "Pgr369ProcessDay10Threshold";
        private const int DefaultDay10Threshold = 10;

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
            if (counter == GetDay3Threshold() && openAlertTask == null)
            {
                return Pgr369DailyAction.CreateAlertTask;
            }

            if (openAlertTask == null)
            {
                return Pgr369DailyAction.None;
            }

            // Day 6 (remind, CMVP-125) and day 10 (escalate, CMVP-126) both act only while the open
            // task's Measure task is still not filled in — evaluate that once here, and only when the
            // counter is actually at one of those days, rather than re-querying it per branch.
            var atReminderDay = counter == GetDay6Threshold();
            var atEscalationDay = counter == GetDay10Threshold();
            if ((atReminderDay || atEscalationDay) && !HasFilledMeasureTask(openAlertTask.PrimaryColumnValue))
            {
                // CMVP-125: at day 6 remind the sales person (the alert task's Owner).
                if (atReminderDay)
                {
                    SendMeasureTaskReminder(openAlertTask);
                    return Pgr369DailyAction.Remind;
                }

                // CMVP-126: at day 10 escalate the still-unfilled task to the Sales Director — the
                // existing open Measure task (or the alert task itself if none was created) is
                // reassigned to the Sales Director; no new task is created.
                EscalateToSalesDirector(accountId, openAlertTask);
                return Pgr369DailyAction.Escalate;
            }

            return Pgr369DailyAction.None;
        }

        /// <summary>Day value (SysSettings "Pgr369ProcessDay3Threshold") at which the alert task is created. Default 3.</summary>
        private int GetDay3Threshold()
        {
            return SysSettings.GetValue(_userConnection, Day3ThresholdSettingCode, DefaultDay3Threshold);
        }

        /// <summary>
        ///     Day value (SysSettings "Pgr369ProcessDay6Threshold") at which an unfilled open task triggers a reminder.
        ///     Default 6.
        /// </summary>
        private int GetDay6Threshold()
        {
            return SysSettings.GetValue(_userConnection, Day6ThresholdSettingCode, DefaultDay6Threshold);
        }

        /// <summary>
        ///     Day value (SysSettings "Pgr369ProcessDay10Threshold") at which an unfilled open task is
        ///     escalated to the Sales Director. Default 10.
        /// </summary>
        private int GetDay10Threshold()
        {
            return SysSettings.GetValue(_userConnection, Day10ThresholdSettingCode, DefaultDay10Threshold);
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
            var esq = CreateMeasureTaskQuery(alertTaskId);
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Status",
                ActivityConsts.CompletedStatusUId));
            esq.Filters.Add(esq.CreateIsNotNullFilter("PgrReasonCode"));
            return esq.GetEntityCollection(_userConnection).Count > 0;
        }

        /// <summary>ESQ for the Measure task(s) linked to an alert task (PgrParentTask + category Measure).</summary>
        private EntitySchemaQuery CreateMeasureTaskQuery(Guid alertTaskId)
        {
            var esq = CreateActivityQuery();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrParentTask", alertTaskId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                PgrConstants.ActivityCategory.Measure));
            return esq;
        }

        /// <summary>
        ///     Reminds the alert task's Owner (the sales person) to fill in the Measure task
        ///     (CMVP-125 AC), via a communication-panel Reminding.
        /// </summary>
        private void SendMeasureTaskReminder(Entity alertTask)
        {
            SendReminding(alertTask.PrimaryColumnValue, alertTask.GetTypedColumnValue<Guid>("Owner"),
                GetLocalizableString("MeasureReminderMessage"), GetLocalizableString("MeasureReminderTitle"));
        }

        /// <summary>
        ///     CMVP-126 escalation at day 10: reassigns the still-unfilled 3-6-9 work to the Sales
        ///     Director and notifies both sides. The existing open Measure task has its Owner
        ///     reassigned; if the sales person never created one, the alert task itself is reassigned.
        ///     No new task is created — the reassignment is reflected in the Activity Owner change log.
        /// </summary>
        private void EscalateToSalesDirector(Guid accountId, Entity alertTask)
        {
            var salesDirectorId = GetSalesDirector(accountId);
            if (salesDirectorId == Guid.Empty)
            {
                // Nobody to escalate to — leave the task with the sales person.
                return;
            }

            var taskToEscalate = GetOpenMeasureTask(alertTask.PrimaryColumnValue) ?? alertTask;
            var salesPersonId = taskToEscalate.GetTypedColumnValue<Guid>("Owner");

            taskToEscalate.SetColumnValue("OwnerId", salesDirectorId);
            taskToEscalate.Save(false);

            // Sales person: notified the task was escalated and a justification must be added.
            SendReminding(taskToEscalate.PrimaryColumnValue, salesPersonId,
                GetLocalizableString("EscalationOwnerMessage"), GetLocalizableString("EscalationOwnerTitle"));
            // Sales Director: notified the task was escalated to them.
            SendReminding(taskToEscalate.PrimaryColumnValue, salesDirectorId,
                GetLocalizableString("EscalationDirectorMessage"), GetLocalizableString("EscalationDirectorTitle"));
        }

        /// <summary>The customer's open (not finished) Measure task linked to the alert task, or null.</summary>
        private Entity GetOpenMeasureTask(Guid alertTaskId)
        {
            var esq = CreateMeasureTaskQuery(alertTaskId);
            esq.AddAllSchemaColumns();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "Status.Finish", true));
            return esq.GetEntityCollection(_userConnection).FirstOrDefault();
        }

        /// <summary>The account's Sales Director (Account.PgrSalesDirector) contact Id, or Guid.Empty.</summary>
        private Guid GetSalesDirector(Guid accountId)
        {
            var esq = CreateQuery("Account");
            var directorColumn = esq.AddColumn("PgrSalesDirector").Name;
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", accountId));
            var rows = esq.GetEntityCollection(_userConnection);
            return rows.Count == 0 ? Guid.Empty : rows[0].GetTypedColumnValue<Guid>(directorColumn);
        }

        /// <summary>
        ///     Creates a Reminding record (communication-panel notification) for a recipient about an
        ///     activity, using the platform reminder infrastructure (<see cref="RemindingUtilities" />)
        ///     — the same one that backs the Activity "Remind to owner" checkbox. No-op without a recipient.
        /// </summary>
        private void SendReminding(Guid activityId, Guid recipientId, string description, string popupTitle)
        {
            if (recipientId == Guid.Empty)
            {
                return;
            }

            var activitySchemaUId = _userConnection.EntitySchemaManager.GetInstanceByName("Activity").UId;
            var config = new RemindingConfig(activitySchemaUId)
            {
                SubjectId = activityId,
                AuthorId = _userConnection.CurrentUser.ContactId,
                ContactId = recipientId,
                SourceId = RemindingConsts.RemindingSourceOwnerId,
                NotificationTypeId = RemindingConsts.NotificationTypeRemindingId,
                Description = description,
                PopupTitle = popupTitle
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