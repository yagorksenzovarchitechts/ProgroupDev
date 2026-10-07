using System;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Factories;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration
{
    public class PgrAppEventListener : AppEventListenerBase
    {
        private const string DedupLogSchemaName = "PgrContactDedupLog";

        public override void OnAppStart(AppEventContext context)
        {
            base.OnAppStart(context);
            UserConnection userConnection = null;
            try
            {
                var appConnection = context.Application["AppConnection"] as AppConnection;
                userConnection = appConnection?.SystemUserConnection;
                ClassFactory.ReBind<ISsoContactUpdater, PgrSsoContactUpdater>();
            }
            catch (Exception ex)
            {
                WriteLog(userConnection, "RebindFailed", ex.ToString());
            }
        }

        private void WriteLog(UserConnection userConnection, string stage, string error = null)
        {
            if (userConnection == null)
            {
                return;
            }

            try
            {
                new Insert(userConnection)
                    .Into(DedupLogSchemaName)
                    .Set("Id", Column.Parameter(Guid.NewGuid()))
                    .Set("PgrStage", Column.Parameter(stage))
                    .Set("PgrCandidate", Column.Parameter(string.Empty))
                    .Set("PgrIsManuallyCreated", Column.Parameter(false))
                    .Set("PgrError", Column.Parameter(error ?? string.Empty))
                    .Set("CreatedOn", Column.Parameter(DateTime.UtcNow))
                    .Execute();
            }
            catch (Exception)
            {
                // ignored
            }
        }
    }
}