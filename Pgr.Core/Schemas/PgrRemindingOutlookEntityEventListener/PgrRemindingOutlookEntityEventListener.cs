using System;
using Common.Logging;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Terrasoft.Configuration
{
    /// <summary>
    /// CMVP-303: Outlook-synced activities must not show up in the Reminders panel (bell, column, pop-ups).
    /// Deletes a Reminding row as soon as it is saved when it belongs to an Activity in the
    /// "Outlook activities" category. The Activity's own RemindToOwner fields are left alone, so the
    /// reminder still fires in Outlook.
    /// </summary>
    [EntityEventListener(SchemaName = "Reminding")]
    public class PgrRemindingOutlookEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
            try {
                var reminding = (Entity)sender;
                Guid activityId = reminding.GetTypedColumnValue<Guid>("SubjectId");
                if (activityId == Guid.Empty) {
                    return;
                }
                if (PgrOutlookReminderCleaner.IsOutlookActivity(reminding.UserConnection, activityId)) {
                    PgrOutlookReminderCleaner.DeleteRemindings(reminding.UserConnection,
                        "Id", reminding.PrimaryColumnValue);
                }
            } catch (Exception ex) {
                // Never block the save of a reminder / activity because of this clean-up.
                LogManager.GetLogger("Error").Error("PgrRemindingOutlookEntityEventListener failed", ex);
            }
        }
    }

    /// <summary>Shared helpers for the two CMVP-303 listeners.</summary>
    public static class PgrOutlookReminderCleaner
    {
        /// <summary>ActivityCategory "Outlook activities".</summary>
        public static readonly Guid OutlookActivitiesCategoryId =
            new Guid("5ae4fa0f-6ab6-41e2-b1dd-b2350d1fd9ab");

        public static bool IsOutlookActivity(UserConnection userConnection, Guid activityId)
        {
            var select = new Select(userConnection)
                .Top(1)
                .Column("Id")
                .From("Activity").WithHints(Hints.NoLock)
                .Where("Id").IsEqual(Column.Parameter(activityId))
                .And("ActivityCategoryId").IsEqual(Column.Parameter(OutlookActivitiesCategoryId)) as Select;
            return select.ExecuteScalar<Guid>() != Guid.Empty;
        }

        /// <summary>Deletes Reminding rows where <paramref name="column"/> equals <paramref name="value"/>.</summary>
        public static int DeleteRemindings(UserConnection userConnection, string column, Guid value)
        {
            return new Delete(userConnection)
                .From("Reminding")
                .Where(column).IsEqual(Column.Parameter(value))
                .Execute();
        }
    }
}
