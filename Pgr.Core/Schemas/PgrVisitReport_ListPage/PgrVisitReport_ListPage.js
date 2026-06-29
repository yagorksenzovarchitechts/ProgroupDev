define("PgrVisitReport_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
							"entitySchemaName": "PgrVisitReport"
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
					"rootSchemaName": "PgrVisitReport"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_PgrNumber",
							"caption": "#ResourceString(PDS_PgrNumber)#",
							"dataValueType": 1,
							"width": 155
						},
						{
							"id": "182164aa-da30-18a3-130c-41a3ba19e074",
							"code": "PDS_PgrAccount",
							"caption": "#ResourceString(PDS_PgrAccount)#",
							"dataValueType": 10
						},
						{
							"id": "b4f5b186-69ff-cbc2-9765-e5c755446099",
							"code": "PDS_PgrVisitDate",
							"caption": "#ResourceString(PDS_PgrVisitDate)#",
							"dataValueType": 8,
							"width": 147
						},
						{
							"id": "c14a9429-1ed1-1a3e-a789-da50975993c8",
							"code": "PDS_PgrVisitType",
							"caption": "#ResourceString(PDS_PgrVisitType)#",
							"dataValueType": 10
						},
						{
							"id": "2898c6e0-39d2-f33a-c3e9-fbffa8bb4995",
							"code": "PDS_PgrOwner",
							"caption": "#ResourceString(PDS_PgrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "3a258b85-ff21-e1bd-2106-3ce5bf4aec29",
							"code": "PDS_PgrPerformance",
							"caption": "#ResourceString(PDS_PgrPerformance)#",
							"dataValueType": 10
						},
						{
							"id": "47185c19-9caa-7515-0584-aa960c3cfcbc",
							"code": "PDS_PgrIsRelevantForWeeklyReport",
							"caption": "#ResourceString(PDS_PgrIsRelevantForWeeklyReport)#",
							"dataValueType": 12,
							"width": 235
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrVisitReport",
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
				"name": "QuickFilter_xcy77p3",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_xcy77p3_config_caption)#",
						"hint": "",
						"icon": "work-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Account",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_xcy77p3_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrAccount"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_xcy77p3_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_847b6lj",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_847b6lj_config_caption)#",
						"hint": "",
						"icon": "business-contact-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_847b6lj_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_847b6lj_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
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
					"PDS_PgrNumber": {
						"modelConfig": {
							"path": "PDS.PgrNumber"
						}
					},
					"PDS_PgrAccount": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrVisitDate": {
						"modelConfig": {
							"path": "PDS.PgrVisitDate"
						}
					},
					"PDS_PgrVisitType": {
						"modelConfig": {
							"path": "PDS.PgrVisitType"
						}
					},
					"PDS_PgrOwner": {
						"modelConfig": {
							"path": "PDS.PgrOwner"
						}
					},
					"PDS_PgrPerformance": {
						"modelConfig": {
							"path": "PDS.PgrPerformance"
						}
					},
					"PDS_PgrIsRelevantForWeeklyReport": {
						"modelConfig": {
							"path": "PDS.PgrIsRelevantForWeeklyReport"
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
							"name": "QuickFilter_xcy77p3_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_847b6lj_Items",
							"loadOnChange": true
						}
					]
				}
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
							"columnName": "PgrAccount"
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
					"entitySchemaName": "PgrVisitReport",
					"attributes": {
						"PgrNumber": {
							"path": "PgrNumber"
						},
						"PgrAccount": {
							"path": "PgrAccount"
						},
						"PgrVisitDate": {
							"path": "PgrVisitDate"
						},
						"PgrVisitType": {
							"path": "PgrVisitType"
						},
						"PgrOwner": {
							"path": "PgrOwner"
						},
						"PgrPerformance": {
							"path": "PgrPerformance"
						},
						"PgrIsRelevantForWeeklyReport": {
							"path": "PgrIsRelevantForWeeklyReport"
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