namespace Terrasoft.Configuration
{
    using System;
    using System.Linq;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    /// <summary>
    /// Blocks saving a Contact-Account link as "Primary Sales contact" when the account
    /// already has another primary sales contact.
    /// </summary>
    [EntityEventListener(SchemaName = "PgrContactAccount")]
    public class PgrContactAccountEntityEventListener : BaseEntityEventListener
    {
        private const string PrimarySalesColumn = "PgrPrimarySales";
        private const string AccountColumn = "PgrAccountId";

        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            ValidateSinglePrimaryContact((Entity)sender, true);
        }

        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);
            ValidateSinglePrimaryContact((Entity)sender, false);
        }

        private static void ValidateSinglePrimaryContact(Entity entity, bool isNew)
        {
            if (!entity.GetTypedColumnValue<bool>(PrimarySalesColumn)) {
                return;
            }
            bool inputChanged = entity.GetChangedColumnValues()
                .Any(v => v.Name == PrimarySalesColumn || v.Name == AccountColumn);
            if (!isNew && !inputChanged) {
                return;
            }
            Guid accountId = entity.GetTypedColumnValue<Guid>(AccountColumn);
            if (accountId == Guid.Empty) {
                return;
            }
            string existingName = FindOtherPrimaryContactName(entity.UserConnection, accountId, entity.PrimaryColumnValue);
            if (existingName == null) {
                return;
            }
            throw new InvalidOperationException(string.IsNullOrEmpty(existingName)
                ? "This account already has a primary sales contact. Untick that contact first."
                : $"{existingName} is already the primary sales contact for this account. Untick that contact first.");
        }

        /// <returns>null when no other primary contact exists; otherwise the contact name (may be empty).</returns>
        private static string FindOtherPrimaryContactName(UserConnection userConnection, Guid accountId, Guid currentId)
        {
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "PgrContactAccount") {
                PrimaryQueryColumn = { IsAlwaysSelect = true },
                RowCount = 1
            };
            esq.AddColumn("PgrContact.Name");
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrAccount", accountId));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, PrimarySalesColumn, true));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual, "Id", currentId));
            var other = esq.GetEntityCollection(userConnection).FirstOrDefault();
            return other == null ? null : other.GetTypedColumnValue<string>("PgrContact_Name") ?? string.Empty;
        }
    }
}
