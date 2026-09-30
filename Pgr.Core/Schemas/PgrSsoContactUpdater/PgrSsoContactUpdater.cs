using System;
using System.Collections.Generic;
using Pgr.Core;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Terrasoft.Configuration
{
    public class PgrSsoContactUpdater : ISsoContactUpdater
    {
        private const string ContactSchemaName = "Contact";
        private const string SysAdminUnitSchemaName = "SysAdminUnit";
        private const string ContactIdColumnName = "ContactId";
        private const string DedupFeatureCode = "PgrContactDedupEnabled";
        private const string IdKey = "Id";
        private const string EmailKey = "Email";

        private readonly UserConnection _userConnection;
        private readonly SsoContactUpdater _inner;
        private readonly PgrContactDedupHelper _dedupHelper;

        public PgrSsoContactUpdater(UserConnection userConnection)
        {
            _userConnection = userConnection;
            _inner = new SsoContactUpdater(userConnection);
            _dedupHelper = new PgrContactDedupHelper(userConnection);
        }

        public void UpdateContact()
        {
            _inner.UpdateContact();
        }

        public void UpdateContact(Dictionary<string, string> contactValues)
        {
            Guid newContactId;
            string email;
            if (!TryGetDedupCandidate(contactValues, out newContactId, out email))
            {
                _inner.UpdateContact(contactValues);
                return;
            }

            var existingContactId = _dedupHelper.FindExistingContactIdByEmail(email, newContactId);
            if (existingContactId.IsEmpty())
            {
                _inner.UpdateContact(contactValues);
                _dedupHelper.WriteLog("NoMatch", newContactId, email);
                return;
            }

            MergeIntoExistingContact(contactValues, newContactId, existingContactId, email);
        }

        private bool TryGetDedupCandidate(Dictionary<string, string> contactValues, out Guid newContactId,
            out string email)
        {
            newContactId = Guid.Empty;
            email = null;
            string newContactIdValue;
            return _userConnection.GetIsFeatureEnabled(DedupFeatureCode) &&
                   contactValues.TryGetValue(IdKey, out newContactIdValue) &&
                   Guid.TryParse(newContactIdValue, out newContactId) &&
                   contactValues.TryGetValue(EmailKey, out email) &&
                   !string.IsNullOrWhiteSpace(email);
        }

        private void MergeIntoExistingContact(Dictionary<string, string> contactValues, Guid newContactId,
            Guid existingContactId, string email)
        {
            try
            {
                RedirectSysAdminUnit(newContactId, existingContactId);
                var redirectedValues = new Dictionary<string, string>(contactValues)
                    {[IdKey] = existingContactId.ToString()};
                _inner.UpdateContact(redirectedValues);
                DeleteBareContact(newContactId);
                _dedupHelper.WriteLog("Merged", newContactId, email, existingContactId);
            }
            catch (Exception exception)
            {
                _dedupHelper.WriteLog("MergeError", newContactId, email, existingContactId,
                    error: exception.ToString());
                _inner.UpdateContact(contactValues);
            }
        }

        private void RedirectSysAdminUnit(Guid newContactId, Guid existingContactId)
        {
            if (HasSysAdminUnit(existingContactId))
            {
                DeleteSysAdminUnit(newContactId);
            }
            else
            {
                MoveSysAdminUnitToContact(newContactId, existingContactId);
            }
        }

        private bool HasSysAdminUnit(Guid contactId)
        {
            var adminUnitId = (new Select(_userConnection)
                    .Top(1)
                    .Column(IdKey)
                    .From(SysAdminUnitSchemaName)
                    .Where(ContactIdColumnName).IsEqual(Column.Parameter(contactId)) as Select)
                .ExecuteScalar<Guid>();
            return !adminUnitId.IsEmpty();
        }

        private void DeleteSysAdminUnit(Guid contactId)
        {
            new Delete(_userConnection)
                .From(SysAdminUnitSchemaName)
                .Where(ContactIdColumnName).IsEqual(Column.Parameter(contactId))
                .Execute();
        }

        private void MoveSysAdminUnitToContact(Guid fromContactId, Guid toContactId)
        {
            new Update(_userConnection, SysAdminUnitSchemaName)
                .Set(ContactIdColumnName, Column.Parameter(toContactId))
                .Where(ContactIdColumnName).IsEqual(Column.Parameter(fromContactId))
                .Execute();
        }

        private void DeleteBareContact(Guid contactId)
        {
            new Delete(_userConnection)
                .From(ContactSchemaName)
                .Where(IdKey).IsEqual(Column.Parameter(contactId))
                .Execute();
        }
    }
}