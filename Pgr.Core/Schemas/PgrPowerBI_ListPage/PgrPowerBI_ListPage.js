define("PgrPowerBI_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "PgrPowerBiReport"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{ "operation": "remove", "name": "MainHeader" },
			{ "operation": "remove", "name": "TitleContainer" },
			{ "operation": "remove", "name": "PageTitle" },
			{ "operation": "remove", "name": "ActionButtonsContainer" },
			{ "operation": "remove", "name": "AddButton" },
			{ "operation": "remove", "name": "DataImportButton" },
			{ "operation": "remove", "name": "MenuItem_ImportFromExcel" },
			{ "operation": "remove", "name": "OpenLandingDesigner" },
			{ "operation": "remove", "name": "ActionButton" },
			{ "operation": "remove", "name": "MenuItem_ExportToExcel" },
			{ "operation": "remove", "name": "MainFilterContainer" },
			{ "operation": "remove", "name": "LeftFilterContainer" },
			{ "operation": "remove", "name": "LeftFilterContainerInner" },
			{ "operation": "remove", "name": "FolderTreeActions" },
			{ "operation": "remove", "name": "LookupQuickFilterByTag" },
			{ "operation": "remove", "name": "SearchFilter" },
			{ "operation": "remove", "name": "RightFilterContainer" },
			{ "operation": "remove", "name": "DataTable_Summaries" },
			{ "operation": "remove", "name": "RefreshButton" },
			{ "operation": "remove", "name": "MainButtonToggleGroup" },
			{ "operation": "remove", "name": "ContentContainer" },
			{ "operation": "remove", "name": "FolderTree" },
			{ "operation": "remove", "name": "SectionContentWrapper" },
			{ "operation": "remove", "name": "MainTabPanel" },
			{ "operation": "remove", "name": "ListTabContainer" },
			{ "operation": "remove", "name": "ListContainer" },
			{ "operation": "remove", "name": "DataTable" },
			{ "operation": "remove", "name": "DashboardsTabContainer" },
			{ "operation": "remove", "name": "DashboardsContainer" },
			{ "operation": "remove", "name": "Dashboards" },
			{
				"operation": "insert",
				"name": "SyncSlicersButton",
				"values": {
					"type": "crt.Button",
					"caption": "Download slicer and values",
					"color": "default",
					"size": "medium",
					"visible": "$IsAdmin",
					"clicked": { "request": "pgr.RunSlicerSync" }
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PowerBIReport",
				"values": {
					"type": "pgr.PowerBIReport",
					"syncCommand": "$PowerBiSyncTrigger",
					"layoutConfig": { "height": 842 },
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": ["attributes", "Items", "viewModelConfig", "attributes"],
				"values": {
					"PDS_PgrName":   { "modelConfig": { "path": "PDS.PgrName" } },
					"PDS_CreatedOn": { "modelConfig": { "path": "PDS.CreatedOn" } },
					"PDS_CreatedBy": { "modelConfig": { "path": "PDS.CreatedBy" } }
				}
			},
			{
				"operation": "merge",
				"path": ["attributes", "Items", "modelConfig"],
				"values": { "filterAttributes": [] }
			},
			{
				"operation": "merge",
				"path": ["attributes", "HeaderCaption"],
				"values": { "modelConfig": {} }
			},
			{
				"operation": "merge",
				"path": ["attributes", "ItemsSorting"],
				"values": { "modelConfig": {} }
			},
			{
				"operation": "merge",
				"path": ["attributes", "FolderTree_visible"],
				"values": { "modelConfig": {} }
			},
			{
				"operation": "merge",
				"path": ["attributes"],
				"values": {
					"IsAdmin":            { "value": false },
					"PowerBiSyncTrigger": { "value": 0 }
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": ["dataSources", "PDS", "config"],
				"values": { "entitySchemaName": "PgrPowerBI" }
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					const result = await next?.handle(request);
					try {
						const http = new sdk.HttpClientService();
						const resp = await http.get("rest/PgrPowerBiService/GetIsAdmin");
						request.$context.IsAdmin = resp.body.GetIsAdminResult === true;
					} catch (e) {
						console.error("IsAdmin check failed", e);
					}
					return result;
				}
			},
			{
				request: "pgr.RunSlicerSync",
				handler: async (request, next) => {
					request.$context.PowerBiSyncTrigger = (request.$context.PowerBiSyncTrigger || 0) + 1;
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
