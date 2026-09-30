using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Configuration;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.Factories;

namespace Pgr.Core
{
    [Override]
    [EntityEventListener(SchemaName = "Contact")]
    public class PgrContactEventListener : BaseEntityEventListener
    {
        private const string ContactSchemaName = "Contact";
        private const string IdColumnName = "Id";
        private const string NameColumnName = "Name";
        private const string EmailColumnName = "Email";
        private const string CreatedOnColumnName = "CreatedOn";
        private const string CreatedByIdColumnName = "CreatedById";
        private const string ModifiedOnColumnName = "ModifiedOn";
        private const string ModifiedByIdColumnName = "ModifiedById";
        private const string IsManuallyCreatedColumnName = "PgrIsManuallyCreated";
        private const string DedupFeatureCode = "PgrContactDedupEnabled";

        private static readonly HashSet<string> ColumnsExcludedFromRedirect = new HashSet<string>
        {
            IdColumnName,
            NameColumnName,
            CreatedOnColumnName,
            CreatedByIdColumnName,
            ModifiedOnColumnName,
            ModifiedByIdColumnName,
            IsManuallyCreatedColumnName
        };

        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            var newContact = (Entity) sender;
            var userConnection = newContact.UserConnection;
            if (!userConnection.GetIsFeatureEnabled(DedupFeatureCode))
            {
                return;
            }

            var dedupHelper = new PgrContactDedupHelper(userConnection);
            var newContactId = newContact.GetTypedColumnValue<Guid>(IdColumnName);
            var email = GetEmailOrFallbackName(newContact);
            var isManuallyCreated = newContact.GetTypedColumnValue<bool>(IsManuallyCreatedColumnName);
            if (isManuallyCreated)
            {
                dedupHelper.WriteLog("SkippedManual", newContactId, email, isManuallyCreated: true);
                return;
            }

            if (string.IsNullOrWhiteSpace(email))
            {
                dedupHelper.WriteLog("SkippedNoCandidate", newContactId);
                return;
            }

            var existingContactId = dedupHelper.FindExistingContactIdByEmail(email);
            if (existingContactId.IsEmpty())
            {
                dedupHelper.WriteLog("NoMatch", newContactId, email);
                return;
            }

            dedupHelper.WriteLog("MatchFound", newContactId, email, existingContactId);
            try
            {
                RedirectInsertToExistingContact(userConnection, newContact, existingContactId);
                newContact.SetColumnValue(IdColumnName, existingContactId);
                e.IsCanceled = true;
                var idAfterRedirect = newContact.GetTypedColumnValue<Guid>(IdColumnName);
                dedupHelper.WriteLog("Redirected", idAfterRedirect, email, existingContactId);
            }
            catch (Exception exception)
            {
                dedupHelper.WriteLog("Error", newContactId, email, existingContactId, error: exception.ToString());
            }
        }

        private string GetEmailOrFallbackName(Entity newContact)
        {
            var email = newContact.GetTypedColumnValue<string>(EmailColumnName);
            return string.IsNullOrWhiteSpace(email) ? newContact.GetTypedColumnValue<string>(NameColumnName) : email;
        }

        private void RedirectInsertToExistingContact(UserConnection userConnection, Entity newContact,
            Guid existingContactId)
        {
            var existingContact = userConnection.EntitySchemaManager.GetInstanceByName(ContactSchemaName)
                .CreateEntity(userConnection);
            existingContact.FetchFromDB(existingContactId, false);
            var columnsToRedirect = newContact.GetChangedColumnValues()
                .Where(changedColumn => !ColumnsExcludedFromRedirect.Contains(changedColumn.Name));
            foreach (var changedColumn in columnsToRedirect)
            {
                existingContact.SetColumnValue(changedColumn.Name, newContact.GetColumnValue(changedColumn.Name));
            }

            existingContact.Save(false);
        }
    }
}