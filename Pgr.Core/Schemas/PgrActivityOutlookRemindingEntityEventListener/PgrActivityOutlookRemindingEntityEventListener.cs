using System;
using System.Linq;
using Common.Logging;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Terrasoft.Configuration
{
    /// <summary>
    /// CMVP-303 safety net: when an Activity gets (or is created with) the "Outlook activities" category
    /// AFTER its reminder was already created, remove that reminder. Covers the case where the
    /// calendar sync writes the category later than the standard reminder sync.
    /// </summary>
    [EntityEventListener(SchemaName = "Activity")]
    public class PgrActivityOutlookRemindingEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
            try {
                var activity = (Entity)sender;
                bool categoryTouched = e.ModifiedColumnValues != null &&
                    e.ModifiedColumnValues.Any(v => v.Name == "ActivityCategoryId");
                if (!categoryTouched) {
                    return;
                }
                if (activity.GetTypedColumnValue<Guid>("ActivityCategoryId") !=
                        PgrOutlookReminderCleaner.OutlookActivitiesCategoryId) {
                    return;
                }
                PgrOutlookReminderCleaner.DeleteRemindings(activity.UserConnection,
                    "SubjectId", activity.PrimaryColumnValue);
            } catch (Exception ex) {
                LogManager.GetLogger("Error").Error("PgrActivityOutlookRemindingEntityEventListener failed", ex);
            }
        }
    }
}
