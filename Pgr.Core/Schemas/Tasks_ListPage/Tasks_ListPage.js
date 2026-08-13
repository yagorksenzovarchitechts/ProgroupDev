define("Tasks_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"caption": "#ResourceString(MenuItem_ImportFromExcel_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_Employee",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_CanceledTasks",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_CanceledTasks_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"5cee6311-c6c7-4ba2-b35d-d8a80cfbc96a": {
																"filterType": 4,
																"comparisonType": 4,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Status"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "ActivityStatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Cancelled",
																				"Id": "8dd2d787-2792-420c-8891-be9de36a600d",
																				"value": "8dd2d787-2792-420c-8891-be9de36a600d",
																				"displayValue": "Cancelled"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Done",
																				"Id": "4bdbb88f-58e6-df11-971b-001d60e938c6",
																				"value": "4bdbb88f-58e6-df11-971b-001d60e938c6",
																				"displayValue": "Done"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": false
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_CanceledTasks_Value"
						]
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_MyTasks",
				"values": {
					"config": {
						"caption": "#ResourceString(QuickFilter_MyTasks_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
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
							"width": 418,
							"sticky": true
						},
						{
							"id": "faa46696-568f-3cf6-a6c5-f41e987dffa5",
							"code": "PDS_Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "ecb5a95d-67d3-473d-a90c-0cecfbc897b2",
							"code": "PDS_PgrIsEscalated",
							"caption": "#ResourceString(PDS_PgrIsEscalated)#",
							"dataValueType": 12
						},
						{
							"id": "b0b2f4ce-9f60-1a76-bcda-2da05b2f03aa",
							"code": "PDS_Priority",
							"caption": "#ResourceString(PDS_Priority)#",
							"dataValueType": 10
						},
						{
							"id": "eff5bc92-7274-950f-cccb-b9b3919cc191",
							"code": "PDS_ActivityCategory",
							"caption": "#ResourceString(PDS_ActivityCategory)#",
							"dataValueType": 10,
							"width": 217
						},
						{
							"id": "aea2799b-a772-561b-859b-da43cb66917c",
							"code": "PDS_Owner",
							"caption": "#ResourceString(PDS_Owner)#",
							"dataValueType": 10,
							"width": 199
						},
						{
							"id": "577ddf17-f30c-986c-5db6-77c04ece11ae",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "eb0732b2-f37b-0860-1fad-f28e4078fc93",
							"code": "PDS_StartDate",
							"caption": "#ResourceString(PDS_StartDate)#",
							"dataValueType": 7
						},
						{
							"id": "cc4f048c-ecaa-a807-43f3-7e65a271b313",
							"code": "PDS_DueDate",
							"caption": "#ResourceString(PDS_DueDate)#",
							"dataValueType": 7,
							"width": 246
						},
						{
							"id": "325bbfd5-6e46-6a7a-b945-4bbb66f824bd",
							"code": "PDS_PgrOverdueDays",
							"caption": "#ResourceString(PDS_PgrOverdueDays)#",
							"dataValueType": 4,
							"width": 154
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": true
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "Activity",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": [
							{
								"attribute": "QuickFilter_ndarf4i_Dashboards",
								"loadOnChange": true
							},
							{
								"attribute": "QuickFilter_07b11xi_Dashboards",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_ndarf4i",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_ndarf4i_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "ActivityCategory",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_ndarf4i_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "ActivityCategory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_ndarf4i_Dashboards",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Dashboards",
													"filterColumn": "ActivityCategory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_ndarf4i_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_07b11xi",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_07b11xi_config_caption)#",
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
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_07b11xi_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_07b11xi_Dashboards",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Dashboards",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_07b11xi_Value"
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
				"name": "QuickFilter_3hurnbj",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_3hurnbj_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_3hurnbj_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"5cee6311-c6c7-4ba2-b35d-d8a80cfbc96a": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrIsOverdue"
																},
																"isAggregative": false,
																"dataValueType": 12,
																"rightExpression": {
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 12,
																		"value": true
																	}
																}
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_3hurnbj_Value"
						]
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "QuickFilter_PgrIsEscalated",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_PgrIsEscalated_config_caption)#",
						"icon": "settings-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": false,
						"approachState": true,
						"hint": ""
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_PgrIsEscalated_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"46e0104a-79a1-4f92-a541-7b2dcf83fe1e": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrIsEscalated"
																},
																"isAggregative": false,
																"dataValueType": 12,
																"rightExpression": {
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 12,
																		"value": true
																	}
																}
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_PgrIsEscalated_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 7
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
					"PDS_DurationInMnutesAndHours",
					"PDS_ShowInScheduler"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_Priority": {
						"modelConfig": {
							"path": "PDS.Priority"
						}
					},
					"PDS_PgrOverdueDays": {
						"modelConfig": {
							"path": "PDS.PgrOverdueDays"
						}
					},
					"PDS_PgrIsEscalated": {
						"modelConfig": {
							"path": "PDS.PgrIsEscalated"
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
							"name": "QuickFilter_MyTasks_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_CanceledTasks_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_Date_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_Employee_Items",
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
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_3hurnbj_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_ndarf4i_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_07b11xi_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_PgrIsEscalated_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items_PredefinedFilter",
					"value"
				],
				"values": {
					"logicalOperation": 1
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
					"DurationInMnutesAndHours",
					"ShowInScheduler"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"Status": {
						"path": "Status"
					},
					"Priority": {
						"path": "Priority"
					},
					"PgrOverdueDays": {
						"path": "PgrOverdueDays"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});