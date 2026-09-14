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

		// AccountType lookup records whose presence/absence drives an Account boolean flag,
		// so other processes/filters can use a plain boolean instead of joining the M:M link table.
		private static readonly Guid CustomerAccountTypeId = new Guid("03a75490-53e6-df11-971b-001d60e938c6");
		private static readonly Guid CompetitorAccountTypeId = new Guid("d44b9da2-53e6-df11-971b-001d60e938c6");

		public override void OnInserted(object sender, EntityAfterEventArgs e) {
			base.OnInserted(sender, e);
			var entity = (Entity)sender;
			SyncAccountTypesText(entity);
			SyncAccountTypeFlags(entity);
		}

		public override void OnDeleted(object sender, EntityAfterEventArgs e) {
			base.OnDeleted(sender, e);
			var entity = (Entity)sender;
			SyncAccountTypesText(entity);
			SyncAccountTypeFlags(entity);
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

		/// <summary>
		///     Keeps Account.PgrIsCustomer / Account.PgrIsCompetitor equal to "does a
		///     PgrAccountTypesInAccount row of that type still exist for this Account".
		///     Recomputed from the current link rows (not just the added/removed one) so
		///     the flag stays correct even if a duplicate link of the same type ever exists.
		/// </summary>
		private void SyncAccountTypeFlags(Entity entity) {
			UserConnection userConnection = entity.UserConnection;
			Guid accountId = entity.GetTypedColumnValue<Guid>("PgrAccountId");
			Guid accountTypeId = entity.GetTypedColumnValue<Guid>("PgrAccountTypeId");
			if (accountId == Guid.Empty || accountTypeId == Guid.Empty) {
				return;
			}
			try {
				if (accountTypeId == CustomerAccountTypeId) {
					SetAccountFlag(userConnection, accountId, "PgrIsCustomer",
						HasAccountType(userConnection, accountId, CustomerAccountTypeId));
				} else if (accountTypeId == CompetitorAccountTypeId) {
					SetAccountFlag(userConnection, accountId, "PgrIsCompetitor",
						HasAccountType(userConnection, accountId, CompetitorAccountTypeId));
				}
			} catch (Exception ex) {
				_log.Error($"Failed to sync Account type flags for Account {accountId}", ex);
			}
		}

		private bool HasAccountType(UserConnection userConnection, Guid accountId, Guid accountTypeId) {
			var select = (Select)new Select(userConnection)
				.Column(Func.Count(Column.Const(1)))
				.From("PgrAccountTypesInAccount")
				.Where("PgrAccountId").IsEqual(Column.Parameter(accountId))
				.And("PgrAccountTypeId").IsEqual(Column.Parameter(accountTypeId));
			return select.ExecuteScalar<int>() > 0;
		}

		private void SetAccountFlag(UserConnection userConnection, Guid accountId, string columnName, bool value) {
			new Update(userConnection, "Account")
				.Set(columnName, Column.Parameter(value))
				.Where("Id").IsEqual(Column.Parameter(accountId))
				.Execute();
		}

	}
}
