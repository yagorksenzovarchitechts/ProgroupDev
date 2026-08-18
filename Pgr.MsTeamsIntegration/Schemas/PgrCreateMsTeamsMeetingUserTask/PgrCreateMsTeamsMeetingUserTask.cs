namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Pgr.MsTeamsIntegration;

	#region Class: PgrCreateMsTeamsMeetingUserTask

	/// <exclude/>
	public partial class PgrCreateMsTeamsMeetingUserTask
	{

		#region Methods: Protected

			/*
			 * Process-action body.
			 *
			 * Meeting data is taken from the user-task parameters
			 * (OrganizerUserId, Subject, StartDateTime, EndDateTime, TimeZone, AttendeeEmails).
			 * Connection settings and the default time zone are read from the "PgrMsGraph*"
			 * system settings INSIDE MsGraphMeetingService — there is no system-setting
			 * access in this task.
			 */
		protected override bool InternalExecute(ProcessExecutingContext context) {
			// --- Original hard-coded test values (kept for reference) ---
			// var settings = new MsGraphSettings {
			//     TenantId     = "e4809f55-415e-4d01-ae6f-8ae8d8a8003c",
			//     ClientId     = "3b174e19-79b0-476b-999b-4f2534632e8e",
			//     ClientSecret = "***"   // moved to the PgrMsGraphClientSecret system setting
			// };
			// var request = new CreateMeetingRequest {
			//     OrganizerUserId = "613b1ee5-df69-4707-add1-4ad6c3638d5b",
			//     Subject         = "Meeting from Creatio",
			//     Start           = DateTime.Now.AddHours(1),
			//     End             = DateTime.Now.AddHours(2),
			//     TimeZone        = "W. Europe Standard Time",
			//     AttendeeEmails  = new List<string> { "yagor.ksenzov@architechts.nl" }
			// };
			// ------------------------------------------------------------

			// Meeting request from the user-task parameters.
			var request = new CreateMeetingRequest {
				OrganizerUserId = OrganizerUserId,
				Subject         = Subject,
				Start           = StartDateTime,
				End             = EndDateTime,
				TimeZone        = TimeZone,   // empty -> service falls back to the default time-zone setting
				AttendeeEmails  = ParseEmails(AttendeeEmails)
			};

			// Connection settings + default time zone are resolved from system settings
			// inside the service; nothing to configure here.
			var result = new MsGraphMeetingService(context.UserConnection).CreateTeamsMeeting(request);

			// result.JoinUrl -> the Teams join link; result.EventId, result.WebLink also available

			return true;
		}

		#endregion

		#region Methods: Private

		private static IList<string> ParseEmails(string value) {
			if (string.IsNullOrWhiteSpace(value)) {
				return new List<string>();
			}
			return value
				.Split(new[] { ';', ',' }, StringSplitOptions.RemoveEmptyEntries)
				.Select(email => email.Trim())
				.Where(email => email.Length > 0)
				.ToList();
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}

