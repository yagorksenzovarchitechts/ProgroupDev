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
	using Terrasoft.Core.Configuration;

	#region Class: MsGraphMeetingService

	/// <summary>
	/// Creates Microsoft Teams meetings from Creatio through Microsoft Graph.
	/// Uses a single method: POST /users/{id}/events with isOnlineMeeting = true,
	/// which creates the calendar event AND the Teams meeting and returns the join link
	/// in one call.
	/// </summary>
	public sealed class MsGraphMeetingService
	{

		#region Fields: Private

		private static readonly ILog ErrorLogger = LogManager.GetLogger("Error");

		private static readonly JsonSerializerOptions SerializerOptions = new JsonSerializerOptions
		{
			DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
		};

		private readonly MsGraphSettings _settings;
		private readonly MsGraphTokenProvider _tokenProvider;
		private readonly MsGraphDelegatedTokenProvider _delegatedTokenProvider;
		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public MsGraphMeetingService(MsGraphSettings settings)
		{
			settings.CheckArgumentNull(nameof(settings));
			_settings = settings;
			_tokenProvider = new MsGraphTokenProvider(settings);
		}

		/// <summary>
		/// Builds the service straight from the "PgrMsGraph*" system settings. The connection
		/// settings and the default meeting time zone are read here, inside the class.
		/// </summary>
		public MsGraphMeetingService(UserConnection userConnection)
			: this(MsGraphSettings.FromSysSettings(userConnection))
		{
			_userConnection = userConnection;
			_delegatedTokenProvider = new MsGraphDelegatedTokenProvider(_settings, userConnection);
		}

		#endregion

		#region Methods: Public

		/// <summary>Creates the event + Teams meeting and returns the join link.</summary>
		public CreateMeetingResult CreateTeamsMeeting(CreateMeetingRequest request)
		{
			request.OrganizerUserId = ResolveOrganizer(request.OrganizerUserId);
			Validate(request, true);
			request.TimeZone = ResolveTimeZone(request.TimeZone);

			var url = $"{_settings.GraphBaseUrl}/users/{request.OrganizerUserId}/events";
			return CreateEvent(url, request, _tokenProvider);
		}

		public CreateMeetingResult CreateTeamsMeetingDelegated(CreateMeetingRequest request)
		{
			RequireDelegatedProvider();
			Validate(request, false);
			request.TimeZone = ResolveTimeZone(request.TimeZone);

			var url = $"{_settings.GraphBaseUrl}/me/events";
			return CreateEvent(url, request, _delegatedTokenProvider);
		}

		#endregion

		#region Methods: Private

		private void RequireDelegatedProvider()
		{
			if (_delegatedTokenProvider == null)
			{
				throw new InvalidOperationException(
					"The delegated flow needs a UserConnection: build the service with the " +
					"MsGraphMeetingService(UserConnection) constructor.");
			}
		}

		private CreateMeetingResult CreateEvent(string url, CreateMeetingRequest request,
			IMsGraphTokenSource tokenSource)
		{
			var payload = BuildEventPayload(request);

			var response = MsGraphApiClient.Send(HttpMethod.Post, url, payload, tokenSource);
			var body = MsGraphApiClient.ReadBody(response);

			if (response.StatusCode != HttpStatusCode.Created &&
				response.StatusCode != HttpStatusCode.OK)
			{
				ErrorLogger.Error(
					$"MsGraph event creation: POST {url} returned {(int)response.StatusCode}. " +
					$"Payload: {payload}. Response: {body}");
				throw new InvalidOperationException(
					$"Graph event creation failed ({(int)response.StatusCode}): {body}");
			}

			var json = JsonSerializer.Deserialize<GraphEventResponse>(body);
			var joinUrl = json?.OnlineMeeting?.JoinUrl;
			if (string.IsNullOrEmpty(joinUrl))
			{
				ErrorLogger.Error(
					$"MsGraph event creation: POST {url} succeeded ({(int)response.StatusCode}) but " +
					$"returned no onlineMeeting.joinUrl. Response: {body}");
				throw new InvalidOperationException(
					"Event was created but no Teams join link was returned. " +
					"Check that isOnlineMeeting/onlineMeetingProvider were accepted and the organizer is Teams-licensed.");
			}

			return new CreateMeetingResult
			{
				EventId = json.Id,
				JoinUrl = joinUrl,
				WebLink = json.WebLink
			};
		}

		private static string BuildEventPayload(CreateMeetingRequest request)
		{
			var graphEvent = new GraphEvent
			{
				Subject = request.Subject,
				Start = ToGraphDateTimeZone(request.Start, request.TimeZone),
				End = ToGraphDateTimeZone(request.End, request.TimeZone),
				IsOnlineMeeting = true,
				OnlineMeetingProvider = "teamsForBusiness",
				Attendees = BuildAttendees(request.AttendeeEmails)
			};

			if (!string.IsNullOrEmpty(request.BodyHtml))
			{
				graphEvent.Body = new GraphItemBody
				{
					ContentType = "HTML",
					Content = request.BodyHtml
				};
			}

			return JsonSerializer.Serialize(graphEvent, SerializerOptions);
		}

		private static GraphDateTimeZone ToGraphDateTimeZone(DateTime dateTime, string timeZone)
		{
			return new GraphDateTimeZone
			{
				DateTime = dateTime.ToString("yyyy-MM-ddTHH:mm:ss"),
				TimeZone = timeZone
			};
		}

		private static List<GraphAttendee> BuildAttendees(IEnumerable<string> emails)
		{
			if (emails == null)
			{
				return new List<GraphAttendee>();
			}
			return emails
				.Where(email => !string.IsNullOrWhiteSpace(email))
				.Select(email => new GraphAttendee
				{
					EmailAddress = new GraphEmailAddress { Address = email },
					Type = "required"
				})
				.ToList();
		}

		private string ResolveOrganizer(string organizerUserId)
		{
			return string.IsNullOrWhiteSpace(organizerUserId)
				? _settings.DefaultOrganizer
				: organizerUserId;
		}

		/// <summary>
		/// Returns the request time zone, or falls back to the PgrMsGraphDefaultTimeZone
		/// system setting when the request did not specify one.
		/// </summary>
		private string ResolveTimeZone(string timeZone)
		{
			if (!string.IsNullOrWhiteSpace(timeZone))
			{
				return timeZone;
			}
			if (_userConnection != null)
			{
				return SysSettings.GetValue<string>(_userConnection,
					"PgrMsGraphDefaultTimeZone", "W. Europe Standard Time");
			}
			return "W. Europe Standard Time";
		}

		private static void Validate(CreateMeetingRequest request, bool requireOrganizer)
		{
			request.CheckArgumentNull(nameof(request));
			if (requireOrganizer && string.IsNullOrWhiteSpace(request.OrganizerUserId))
			{
				throw new ArgumentException(
					"An organizer mailbox is required: pass OrganizerUserId or fill in the " +
					"\"PgrMsGraphDefaultOrganizer\" system setting.");
			}
			if (string.IsNullOrWhiteSpace(request.Subject))
			{
				throw new ArgumentException("Subject is required.");
			}
		}

		#endregion

	}

	#endregion
}