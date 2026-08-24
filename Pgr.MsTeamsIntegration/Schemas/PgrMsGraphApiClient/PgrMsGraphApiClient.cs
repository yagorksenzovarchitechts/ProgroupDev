namespace Pgr.MsTeamsIntegration
{
	using System;
	using System.Net;
	using System.Net.Http;
	using System.Text;
	using System.Threading;

	#region Class: MsGraphApiClient

	public static class MsGraphApiClient
	{

		#region Fields: Private

		private const int MaxRetries = 3;
		private static readonly HttpClient Http = new HttpClient();

		#endregion

		#region Methods: Public

		public static HttpResponseMessage Send(HttpMethod method, string url, string payload,
			IMsGraphTokenSource tokenSource)
		{
			var authRetried = false;

			for (var attempt = 1; ; attempt++)
			{
				using (var message = new HttpRequestMessage(method, url))
				{
					message.Headers.Add("Authorization", "Bearer " + tokenSource.GetToken());
					if (payload != null)
					{
						message.Content = new StringContent(payload, Encoding.UTF8, "application/json");
					}

					var response = Http.SendAsync(message).GetAwaiter().GetResult();

					if (response.StatusCode == HttpStatusCode.Unauthorized && !authRetried)
					{
						authRetried = true;
						tokenSource.Invalidate();
						continue;
					}

					if ((int)response.StatusCode == 429 && attempt < MaxRetries)
					{
						var wait = GetRetryAfter(response) ?? TimeSpan.FromSeconds(Math.Pow(2, attempt));
						Thread.Sleep(wait);
						continue;
					}

					return response;
				}
			}
		}

		public static string ReadBody(HttpResponseMessage response)
		{
			return response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
		}

		#endregion

		#region Methods: Private

		private static TimeSpan? GetRetryAfter(HttpResponseMessage response)
		{
			if (response.Headers.RetryAfter == null)
			{
				return null;
			}
			if (response.Headers.RetryAfter.Delta.HasValue)
			{
				return response.Headers.RetryAfter.Delta.Value;
			}
			if (response.Headers.RetryAfter.Date.HasValue)
			{
				var delta = response.Headers.RetryAfter.Date.Value - DateTimeOffset.UtcNow;
				return delta > TimeSpan.Zero ? delta : TimeSpan.Zero;
			}
			return null;
		}

		#endregion

	}

	#endregion
}
