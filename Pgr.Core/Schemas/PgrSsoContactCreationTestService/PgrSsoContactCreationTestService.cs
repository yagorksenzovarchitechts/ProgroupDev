namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Text;
    using Newtonsoft.Json;
    using Terrasoft.Core.Factories;
    using Terrasoft.Web.Common;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class PgrSsoContactCreationTestService : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", UriTemplate = "IsDedupFeatureEnabled",
            ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public bool IsDedupFeatureEnabled()
        {
            return UserConnection.GetIsFeatureEnabled("PgrContactDedupEnabled");
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "CreateSsoLikeContact", BodyStyle = WebMessageBodyStyle.Bare)]
        public Stream CreateSsoLikeContact(Stream requestBody)
        {
            string requestJson;
            using (var reader = new StreamReader(requestBody, Encoding.UTF8))
            {
                requestJson = reader.ReadToEnd();
            }

            var contactValues = JsonConvert.DeserializeObject<Dictionary<string, object>>(requestJson);
            if (contactValues == null || !contactValues.ContainsKey("Name"))
            {
                throw new ArgumentException("\"Name\" is required.");
            }

            object modeValue;
            var hasMode = contactValues.TryGetValue("Mode", out modeValue);
            var isDirectMode = hasMode &&
                string.Equals(Convert.ToString(modeValue), "Direct", StringComparison.OrdinalIgnoreCase);

            var isUpdateSsoMode = hasMode &&
                string.Equals(Convert.ToString(modeValue), "UpdateSso", StringComparison.OrdinalIgnoreCase);

            var isRunProcessMode = hasMode &&
                string.Equals(Convert.ToString(modeValue), "RunProcess", StringComparison.OrdinalIgnoreCase);

            Dictionary<string, object> result;
            if (isDirectMode)
            {
                var contact = UserConnection.EntitySchemaManager.GetInstanceByName("Contact").CreateEntity(UserConnection);
                contact.SetDefColumnValues();
                contact.SetColumnValue("Name", contactValues["Name"]);
                contact.Save();
                result = new Dictionary<string, object> { { "Name", contactValues["Name"] }, { "Id", contact.PrimaryColumnValue } };
            }
            else if (isUpdateSsoMode)
            {
                try
                {
                    var stringValues = new Dictionary<string, string>();
                    foreach (var kv in contactValues)
                    {
                        stringValues[kv.Key] = Convert.ToString(kv.Value);
                    }
                    var updater = ClassFactory.Get<ISsoContactUpdater>(new ConstructorArgument("userConnection", UserConnection));
                    updater.UpdateContact(stringValues);
                    result = new Dictionary<string, object> { { "UpdaterType", updater.GetType().FullName } };
                }
                catch (Exception exception)
                {
                    result = new Dictionary<string, object> { { "Error", exception.ToString() } };
                }
            }
            else if (isRunProcessMode)
            {
                try
                {
                    new SysAdminUtilities().RunUpdateSsoContactProcess(UserConnection, contactValues, "Default");
                    result = new Dictionary<string, object> { { "Scheduled", true } };
                }
                catch (Exception exception)
                {
                    result = new Dictionary<string, object> { { "Error", exception.ToString() } };
                }
            }
            else
            {
                var sysAdminUtilities = new SysAdminUtilities();
                sysAdminUtilities.CreateContact(UserConnection, contactValues);
                result = contactValues;
            }

            result["DebugHasMode"] = hasMode;
            result["DebugModeValue"] = modeValue == null ? "null" : modeValue.ToString();
            result["DebugModeValueType"] = modeValue == null ? "null" : modeValue.GetType().FullName;
            result["DebugIsDirectMode"] = isDirectMode;

            var responseBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(result));
            WebOperationContext.Current.OutgoingResponse.ContentType = "application/json";
            return new MemoryStream(responseBytes);
        }
    }
}
