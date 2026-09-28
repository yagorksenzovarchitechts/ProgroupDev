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
			},
			{
				"operation": "insert",
				"name": "QuickFilter_31pcr0h",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_31pcr0h_config_caption)#",
						"hint": "",
						"icon": "work-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserAccount#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Account",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_31pcr0h_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_31pcr0h_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_azqsofi",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_azqsofi_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "PgrMetricType",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_azqsofi_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrMetricTypeId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_azqsofi_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_x9puw7n",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_x9puw7n_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": "[#currentWeek#]",
						"showTime": false,
						"showFiscalPeriods": false
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_x9puw7n_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumnStart": "PgrDate",
													"filterColumnEnd": "PgrDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_x9puw7n_Value"
					},
					"filterType": "date-range"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 5
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
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "Filters_Filter",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_31pcr0h_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_azqsofi_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_x9puw7n_Items",
							"loadOnChange": true
						}
					]
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