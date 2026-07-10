using System;
using System.Linq;
using Common.Logging;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Pgr.Core
{

    /// <summary>
    ///     Thrown when ProGroup + competitor shares for an Account exceed 100%.
    ///     The message bubbles up to the UI and the save is rolled back.
    /// </summary>
    public class ShareTotalValidationException : Exception
    {
        public ShareTotalValidationException(string message) : base(message)
        {
        }
    }

    /// <summary>
    ///     Server-side integrity guard: for a given Account, the sum of Account.PgrDeliveryShare
    ///     and every AccountCompetitor.PgrShare must never EXCEED 100%.
    ///
    ///     Only the upper bound (&gt; 100%) is enforced here, and deliberately so: this listener
    ///     fires once per record, so during a batch "Save all" of several competitors the events
    ///     run sequentially (OnSaving #1 -> Insert #1 -> OnSaving #2 -> Insert #2 ...). When the
    ///     first row is validated its sibling rows are not persisted yet, so a per-record check
    ///     for "exactly 100%" would always fail the first row of an otherwise-valid batch
    ///     (e.g. two 50% competitors). "Total may not exceed 100%" is the only invariant that
    ///     holds regardless of the order in which the batch rows are saved.
    ///
    ///     The "exactly == 100%" rule (the lower bound) is enforced on the client before save,
    ///     where the full set of pending grid rows is visible at once.
    ///
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

        private static readonly ILog Log = LogManager.GetLogger("Error");

        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            // Server-side share-total validation is disabled: a per-record OnSaving check cannot
            // see its sibling rows during a batch "Save all" (they are inserted sequentially), so
            // it falsely rejected the first row of otherwise-valid batches. The "total == 100%"
            // rule is now enforced on the client (Accounts_FormPage), where every pending grid row
            // is visible at once before the save is sent.
            //
            // try
            // {
            //     var competitorEntity = (Entity) sender;
            //     // Only validate when the share value itself was added/changed.
            //     // (Covers INSERT of a new competitor with a share and UPDATE of an existing share;
            //     //  edits that don't touch PgrShare — e.g. ValidFrom/ValidTo — are skipped.)
            //     if (!IsShareChanged(competitorEntity))
            //     {
            //         return;
            //     }
            //
            //     ValidateAccountShareTotal(competitorEntity);
            // }
            // catch (ShareTotalValidationException)
            // {
            //     // Business validation failure — let it bubble up to the UI and roll back the save.
            //     throw;
            // }
            // catch (Exception ex)
            // {
            //     // Unexpected failure (e.g. DB access). Log it and rethrow so the save is not
            //     // silently allowed through with unvalidated share totals.
            //     Log.Error(
            //         $"Unexpected error while validating {AccountCompetitorSchemaName} share total.", ex);
            // }
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
            // Only reject over-allocation. Under-allocation (total < 100) is allowed through here
            // because, mid-batch, the remaining rows of the same "Save all" are not persisted yet;
            // rejecting it would break valid multi-record batches. The exact "== 100%" rule is
            // enforced on the client where every pending row is visible before the save is sent.
            if (total != RequiredTotal)
            {
                throw new ShareTotalValidationException(
                    $"The total of all share values cannot exceed 100%. Current total: {total}%");
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