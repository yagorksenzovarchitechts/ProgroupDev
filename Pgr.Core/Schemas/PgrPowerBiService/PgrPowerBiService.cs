namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Runtime.Serialization;
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
                .Column("s", "PgrTable").As("TableName")
                .Column("s", "PgrColumn").As("ColumnName")
                .Column("v", "Name").As("ValueName")
                .From("PgrPowerBiUserFilter").As("uf")
                .InnerJoin("PgrPowerBiSlicerValue").As("v").On("v", "Id").IsEqual("uf", "PgrSlicerValueId")
                .InnerJoin("PgrPowerBiSlicer").As("s").On("s", "Id").IsEqual("v", "PgrSlicerId")
                .Where("uf", "PgrUserId").IsEqual(Column.Parameter(contactId)) as Select;

            var order = new List<Tuple<string, string>>();
            var values = new Dictionary<Tuple<string, string>, List<string>>();

            using (var db = UserConnection.EnsureDBConnection())
            {
                using (var reader = select.ExecuteReader(db))
                {
                    while (reader.Read())
                    {
                        var table  = Convert.ToString(reader["TableName"]);
						var column = Convert.ToString(reader["ColumnName"]);
						var value  = Convert.ToString(reader["ValueName"]);
                        if (string.IsNullOrWhiteSpace(table) || string.IsNullOrWhiteSpace(column)) { continue; }

                        var key = Tuple.Create(table, column);
                        if (!values.ContainsKey(key))
                        {
                            values[key] = new List<string>();
                            order.Add(key);
                        }
                        if (!string.IsNullOrWhiteSpace(value) && !values[key].Contains(value))
                        {
                            values[key].Add(value);
                        }
                    }
                }
            }

            var filters = order.Select(k => new {
                table  = k.Item1,
                column = k.Item2,
                values = values[k]
            }).ToList();

            var cfg = new {
                clientId = GetSetting("PgrPowerBiClientId", string.Empty),
                tenantId = GetSetting("PgrPowerBiCtId", "6b014d6b-d80d-4437-a308-ef300bb1f0e1"),
                reportId = GetSetting("PgrPowerBiReportId", "15c4dd17-ed9d-4f44-af1a-97c4a6a1e7b7"),
                pageName = GetSetting("PgrPowerBiPageName", "e8360298d464883509a8"),
                filters  = filters
            };
            return Newtonsoft.Json.JsonConvert.SerializeObject(cfg);
        }

        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "GetIsAdmin",
            ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public bool GetIsAdmin()
        {
            Guid roleId = new Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD"); //sysadmin

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
            [DataMember(Name = "values")] public List<string> Values { get; set; }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "SyncCatalog",
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Wrapped)]
        public string SyncCatalog(List<SlicerCatalogDto> slicers)
        {
            int sAdded = 0, vAdded = 0;
            foreach (var s in slicers)
            {
                if (string.IsNullOrWhiteSpace(s.Table) || string.IsNullOrWhiteSpace(s.Column)) { continue; }

                var sel = new Select(UserConnection).Column("Id").From("PgrPowerBiSlicer")
                    .Where("PgrTable").IsEqual(Column.Parameter(s.Table))
                    .And("PgrColumn").IsEqual(Column.Parameter(s.Column)) as Select;
                var slicerId = sel.ExecuteScalar<Guid>();
                if (slicerId == Guid.Empty)
                {
                    slicerId = Guid.NewGuid();
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
                    if (ex.ExecuteScalar<Guid>() == Guid.Empty)
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
