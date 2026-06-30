using System;
using System.Linq;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Pgr.Core
{

    /// <summary>
    ///     Thrown when ProGroup + competitor shares for an Account do not total 100%.
    ///     The message bubbles up to the UI and the save is rolled back.
    /// </summary>
    public class ShareTotalValidationException : Exception
    {
        public ShareTotalValidationException(string message) : base(message)
        {
        }
    }
    
    /// <summary>
    ///     Validates that, for a given Account, the sum of Account.PgrDeliveryShare and
    ///     every AccountCompetitor.PgrShare equals exactly 100%.
    ///     Runs on OnSaving (INSERT + UPDATE), but only when the PgrShare value was
    ///     actually added/changed.
    /// </summary>
    [EntityEventListener(SchemaName = AccountCompetitorSchemaName)]
    public class PgrAccountCompetitorShareValidationEventListener : BaseEntityEventListener
    {
        // ---------------------------------------------------------------------
        // Schema / column names.
        // ---------------------------------------------------------------------
        private const string AccountCompetitorSchemaName = nameof(AccountCompetitor); 
        private const string ShareColumnName = nameof(AccountCompetitor.PgrShare); 
        private const string AccountColumnName = nameof(AccountCompetitor.AccountId);
        private const string AccountSchemaName = nameof(Account);
        private const string DeliveryShareColumnName = nameof(Account.PgrDeliveryShare);
        private const string PrimaryColumnName = "Id";

        private const int RequiredTotal = 100;

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            var competitorEntity = (Entity) sender;
            // Only validate when the share value itself was added/changed.
            // (Covers INSERT of a new competitor with a share and UPDATE of an existing share;
            //  edits that don't touch PgrShare — e.g. ValidFrom/ValidTo — are skipped.)
            if (!IsShareChanged(competitorEntity))
            {
                return;
            }

            ValidateAccountShareTotal(competitorEntity);
        }

        private static bool IsShareChanged(Entity competitorEntity) =>
            competitorEntity.GetChangedColumnValues()
                .Any(changedColumn => changedColumn.Name == ShareColumnName);

        private void ValidateAccountShareTotal(Entity competitorEntity)
        {
            var userConnection = competitorEntity.UserConnection;

            var accountId = competitorEntity.GetTypedColumnValue<Guid>(AccountColumnName);
            if (accountId == Guid.Empty)
            {
                return;
            }

            var sourceRecordId = competitorEntity.PrimaryColumnValue;

            var otherCompetitorsShare = GetOtherCompetitorsShare(userConnection, accountId, sourceRecordId);
            var deliveryShare = GetAccountDeliveryShare(userConnection, accountId);
            var sourceShare = competitorEntity.GetTypedColumnValue<int>(ShareColumnName);

            var total = otherCompetitorsShare + deliveryShare + sourceShare;

            if (total != RequiredTotal)
            {
                throw new ShareTotalValidationException(
                    $"The total of all share values must equal 100%. Current total: {total}%");
            }
        }

        /// <summary>Sum of PgrShare for all competitors of the Account, excluding the source record.</summary>
        private int GetOtherCompetitorsShare(UserConnection userConnection, Guid accountId, Guid excludeRecordId)
        {
            var select = (Select) new Select(userConnection)
                .Column(Func.Sum(ShareColumnName))
                .From(AccountCompetitorSchemaName)
                .Where(AccountColumnName).IsEqual(Column.Parameter(accountId))
                .And(PrimaryColumnName).IsNotEqual(Column.Parameter(excludeRecordId));
            return select.ExecuteScalar<int>();
        }

        /// <summary>ProGroup's own delivery share stored on the Account.</summary>
        private int GetAccountDeliveryShare(UserConnection userConnection, Guid accountId)
        {
            var select = (Select) new Select(userConnection)
                .Column(DeliveryShareColumnName)
                .From(AccountSchemaName)
                .Where(PrimaryColumnName).IsEqual(Column.Parameter(accountId));
            return select.ExecuteScalar<int>();
        }
    }
}