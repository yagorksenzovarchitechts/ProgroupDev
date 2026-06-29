define("Opportunities_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilterByDate",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilterByOwner",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "OpportunityTag",
						"defaultValue": null,
						"recordsFilter": null
					}
				}
			},
			{
				"operation": "merge",
				"name": "TerritoryQuickFilter",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Title",
							"caption": "#ResourceString(PDS_Title)#",
							"dataValueType": 1,
							"sticky": true,
							"width": 369
						},
						{
							"id": "e1eec1f8-a3d8-d7ba-b8f8-6aa4877a606b",
							"code": "PDS_Stage",
							"caption": "#ResourceString(PDS_Stage)#",
							"dataValueType": 10,
							"width": 266
						},
						{
							"id": "7e26c922-adf9-4ce2-6575-86b50e7d3ce5",
							"code": "PDS_Contact",
							"caption": "#ResourceString(PDS_Contact)#",
							"dataValueType": 10,
							"width": 225
						},
						{
							"id": "757f1634-6946-5b3f-395c-069f1d213795",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"width": 222
						},
						{
							"id": "3d72a99e-249b-c0ba-9832-ced4c4a65673",
							"code": "PDS_DueDate",
							"caption": "#ResourceString(PDS_DueDate)#",
							"dataValueType": 8,
							"width": 178
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"PDS_Type",
					"PDS_Amount",
					"PDS_Territory",
					"PDS_Territory_InitialListActions"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "DueDate"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"properties": [
					"Type",
					"Amount",
					"Territory"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});