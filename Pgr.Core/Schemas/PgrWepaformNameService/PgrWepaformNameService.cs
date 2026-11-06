namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    /// <summary>
    /// Web service that checks whether a proposed Wepaform name is already used by an existing account.
    /// </summary>
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class PgrWepaformNameService : BaseService
    {
        #region Methods: Public

        /// <summary>
        /// Returns true if the name is already used in Account.PgrWepaformName
        /// (case-insensitive, leading and trailing spaces ignored), excluding the account the lead leadId was qualified into.
        /// </summary>
        /// <param name="name">Name to check.</param>
        /// <param name="leadId">Lead identifier (may be empty for a new lead).</param>
        /// <returns>True if the name is already taken.</returns>
        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "IsWepaformNameTaken",
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.WrappedRequest)]
        public bool IsWepaformNameTaken(string name, string leadId)
        {
            var normalized = (name ?? string.Empty).Trim();
            if (normalized.Length == 0)
            {
                return false;
            }
            var excludedId = GetQualifiedAccountId(leadId);
            var select = new Select(UserConnection)
                .Column(nameof(Account.Id))
                .Column(nameof(Account.PgrWepaformName))
                .From(nameof(Account))
                .Where(Func.Upper(Column.SourceColumn(nameof(Account.PgrWepaformName))))
                    .IsLike(Column.Parameter("%" + normalized.ToUpper() + "%")) as Select;
            using (var dbExecutor = UserConnection.EnsureDBConnection())
            using (var reader = select.ExecuteReader(dbExecutor))
            {
                while (reader.Read())
                {
                    var accountId = reader.GetGuid(0);
                    var candidate = reader.IsDBNull(1) ? string.Empty : reader.GetString(1);
                    if (accountId != excludedId &&
                        string.Equals(candidate.Trim(), normalized, StringComparison.OrdinalIgnoreCase))
                    {
                        return true;
                    }
                }
            }
            return false;
        }

        #endregion

        #region Methods: Private

        /// <summary>
        /// Returns the Id of the account the lead was qualified into, or an empty Guid.
        /// </summary>
        /// <param name="leadId">Lead identifier.</param>
        /// <returns>Account Id or Guid.Empty.</returns>
        private Guid GetQualifiedAccountId(string leadId)
        {
            if (!Guid.TryParse(leadId, out Guid parsedLeadId))
            {
                return Guid.Empty;
            }
            var select = new Select(UserConnection)
                .Column(nameof(Lead.QualifiedAccountId))
                .From(nameof(Lead))
                .Where(nameof(Lead.Id)).IsEqual(Column.Parameter(parsedLeadId)) as Select;
            return select.ExecuteScalar<Guid>();
        }

        #endregion
    }
}
