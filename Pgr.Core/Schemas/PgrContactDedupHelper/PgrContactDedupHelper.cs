namespace Pgr.Core
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;

    public class PgrContactDedupHelper
    {
        private const string ContactSchemaName = "Contact";
        private const string DedupLogSchemaName = "PgrContactDedupLog";
        private const string IdColumnName = "Id";
        private const string EmailColumnName = "Email";
        private const string CreatedOnColumnName = "CreatedOn";

        private readonly UserConnection _userConnection;

        public PgrContactDedupHelper(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public Guid FindExistingContactIdByEmail(string email, Guid excludeContactId = default,
            DateTime? createdBefore = null)
        {
            var select = (Select) new Select(_userConnection)
                .Top(1)
                .Column(IdColumnName)
                .From(ContactSchemaName)
                .Where(Func.Upper(EmailColumnName)).IsEqual(Func.Upper(Column.Parameter(email)))
                .And(IdColumnName).IsNotEqual(Column.Parameter(excludeContactId));
            if (createdBefore.HasValue)
            {
                select.And(CreatedOnColumnName).IsLess(Column.Parameter(createdBefore.Value));
            }
            select.OrderByAsc(CreatedOnColumnName);
            return select.ExecuteScalar<Guid>();
        }

        public DateTime GetContactCreatedOn(Guid contactId)
        {
            var select = (Select) new Select(_userConnection)
                .Top(1)
                .Column(CreatedOnColumnName)
                .From(ContactSchemaName)
                .Where(IdColumnName).IsEqual(Column.Parameter(contactId));
            return select.ExecuteScalar<DateTime>();
        }

        public void WriteLog(string stage, Guid newContactId, string candidate = null, Guid existingContactId = default,
            bool isManuallyCreated = false, string error = null)
        {
            try
            {
                new Insert(_userConnection)
                    .Into(DedupLogSchemaName)
                    .Set("Id", Column.Parameter(Guid.NewGuid()))
                    .Set("PgrStage", Column.Parameter(stage))
                    .Set("PgrCandidate", Column.Parameter(candidate ?? string.Empty))
                    .Set("PgrNewContactId", GetGuidParameter(newContactId))
                    .Set("PgrExistingContactId", GetGuidParameter(existingContactId))
                    .Set("PgrIsManuallyCreated", Column.Parameter(isManuallyCreated))
                    .Set("PgrError", Column.Parameter(error ?? string.Empty))
                    .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                    .Execute();
            }
            catch (Exception)
            {
            }
        }

        private static QueryColumnExpression GetGuidParameter(Guid value)
        {
            return value.IsEmpty() ? Column.Parameter(null, "Guid") : Column.Parameter(value);
        }
    }
}
