namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Data;
	using System.Globalization;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: PgrExecuteSQL

	public partial class PgrExecuteSQL
	{

		private static readonly global::Common.Logging.ILog _log =
			global::Common.Logging.LogManager.GetLogger("PgrExecuteSQL");

		#region Methods: Private

		private static bool IsResultSetQuery(string sql) {
			switch (GetLeadingKeyword(sql)) {
				case "select":
				case "with":
				case "show":
				case "explain":
				case "values":
				case "table":
					return true;
				default:
					return false;
			}
		}

		private static string GetLeadingKeyword(string sql) {
			int i = 0;
			while (i < sql.Length) {
				char c = sql[i];
				if (char.IsWhiteSpace(c) || c == '(') {
					i++;
					continue;
				}
				if (c == '-' && i + 1 < sql.Length && sql[i + 1] == '-') {
					int newLine = sql.IndexOf('\n', i);
					if (newLine < 0) {
						return string.Empty;
					}
					i = newLine + 1;
					continue;
				}
				if (c == '/' && i + 1 < sql.Length && sql[i + 1] == '*') {
					int end = sql.IndexOf("*/", i + 2, StringComparison.Ordinal);
					if (end < 0) {
						return string.Empty;
					}
					i = end + 2;
					continue;
				}
				break;
			}
			int start = i;
			while (i < sql.Length && char.IsLetter(sql[i])) {
				i++;
			}
			return sql.Substring(start, i - start).ToLowerInvariant();
		}

		private static string BuildResponse(bool success, int rowsAffected, object data, string errorMessage) {
			var response = new {
				success = success,
				rowsAffected = rowsAffected,
				data = data ?? (object)new object[0],
				errorMessage = errorMessage ?? string.Empty
			};
			return JsonConvert.SerializeObject(response);
		}

		private void WriteErrorLog(string sql, string errorMessage) {
			try {
				EntitySchema schema = UserConnection.EntitySchemaManager.GetInstanceByName("PgrExecuteSQLErrorLog");
				Entity record = schema.CreateEntity(UserConnection);
				record.UseAdminRights = false;
				record.SetDefColumnValues();
				string name = sql ?? string.Empty; 
				record.SetColumnValue("Name", name);
				record.SetColumnValue("PgrError", errorMessage);
				record.Save(false);
			} catch (Exception ex) {
				_log.Error("PgrExecuteSQL: failed to persist a PgrExecuteSQLErrorLog record.", ex);
			}
		}

		#endregion

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			string sql = InputSQL;
			_log.Info($"PgrExecuteSQL: executing query: {sql}");
			if (string.IsNullOrWhiteSpace(sql)) {
				const string emptyMessage = "InputSQL parameter is empty.";
				_log.Warn($"PgrExecuteSQL: {emptyMessage}");
				WriteErrorLog(sql, emptyMessage);
				ResponseJson = BuildResponse(false, 0, null, emptyMessage);
				return true;
			}
			try {
				var query = new CustomQuery(UserConnection, sql);
				if (IsResultSetQuery(sql)) {
					var dataTable = new DataTable();
					using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
						using (IDataReader reader = query.ExecuteReader(dbExecutor)) {
							dataTable.Load(reader);
						}
					}
					ResponseJson = BuildResponse(true, dataTable.Rows.Count, dataTable, string.Empty);
					_log.Info($"PgrExecuteSQL: query succeeded, returned {dataTable.Rows.Count} row(s).");
				} else {
					int rowsAffected = query.Execute();
					ResponseJson = BuildResponse(true, rowsAffected, null, string.Empty);
					_log.Info($"PgrExecuteSQL: query succeeded, {rowsAffected} row(s) affected.");
				}
			} catch (Exception ex) {
				_log.Error($"PgrExecuteSQL: query failed: {sql}", ex);
				WriteErrorLog(sql, ex.Message);
				ResponseJson = BuildResponse(false, 0, null, ex.Message);
			}
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
