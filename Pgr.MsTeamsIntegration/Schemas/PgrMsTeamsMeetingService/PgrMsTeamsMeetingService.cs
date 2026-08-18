namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using System.Linq;
    using System.Runtime.Serialization;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using Terrasoft.Core.Entities;
    using Terrasoft.Web.Common;
    using Pgr.MsTeamsIntegration;

    /// <summary>
    /// Configuration REST service that exposes Microsoft Teams meeting creation to
    /// authenticated Creatio users (client-side ServiceHelper.callService / page code).
    ///
    /// Thin wrapper over <see cref="MsGraphMeetingService"/>: connection settings and the
    /// default time zone are read from the "PgrMsGraph*" system settings inside the service,
    /// and the current user's session provides the UserConnection.
    ///
    /// Call: POST [Base]/0/rest/PgrMsTeamsMeetingService/CreateMeeting
    /// Body (Bare): { "contactId": "...", "subject": "...",
    ///                "startDateTime": "2026-08-04T14:00:00", "endDateTime": "2026-08-04T15:00:00" }
    /// </summary>
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class PgrMsTeamsMeetingService : BaseService
    {
        /// <summary>
        /// Slots travel as wall-clock text, not as instants: Graph pairs the literal date/time
        /// with a time zone name, and the WCF JSON serializer cannot read ISO-8601 into DateTime.
        /// </summary>
        private const string WallClockFormat = "yyyy-MM-ddTHH:mm:ss";

        private static readonly global::Common.Logging.ILog ErrorLogger =
            global::Common.Logging.LogManager.GetLogger("Error");

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "CreateMeeting",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare)]
        public CreateMeetingServiceResponse CreateMeeting(CreateMeetingServiceRequest request)
        {
            try
            {
                var meetingRequest = BuildMeetingRequest(request);

                // Connection settings + default time zone are resolved from system settings
                // inside the service; nothing to configure here.
                var result = new MsGraphMeetingService(UserConnection).CreateTeamsMeeting(meetingRequest);
                return new CreateMeetingServiceResponse(result);
            }
            catch (Exception e)
            {
                ErrorLogger.Error("PgrMsTeamsMeetingService.CreateMeeting failed.", e);
                return new CreateMeetingServiceResponse(e);
            }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "CreateMeetingDelegated",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare)]
        public CreateMeetingServiceResponse CreateMeetingDelegated(CreateMeetingServiceRequest request)
        {
            try
            {
                var meetingRequest = BuildMeetingRequest(request);
                var result = new MsGraphMeetingService(UserConnection)
                    .CreateTeamsMeetingDelegated(meetingRequest);
                return new CreateMeetingServiceResponse(result);
            }
            catch (Exception e)
            {
                ErrorLogger.Error("PgrMsTeamsMeetingService.CreateMeetingDelegated failed.", e);
                return new CreateMeetingServiceResponse(e);
            }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "StartDelegatedSignIn",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare)]
        public DelegatedSignInStartResponse StartDelegatedSignIn(DelegatedSignInRequest request)
        {
            try
            {
                var challenge = BuildDelegatedTokenProvider().StartSignIn();
                return new DelegatedSignInStartResponse(challenge);
            }
            catch (Exception e)
            {
                ErrorLogger.Error("PgrMsTeamsMeetingService.StartDelegatedSignIn failed.", e);
                return new DelegatedSignInStartResponse(e);
            }
        }

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "CompleteDelegatedSignIn",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            BodyStyle = WebMessageBodyStyle.Bare)]
        public DelegatedSignInCompleteResponse CompleteDelegatedSignIn(
            DelegatedSignInRequest request)
        {
            try
            {
                if (request == null || request.Handle == Guid.Empty)
                {
                    throw new ArgumentException("\"handle\" is required.");
                }
                var signedInAs = BuildDelegatedTokenProvider().CompleteSignIn(request.Handle);
                return new DelegatedSignInCompleteResponse { SignedInAs = signedInAs };
            }
            catch (Exception e)
            {
                ErrorLogger.Error("PgrMsTeamsMeetingService.CompleteDelegatedSignIn failed.", e);
                return new DelegatedSignInCompleteResponse(e);
            }
        }

        private MsGraphDelegatedTokenProvider BuildDelegatedTokenProvider()
        {
            return new MsGraphDelegatedTokenProvider(
                MsGraphSettings.FromSysSettings(UserConnection), UserConnection);
        }

        private CreateMeetingRequest BuildMeetingRequest(CreateMeetingServiceRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request), "Request body is empty.");
            }

            var attendees = (request.AttendeeEmails ?? new List<string>()).ToList();
            if (request.ContactId != Guid.Empty)
            {
                attendees.Add(GetContactEmail(request.ContactId));
            }

            return new CreateMeetingRequest
            {
                // Empty organizer / time zone -> the service falls back to the
                // PgrMsGraphDefaultOrganizer / PgrMsGraphDefaultTimeZone settings.
                OrganizerUserId = request.OrganizerUserId,
                Subject = request.Subject,
                Start = ParseWallClock(request.StartDateTime, "startDateTime"),
                End = ParseWallClock(request.EndDateTime, "endDateTime"),
                TimeZone = request.TimeZone,
                BodyHtml = request.BodyHtml,
                AttendeeEmails = attendees
            };
        }

        private string GetContactEmail(Guid contactId)
        {
            var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Contact");
            var emailColumn = esq.AddColumn("Email").Name;
            var contact = esq.GetEntity(UserConnection, contactId);
            if (contact == null)
            {
                throw new ArgumentException($"Contact {contactId} was not found.");
            }
            var email = contact.GetTypedColumnValue<string>(emailColumn);
            if (string.IsNullOrWhiteSpace(email))
            {
                throw new InvalidOperationException(
                    "The contact has no email address, so there is nobody to invite to the meeting.");
            }
            return email;
        }

        private static DateTime ParseWallClock(string value, string fieldName)
        {
            if (!DateTime.TryParseExact(value, WallClockFormat, CultureInfo.InvariantCulture,
                    DateTimeStyles.None, out var result))
            {
                throw new ArgumentException(
                    $"\"{fieldName}\" must be a date and time in the {WallClockFormat} format.");
            }
            return result;
        }
    }

    #region Class: CreateMeetingServiceRequest

    /// <summary>Input contract for <see cref="PgrMsTeamsMeetingService.CreateMeeting"/>.</summary>
    [DataContract]
    public class CreateMeetingServiceRequest
    {
        /// <summary>
        /// Organizer object id or UPN. Optional — empty falls back to the
        /// PgrMsGraphDefaultOrganizer system setting.
        /// </summary>
        [DataMember(Name = "organizerUserId")]
        public string OrganizerUserId { get; set; }

        [DataMember(Name = "subject")]
        public string Subject { get; set; }

        /// <summary>Contact to invite. Its email is added to <see cref="AttendeeEmails"/>.</summary>
        [DataMember(Name = "contactId")]
        public Guid ContactId { get; set; }

        /// <summary>Wall-clock start time in <see cref="TimeZone"/>, "yyyy-MM-ddTHH:mm:ss".</summary>
        [DataMember(Name = "startDateTime")]
        public string StartDateTime { get; set; }

        /// <summary>Wall-clock end time in <see cref="TimeZone"/>, "yyyy-MM-ddTHH:mm:ss".</summary>
        [DataMember(Name = "endDateTime")]
        public string EndDateTime { get; set; }

        /// <summary>Windows time zone id, e.g. "W. Europe Standard Time". Optional.</summary>
        [DataMember(Name = "timeZone")]
        public string TimeZone { get; set; }

        /// <summary>Optional HTML body of the event.</summary>
        [DataMember(Name = "bodyHtml")]
        public string BodyHtml { get; set; }

        /// <summary>Attendee email addresses.</summary>
        [DataMember(Name = "attendeeEmails")]
        public List<string> AttendeeEmails { get; set; }
    }

    #endregion

    #region Class: CreateMeetingServiceResponse

    /// <summary>
    /// Result contract. Inherits <see cref="ConfigurationServiceResponse"/> to reuse the
    /// platform Success / ErrorInfo / ResponseStatus envelope: the parameterless base ctor
    /// sets Success = true, and base(Exception) fills the error envelope automatically.
    /// </summary>
    [DataContract]
    public class CreateMeetingServiceResponse : ConfigurationServiceResponse
    {
        public CreateMeetingServiceResponse()
        {
        }

        public CreateMeetingServiceResponse(CreateMeetingResult result)
        {
            EventId = result.EventId;
            JoinUrl = result.JoinUrl;
            WebLink = result.WebLink;
        }

        public CreateMeetingServiceResponse(Exception e)
            : base(e)
        {
        }

        /// <summary>Graph event id.</summary>
        [DataMember(Name = "eventId")]
        public string EventId { get; set; }

        /// <summary>Teams join link (onlineMeeting.joinUrl).</summary>
        [DataMember(Name = "joinUrl")]
        public string JoinUrl { get; set; }

        /// <summary>Outlook web link to the event (optional).</summary>
        [DataMember(Name = "webLink")]
        public string WebLink { get; set; }
    }

    #endregion

    #region Class: DelegatedSignInStartResponse

    [DataContract]
    public class DelegatedSignInStartResponse : ConfigurationServiceResponse
    {
        public DelegatedSignInStartResponse()
        {
        }

        public DelegatedSignInStartResponse(DeviceCodeChallenge challenge)
        {
            Handle = challenge.Handle;
            UserCode = challenge.UserCode;
            VerificationUrl = challenge.VerificationUrl;
            ExpiresInSeconds = challenge.ExpiresInSeconds;
        }

        public DelegatedSignInStartResponse(Exception e)
            : base(e)
        {
        }

        [DataMember(Name = "handle")]
        public Guid Handle { get; set; }

        [DataMember(Name = "userCode")]
        public string UserCode { get; set; }

        [DataMember(Name = "verificationUrl")]
        public string VerificationUrl { get; set; }

        [DataMember(Name = "expiresInSeconds")]
        public int ExpiresInSeconds { get; set; }
    }

    #endregion

    #region Class: DelegatedSignInRequest

    [DataContract]
    public class DelegatedSignInRequest
    {
        [DataMember(Name = "handle")]
        public Guid Handle { get; set; }
    }

    #endregion

    #region Class: DelegatedSignInCompleteResponse

    [DataContract]
    public class DelegatedSignInCompleteResponse : ConfigurationServiceResponse
    {
        public DelegatedSignInCompleteResponse()
        {
        }

        public DelegatedSignInCompleteResponse(Exception e)
            : base(e)
        {
        }

        [DataMember(Name = "signedInAs")]
        public string SignedInAs { get; set; }
    }

    #endregion
}
