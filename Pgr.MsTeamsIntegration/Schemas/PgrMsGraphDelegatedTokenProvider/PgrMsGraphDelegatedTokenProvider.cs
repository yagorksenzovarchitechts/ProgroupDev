namespace Pgr.MsTeamsIntegration
{
	using System;
	using System.Collections.Generic;
	using System.Net.Http;
	using System.Text.Json;
	using System.Threading;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MsGraphDelegatedTokenProvider

	public sealed class MsGraphDelegatedTokenProvider : MsGraphTokenProviderBase
	{

		#region Constants: Private

		private const string DelegatedScope =
			"https://graph.microsoft.com/Calendars.ReadWrite offline_access";

		private const string RefreshTokenSettingCode = "PgrMsGraphRefreshToken";

		private const int MaxPollSeconds = 90;

		#endregion

		#region Fields: Private

		private static readonly object PendingSync = new object();
		private static readonly HttpClient Http = new HttpClient();

		private static readonly Dictionary<Guid, PendingSignIn> Pending =
			new Dictionary<Guid, PendingSignIn>();

		private static readonly Dictionary<string, string> RefreshTokens =
			new Dictionary<string, string>();

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public MsGraphDelegatedTokenProvider(MsGraphSettings settings, UserConnection userConnection)
			: base(settings)
		{
			userConnection.CheckArgumentNull(nameof(userConnection));
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Protected

		protected override string CacheKey =>
			"devicecode|" + Settings.TenantId + "|" + Settings.ClientId;

		protected override string FlowName => "Delegated";

		#endregion

		#region Methods: Public

		public DeviceCodeChallenge StartSignIn()
		{
			var form = new[]
			{
				new KeyValuePair<string, string>("client_id", Settings.ClientId),
				new KeyValuePair<string, string>("scope", DelegatedScope)
			};

			var body = PostForm("devicecode", form, out var statusCode);
			if (statusCode < 200 || statusCode > 299)
			{
				LogApiFailure("devicecode", statusCode, body);
				throw new InvalidOperationException(DescribeFailure(statusCode, body));
			}

			var json = JsonSerializer.Deserialize<DeviceCodeResponse>(body);
			if (json == null || string.IsNullOrEmpty(json.DeviceCode))
			{
				throw new InvalidOperationException(
					"The device code response did not contain a device_code.");
			}

			var handle = Guid.NewGuid();
			var expiresInSeconds = json.ExpiresIn > 0 ? json.ExpiresIn : 900;
			lock (PendingSync)
			{
				Pending[handle] = new PendingSignIn
				{
					DeviceCode = json.DeviceCode,
					IntervalSeconds = json.Interval > 0 ? json.Interval : 5,
					ExpiresUtc = DateTime.UtcNow.AddSeconds(expiresInSeconds)
				};
			}

			return new DeviceCodeChallenge
			{
				Handle = handle,
				UserCode = json.UserCode,
				VerificationUrl = string.IsNullOrEmpty(json.VerificationUri)
					? "https://microsoft.com/devicelogin"
					: json.VerificationUri,
				ExpiresInSeconds = expiresInSeconds
			};
		}

		public string CompleteSignIn(Guid handle)
		{
			var pending = TakePending(handle);
			var token = PollForToken(pending, out var refreshToken, out var expiresInSeconds);

			if (string.IsNullOrEmpty(refreshToken))
			{
				throw new InvalidOperationException(
					"The sign-in succeeded but no refresh_token was issued, so the connection " +
					"would not survive a token expiry. Check that the \"offline_access\" scope is allowed.");
			}

			WriteRefreshToken(refreshToken);
			CacheToken(token, expiresInSeconds);
			return ResolveSignedInUser(token);
		}

		#endregion

		#region Methods: Protected

		protected override IEnumerable<KeyValuePair<string, string>> BuildTokenRequestForm()
		{
			return new[]
			{
				new KeyValuePair<string, string>("client_id", Settings.ClientId),
				new KeyValuePair<string, string>("grant_type", "refresh_token"),
				new KeyValuePair<string, string>("refresh_token", ReadRefreshToken()),
				new KeyValuePair<string, string>("scope", DelegatedScope)
			};
		}

		protected override void EnsureConfigured()
		{
			if (string.IsNullOrWhiteSpace(ReadRefreshToken()))
			{
				throw new InvalidOperationException(
					"The Microsoft 365 service account is not connected yet. Use the " +
					"\"Connect service account\" button on the contact page and sign in once.");
			}
		}

		protected override void OnTokenAcquired(string refreshToken)
		{
			if (string.IsNullOrEmpty(refreshToken))
			{
				return;
			}

			RefreshTokens[CacheKey] = refreshToken;
			try
			{
				SysSettings.SetDefValue(_userConnection, RefreshTokenSettingCode, refreshToken);
			}
			catch (Exception e)
			{
				ErrorLogger.Error(
					$"MsGraph delegated auth: could not persist the rotated refresh token into the " +
					$"\"{RefreshTokenSettingCode}\" system setting. It is kept in memory only, so the " +
					"service account will have to be reconnected after an application restart.", e);
			}
		}

		protected override string DescribeFailure(int statusCode, string body)
		{
			var hint = GetHint(GetErrorCode(body), GetErrorDescription(body));
			return string.IsNullOrEmpty(hint)
				? base.DescribeFailure(statusCode, body)
				: $"Delegated Graph sign-in failed ({statusCode}): {hint}";
		}

		#endregion

		#region Methods: Private

		private static PendingSignIn TakePending(Guid handle)
		{
			lock (PendingSync)
			{
				if (!Pending.TryGetValue(handle, out var pending))
				{
					throw new InvalidOperationException(
						"This sign-in request is unknown or the server was restarted. " +
						"Start the connection again.");
				}
				Pending.Remove(handle);
				if (DateTime.UtcNow >= pending.ExpiresUtc)
				{
					throw new InvalidOperationException(
						"The device code has expired. Start the connection again.");
				}
				return pending;
			}
		}

		private string PollForToken(PendingSignIn pending, out string refreshToken,
			out int expiresInSeconds)
		{
			var form = new[]
			{
				new KeyValuePair<string, string>("client_id", Settings.ClientId),
				new KeyValuePair<string, string>("grant_type",
					"urn:ietf:params:oauth:grant-type:device_code"),
				new KeyValuePair<string, string>("device_code", pending.DeviceCode)
			};

			var interval = pending.IntervalSeconds;
			var deadline = DateTime.UtcNow.AddSeconds(MaxPollSeconds);
			if (deadline > pending.ExpiresUtc)
			{
				deadline = pending.ExpiresUtc;
			}

			while (true)
			{
				var body = PostForm("token", form, out var statusCode);
				if (statusCode >= 200 && statusCode <= 299)
				{
					var json = JsonSerializer.Deserialize<TokenResponse>(body);
					if (json == null || string.IsNullOrEmpty(json.AccessToken))
					{
						throw new InvalidOperationException(
							"The device code token response did not contain an access_token.");
					}
					refreshToken = json.RefreshToken;
					expiresInSeconds = json.ExpiresIn > 0 ? json.ExpiresIn : 3600;
					return json.AccessToken;
				}

				var error = GetErrorCode(body);
				if (error == "slow_down")
				{
					interval += 5;
				}
				else if (error != "authorization_pending")
				{
					LogApiFailure("token (device_code)", statusCode, body);
					throw new InvalidOperationException(DescribeFailure(statusCode, body));
				}

				if (DateTime.UtcNow.AddSeconds(interval) >= deadline)
				{
					throw new InvalidOperationException(
						"The sign-in was not completed in time. Enter the code in the browser first, " +
						"then confirm here.");
				}
				Thread.Sleep(TimeSpan.FromSeconds(interval));
			}
		}

		private string ReadRefreshToken()
		{
			if (RefreshTokens.TryGetValue(CacheKey, out var cached) && !string.IsNullOrEmpty(cached))
			{
				return cached;
			}
			return SysSettings.GetValue(_userConnection, RefreshTokenSettingCode, string.Empty);
		}

		private void WriteRefreshToken(string refreshToken)
		{
			RefreshTokens[CacheKey] = refreshToken;
			SysSettings.SetDefValue(_userConnection, RefreshTokenSettingCode, refreshToken);
		}

		private string ResolveSignedInUser(string accessToken)
		{
			string upn;
			try
			{
				using (var message = new HttpRequestMessage(HttpMethod.Get,
					$"{Settings.GraphBaseUrl}/me?$select=userPrincipalName"))
				{
					message.Headers.Add("Authorization", "Bearer " + accessToken);
					var response = Http.SendAsync(message).GetAwaiter().GetResult();
					var body = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();
					if (response.IsSuccessStatusCode)
					{
						upn = JsonSerializer.Deserialize<GraphMeResponse>(body)?.UserPrincipalName;
					}
					else
					{
						upn = null;
						ErrorLogger.Error(
							$"MsGraph delegated auth: GET /me returned {(int)response.StatusCode} " +
							$"after a successful sign-in, so the connected account could not be " +
							$"verified. Response: {body}");
					}
				}
			}
			catch (Exception e)
			{
				upn = null;
				ErrorLogger.Error("MsGraph delegated auth: GET /me failed after a successful sign-in.", e);
			}

			var expected = Settings.ServiceUserName;
			if (!string.IsNullOrWhiteSpace(expected) && !string.IsNullOrEmpty(upn) &&
				!string.Equals(expected.Trim(), upn, StringComparison.OrdinalIgnoreCase))
			{
				throw new InvalidOperationException(
					$"Signed in as \"{upn}\", but the \"PgrMsGraphServiceUserName\" setting expects " +
					$"\"{expected}\". Sign in with the service account or correct the setting.");
			}
			return upn;
		}

		private static string GetHint(string error, string description)
		{
			if (error == "expired_token")
			{
				return "the device code expired before the sign-in was completed. Start again.";
			}
			if (error == "authorization_declined")
			{
				return "the sign-in was declined in the browser.";
			}
			if (error == "invalid_grant" && !string.IsNullOrEmpty(description) &&
				description.Contains("AADSTS700082"))
			{
				return "the stored refresh token expired through inactivity (AADSTS700082). " +
					"Connect the service account again.";
			}
			if (error == "invalid_grant")
			{
				return "the stored refresh token is no longer valid (password change, revoked session " +
					"or policy change). Connect the service account again.";
			}
			if (string.IsNullOrEmpty(description))
			{
				return null;
			}
			if (description.Contains("AADSTS7000218"))
			{
				return "the app registration does not allow public client flows (AADSTS7000218). " +
					"Set Authentication -> \"Allow public client flows\" to Yes in Azure.";
			}
			if (description.Contains("AADSTS65001"))
			{
				return "the delegated Calendars.ReadWrite permission has no admin consent (AADSTS65001).";
			}
			if (description.Contains("AADSTS50059") || description.Contains("AADSTS90002"))
			{
				return "the tenant could not be resolved (AADSTS90002 / 50059). Check the " +
					"\"PgrMsGraphTenantId\" setting.";
			}
			return description;
		}

		#endregion

		#region Classes: Nested

		private sealed class PendingSignIn
		{
			public string DeviceCode;
			public int IntervalSeconds;
			public DateTime ExpiresUtc;
		}

		#endregion

	}

	#endregion
}
