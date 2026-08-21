namespace Pgr.MsTeamsIntegration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.Json.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;

	#region Class: MsTeamsContactResolver

	public static class MsTeamsContactResolver
	{
		public static string GetEmail(UserConnection userConnection, Guid contactId,
			string emptyEmailMessage)
		{
			userConnection.CheckArgumentNull(nameof(userConnection));
			if (contactId == Guid.Empty)
			{
				throw new ArgumentException("A contact is required.");
			}

			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Contact");
			var emailColumn = esq.AddColumn("Email").Name;
			var contact = esq.GetEntity(userConnection, contactId);
			if (contact == null)
			{
				throw new ArgumentException($"Contact {contactId} was not found.");
			}

			var email = contact.GetTypedColumnValue<string>(emailColumn);
			if (string.IsNullOrWhiteSpace(email))
			{
				throw new InvalidOperationException(emptyEmailMessage);
			}
			return email.Trim();
		}
	}

	#endregion

	#region Models: Public API

	public interface IMsGraphTokenSource
	{
		string GetToken();

		void Invalidate();
	}

	/// <summary>Connection settings for the Microsoft Graph app-only integration.</summary>
	public sealed class MsGraphSettings
	{
		public string TenantId { get; set; }
		public string ClientId { get; set; }
		public string ClientSecret { get; set; }

		public string ServiceUserName { get; set; }

		/// <summary>Graph base URL. Default v1.0.</summary>
		public string GraphBaseUrl { get; set; } = "https://graph.microsoft.com/v1.0";

		/// <summary>
		/// Mailbox (UPN or object id) the event is created in when the caller did not name an
		/// organizer. App-only Graph has no signed-in user, so an explicit mailbox is required.
		/// </summary>
		public string DefaultOrganizer { get; set; }

		/// <summary>
		/// Builds the connection settings from the "PgrMsGraph*" system settings so that
		/// secrets live in Creatio configuration instead of source code. Configure
		/// PgrMsGraphTenantId / PgrMsGraphClientId / PgrMsGraphClientSecret / PgrMsGraphBaseUrl.
		/// </summary>
		public static MsGraphSettings FromSysSettings(UserConnection userConnection)
		{
			userConnection.CheckArgumentNull(nameof(userConnection));
			var settings = new MsGraphSettings
			{
				TenantId     = SysSettings.GetValue(userConnection, "PgrMsGraphTenantId", string.Empty),
				ClientId     = SysSettings.GetValue(userConnection, "PgrMsGraphClientId", string.Empty),
				ClientSecret = SysSettings.GetValue(userConnection, "PgrMsGraphClientSecret", string.Empty),
				GraphBaseUrl = SysSettings.GetValue(userConnection, "PgrMsGraphBaseUrl",
					"https://graph.microsoft.com/v1.0"),
				DefaultOrganizer = SysSettings.GetValue(userConnection,
					"PgrMsGraphDefaultOrganizer", string.Empty),
				ServiceUserName = SysSettings.GetValue(userConnection,
					"PgrMsGraphServiceUserName", string.Empty)
			};

			// TenantId / ClientId identify the app registration and are needed by both the
			// app-only and the delegated flow. ClientSecret is only needed by app-only
			// (client_credentials); the delegated flow never sends it, so it is validated
			// in MsGraphTokenProvider instead of here.
			RequireSetting(settings.TenantId, "PgrMsGraphTenantId");
			RequireSetting(settings.ClientId, "PgrMsGraphClientId");

			return settings;
		}

		internal static void RequireSetting(string value, string code)
		{
			if (string.IsNullOrWhiteSpace(value))
			{
				throw new InvalidOperationException(
					$"Required system setting \"{code}\" is not filled in. " +
					"Set it in Creatio system settings (folder \"MS Teams integration\").");
			}
		}
	}

	/// <summary>Input for creating a Teams meeting via the calendar events endpoint.</summary>
	public sealed class CreateMeetingRequest
	{
		/// <summary>
		/// Organizer object id or UPN. The event is created in this user's calendar.
		/// Left empty, it falls back to the PgrMsGraphDefaultOrganizer system setting.
		/// </summary>
		public string OrganizerUserId { get; set; }

		public string Subject { get; set; }

		/// <summary>Wall-clock start time in <see cref="TimeZone"/> (no offset applied).</summary>
		public DateTime Start { get; set; }

		/// <summary>Wall-clock end time in <see cref="TimeZone"/>.</summary>
		public DateTime End { get; set; }

		/// <summary>Windows time zone id, e.g. "W. Europe Standard Time".</summary>
		public string TimeZone { get; set; } = "W. Europe Standard Time";

		/// <summary>Optional HTML body of the event.</summary>
		public string BodyHtml { get; set; }

		/// <summary>Required attendee email addresses.</summary>
		public IList<string> AttendeeEmails { get; set; } = new List<string>();
	}

	public sealed class DeviceCodeChallenge
	{
		public Guid Handle { get; set; }

		public string UserCode { get; set; }

		public string VerificationUrl { get; set; }

		public int ExpiresInSeconds { get; set; }
	}

	/// <summary>Result of a successful meeting creation.</summary>
	public sealed class CreateMeetingResult
	{
		/// <summary>Graph event id.</summary>
		public string EventId { get; set; }

		/// <summary>Teams join link (onlineMeeting.joinUrl) — store this on the Creatio record.</summary>
		public string JoinUrl { get; set; }

		/// <summary>Outlook web link to the event (optional).</summary>
		public string WebLink { get; set; }
	}

	public sealed class SendChatMessageRequest
	{
		public string RecipientEmail { get; set; }

		public string Message { get; set; }

		public bool IsHtml { get; set; }
	}

	public sealed class SendChatMessageResult
	{
		public string ChatId { get; set; }

		public string MessageId { get; set; }

		public string WebUrl { get; set; }
	}

	#endregion

	#region Models: Graph wire (serialized / deserialized with System.Text.Json)

	/// <summary>OAuth token endpoint response.</summary>
	internal sealed class TokenResponse
	{
		[JsonPropertyName("access_token")]
		public string AccessToken { get; set; }

		[JsonPropertyName("expires_in")]
		public int ExpiresIn { get; set; }

		[JsonPropertyName("refresh_token")]
		public string RefreshToken { get; set; }
	}

	internal sealed class DeviceCodeResponse
	{
		[JsonPropertyName("device_code")]
		public string DeviceCode { get; set; }

		[JsonPropertyName("user_code")]
		public string UserCode { get; set; }

		[JsonPropertyName("verification_uri")]
		public string VerificationUri { get; set; }

		[JsonPropertyName("expires_in")]
		public int ExpiresIn { get; set; }

		[JsonPropertyName("interval")]
		public int Interval { get; set; }
	}

	internal sealed class GraphMeResponse
	{
		[JsonPropertyName("userPrincipalName")]
		public string UserPrincipalName { get; set; }
	}

	internal sealed class TokenErrorResponse
	{
		[JsonPropertyName("error")]
		public string Error { get; set; }

		[JsonPropertyName("error_description")]
		public string ErrorDescription { get; set; }
	}

	/// <summary>Request body for POST /users/{id}/events.</summary>
	internal sealed class GraphEvent
	{
		[JsonPropertyName("subject")]
		public string Subject { get; set; }

		[JsonPropertyName("body")]
		public GraphItemBody Body { get; set; }

		[JsonPropertyName("start")]
		public GraphDateTimeZone Start { get; set; }

		[JsonPropertyName("end")]
		public GraphDateTimeZone End { get; set; }

		[JsonPropertyName("attendees")]
		public List<GraphAttendee> Attendees { get; set; } = new List<GraphAttendee>();

		[JsonPropertyName("isOnlineMeeting")]
		public bool IsOnlineMeeting { get; set; }

		[JsonPropertyName("onlineMeetingProvider")]
		public string OnlineMeetingProvider { get; set; }
	}

	internal sealed class GraphItemBody
	{
		[JsonPropertyName("contentType")]
		public string ContentType { get; set; }

		[JsonPropertyName("content")]
		public string Content { get; set; }
	}

	internal sealed class GraphDateTimeZone
	{
		[JsonPropertyName("dateTime")]
		public string DateTime { get; set; }

		[JsonPropertyName("timeZone")]
		public string TimeZone { get; set; }
	}

	internal sealed class GraphAttendee
	{
		[JsonPropertyName("emailAddress")]
		public GraphEmailAddress EmailAddress { get; set; }

		[JsonPropertyName("type")]
		public string Type { get; set; }
	}

	internal sealed class GraphEmailAddress
	{
		[JsonPropertyName("address")]
		public string Address { get; set; }

		[JsonPropertyName("name")]
		public string Name { get; set; }
	}

	/// <summary>Response body from POST /users/{id}/events.</summary>
	internal sealed class GraphEventResponse
	{
		[JsonPropertyName("id")]
		public string Id { get; set; }

		[JsonPropertyName("webLink")]
		public string WebLink { get; set; }

		[JsonPropertyName("onlineMeeting")]
		public GraphOnlineMeeting OnlineMeeting { get; set; }
	}

	internal sealed class GraphOnlineMeeting
	{
		[JsonPropertyName("joinUrl")]
		public string JoinUrl { get; set; }
	}

	internal sealed class GraphUser
	{
		[JsonPropertyName("id")]
		public string Id { get; set; }

		[JsonPropertyName("userPrincipalName")]
		public string UserPrincipalName { get; set; }

		[JsonPropertyName("displayName")]
		public string DisplayName { get; set; }
	}

	internal sealed class GraphUserList
	{
		[JsonPropertyName("value")]
		public List<GraphUser> Value { get; set; }
	}

	/// <summary>Request body for POST /chats.</summary>
	internal sealed class GraphChatCreateRequest
	{
		[JsonPropertyName("chatType")]
		public string ChatType { get; set; }

		[JsonPropertyName("members")]
		public List<GraphConversationMember> Members { get; set; } = new List<GraphConversationMember>();
	}

	internal sealed class GraphConversationMember
	{
		[JsonPropertyName("@odata.type")]
		public string ODataType { get; set; }

		[JsonPropertyName("roles")]
		public List<string> Roles { get; set; } = new List<string>();

		[JsonPropertyName("user@odata.bind")]
		public string UserBind { get; set; }
	}

	internal sealed class GraphChat
	{
		[JsonPropertyName("id")]
		public string Id { get; set; }

		[JsonPropertyName("webUrl")]
		public string WebUrl { get; set; }
	}

	/// <summary>Request body for POST /chats/{id}/messages.</summary>
	internal sealed class GraphChatMessageRequest
	{
		[JsonPropertyName("body")]
		public GraphItemBody Body { get; set; }
	}

	internal sealed class GraphChatMessage
	{
		[JsonPropertyName("id")]
		public string Id { get; set; }

		[JsonPropertyName("webUrl")]
		public string WebUrl { get; set; }
	}

	#endregion
}