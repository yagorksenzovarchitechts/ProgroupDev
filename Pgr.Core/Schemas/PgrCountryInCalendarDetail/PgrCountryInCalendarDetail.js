define("PgrCountryInCalendarDetail", ["PgrCountryInCalendarDetailResources", "ConfigurationEnums"],
	function(resources, enums) {
		return {
			entitySchemaName: "Country",
			details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
			diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
			methods: {

				/**
				 * Countries are linked to the calendar, not created here, so the add button opens
				 * the country lookup instead of a new record page.
				 * @inheritdoc Terrasoft.BaseGridDetailV2#addRecord
				 * @overridden
				 */
				addRecord: function() {
					var cardState = this.sandbox.publish("GetCardState", null, [this.sandbox.id]);
					var isNew = (cardState.state === enums.CardStateV2.ADD ||
						cardState.state === enums.CardStateV2.COPY);
					if (isNew) {
						this.set("CardState", enums.CardStateV2.ADD);
						this.sandbox.publish("SaveRecord", {
							isSilent: true,
							messageTags: [this.sandbox.id]
						}, [this.sandbox.id]);
					} else {
						this.addDetailRecord();
					}
				},

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#onCardSaved
				 * @overridden
				 */
				onCardSaved: function() {
					this.addDetailRecord();
				},

				/**
				 * Opens the country lookup, hiding the countries already linked to this calendar.
				 * @protected
				 */
				addDetailRecord: function() {
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: this.entitySchemaName
					});
					esq.addColumn("Id");
					esq.filters.add("calendarFilter", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.EQUAL, "PgrCalendar", this.get("MasterRecordId")));
					esq.getEntityCollection(function(result) {
						var linkedIds = [];
						if (result.success) {
							result.collection.each(function(item) {
								linkedIds.push(item.get("Id"));
							}, this);
						}
						var filterGroup = this.Terrasoft.createFilterGroup();
						if (linkedIds.length > 0) {
							var excludeLinkedFilter = this.Terrasoft.createColumnInFilterWithParameters("Id",
								linkedIds);
							excludeLinkedFilter.comparisonType = this.Terrasoft.ComparisonType.NOT_EQUAL;
							excludeLinkedFilter.Name = "excludeLinkedFilter";
							filterGroup.add("excludeLinkedFilter", excludeLinkedFilter);
						}
						this.openLookup({
							entitySchemaName: this.entitySchemaName,
							multiSelect: true,
							filters: filterGroup
						}, this.onCountriesSelected, this);
					}, this);
				},

				/**
				 * Links the selected countries, asking first about the ones held by another calendar.
				 * @protected
				 * @param {Object} args Lookup selection result.
				 */
				onCountriesSelected: function(args) {
					var selectedIds = args.selectedRows.getKeys();
					if (this.Ext.isEmpty(selectedIds)) {
						return;
					}
					var esq = this.getOtherCalendarCountriesQuery(selectedIds);
					esq.getEntityCollection(function(result) {
						var heldCountries = [];
						if (result.success) {
							result.collection.each(function(item) {
								heldCountries.push(this.Ext.String.format("{0} ({1})",
									item.get("Name"), item.get("CalendarName")));
							}, this);
						}
						if (heldCountries.length > 0) {
							this.confirmCountriesMove(selectedIds, heldCountries);
						} else {
							this.updateCountriesCalendar(selectedIds, this.get("MasterRecordId"));
						}
					}, this);
				},

				/**
				 * Returns query for the selected countries that already belong to another calendar.
				 * @protected
				 * @param {Array} selectedIds Identifiers of the selected countries.
				 * @return {Terrasoft.EntitySchemaQuery}
				 */
				getOtherCalendarCountriesQuery: function(selectedIds) {
					var esq = this.Ext.create("Terrasoft.EntitySchemaQuery", {
						rootSchemaName: this.entitySchemaName
					});
					esq.addColumn("Name");
					esq.addColumn("PgrCalendar.Name", "CalendarName");
					esq.filters.add("selectedFilter",
						this.Terrasoft.createColumnInFilterWithParameters("Id", selectedIds));
					esq.filters.add("hasCalendarFilter",
						this.Terrasoft.createColumnIsNotNullFilter("PgrCalendar"));
					return esq;
				},

				/**
				 * Asks whether the countries held by another calendar should be moved to this one.
				 * @protected
				 * @param {Array} selectedIds Identifiers of the selected countries.
				 * @param {Array} heldCountries Captions of the countries held by another calendar.
				 */
				confirmCountriesMove: function(selectedIds, heldCountries) {
					var message = this.Ext.String.format(
						resources.localizableStrings.MoveCountriesConfirmationMessage,
						heldCountries.join(", "));
					this.showConfirmationDialog(message, function(returnCode) {
						if (returnCode === this.Terrasoft.MessageBoxButtons.YES.returnCode) {
							this.updateCountriesCalendar(selectedIds, this.get("MasterRecordId"));
						}
					}, [
						this.Terrasoft.MessageBoxButtons.NO.returnCode,
						this.Terrasoft.MessageBoxButtons.YES.returnCode
					]);
				},

				/**
				 * Removing a row unlinks the country, the country itself stays in the lookup.
				 * @inheritdoc Terrasoft.GridUtilitiesV2#deleteRecords
				 * @overridden
				 */
				deleteRecords: function() {
					var selectedIds = this.getSelectedItems();
					if (this.Ext.isEmpty(selectedIds)) {
						return;
					}
					this.updateCountriesCalendar(selectedIds, null);
				},

				/**
				 * Sets the calendar of the given countries.
				 * @protected
				 * @param {Array} selectedIds Identifiers of the countries to update.
				 * @param {String} calendarId Calendar identifier, null unlinks the countries.
				 */
				updateCountriesCalendar: function(selectedIds, calendarId) {
					var update = this.Ext.create("Terrasoft.UpdateQuery", {
						rootSchemaName: this.entitySchemaName
					});
					update.filters.add("selectedFilter",
						this.Terrasoft.createColumnInFilterWithParameters("Id", selectedIds));
					update.setParameterValue("PgrCalendar", calendarId, this.Terrasoft.DataValueType.GUID);
					this.showBodyMask();
					update.execute(this.onCountriesCalendarUpdated, this);
				},

				/**
				 * @protected
				 */
				onCountriesCalendarUpdated: function() {
					this.hideBodyMask();
					this.updateDetail({reloadAll: true});
				},

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#getDeleteRecordMenuItem
				 * @overridden
				 */
				getDeleteRecordMenuItem: function() {
					return this.getButtonMenuItem({
						Caption: {bindTo: "Resources.Strings.RemoveFromCalendarMenuCaption"},
						Click: {bindTo: "deleteRecords"},
						Enabled: {bindTo: "isAnySelected"},
						Visible: {bindTo: "IsEnabled"}
					});
				},

				/**
				 * @inheritdoc Terrasoft.BaseGridDetailV2#getCopyRecordMenuItem
				 * @overridden
				 */
				getCopyRecordMenuItem: this.Terrasoft.emptyFn,

				/**
				 * @inheritdoc Terrasoft.GridUtilitiesV2#addDetailWizardMenuItems
				 * @overridden
				 */
				addDetailWizardMenuItems: this.Terrasoft.emptyFn
			}
		};
	});
