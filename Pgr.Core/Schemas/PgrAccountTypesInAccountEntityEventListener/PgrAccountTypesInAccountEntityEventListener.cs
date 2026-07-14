using System;
using System.Linq;
using Common.Logging;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;

namespace Pgr.Core.EntryPoints.EntityEventListeners {

	[EntityEventListener(SchemaName = "PgrAccountTypesInAccount")]
	public class PgrAccountTypesInAccountEntityEventListener : BaseEntityEventListener {

		private static readonly ILog _log = LogManager.GetLogger("PgrAccountTypesInAccountEntityEventListener");

		public override void OnInserted(object sender, EntityAfterEventArgs e) {
			base.OnInserted(sender, e);
			SyncAccountTypesText((Entity)sender);
		}

		public override void OnDeleted(object sender, EntityAfterEventArgs e) {
			base.OnDeleted(sender, e);
			SyncAccountTypesText((Entity)sender);
		}

		private void SyncAccountTypesText(Entity entity) {
			UserConnection userConnection = entity.UserConnection;
			Guid accountId = entity.GetTypedColumnValue<Guid>("PgrAccountId");
			if (accountId == Guid.Empty) {
				return;
			}
			try {
				string text = BuildAccountTypesText(userConnection, accountId);
				new Update(userConnection, "Account")
					.Set("PgrAccountTypesText", Column.Parameter(text))
					.Where("Id").IsEqual(Column.Parameter(accountId))
					.Execute();
			} catch (Exception ex) {
				_log.Error($"Failed to sync PgrAccountTypesText for Account {accountId}", ex);
			}
		}

		private string BuildAccountTypesText(UserConnection userConnection, Guid accountId) {
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "PgrAccountTypesInAccount");
			var typeNameColumn = esq.AddColumn("PgrAccountType.Name");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "PgrAccount.Id", accountId));
			var collection = esq.GetEntityCollection(userConnection);
			var names = collection
				.Select(item => item.GetTypedColumnValue<string>(typeNameColumn.Name))
				.Where(name => !string.IsNullOrEmpty(name))
				.OrderBy(name => name)
				.ToList();
			return string.Join(", ", names);
		}

	}
}
