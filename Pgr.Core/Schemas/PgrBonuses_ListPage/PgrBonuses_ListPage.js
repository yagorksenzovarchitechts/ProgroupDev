define("PgrBonuses_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrBonus"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrBonus"
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
							"dataValueType": 1,
							"width": 146
						},
						{
							"id": "b7e4cb62-ced7-16d7-a263-4c1d1c365483",
							"code": "PDS_PgrBaseValueType",
							"caption": "#ResourceString(PDS_PgrBaseValueType)#",
							"dataValueType": 27,
							"width": 151
						},
						{
							"id": "9f1a9408-fab9-2343-7345-585e8628c1ef",
							"code": "PDS_PgrBonusType",
							"caption": "#ResourceString(PDS_PgrBonusType)#",
							"dataValueType": 27,
							"width": 154
						},
						{
							"id": "b900873a-3cb3-809d-1cde-0571978dd2ef",
							"code": "PDS_PgrAccount",
							"caption": "#ResourceString(PDS_PgrAccount)#",
							"dataValueType": 10,
							"width": 127
						},
						{
							"id": "8a889416-499f-c6ae-cfc4-5714a458ef92",
							"code": "PDS_PgrStartDate",
							"caption": "#ResourceString(PDS_PgrStartDate)#",
							"dataValueType": 8
						},
						{
							"id": "297fd202-142a-22ca-d348-852e50450aef",
							"code": "PDS_PgrEndDate",
							"caption": "#ResourceString(PDS_PgrEndDate)#",
							"dataValueType": 8
						},
						{
							"id": "6dce1c21-001f-4697-d0dd-5de74627d7f5",
							"code": "PDS_PgrBonusId",
							"caption": "#ResourceString(PDS_PgrBonusId)#",
							"dataValueType": 4,
							"width": 128
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrBonus",
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
					"PDS_PgrBaseValueType": {
						"modelConfig": {
							"path": "PDS.PgrBaseValueType"
						}
					},
					"PDS_PgrBonusType": {
						"modelConfig": {
							"path": "PDS.PgrBonusType"
						}
					},
					"PDS_PgrAccount": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrStartDate": {
						"modelConfig": {
							"path": "PDS.PgrStartDate"
						}
					},
					"PDS_PgrEndDate": {
						"modelConfig": {
							"path": "PDS.PgrEndDate"
						}
					},
					"PDS_PgrBonusId": {
						"modelConfig": {
							"path": "PDS.PgrBonusId"
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
					"entitySchemaName": "PgrBonus",
					"attributes": {
						"PgrName": {
							"path": "PgrName"
						},
						"PgrBaseValueType": {
							"path": "PgrBaseValueType"
						},
						"PgrBonusType": {
							"path": "PgrBonusType"
						},
						"PgrAccount": {
							"path": "PgrAccount"
						},
						"PgrStartDate": {
							"path": "PgrStartDate"
						},
						"PgrEndDate": {
							"path": "PgrEndDate"
						},
						"PgrBonusId": {
							"path": "PgrBonusId"
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