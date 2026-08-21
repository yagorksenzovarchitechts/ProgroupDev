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

		protected override bool InternalExecute(ProcessExecutingContext context)
		{
			var attendees = ParseEmails(AttendeeEmails);
			if (attendees.Count == 0)
			{
				throw new ArgumentException(
					"At least one attendee is required: fill in \"AttendeeEmails\".");
			}

			var request = new CreateMeetingRequest
			{
				Subject = Subject,
				Start = StartDateTime,
				End = EndDateTime,
				TimeZone = TimeZone,
				AttendeeEmails = attendees
			};

			var result = new MsGraphMeetingService(context.UserConnection)
				.CreateTeamsMeetingDelegated(request);

			JoinUrl = result.JoinUrl;
			EventId = result.EventId;
			WebLink = result.WebLink;

			return true;
		}

		#endregion

		#region Methods: Private

		private static IList<string> ParseEmails(string value)
		{
			if (string.IsNullOrWhiteSpace(value))
			{
				return new List<string>();
			}
			return value
				.Split(new[] { ';', ',', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries)
				.Select(email => email.Trim())
				.Where(email => email.Length > 0)
				.Distinct(StringComparer.OrdinalIgnoreCase)
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
