namespace Terrasoft.Configuration.PgrContactDuplicatesMergeService
{
	using System;
	using System.Collections.Generic;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	using Pgr.Core;
	using Terrasoft.Web.Common;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class PgrContactDuplicatesMergeService : BaseService, IReadOnlySessionState
	{

		#region Methods: Public

		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public ConfigurationServiceResponse MergeContactDuplicates(Guid primaryContactId,
			List<Guid> duplicateContactIds) {
			try {
				var helper = new PgrContactDuplicatesMergeHelper(UserConnection);
				helper.MergeContactDuplicates(primaryContactId, duplicateContactIds);
				return new ConfigurationServiceResponse();
			} catch (Exception ex) {
				return new ConfigurationServiceResponse(ex);
			}
		}

		#endregion

	}
}
