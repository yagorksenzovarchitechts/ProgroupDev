namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    /// <summary>
    /// CMVP-338, CMVP-382: shared calculation of the competitor share. The managed field (percent or volume,
    /// chosen by AccountCompetitor.PgrManageInVolume) stays as typed, the other one is derived from it
    /// and the latest "Potential in tsqm" metric of the account.
    /// </summary>
    public static class PgrShareValueCalculator
    {
        #region Constants: Private

        private const int PercentDecimals = 2;

        #endregion

        #region Fields: Public

        public static readonly Guid PotentialMetricTypeId = new Guid("e8e73e14-91cb-4653-b354-55e3fb2b429b");

        #endregion

        #region Methods: Public

        /// <summary>
        /// Returns the latest "Potential in tsqm" value of the account (by date, then by received-on), 0 if there is none.
        /// </summary>
        public static decimal GetLatestPotential(UserConnection userConnection, Guid accountId)
        {
            var select = (Select)new Select(userConnection)
                .Top(1)
                .Column(nameof(PgrAccountMetricValue.PgrValue))
                .From(nameof(PgrAccountMetricValue))
                .Where(nameof(PgrAccountMetricValue.PgrAccountIdId)).IsEqual(Column.Parameter(accountId))
                .And(nameof(PgrAccountMetricValue.PgrMetricTypeIdId)).IsEqual(Column.Parameter(PotentialMetricTypeId))
                .OrderByDesc(nameof(PgrAccountMetricValue.PgrDate))
                .OrderByDesc(nameof(PgrAccountMetricValue.PgrReceivedOn));
            return select.ExecuteScalar<decimal>();
        }

        /// <summary>
        /// Calculates the volume (tsqm) from the Potential and the share percent; 0 when the percent is empty.
        /// </summary>
        public static int CalculateVolume(decimal potential, decimal? sharePercent)
        {
            return (int)Math.Round(potential * (sharePercent ?? 0m) / 100m, MidpointRounding.AwayFromZero);
        }

        /// <summary>
        /// Calculates the share percent from the Potential and the volume (tsqm); 0 when there is no Potential.
        /// </summary>
        public static decimal CalculatePercent(decimal potential, int volume)
        {
            if (potential <= 0m)
            {
                return 0m;
            }
            return Math.Round(volume / potential * 100m, PercentDecimals, MidpointRounding.AwayFromZero);
        }

        /// <summary>
        /// Rewrites only the derived field (volume or percent) of every competitor row of the account without firing entity events.
        /// </summary>
        public static void RecalculateForAccount(UserConnection userConnection, Guid accountId)
        {
            var potential = GetLatestPotential(userConnection, accountId);
            var rows = ReadCompetitorRows(userConnection, accountId);
            foreach (var row in rows)
            {
                var update = new Update(userConnection, nameof(AccountCompetitor));
                if (row.ManageInVolume)
                {
                    update.Set(nameof(AccountCompetitor.PgrShare), Column.Parameter(CalculatePercent(potential, row.Volume)));
                }
                else
                {
                    update.Set(nameof(AccountCompetitor.PgrShareValue), Column.Parameter(CalculateVolume(potential, row.Percent)));
                }
                update.Where(nameof(AccountCompetitor.Id)).IsEqual(Column.Parameter(row.Id)).Execute();
            }
        }

        #endregion

        #region Methods: Private

        /// <summary>
        /// Reads the Id, percent, volume and mode of every competitor row of the account.
        /// </summary>
        private static List<CompetitorRow> ReadCompetitorRows(UserConnection userConnection, Guid accountId)
        {
            var rows = new List<CompetitorRow>();
            var select = (Select)new Select(userConnection)
                .Column(nameof(AccountCompetitor.Id))
                .Column(nameof(AccountCompetitor.PgrShare))
                .Column(nameof(AccountCompetitor.PgrShareValue))
                .Column("PgrManageInVolume")
                .From(nameof(AccountCompetitor))
                .Where(nameof(AccountCompetitor.AccountId)).IsEqual(Column.Parameter(accountId));
            using (var dbExecutor = userConnection.EnsureDBConnection())
            {
                using (var reader = select.ExecuteReader(dbExecutor))
                {
                    while (reader.Read())
                    {
                        rows.Add(new CompetitorRow
                        {
                            Id = reader.GetGuid(0),
                            Percent = reader.IsDBNull(1) ? (decimal?)null : reader.GetDecimal(1),
                            Volume = reader.IsDBNull(2) ? 0 : reader.GetInt32(2),
                            ManageInVolume = !reader.IsDBNull(3) && reader.GetBoolean(3)
                        });
                    }
                }
            }
            return rows;
        }

        #endregion

        /// <summary>
        /// Competitor row data needed for the recalculation.
        /// </summary>
        private class CompetitorRow
        {
            public Guid Id { get; set; }

            public decimal? Percent { get; set; }

            public int Volume { get; set; }

            public bool ManageInVolume { get; set; }
        }
    }

    /// <summary>
    /// Sets the derived share field when a competitor row is inserted or its share, volume, mode or account changes.
    /// </summary>
    [EntityEventListener(SchemaName = nameof(AccountCompetitor))]
    public class PgrAccountCompetitorShareValueEventListener : BaseEntityEventListener
    {
        #region Fields: Private

        private static readonly string[] TrackedColumnNames =
        {
            nameof(AccountCompetitor.PgrShare),
            nameof(AccountCompetitor.PgrShareValue),
            "PgrManageInVolume",
            nameof(AccountCompetitor.AccountId)
        };

        private static readonly global::Common.Logging.ILog Log = global::Common.Logging.LogManager.GetLogger("Error");

        #endregion

        #region Methods: Public

        /// <summary>
        /// Recalculates the derived field (volume in percent mode, percent in volume mode) before the row is saved.
        /// </summary>
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            try
            {
                var competitor = (AccountCompetitor)sender;
                var relevant = competitor.GetChangedColumnValues()
                    .Any(value => TrackedColumnNames.Contains(value.Name));
                if (!relevant || competitor.AccountId.IsEmpty())
                {
                    return;
                }
                var potential = PgrShareValueCalculator.GetLatestPotential(competitor.UserConnection, competitor.AccountId);
                if (competitor.GetTypedColumnValue<bool>("PgrManageInVolume"))
                {
                    competitor.PgrShare = PgrShareValueCalculator.CalculatePercent(potential, competitor.PgrShareValue);
                }
                else
                {
                    competitor.PgrShareValue = PgrShareValueCalculator.CalculateVolume(potential, competitor.PgrShare);
                }
            }
            catch (Exception ex)
            {
                Log.Error("Error while calculating the AccountCompetitor share.", ex);
            }
        }

        #endregion
    }
}
