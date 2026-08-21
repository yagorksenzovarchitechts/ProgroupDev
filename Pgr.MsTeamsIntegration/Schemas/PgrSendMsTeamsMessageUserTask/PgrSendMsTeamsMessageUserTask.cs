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

	#region Class: PgrSendMsTeamsMessageUserTask

	/// <exclude/>
	public partial class PgrSendMsTeamsMessageUserTask
	{

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context)
		{
			var recipientEmail = MsTeamsContactResolver.GetEmail(context.UserConnection, ContactId,
				"The contact has no email address, so the Teams recipient cannot be resolved.");

			var request = new SendChatMessageRequest
			{
				RecipientEmail = recipientEmail,
				Message = Message,
				IsHtml = IsHtml
			};

			var result = new MsGraphChatService(context.UserConnection)
				.SendChatMessageDelegated(request);

			ChatId = result.ChatId;
			MessageId = result.MessageId;
			WebUrl = result.WebUrl;

			return true;
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
