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

        public Guid FindExistingContactIdByEmail(string email, Guid excludeContactId = default)
        {
            var select = (Select) new Select(_userConnection)
                .Top(1)
                .Column(IdColumnName)
                .From(ContactSchemaName)
                .Where(Func.Upper(EmailColumnName)).IsEqual(Func.Upper(Column.Parameter(email)))
                .And(IdColumnName).IsNotEqual(Column.Parameter(excludeContactId))
                .OrderByAsc(CreatedOnColumnName);
            return select.ExecuteScalar<Guid>();
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
                    .Set("PgrNewContactId", Column.Parameter(newContactId.IsEmpty() ? (object) DBNull.Value : newContactId))
                    .Set("PgrExistingContactId", Column.Parameter(existingContactId.IsEmpty() ? (object) DBNull.Value : existingContactId))
                    .Set("PgrIsManuallyCreated", Column.Parameter(isManuallyCreated))
                    .Set("PgrError", Column.Parameter(error ?? string.Empty))
                    .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                    .Execute();
            }
            catch (Exception)
            {
            }
        }
    }
}
