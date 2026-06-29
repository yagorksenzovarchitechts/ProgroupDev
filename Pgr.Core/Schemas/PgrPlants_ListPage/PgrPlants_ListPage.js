define("PgrPlants_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
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
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrPlant"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrPlant"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_PgrName",
							"caption": "#ResourceString(PDS_PgrName)#",
							"dataValueType": 1
						},
						{
							"id": "6f19c923-6286-1024-f837-80d20ecc8396",
							"code": "PDS_PgrOrderNumber",
							"caption": "#ResourceString(PDS_PgrOrderNumber)#",
							"dataValueType": 4
						},
						{
							"id": "c6401ed5-7ca8-1a78-6a1b-c9440aa283a3",
							"code": "PDS_PgrIsActive",
							"caption": "#ResourceString(PDS_PgrIsActive)#",
							"dataValueType": 12,
							"width": 143
						},
						{
							"id": "b6b069c8-1717-ce0b-5754-4c82b3500596",
							"code": "PDS_PgrCountry",
							"caption": "#ResourceString(PDS_PgrCountry)#",
							"dataValueType": 10
						},
						{
							"id": "f3d2373f-9500-446a-4602-65eb40e30aa0",
							"code": "PDS_PgrCity",
							"caption": "#ResourceString(PDS_PgrCity)#",
							"dataValueType": 28
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrPlant",
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
					"PDS_PgrName": {
						"modelConfig": {
							"path": "PDS.PgrName"
						}
					},
					"PDS_PgrOrderNumber": {
						"modelConfig": {
							"path": "PDS.PgrOrderNumber"
						}
					},
					"PDS_PgrIsActive": {
						"modelConfig": {
							"path": "PDS.PgrIsActive"
						}
					},
					"PDS_PgrCountry": {
						"modelConfig": {
							"path": "PDS.PgrCountry"
						}
					},
					"PDS_PgrCity": {
						"modelConfig": {
							"path": "PDS.PgrCity"
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
					"entitySchemaName": "PgrPlant",
					"attributes": {
						"PgrName": {
							"path": "PgrName"
						},
						"PgrOrderNumber": {
							"path": "PgrOrderNumber"
						},
						"PgrIsActive": {
							"path": "PgrIsActive"
						},
						"PgrCountry": {
							"path": "PgrCountry"
						},
						"PgrCity": {
							"path": "PgrCity"
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