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
            var account = GetAccount(accountId, "PgrOrderIntakeDayCounter", "PgrSuspensionEndDate",
                "PgrSalesManager", "PgrSalesDirector");
            if (account == null)
            {
                return Pgr369DailyAction.None;
            }

            var counter = account.GetTypedColumnValue<int>("PgrOrderIntakeDayCounter");

            // Suspended by Sales Director (CMVP-127): the counter is parked at -1 and the daily
            // process skips the customer. The suspension ends automatically the day after the
            // defined end date — reset the counter to 0 and clear the suspension, then normal
            // counting resumes on the next run.
            if (counter == SuspendedCounter)
            {
                if (IsSuspensionExpired(account))
                {
                    ReactivateAccount(accountId);
                }

                return Pgr369DailyAction.None;
            }

            // The counter only advances on working days (CMVP-123) — nothing to do otherwise.
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

            var updatedCounter = AdvanceDayCounter(accountId, counter, isDeviation.Value);
            if (updatedCounter == null)
            {
                // Diagram "Order intake less than threshold? No" — intake recovered this run.
                return Pgr369DailyAction.None;
            }

            return DecideAction(account, updatedCounter.Value);
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
        ///     Takes the already-loaded Account entity (carries PgrSalesManager/PgrSalesDirector) so
        ///     the reminder/escalation branches below don't each re-query the Account.
        /// </summary>
        private Pgr369DailyAction DecideAction(Entity account, int counter)
        {
            var accountId = account.PrimaryColumnValue;
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
                // CMVP-125: at day 6 remind the account's current Sales Manager.
                if (atReminderDay)
                {
                    SendMeasureTaskReminder(account, openAlertTask);
                    return Pgr369DailyAction.Remind;
                }

                // CMVP-126: at day 10 escalate the still-unfilled task to the Sales Director — the
                // Sales Director and the Sales Manager are both notified; ownership stays with the
                // Sales Manager, no reassignment and no new task is created.
                EscalateToSalesDirector(account, openAlertTask);
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

        /// <summary>
        ///     ESQ for the account's open (not finished) 3-6-9 *tasks* of the given category.
        ///     Restricted to <c>Type = Task</c>: the 3-6-9 alert and measure tasks are always created
        ///     as Tasks, so other activity types that get mis-tagged with a 3-6-9 ActivityCategory —
        ///     e.g. the Emails created by the "Send email to person in charge" process, which carry
        ///     ActivityCategory 369 — must not be picked up here (that would block day-3 creation and
        ///     skew the recovery close-out).
        /// </summary>
        private EntitySchemaQuery CreateOpenActivityQuery(Guid accountId, Guid activityCategoryId)
        {
            var esq = CreateActivityQuery();
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Account", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ActivityCategory",
                activityCategoryId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Type",
                PgrConstants.ActivityType.Task));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual,
                "Status.Finish",
                true));
            return esq;
        }

        /// <summary>
        ///     The customer's open (not finished) 3-6-9 alert task, or null if there is none. Loads
        ///     all schema columns (not just "Owner") because CMVP-126 escalation may need to
        ///     SetColumnValue+Save this same entity directly when no Measure task exists yet — a
        ///     narrower ESQ projection would throw ItemNotFoundException on the unset column.
        /// </summary>
        private Entity GetOpenAlertTask(Guid accountId)
        {
            var esq = CreateOpenActivityQuery(accountId, PgrConstants.ActivityCategory.Category369);
            esq.AddAllSchemaColumns();
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
        ///     Reminds the account's current Sales Manager (Account.PgrSalesManager) to fill in the
        ///     Measure task (CMVP-125 AC), via a communication-panel Reminding. Read off the already
        ///     loaded Account entity, not the task's "Owner" column, so a Sales Manager reassignment
        ///     after task creation is picked up.
        /// </summary>
        private void SendMeasureTaskReminder(Entity account, Entity alertTask)
        {
            SendReminding(alertTask.PrimaryColumnValue, account.GetTypedColumnValue<Guid>("PgrSalesManager"),
                GetLocalizableString("MeasureReminderMessage"), GetLocalizableString("MeasureReminderTitle"));
        }

        /// <summary>
        ///     CMVP-126 escalation at day 10: notifies the Sales Director that the still-unfilled
        ///     3-6-9 work has been escalated to them, and notifies the Sales Manager that this
        ///     happened. Ownership of the task is NOT changed — it stays with the Sales Manager.
        /// </summary>
        private void EscalateToSalesDirector(Entity account, Entity alertTask)
        {
            var salesDirectorId = account.GetTypedColumnValue<Guid>("PgrSalesDirector");
            if (salesDirectorId == Guid.Empty)
            {
                // Nobody to escalate to — leave the task with the sales person.
                return;
            }

            var taskToEscalate = GetOpenMeasureTask(alertTask.PrimaryColumnValue) ?? alertTask;
            var salesPersonId = account.GetTypedColumnValue<Guid>("PgrSalesManager");

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
        ///     True when a suspended customer's end date (CMVP-127) has passed — reactivation
        ///     happens the day *after* the defined end date. A suspension without an end date
        ///     never auto-expires (it can still be lifted manually by clearing the checkbox).
        /// </summary>
        private static bool IsSuspensionExpired(Entity account)
        {
            var endDate = account.GetTypedColumnValue<DateTime>("PgrSuspensionEndDate");
            return endDate != DateTime.MinValue && DateTime.Today.Date > endDate.Date;
        }

        /// <summary>
        ///     Auto-reactivates a suspended customer (CMVP-127): resets the day counter to 0 and
        ///     clears the suspension flag, reason and end date so the daily process resumes
        ///     counting on the next run. The Account event listener keeps counter/flag in sync
        ///     for manual toggles; this handles the automatic end-of-suspension case.
        /// </summary>
        private void ReactivateAccount(Guid accountId)
        {
            var schema = _userConnection.EntitySchemaManager.GetInstanceByName("Account");
            var entity = schema.CreateEntity(_userConnection);
            entity.UseAdminRights = false;
            if (!entity.FetchFromDB(accountId, false))
            {
                return;
            }

            entity.SetColumnValue("PgrOrderIntakeDayCounter", 0);
            entity.SetColumnValue("PgrExcludeFrom369", false);
            entity.SetColumnValue("PgrSuspensionReason", string.Empty);
            entity.SetColumnValue("PgrSuspensionEndDate", null);
            entity.Save(false);
        }

        /// <summary>
        ///     Closes any open 3-6-9 measure task (ActivityCategory = "Measure") for the specified
        ///     account when order intake recovers (CMVP-123 AC). Sets the task status to "Canceled".
        /// </summary>
        private void CloseOpenMeasureTasks(Guid accountId)
        {
            var esq = CreateOpenActivityQuery(accountId, PgrConstants.ActivityCategory.Measure);
            // Load all schema columns: CreateOpenActivityQuery only adds filter columns (Account,
            // ActivityCategory, Status.Finish), so without this SetColumnValue("StatusId", ...) below
            // throws ItemNotFoundException — "Status"/"StatusId" was never projected into the entity.
            esq.AddAllSchemaColumns();
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