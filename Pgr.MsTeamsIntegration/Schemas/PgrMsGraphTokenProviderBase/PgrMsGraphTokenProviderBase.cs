namespace Pgr.MsTeamsIntegration
{
	using System;
	using System.Collections.Generic;
	using System.Net.Http;
	using System.Text.Json;
	using Common.Logging;
	using Terrasoft.Common;

	#region Class: MsGraphTokenProviderBase

	public abstract class MsGraphTokenProviderBase : IMsGraphTokenSource
	{

		#region Fields: Protected

		protected static readonly ILog ErrorLogger = LogManager.GetLogger("Error");

		#endregion

		#region Fields: Private

		private static readonly object Sync = new object();
		private static readonly HttpClient Http = new HttpClient();

		private static readonly Dictionary<string, CacheEntry> Cache =
			new Dictionary<string, CacheEntry>();

		#endregion

		#region Constructors: Protected

		protected MsGraphTokenProviderBase(MsGraphSettings settings)
		{
			settings.CheckArgumentNull(nameof(settings));
			Settings = settings;
		}

		#endregion

		#region Properties: Protected

		protected MsGraphSettings Settings { get; }

		protected abstract string CacheKey { get; }

		protected abstract string FlowName { get; }

		#endregion

		#region Methods: Public

		public string GetToken()
		{
			lock (Sync)
			{
				if (Cache.TryGetValue(CacheKey, out var entry) &&
					DateTime.UtcNow < entry.ExpiresUtc.AddMinutes(-5))
				{
					return entry.Token;
				}

				var token = RequestNewToken(out var expiresInSeconds);
				Store(CacheKey, token, expiresInSeconds);
				return token;
			}
		}

		public void Invalidate()
		{
			lock (Sync)
			{
				Cache.Remove(CacheKey);
			}
		}

		#endregion

		#region Methods: Protected

		protected abstract IEnumerable<KeyValuePair<string, string>> BuildTokenRequestForm();

		protected virtual void EnsureConfigured()
		{
		}

		protected virtual void OnTokenAcquired(string refreshToken)
		{
		}

		protected virtual string DescribeFailure(int statusCode, string body)
		{
			return $"{FlowName} Graph token request failed ({statusCode}): {body}";
		}

		protected string PostForm(string endpoint,
			IEnumerable<KeyValuePair<string, string>> form, out int statusCode)
		{
			var url = $"https://login.microsoftonline.com/{Settings.TenantId}/oauth2/v2.0/{endpoint}";
			using (var content = new FormUrlEncodedContent(form))
			{
				var response = Http.PostAsync(url, content).GetAwaiter().GetResult();
				statusCode = (int)response.StatusCode;
				return response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
			}
		}

		protected void CacheToken(string token, int expiresInSeconds)
		{
			lock (Sync)
			{
				Store(CacheKey, token, expiresInSeconds);
			}
		}

		protected void LogApiFailure(string endpoint, int statusCode, string body)
		{
			ErrorLogger.Error(
				$"MsGraph {FlowName} auth: POST oauth2/v2.0/{endpoint} returned {statusCode}. " +
				$"Tenant: {Settings.TenantId}. ClientId: {Settings.ClientId}. Response: {body}");
		}

		protected static string GetErrorCode(string body)
		{
			return ReadError(body)?.Error;
		}

		protected static string GetErrorDescription(string body)
		{
			return ReadError(body)?.ErrorDescription;
		}

		#endregion

		#region Methods: Private

		private static void Store(string cacheKey, string token, int expiresInSeconds)
		{
			Cache[cacheKey] = new CacheEntry
			{
				Token = token,
				ExpiresUtc = DateTime.UtcNow.AddSeconds(expiresInSeconds)
			};
		}

		private static TokenErrorResponse ReadError(string body)
		{
			try
			{
				return JsonSerializer.Deserialize<TokenErrorResponse>(body);
			}
			catch (JsonException)
			{
				return null;
			}
		}

		private string RequestNewToken(out int expiresInSeconds)
		{
			EnsureConfigured();

			var body = PostForm("token", BuildTokenRequestForm(), out var statusCode);
			if (statusCode < 200 || statusCode > 299)
			{
				LogApiFailure("token", statusCode, body);
				throw new InvalidOperationException(DescribeFailure(statusCode, body));
			}

			var json = JsonSerializer.Deserialize<TokenResponse>(body);
			if (json == null || string.IsNullOrEmpty(json.AccessToken))
			{
				throw new InvalidOperationException(
					$"The {FlowName.ToLowerInvariant()} Graph token response did not contain an access_token.");
			}

			OnTokenAcquired(json.RefreshToken);
			expiresInSeconds = json.ExpiresIn > 0 ? json.ExpiresIn : 3600;
			return json.AccessToken;
		}

		#endregion

		#region Classes: Nested

		private sealed class CacheEntry
		{
			public string Token;
			public DateTime ExpiresUtc;
		}

		#endregion

	}

	#endregion
}
