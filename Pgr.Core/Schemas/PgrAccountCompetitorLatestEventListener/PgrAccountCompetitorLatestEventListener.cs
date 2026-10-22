namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    /// <summary>
    /// CMVP-338: keeps AccountCompetitor.PgrIsLatest. Per account and competitor only the row with the
    /// newest Valid from (ties: newest CreatedOn; empty Valid from counts as oldest) is the latest one.
    /// The Share of wallet grids filter on this flag so only current entries are shown.
    /// </summary>
    [EntityEventListener(SchemaName = "AccountCompetitor")]
    public class PgrAccountCompetitorLatestEventListener : BaseEntityEventListener
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
                Guid accountId = entity.GetTypedColumnValue<Guid>("AccountId");
                if (accountId != Guid.Empty) {
                    RecalculateForAccount(entity.UserConnection, accountId);
                }
            } catch (Exception ex) {
                Log.Error("Error while recalculating AccountCompetitor.PgrIsLatest.", ex);
            }
        }

        public static void RecalculateForAccount(UserConnection userConnection, Guid accountId)
        {
            var rows = new List<Tuple<Guid, Guid, DateTime, DateTime, bool>>();
            var select = (Select)new Select(userConnection)
                .Column("Id").Column("PgrCompetitorId").Column("PgrValidFrom").Column("CreatedOn").Column("PgrIsLatest")
                .From("AccountCompetitor")
                .Where("AccountId").IsEqual(Column.Parameter(accountId));
            using (var dbExecutor = userConnection.EnsureDBConnection()) {
                using (var reader = select.ExecuteReader(dbExecutor)) {
                    while (reader.Read()) {
                        rows.Add(Tuple.Create(
                            reader.GetGuid(0),
                            reader.IsDBNull(1) ? Guid.Empty : reader.GetGuid(1),
                            reader.IsDBNull(2) ? DateTime.MinValue : reader.GetDateTime(2),
                            reader.IsDBNull(3) ? DateTime.MinValue : reader.GetDateTime(3),
                            !reader.IsDBNull(4) && reader.GetBoolean(4)));
                    }
                }
            }
            var latestIds = new HashSet<Guid>(rows
                .GroupBy(r => r.Item2)
                .Select(g => g.OrderByDescending(r => r.Item3).ThenByDescending(r => r.Item4).First().Item1));
            foreach (var row in rows) {
                bool shouldBeLatest = latestIds.Contains(row.Item1);
                if (shouldBeLatest != row.Item5) {
                    new Update(userConnection, "AccountCompetitor")
                        .Set("PgrIsLatest", Column.Parameter(shouldBeLatest))
                        .Where("Id").IsEqual(Column.Parameter(row.Item1))
                        .Execute();
                }
            }
        }
    }
}
