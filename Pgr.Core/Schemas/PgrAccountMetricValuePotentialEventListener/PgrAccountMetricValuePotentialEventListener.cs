namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    /// <summary>
    /// CMVP-338: when a "Potential in tsqm" metric value is saved or deleted, recalculate
    /// AccountCompetitor.PgrShareValue for all competitor rows of that account.
    /// </summary>
    [EntityEventListener(SchemaName = "PgrAccountMetricValue")]
    public class PgrAccountMetricValuePotentialEventListener : BaseEntityEventListener
    {
        private static readonly global::Common.Logging.ILog Log = global::Common.Logging.LogManager.GetLogger("Error");

        public override void OnSaved(object sender, EntityAfterEventArgs e)
        {
            base.OnSaved(sender, e);
            Recalculate((Entity)sender);
        }

        public override void OnDeleted(object sender, EntityAfterEventArgs e)
        {
            base.OnDeleted(sender, e);
            Recalculate((Entity)sender);
        }

        private static void Recalculate(Entity entity)
        {
            try {
                if (entity.GetTypedColumnValue<Guid>("PgrMetricTypeIdId") != PgrShareValueCalculator.PotentialMetricTypeId) {
                    return;
                }
                Guid accountId = entity.GetTypedColumnValue<Guid>("PgrAccountIdId");
                if (accountId != Guid.Empty) {
                    PgrShareValueCalculator.RecalculateForAccount(entity.UserConnection, accountId);
                }
            } catch (Exception ex) {
                Log.Error("Error while recalculating AccountCompetitor.PgrShareValue after a Potential change.", ex);
            }
        }
    }
}
