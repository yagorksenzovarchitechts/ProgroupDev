namespace Pgr.MsTeamsIntegration
{
	using System.Collections.Generic;

	#region Class: MsGraphTokenProvider

	public sealed class MsGraphTokenProvider : MsGraphTokenProviderBase
	{

		#region Constructors: Public

		public MsGraphTokenProvider(MsGraphSettings settings)
			: base(settings)
		{
		}

		#endregion

		#region Properties: Protected

		protected override string CacheKey =>
			"app|" + Settings.TenantId + "|" + Settings.ClientId;

		protected override string FlowName => "App-only";

		#endregion

		#region Methods: Protected

		protected override IEnumerable<KeyValuePair<string, string>> BuildTokenRequestForm()
		{
			return new[]
			{
				new KeyValuePair<string, string>("client_id", Settings.ClientId),
				new KeyValuePair<string, string>("client_secret", Settings.ClientSecret),
				new KeyValuePair<string, string>("scope", "https://graph.microsoft.com/.default"),
				new KeyValuePair<string, string>("grant_type", "client_credentials")
			};
		}

		#endregion

	}

	#endregion
}
