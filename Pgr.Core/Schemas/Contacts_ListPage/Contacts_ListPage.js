define("Contacts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "LeftFilterContainerInner",
				"values": {
					"gap": "small",
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
						"entitySchemaName": "ContactTag",
						"defaultValue": null,
						"recordsFilter": null,
						"defaultValueListSorting": null
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
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"sticky": true
						},
						{
							"id": "438505b8-4a87-0ac6-d1c3-1382780806cb",
							"code": "PDS_Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"width": 186
						},
						{
							"id": "5ed38ba6-ba72-02dc-9a20-16061858b43c",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "577c7ad1-cb2f-d6c2-6dcc-8f7af9f523d8",
							"code": "PDS_Phone",
							"caption": "#ResourceString(PDS_Phone)#",
							"dataValueType": 42
						},
						{
							"id": "03b5e12d-311b-af3a-2ecd-2167697cebab",
							"code": "PDS_MobilePhone",
							"caption": "#ResourceString(PDS_MobilePhone)#",
							"dataValueType": 42
						},
						{
							"id": "3c44eb56-a5ee-3514-e97d-f41b3fdfac4f",
							"code": "PDS_Email",
							"caption": "#ResourceString(PDS_Email)#",
							"dataValueType": 45
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_m8g38tz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_m8g38tz_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "PgrSalesPersonOverviewPage"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_SysAccounts",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_SysAccounts_config_caption)#",
						"hint": "",
						"defaultValue": true,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_SysAccounts_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"483566b2-15ff-4322-9dd3-94f7e7e96539": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Type"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "ContactType",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Competitor",
																				"Id": "806732ee-f36b-1410-a883-16d83cab0980",
																				"value": "806732ee-f36b-1410-a883-16d83cab0980",
																				"displayValue": "Competitor"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Customer",
																				"Id": "00783ef6-f36b-1410-a883-16d83cab0980",
																				"value": "00783ef6-f36b-1410-a883-16d83cab0980",
																				"displayValue": "Customer"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Lead",
																				"Id": "ac278ef3-e63f-48d9-ba34-7c52e92fecfe",
																				"value": "ac278ef3-e63f-48d9-ba34-7c52e92fecfe",
																				"displayValue": "Lead"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Employee",
																				"Id": "60733efc-f36b-1410-a883-16d83cab0980",
																				"value": "60733efc-f36b-1410-a883-16d83cab0980",
																				"displayValue": "Employee"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Contact"
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
							"QuickFilter_SysAccounts_Value"
						]
					},
					"filterType": "custom"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_gpw24m7",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_gpw24m7_config_caption)#",
						"hint": "",
						"icon": "filter-funnel-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "ContactType",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_gpw24m7_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Type"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_gpw24m7_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_yrlyenx",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_yrlyenx_config_caption)#",
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
								"attribute": "QuickFilter_yrlyenx_Items",
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
							}
						],
						"from": "QuickFilter_yrlyenx_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_1h6dkw2",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_1h6dkw2_config_caption)#",
						"hint": "",
						"defaultValue": true,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_1h6dkw2_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"da66460a-6a1a-4e0f-b878-9149be03b23a": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Type"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "ContactType",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Competitor",
																				"Id": "806732ee-f36b-1410-a883-16d83cab0980",
																				"value": "806732ee-f36b-1410-a883-16d83cab0980",
																				"displayValue": "Competitor"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Customer",
																				"Id": "00783ef6-f36b-1410-a883-16d83cab0980",
																				"value": "00783ef6-f36b-1410-a883-16d83cab0980",
																				"displayValue": "Customer"
																			}
																		}
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Lead",
																				"Id": "ac278ef3-e63f-48d9-ba34-7c52e92fecfe",
																				"value": "ac278ef3-e63f-48d9-ba34-7c52e92fecfe",
																				"displayValue": "Lead"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Contact"
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
							"QuickFilter_1h6dkw2_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 5
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
					"PDS_Country",
					"PDS_BirthDate"
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
					"PDS_Phone": {
						"modelConfig": {
							"path": "PDS.Phone"
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
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_yrlyenx_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_gpw24m7_Items",
							"loadOnChange": true
						},
						{
							"name": "Filters_Filter",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_1h6dkw2_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_SysAccounts_Items",
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
							"columnName": "Name"
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
					"Country",
					"BirthDate"
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
					"Phone": {
						"path": "Phone"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});