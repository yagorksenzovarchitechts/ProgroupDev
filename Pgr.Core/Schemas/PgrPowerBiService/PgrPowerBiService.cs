namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Runtime.Serialization;
    using System.Linq;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class PgrPowerBiService : BaseService
    {
        private string GetSetting(string code, string defaultValue)
        {
            return Terrasoft.Core.Configuration.SysSettings.GetValue<string>(UserConnection, code, defaultValue);
        }

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "GetConfig",
            ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public string GetConfig()
        {
            var contactId = UserConnection.CurrentUser.ContactId;

            var select = new Select(UserConnection)
                .Column("PgrFilterValue")
                .From("PgrPowerBiUserFilter")
                .Where("PgrUserId").IsEqual(Column.Parameter(contactId)) as Select;
            var slicerValue = select.ExecuteScalar<string>() ?? string.Empty;

            var cfg = new {
                clientId     = GetSetting("PgrPowerBiClientId", string.Empty),
                tenantId     = GetSetting("PgrPowerBiCtId", "6b014d6b-d80d-4437-a308-ef300bb1f0e1"),
                reportId     = GetSetting("PgrPowerBiReportId", "15c4dd17-ed9d-4f44-af1a-97c4a6a1e7b7"),
                pageName     = GetSetting("PgrPowerBiPageName", "e8360298d464883509a8"),
                filterTable  = GetSetting("PgrPowerBiFilterTable", "Dim_BusinesspartnerHierarchy"),
                filterColumn = GetSetting("PgrPowerBiFilterColumn", "SalesManager_Name"),
                slicerValue  = slicerValue
            };
            return Newtonsoft.Json.JsonConvert.SerializeObject(cfg);
        }

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "GetIsAdmin",
            ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public bool GetIsAdmin()
        {
            /*var roleIdStr = GetSetting("PgrAdminRoleId", string.Empty);
            System.Guid roleId;
            if (!System.Guid.TryParse(roleIdStr, out roleId)) { return false; }*/
            System.Guid roleId = new System.Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD"); //sysadmin

            var sel = new Select(UserConnection).Column(Func.Count("Id"))
                .From("SysUserInRole")
                .Where("SysUserId").IsEqual(Column.Parameter(UserConnection.CurrentUser.Id))
                .And("SysRoleId").IsEqual(Column.Parameter(roleId)) as Select;
            return sel.ExecuteScalar<int>() > 0;
        }

        [DataContract]
        public class SlicerCatalogDto
        {
            [DataMember(Name = "title")]  public string Title  { get; set; }
            [DataMember(Name = "table")]  public string Table  { get; set; }
            [DataMember(Name = "column")] public string Column { get; set; }
            [DataMember(Name = "values")] public System.Collections.Generic.List<string> Values { get; set; }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "SyncCatalog",
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Wrapped)]
        public string SyncCatalog(System.Collections.Generic.List<SlicerCatalogDto> slicers)
        {
            int sAdded = 0, vAdded = 0;
            foreach (var s in slicers)
            {
                if (string.IsNullOrWhiteSpace(s.Table) || string.IsNullOrWhiteSpace(s.Column)) { continue; }

                var sel = new Select(UserConnection).Column("Id").From("PgrPowerBiSlicer")
                    .Where("PgrTable").IsEqual(Column.Parameter(s.Table))
                    .And("PgrColumn").IsEqual(Column.Parameter(s.Column)) as Select;
                var slicerId = sel.ExecuteScalar<System.Guid>();
                if (slicerId == System.Guid.Empty)
                {
                    slicerId = System.Guid.NewGuid();
                    new Insert(UserConnection).Into("PgrPowerBiSlicer")
                        .Set("Id", Column.Parameter(slicerId))
                        .Set("Name", Column.Parameter(string.IsNullOrEmpty(s.Title) ? (s.Table + "[" + s.Column + "]") : s.Title))
                        .Set("PgrTable", Column.Parameter(s.Table))
                        .Set("PgrColumn", Column.Parameter(s.Column))
                        .Execute();
                    sAdded++;
                }

                if (s.Values == null) { continue; }
                foreach (var v in s.Values.Distinct())
                {
                    if (string.IsNullOrWhiteSpace(v)) { continue; }
                    var ex = new Select(UserConnection).Column("Id").From("PgrPowerBiSlicerValue")
                        .Where("PgrSlicerId").IsEqual(Column.Parameter(slicerId))
                        .And("Name").IsEqual(Column.Parameter(v)) as Select;
                    if (ex.ExecuteScalar<System.Guid>() == System.Guid.Empty)
                    {
                        new Insert(UserConnection).Into("PgrPowerBiSlicerValue")
                            .Set("Name", Column.Parameter(v))
                            .Set("PgrSlicerId", Column.Parameter(slicerId))
                            .Execute();
                        vAdded++;
                    }
                }
            }
            return "slicers+:" + sAdded + ", values+:" + vAdded;
        }
    }
}
