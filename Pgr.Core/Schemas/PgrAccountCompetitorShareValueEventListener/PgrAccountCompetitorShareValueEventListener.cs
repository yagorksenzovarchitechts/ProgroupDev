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
    /// CMVP-338: shared calculation of AccountCompetitor.PgrShareValue (tsqm) =
    /// latest "Potential in tsqm" metric of the account x PgrShare (%) / 100.
    /// No Potential for the account means 0.
    /// </summary>
    public static class PgrShareValueCalculator
    {
        public static readonly Guid PotentialMetricTypeId = new Guid("e8e73e14-91cb-4653-b354-55e3fb2b429b");

        public static decimal GetLatestPotential(UserConnection userConnection, Guid accountId)
        {
            var select = (Select)new Select(userConnection)
                .Top(1)
                .Column("PgrValue")
                .From("PgrAccountMetricValue")
                .Where("PgrAccountIdId").IsEqual(Column.Parameter(accountId))
                .And("PgrMetricTypeIdId").IsEqual(Column.Parameter(PotentialMetricTypeId))
                .OrderByDesc("PgrDate")
                .OrderByDesc("PgrReceivedOn");
            return select.ExecuteScalar<decimal>();
        }

        public static int Calculate(decimal potential, int sharePercent)
        {
            return (int)Math.Round(potential * sharePercent / 100m, MidpointRounding.AwayFromZero);
        }

        /// <summary>Rewrites PgrShareValue of every competitor row of the account (no entity events fired).</summary>
        public static void RecalculateForAccount(UserConnection userConnection, Guid accountId)
        {
            decimal potential = GetLatestPotential(userConnection, accountId);
            var rows = new List<Tuple<Guid, int>>();
            var select = (Select)new Select(userConnection)
                .Column("Id")
                .Column("PgrShare")
                .From("AccountCompetitor")
                .Where("AccountId").IsEqual(Column.Parameter(accountId));
            using (var dbExecutor = userConnection.EnsureDBConnection()) {
                using (var reader = select.ExecuteReader(dbExecutor)) {
                    while (reader.Read()) {
                        rows.Add(Tuple.Create(reader.GetGuid(0), reader.IsDBNull(1) ? 0 : reader.GetInt32(1)));
                    }
                }
            }
            foreach (var row in rows) {
                new Update(userConnection, "AccountCompetitor")
                    .Set("PgrShareValue", Column.Parameter(Calculate(potential, row.Item2)))
                    .Where("Id").IsEqual(Column.Parameter(row.Item1))
                    .Execute();
            }
        }
    }

    /// <summary>Sets PgrShareValue when a competitor row is inserted or its share/account changes.</summary>
    [EntityEventListener(SchemaName = "AccountCompetitor")]
    public class PgrAccountCompetitorShareValueEventListener : BaseEntityEventListener
    {
        private static readonly global::Common.Logging.ILog Log = global::Common.Logging.LogManager.GetLogger("Error");

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            try {
                var entity = (Entity)sender;
                bool relevant = entity.GetChangedColumnValues()
                    .Any(v => v.Name == "PgrShare" || v.Name == "AccountId");
                if (!relevant) {
                    return;
                }
                Guid accountId = entity.GetTypedColumnValue<Guid>("AccountId");
                if (accountId == Guid.Empty) {
                    return;
                }
                decimal potential = PgrShareValueCalculator.GetLatestPotential(entity.UserConnection, accountId);
                int share = entity.GetTypedColumnValue<int>("PgrShare");
                entity.SetColumnValue("PgrShareValue", PgrShareValueCalculator.Calculate(potential, share));
            } catch (Exception ex) {
                Log.Error("Error while calculating AccountCompetitor.PgrShareValue.", ex);
            }
        }
    }
}
