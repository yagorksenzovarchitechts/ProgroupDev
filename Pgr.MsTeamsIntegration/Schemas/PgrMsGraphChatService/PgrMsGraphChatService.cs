namespace Pgr.MsTeamsIntegration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Net;
	using System.Net.Http;
	using System.Text.Json;
	using System.Text.Json.Serialization;
	using Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;

	#region Class: MsGraphChatService

	public sealed class MsGraphChatService
	{

		#region Fields: Private

		private static readonly ILog ErrorLogger = LogManager.GetLogger("Error");

		private static readonly JsonSerializerOptions SerializerOptions = new JsonSerializerOptions
		{
			DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
		};

		private readonly MsGraphSettings _settings;
		private readonly MsGraphDelegatedTokenProvider _tokenProvider;

		#endregion

		#region Constructors: Public

		public MsGraphChatService(UserConnection userConnection)
		{
			userConnection.CheckArgumentNull(nameof(userConnection));
			_settings = MsGraphSettings.FromSysSettings(userConnection);
			_tokenProvider = new MsGraphDelegatedTokenProvider(_settings, userConnection);
		}

		#endregion

		#region Methods: Public

		public SendChatMessageResult SendChatMessageDelegated(SendChatMessageRequest request)
		{
			Validate(request);

			var recipientId = ResolveRecipientId(request.RecipientEmail.Trim());
			var signedInId = ResolveSignedInUserId();
			if (string.Equals(signedInId, recipientId, StringComparison.OrdinalIgnoreCase))
			{
				throw new InvalidOperationException(
					"The recipient is the connected service account itself, so there is no one-on-one " +
					"chat to send the message to.");
			}

			var chatId = EnsureOneOnOneChat(signedInId, recipientId);
			return PostMessage(chatId, request);
		}

		#endregion

		#region Methods: Private

		private string ResolveRecipientId(string email)
		{
			var url = $"{_settings.GraphBaseUrl}/users/{Uri.EscapeDataString(email)}?$select=id";
			var response = MsGraphApiClient.Send(HttpMethod.Get, url, null, _tokenProvider);
			var body = MsGraphApiClient.ReadBody(response);

			if (response.IsSuccessStatusCode)
			{
				var id = JsonSerializer.Deserialize<GraphUser>(body)?.Id;
				if (!string.IsNullOrEmpty(id))
				{
					return id;
				}
			}
			else if (response.StatusCode != HttpStatusCode.NotFound)
			{
				ErrorLogger.Error(
					$"MsGraph chat: GET {url} returned {(int)response.StatusCode}. Response: {body}");
				throw new InvalidOperationException(
					Describe(response.StatusCode, body, "The recipient could not be looked up"));
			}

			return ResolveRecipientIdByFilter(email);
		}

		private string ResolveRecipientIdByFilter(string email)
		{
			var quoted = email.Replace("'", "''");
			var filter = Uri.EscapeDataString(
				$"mail eq '{quoted}' or userPrincipalName eq '{quoted}'");
			var url = $"{_settings.GraphBaseUrl}/users?$filter={filter}&$select=id";

			var response = MsGraphApiClient.Send(HttpMethod.Get, url, null, _tokenProvider);
			var body = MsGraphApiClient.ReadBody(response);

			if (!response.IsSuccessStatusCode)
			{
				ErrorLogger.Error(
					$"MsGraph chat: GET {url} returned {(int)response.StatusCode}. Response: {body}");
				throw new InvalidOperationException(
					Describe(response.StatusCode, body, "The recipient could not be looked up"));
			}

			var id = JsonSerializer.Deserialize<GraphUserList>(body)?.Value?.FirstOrDefault()?.Id;
			if (string.IsNullOrEmpty(id))
			{
				throw new InvalidOperationException(
					$"\"{email}\" was not found in Microsoft Entra ID. A Teams chat can only be started " +
					"with a user of your organization or with a guest already invited into the tenant.");
			}
			return id;
		}

		private string ResolveSignedInUserId()
		{
			var url = $"{_settings.GraphBaseUrl}/me?$select=id";
			var response = MsGraphApiClient.Send(HttpMethod.Get, url, null, _tokenProvider);
			var body = MsGraphApiClient.ReadBody(response);

			if (!response.IsSuccessStatusCode)
			{
				ErrorLogger.Error(
					$"MsGraph chat: GET {url} returned {(int)response.StatusCode}. Response: {body}");
				throw new InvalidOperationException(
					Describe(response.StatusCode, body, "The connected service account could not be read"));
			}

			var id = JsonSerializer.Deserialize<GraphUser>(body)?.Id;
			if (string.IsNullOrEmpty(id))
			{
				throw new InvalidOperationException(
					"Graph returned no id for the connected service account.");
			}
			return id;
		}

		private string EnsureOneOnOneChat(string signedInId, string recipientId)
		{
			var payload = JsonSerializer.Serialize(new GraphChatCreateRequest
			{
				ChatType = "oneOnOne",
				Members = new List<GraphConversationMember>
				{
					BuildMember(signedInId),
					BuildMember(recipientId)
				}
			}, SerializerOptions);

			var url = $"{_settings.GraphBaseUrl}/chats";
			var response = MsGraphApiClient.Send(HttpMethod.Post, url, payload, _tokenProvider);
			var body = MsGraphApiClient.ReadBody(response);

			if (!response.IsSuccessStatusCode)
			{
				ErrorLogger.Error(
					$"MsGraph chat: POST {url} returned {(int)response.StatusCode}. " +
					$"Payload: {payload}. Response: {body}");
				throw new InvalidOperationException(
					Describe(response.StatusCode, body, "The Teams chat could not be opened"));
			}

			var chatId = JsonSerializer.Deserialize<GraphChat>(body)?.Id;
			if (string.IsNullOrEmpty(chatId))
			{
				ErrorLogger.Error(
					$"MsGraph chat: POST {url} succeeded ({(int)response.StatusCode}) but returned no " +
					$"chat id. Response: {body}");
				throw new InvalidOperationException(
					"The Teams chat was created but Graph returned no chat id.");
			}
			return chatId;
		}

		private GraphConversationMember BuildMember(string userId)
		{
			return new GraphConversationMember
			{
				ODataType = "#microsoft.graph.aadUserConversationMember",
				Roles = new List<string> { "owner" },
				UserBind = $"{_settings.GraphBaseUrl}/users('{userId}')"
			};
		}

		private SendChatMessageResult PostMessage(string chatId, SendChatMessageRequest request)
		{
			var payload = JsonSerializer.Serialize(new GraphChatMessageRequest
			{
				Body = new GraphItemBody
				{
					ContentType = request.IsHtml ? "html" : "text",
					Content = request.Message
				}
			}, SerializerOptions);

			var url = $"{_settings.GraphBaseUrl}/chats/{chatId}/messages";
			var response = MsGraphApiClient.Send(HttpMethod.Post, url, payload, _tokenProvider);
			var body = MsGraphApiClient.ReadBody(response);

			if (!response.IsSuccessStatusCode)
			{
				ErrorLogger.Error(
					$"MsGraph chat: POST {url} returned {(int)response.StatusCode}. " +
					$"Payload: {payload}. Response: {body}");
				throw new InvalidOperationException(
					Describe(response.StatusCode, body, "The Teams message could not be sent"));
			}

			var json = JsonSerializer.Deserialize<GraphChatMessage>(body);
			return new SendChatMessageResult
			{
				ChatId = chatId,
				MessageId = json?.Id,
				WebUrl = json?.WebUrl
			};
		}

		private static string Describe(HttpStatusCode statusCode, string body, string action)
		{
			if (statusCode == HttpStatusCode.Forbidden)
			{
				return $"{action} ({(int)statusCode}): the connected service account is missing the Teams " +
					"chat permissions. Grant the delegated \"Chat.Create\", \"ChatMessage.Send\" and " +
					"\"User.ReadBasic.All\" permissions in Azure, then connect the service account again. " +
					$"Response: {body}";
			}
			return $"{action} ({(int)statusCode}): {body}";
		}

		private static void Validate(SendChatMessageRequest request)
		{
			request.CheckArgumentNull(nameof(request));
			if (string.IsNullOrWhiteSpace(request.RecipientEmail))
			{
				throw new ArgumentException(
					"A recipient email address is required: pass RecipientEmail or a contact that has one.");
			}
			if (string.IsNullOrWhiteSpace(request.Message))
			{
				throw new ArgumentException("The message text is required.");
			}
		}

		#endregion

	}

	#endregion
}
