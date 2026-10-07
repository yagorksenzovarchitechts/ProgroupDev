using System;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Pgr.Core.EntryPoints.EntityEventListeners
{ 
    [EntityEventListener(SchemaName = "Activity")]
    public class PgrActivityEntityEventListener : BaseEntityEventListener
    {
        private const string StatusColumn = "StatusId";
        private const string EscalatedColumn = "PgrIsEscalated";

        #region Methods: Public

        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);

            FillAccountFromOpportunity((Entity)sender);
        }

        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);

            var activity = (Entity)sender;

            // Only react when the status itself was changed this save; an ordinary edit of a 3-6-9
            // task (adding the reason, reassigning the owner) must not reset an in-progress counter.
            // Before-events expose changes via Entity.GetChangedColumnValues() — ModifiedColumnValues
            // lives on the After-event args.
            if (activity.GetChangedColumnValues().All(changedColumn => changedColumn.Name != StatusColumn))
            {
                return;
            }

            if (!Is369AlertTask(activity))
            {
                return;
            }

            var userConnection = activity.UserConnection;
            if (!IsFinalStatus(userConnection, activity.GetTypedColumnValue<Guid>(StatusColumn)))
            {
                return;
            }

            var accountId = activity.GetTypedColumnValue<Guid>("AccountId");
            if (accountId.IsEmpty())
            {
                return;
            }

            // Set on the same entity — this is a Before-event, the value goes into the same UPDATE.
            activity.SetColumnValue(EscalatedColumn, false);
            new Pgr369Helper(userConnection).ResetCycle(accountId);
        }
        
        #endregion

        #region Methods: Private

        private static void FillAccountFromOpportunity(Entity activity)
        {
            var opportunityId = activity.GetTypedColumnValue<Guid>("OpportunityId");
            if (opportunityId.IsEmpty())
            {
                return;
            }

            var accountId = activity.GetTypedColumnValue<Guid>("AccountId");
            var pgrAccountId = activity.GetTypedColumnValue<Guid>("PgrAccountId");
            if (!accountId.IsEmpty() && !pgrAccountId.IsEmpty())
            {
                return;
            }

            var opportunityAccountId = GetOpportunityAccountId(activity.UserConnection, opportunityId);
            if (opportunityAccountId.IsEmpty())
            {
                return;
            }

            if (accountId.IsEmpty())
            {
                activity.SetColumnValue("AccountId", opportunityAccountId);
            }

            if (pgrAccountId.IsEmpty())
            {
                activity.SetColumnValue("PgrAccountId", opportunityAccountId);
            }
        }

        private static Guid GetOpportunityAccountId(UserConnection userConnection, Guid opportunityId)
        {
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Opportunity")
            {
                UseAdminRights = false
            };
            var accountColumn = esq.AddColumn("Account.Id").Name;
            var opportunity = esq.GetEntity(userConnection, opportunityId);
            return opportunity?.GetTypedColumnValue<Guid>(accountColumn) ?? Guid.Empty;
        }

        /// <summary>
        ///     True for a genuine 3-6-9 alert task. The <c>Type</c> check keeps activities that are
        ///     mis-tagged with ActivityCategory 369 out — the "Send email to person in charge"
        ///     process creates Emails with that category (see <see cref="Pgr369Helper" />).
        /// </summary>
        private static bool Is369AlertTask(Entity activity)
        {
            return activity.GetTypedColumnValue<Guid>("ActivityCategoryId") ==
                   PgrConstants.ActivityCategory.Category369 &&
                   activity.GetTypedColumnValue<Guid>("TypeId") == PgrConstants.ActivityType.Task;
        }

        /// <summary>
        ///     True when the status closes the activity ("Done"/"Cancelled"). Read from
        ///     ActivityStatus.Finish rather than compared against status GUIDs, the same way the
        ///     3-6-9 queries define an "open" task.
        /// </summary>
        private static bool IsFinalStatus(UserConnection userConnection, Guid statusId)
        {
            if (statusId.IsEmpty())
            {
                return false;
            }

            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "ActivityStatus")
            {
                UseAdminRights = false
            };
            var finishColumn = esq.AddColumn("Finish").Name;
            var status = esq.GetEntity(userConnection, statusId);
            return status != null && status.GetTypedColumnValue<bool>(finishColumn);
        }

        #endregion
    }
}
