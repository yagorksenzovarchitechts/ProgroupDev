using System.Linq;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Pgr.Core.EntryPoints.EntityEventListeners
{
    /// <summary>
    ///     Keeps the 3-6-9 day counter in sync with the Sales Director's suspension flag
    ///     (CMVP-127). When <c>PgrExcludeFrom369</c> is turned on the customer is parked
    ///     (counter = -1) so the daily process skips it; when it is turned off again the
    ///     process is manually reactivated (counter reset to 0 and the note cleared).
    ///     Automatic reactivation the day after the end date lives in <see cref="Pgr369Helper" />.
    /// </summary>
    [EntityEventListener(SchemaName = "Account")]
    public class PgrAccountEntityEventListener : BaseEntityEventListener
    {
        private const string ExcludeColumn = "PgrExcludeFrom369";
        private const string CounterColumn = "PgrOrderIntakeDayCounter";
        private const string ReasonColumn = "PgrSuspensionReason";
        private const string EndDateColumn = "PgrSuspensionEndDate";

        /// <summary>Day-counter sentinel meaning "suspended by Sales Director".</summary>
        private const int SuspendedCounter = -1;

        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);

            var account = (Entity)sender;

            // Only react when the suspension flag itself was toggled this save; otherwise an
            // ordinary Account edit would clobber an in-progress 3-6-9 counter every time.
            // Before-events expose changes via Entity.GetChangedColumnValues() — EntityBeforeEventArgs
            // has no ModifiedColumnValues (that lives on the After-event args).
            if (account.GetChangedColumnValues().All(changedColumn => changedColumn.Name != ExcludeColumn))
            {
                return;
            }

            var isExcluded = account.GetTypedColumnValue<bool>(ExcludeColumn);
            if (isExcluded)
            {
                // Suspend: park the customer so the daily process skips it.
                account.SetColumnValue(CounterColumn, SuspendedCounter);
            }
            else
            {
                // Manual reactivation before the end date: restart counting and clear the note.
                account.SetColumnValue(CounterColumn, 0);
                account.SetColumnValue(ReasonColumn, string.Empty);
                account.SetColumnValue(EndDateColumn, null);
            }
        }
    }
}
