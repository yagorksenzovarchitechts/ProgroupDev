namespace Terrasoft.Configuration
{
    using System;
    using System.Linq;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;

    /// <summary>
    /// Maintains Account.PgrDisplayName = "Wepaform name (Account name)", or just the account name when
    /// there is no Wepaform name (or it equals the name). PgrDisplayName is the primary display column
    /// of Account, so every account lookup and grid shows it. Account.Name itself is never changed.
    /// </summary>
    [EntityEventListener(SchemaName = "Account")]
    public class PgrAccountDisplayNameEventListener : BaseEntityEventListener
    {
        private const string NameColumn = "Name";
        private const string WepaformColumn = "PgrWepaformName";
        private const string DisplayColumn = "PgrDisplayName";

        private static readonly global::Common.Logging.ILog Log = global::Common.Logging.LogManager.GetLogger("Error");

        public override void OnInserting(object sender, EntityBeforeEventArgs e)
        {
            base.OnInserting(sender, e);
            Calculate((Entity)sender, true);
        }

        public override void OnUpdating(object sender, EntityBeforeEventArgs e)
        {
            base.OnUpdating(sender, e);
            Calculate((Entity)sender, false);
        }

        private static void Calculate(Entity entity, bool isInsert)
        {
            try {
                var changed = entity.GetChangedColumnValues().Select(v => v.Name).ToList();
                if (!isInsert && !changed.Contains(NameColumn) && !changed.Contains(WepaformColumn)) {
                    return;
                }
                string name = changed.Contains(NameColumn) || isInsert
                    ? entity.GetTypedColumnValue<string>(NameColumn)
                    : ReadStored(entity, NameColumn);
                string wepaform = changed.Contains(WepaformColumn) || isInsert
                    ? entity.GetTypedColumnValue<string>(WepaformColumn)
                    : ReadStored(entity, WepaformColumn);
                entity.SetColumnValue(DisplayColumn, Build(name, wepaform));
            } catch (Exception ex) {
                Log.Error("Error while calculating Account.PgrDisplayName.", ex);
            }
        }

        public static string Build(string name, string wepaformName)
        {
            name = (name ?? string.Empty).Trim();
            wepaformName = (wepaformName ?? string.Empty).Trim();
            if (wepaformName.Length == 0 || string.Equals(wepaformName, name, StringComparison.OrdinalIgnoreCase)) {
                return name;
            }
            return $"{wepaformName} ({name})";
        }

        private static string ReadStored(Entity entity, string column)
        {
            var select = (Select)new Select(entity.UserConnection)
                .Column(column)
                .From("Account")
                .Where("Id").IsEqual(Column.Parameter(entity.PrimaryColumnValue));
            return select.ExecuteScalar<string>();
        }
    }
}
