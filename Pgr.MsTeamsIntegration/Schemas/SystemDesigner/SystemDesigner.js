define("SystemDesigner", [], function() {
	return {
		methods: {
			navigateToPgrMsTeamsSetup: function() {
				this.sandbox.publish("PushHistoryState", {
					hash: "Section/PgrMsTeamsSetupPage"
				});
			},

			getOperationRightsDecoupling: function() {
				var operationRightsDecoupling = this.callParent(arguments);
				operationRightsDecoupling.navigateToPgrMsTeamsSetup = "CanManageAdministration";
				return operationRightsDecoupling;
			}
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "IntegrationTile",
				"name": "PgrMsTeamsSetup",
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": {"bindTo": "Resources.Strings.PgrMsTeamsSetupLinkCaption"},
					"tag": "navigateToPgrMsTeamsSetup",
					"click": {"bindTo": "invokeOperation"}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
