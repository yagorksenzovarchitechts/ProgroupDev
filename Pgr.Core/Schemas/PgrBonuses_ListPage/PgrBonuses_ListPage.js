define("PgrBonuses_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"caption": "#ResourceString(DataImportButton_caption)#",
					"visible": false
				}
			},
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
				"name": "ActionButton",
				"values": {
					"iconPosition": "left-icon",
					"icon": "import-button-icon",
					"clickMode": "default",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "MenuItem_ExportToExcel"
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
							"id": "c2c2ef3b-a3ac-619b-f909-016a007cb25e",
							"code": "PDS_PgrBonusId",
							"caption": "#ResourceString(PDS_PgrBonusId)#",
							"dataValueType": 27,
							"sticky": true,
							"width": 132
						},
						{
							"id": "b900873a-3cb3-809d-1cde-0571978dd2ef",
							"code": "PDS_PgrAccount",
							"caption": "#ResourceString(PDS_PgrAccount)#",
							"dataValueType": 10,
							"width": 233
						},
						{
							"id": "ca8917e4-9d33-ce7a-d3c9-c7175c995a8f",
							"code": "PDS_PgrAccount_PgrWepaformName",
							"caption": "#ResourceString(PDS_PgrAccount_PgrWepaformName)#",
							"dataValueType": 27
						},
						{
							"id": "628b49b1-fe49-e239-6f8b-a002f0c00e24",
							"code": "PDS_PgrBonusType",
							"caption": "#ResourceString(PDS_PgrBonusType)#",
							"dataValueType": 10,
							"width": 135
						},
						{
							"id": "aad72ffb-43d8-7526-f0c5-f32753d6cd90",
							"code": "PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_xheoyt4",
							"caption": "#ResourceString(PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_xheoyt4)#",
							"dataValueType": 33,
							"width": 191
						},
						{
							"id": "05efc6bb-4f6c-0112-1ca4-7ef275c64a52",
							"code": "PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_8hzzbdy",
							"caption": "#ResourceString(PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_8hzzbdy)#",
							"dataValueType": 31,
							"width": 203
						},
						{
							"id": "27fd41ae-4e52-ea98-076d-64f38d16cdb4",
							"code": "PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_u01j4am",
							"caption": "#ResourceString(PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_u01j4am)#",
							"dataValueType": 33,
							"width": 176
						},
						{
							"id": "4f71a261-9c60-ebd1-eb5f-17b7a4df0de8",
							"code": "PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_1qbr9c5",
							"caption": "#ResourceString(PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_1qbr9c5)#",
							"dataValueType": 31,
							"width": 237
						},
						{
							"id": "086e972c-5638-bc0d-0c80-af30243cc024",
							"code": "PDS_PgrStartDate",
							"caption": "#ResourceString(PDS_PgrStartDate)#",
							"dataValueType": 8,
							"width": 123
						},
						{
							"id": "3ea4dd9f-6820-fa27-cd1e-5bf4629f1be3",
							"code": "PDS_PgrEndDate",
							"caption": "#ResourceString(PDS_PgrEndDate)#",
							"dataValueType": 8,
							"width": 125
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
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"selectionState": "$DataTable_SelectionState",
					"_selectionOptions": {
						"attribute": "DataTable_SelectionState"
					}
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
			},
			{
				"operation": "insert",
				"name": "QuickFilter_f16ozfw",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_f16ozfw_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "PgrBonusType",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_f16ozfw_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrBonusType"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_f16ozfw_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_pdmxziz",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_pdmxziz_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": null,
						"showTime": false,
						"showFiscalPeriods": false
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_pdmxziz_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrStartDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_pdmxziz_Value"
					},
					"filterType": "date-range"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_3ezj00u",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_3ezj00u_config_caption)#",
						"hint": "",
						"icon": "segments-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_3ezj00u_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_3ezj00u_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_ohk2tnn",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_ohk2tnn_config_caption)#",
						"hint": "",
						"icon": "consultation-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_ohk2tnn_Items",
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
						"from": "QuickFilter_ohk2tnn_Value"
					},
					"filterType": "lookup",
					"visible": true
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
					"PDS_PgrBonusId": {
						"modelConfig": {
							"path": "PDS.PgrBonusId"
						}
					},
					"PDS_PgrAccount": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrAccount_PgrWepaformName": {
						"modelConfig": {
							"path": "PDS.PgrAccount_PgrWepaformName"
						}
					},
					"PDS_PgrBonusType": {
						"modelConfig": {
							"path": "PDS.PgrBonusType"
						}
					},
					"PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_xheoyt4": {
						"modelConfig": {
							"path": "PDS.PgrBonusThresholdPgrBonus_PgrTierThreshold_xheoyt4"
						}
					},
					"PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_8hzzbdy": {
						"modelConfig": {
							"path": "PDS.PgrBonusThresholdPgrBonus_PgrBonusPercentage_8hzzbdy"
						}
					},
					"PDS_PgrBonusThresholdPgrBonus_PgrTierThreshold_u01j4am": {
						"modelConfig": {
							"path": "PDS.PgrBonusThresholdPgrBonus_PgrTierThreshold_u01j4am"
						}
					},
					"PDS_PgrBonusThresholdPgrBonus_PgrBonusPercentage_1qbr9c5": {
						"modelConfig": {
							"path": "PDS.PgrBonusThresholdPgrBonus_PgrBonusPercentage_1qbr9c5"
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
							"name": "QuickFilter_ohk2tnn_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_3ezj00u_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_pdmxziz_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_f16ozfw_Items",
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
					"entitySchemaName": "PgrBonus",
					"attributes": {
						"PgrBonusId": {
							"path": "PgrBonusId"
						},
						"PgrAccount": {
							"path": "PgrAccount"
						},
						"PgrAccount_PgrWepaformName": {
							"type": "ForwardReference",
							"path": "PgrAccount.PgrWepaformName"
						},
						"PgrBonusType": {
							"path": "PgrBonusType"
						},
						"PgrBonusThresholdPgrBonus_PgrTierThreshold_xheoyt4": {
							"type": "Aggregation",
							"path": "[PgrBonusThreshold:PgrBonus].PgrTierThreshold",
							"aggregationConfig": {
								"aggregationFunction": "Min"
							}
						},
						"PgrBonusThresholdPgrBonus_PgrBonusPercentage_8hzzbdy": {
							"type": "Aggregation",
							"path": "[PgrBonusThreshold:PgrBonus].PgrBonusPercentage",
							"aggregationConfig": {
								"aggregationFunction": "Min"
							}
						},
						"PgrBonusThresholdPgrBonus_PgrTierThreshold_u01j4am": {
							"type": "Aggregation",
							"path": "[PgrBonusThreshold:PgrBonus].PgrTierThreshold",
							"aggregationConfig": {
								"aggregationFunction": "Max"
							}
						},
						"PgrBonusThresholdPgrBonus_PgrBonusPercentage_1qbr9c5": {
							"type": "Aggregation",
							"path": "[PgrBonusThreshold:PgrBonus].PgrBonusPercentage",
							"aggregationConfig": {
								"aggregationFunction": "Max"
							}
						},
						"PgrStartDate": {
							"path": "PgrStartDate"
						},
						"PgrEndDate": {
							"path": "PgrEndDate"
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