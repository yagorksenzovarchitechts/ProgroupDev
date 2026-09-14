define("PgrAccountMetrics_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrAccountMetricValue"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrAccountMetricValue"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "72c9acf1-f13a-f19a-500e-d23aad3164ec",
							"code": "PDS_PgrAccountId",
							"caption": "#ResourceString(PDS_PgrAccountId)#",
							"dataValueType": 10
						},
						{
							"id": "2c4e89cb-b126-4831-b9ad-f7352f79aee6",
							"code": "PDS_PgrMetricTypeId",
							"caption": "#ResourceString(PDS_PgrMetricTypeId)#",
							"dataValueType": 10,
							"width": 228
						},
						{
							"id": "c83d2906-a634-5667-d75b-ebeb3268ebde",
							"code": "PDS_PgrPeriodUnitId",
							"caption": "#ResourceString(PDS_PgrPeriodUnitId)#",
							"dataValueType": 10
						},
						{
							"id": "b95b7ac9-12aa-7d1d-2e62-cd36f4cd3dd7",
							"code": "PDS_PgrDate",
							"caption": "#ResourceString(PDS_PgrDate)#",
							"dataValueType": 8
						},
						{
							"id": "d6bd78ba-1690-94c4-c2e4-d8c7cc09be24",
							"code": "PDS_PgrValue",
							"caption": "#ResourceString(PDS_PgrValue)#",
							"dataValueType": 32
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrAccountMetricValue",
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
					"PDS_PgrAccountId": {
						"modelConfig": {
							"path": "PDS.PgrAccountId"
						}
					},
					"PDS_PgrMetricTypeId": {
						"modelConfig": {
							"path": "PDS.PgrMetricTypeId"
						}
					},
					"PDS_PgrPeriodUnitId": {
						"modelConfig": {
							"path": "PDS.PgrPeriodUnitId"
						}
					},
					"PDS_PgrDate": {
						"modelConfig": {
							"path": "PDS.PgrDate"
						}
					},
					"PDS_PgrValue": {
						"modelConfig": {
							"path": "PDS.PgrValue"
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
					"entitySchemaName": "PgrAccountMetricValue",
					"attributes": {
						"PgrAccountId": {
							"path": "PgrAccountId"
						},
						"PgrMetricTypeId": {
							"path": "PgrMetricTypeId"
						},
						"PgrPeriodUnitId": {
							"path": "PgrPeriodUnitId"
						},
						"PgrDate": {
							"path": "PgrDate"
						},
						"PgrValue": {
							"path": "PgrValue"
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