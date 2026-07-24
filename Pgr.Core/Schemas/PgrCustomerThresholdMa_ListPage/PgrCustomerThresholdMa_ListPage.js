define("PgrCustomerThresholdMa_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": false,
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
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrCustomerThresholdMatrix"
						}
					}
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
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": null,
						"recordsFilter": null
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrCustomerThresholdMatrix"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "46d232b0-a18d-4e50-829d-2b3657e59cf9",
							"code": "PDS_PgrCategory",
							"caption": "#ResourceString(PDS_PgrCategory)#",
							"dataValueType": 10
						},
						{
							"id": "eedf5581-8253-0f56-7c56-71e6fc17a6f4",
							"code": "PDS_PgrRegion",
							"caption": "#ResourceString(PDS_PgrRegion)#",
							"dataValueType": 10,
							"width": 254
						},
						{
							"id": "4c746679-8d5a-bc32-8d2e-578dad4a74c4",
							"code": "PDS_PgrCustomer",
							"caption": "#ResourceString(PDS_PgrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "22c8d6b7-7411-4753-0d2d-670b570991a4",
							"code": "PDS_PgrAbsolute",
							"caption": "#ResourceString(PDS_PgrAbsolute)#",
							"dataValueType": 4
						},
						{
							"id": "502dd5a6-b7c3-6ade-a24e-1e42c7f38617",
							"code": "PDS_PgrPercentage",
							"caption": "#ResourceString(PDS_PgrPercentage)#",
							"dataValueType": 32,
							"width": 311
						},
						{
							"id": "6a24032f-b872-880f-ec9f-0b472dce177f",
							"code": "PDS_PgrNote",
							"caption": "#ResourceString(PDS_PgrNote)#",
							"dataValueType": 29
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrCustomerThresholdMatrix",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_PgrCategory": {
						"modelConfig": {
							"path": "PDS.PgrCategory"
						}
					},
					"PDS_PgrRegion": {
						"modelConfig": {
							"path": "PDS.PgrRegion"
						}
					},
					"PDS_PgrCustomer": {
						"modelConfig": {
							"path": "PDS.PgrCustomer"
						}
					},
					"PDS_PgrAbsolute": {
						"modelConfig": {
							"path": "PDS.PgrAbsolute"
						}
					},
					"PDS_PgrPercentage": {
						"modelConfig": {
							"path": "PDS.PgrPercentage"
						}
					},
					"PDS_PgrNote": {
						"modelConfig": {
							"path": "PDS.PgrNote"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "PgrCustomerThresholdMatrix",
					"attributes": {
						"PgrCategory": {
							"path": "PgrCategory"
						},
						"PgrRegion": {
							"path": "PgrRegion"
						},
						"PgrCustomer": {
							"path": "PgrCustomer"
						},
						"PgrAbsolute": {
							"path": "PgrAbsolute"
						},
						"PgrPercentage": {
							"path": "PgrPercentage"
						},
						"PgrNote": {
							"path": "PgrNote"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});