namespace Terrasoft.Configuration
{
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using Pgr.Core;
    using Terrasoft.Web.Common;

    /// <summary>
    ///     REST entry point for the 3-6-9 order-intake deviation process (CMVP-64) actions that need
    ///     to be callable directly from a Freedom UI page button without a business process — see
    ///     <see cref="Pgr369Helper" /> for the actual logic.
    /// </summary>
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class Pgr369Service : BaseService
    {
        /// <summary>
        ///     CMVP-208: closes an escalated 3-6-9 cycle for the given alert task (Sales Director
        ///     action). The justification text is expected to already be saved on the task by the
        ///     caller (page save) before this is invoked.
        /// </summary>
        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "CloseWorkflow/{taskId}",
            ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        public ConfigurationServiceResponse CloseWorkflow(string taskId)
        {
            try
            {
                new Pgr369Helper(UserConnection).CloseWorkflow(Guid.Parse(taskId));
                return new ConfigurationServiceResponse();
            }
            catch (Exception e)
            {
                return new ConfigurationServiceResponse(e);
            }
        }
    }
}
