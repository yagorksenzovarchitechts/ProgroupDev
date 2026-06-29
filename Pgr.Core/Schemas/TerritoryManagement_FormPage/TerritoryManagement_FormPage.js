define("TerritoryManagement_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "RequeueQueueItemButton"
			},
			{
				"operation": "remove",
				"name": "PostponeQueueItemButton"
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "Code",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "ParentTerritory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "AssignedAccountsOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(AssignedAccountsOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_uk5v4lv_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"9a95c753-3076-46d2-9691-431370342090": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Owner"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "Contact",
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AssignedAccountsOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "steel-blue",
							"icon": {
								"iconName": "contact-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "CustomersOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(CustomersOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_nq8efba_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"d97141fd-add2-43ee-9a70-77c8506cf7b7": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Owner"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "Contact",
												"isNull": false
											},
											"91047913-a4ce-4bc2-9f56-5e2746bc3b69": {
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
												"referenceSchemaName": "AccountType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Customer",
																"Id": "03a75490-53e6-df11-971b-001d60e938c6",
																"value": "03a75490-53e6-df11-971b-001d60e938c6",
																"displayValue": "Customer"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(CustomersOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "rusty-orange",
							"icon": {
								"iconName": "employee-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountsWithOpenPipelineOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(AccountsWithOpenPipelineOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_j333btw_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"d7ccbd2f-dcca-4e9a-9f3b-6f962fd225be": {
												"filterType": 5,
												"comparisonType": 15,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "[Opportunity:Account].Id"
												},
												"isAggregative": true,
												"dataValueType": 4,
												"subFilters": {
													"items": {
														"7b011b63-72eb-4d24-9009-f4993e0f9374": {
															"filterType": 1,
															"comparisonType": 3,
															"isEnabled": true,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "Stage.End"
															},
															"isAggregative": false,
															"dataValueType": 12,
															"rightExpression": {
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 12,
																	"value": false
																}
															}
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "Opportunity",
													"key": "46869d1a-47d6-4a58-b3d0-532698fb3d6a"
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AccountsWithOpenPipelineOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "burnt-coral",
							"icon": {
								"iconName": "work-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenPipelineOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenPipelineOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_6hjuzk2_Data",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"4ddbfcac-4b41-4a09-abf8-e0d1fb1f0c1e": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Account.Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenPipelineOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "RepTerritoriesOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(RepTerritoriesOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_z9g876y_Data",
								"schemaName": "Territory",
								"filters": {
									"filter": {
										"items": {
											"f450478c-b4ff-458e-a229-53196153bcd7": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "TerritoryType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "TerritoryType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Territory",
																"Id": "e9b2c075-0368-4aef-9b77-00b7d39a077a",
																"value": "e9b2c075-0368-4aef-9b77-00b7d39a077a",
																"displayValue": "Territory"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Territory"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(RepTerritoriesOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-turquoise",
							"icon": {
								"iconName": "document-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "UnallottedAccountsOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(UnallottedAccountsOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_rgvk56o_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"24002a2f-1b4b-4783-bc50-016a32e4829d": {
												"filterType": 2,
												"comparisonType": 1,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Owner"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "Contact",
												"isNull": true
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(UnallottedAccountsOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "cadmium-red",
							"icon": {
								"iconName": "contact-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenLeadsOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenLeadsOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_vlkogqm_Data",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {
											"20134f0f-0651-4af4-b589-0768a0cd7398": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "QualifyStatus.IsFinal"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenLeadsOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "red",
							"icon": {
								"iconName": "contact-leads-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenOpportunitiesOverviewWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenOpportunitiesOverviewWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_kobcl48_Data",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"1ffdaa58-c74d-461e-8b6b-170424fa8cf3": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenOpportunitiesOverviewWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "forest-green",
							"icon": {
								"iconName": "filter-column-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "TotalAccountsWidget",
				"values": {
					"config": {
						"title": "#ResourceString(TotalAccountsWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_xnnoyjk_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(TotalAccountsWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "steel-blue",
							"icon": {
								"iconName": "contact-group-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "RepTerritoriesWidget",
				"values": {
					"config": {
						"title": "#ResourceString(RepTerritoriesWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_g6h7yjc_Data",
								"schemaName": "Territory",
								"filters": {
									"filter": {
										"items": {
											"bdf7ede2-c492-4a30-b190-8dbbc12bfa80": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "TerritoryType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "TerritoryType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Territory",
																"Id": "e9b2c075-0368-4aef-9b77-00b7d39a077a",
																"value": "e9b2c075-0368-4aef-9b77-00b7d39a077a",
																"displayValue": "Territory"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Territory"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(RepTerritoriesWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-turquoise",
							"icon": {
								"iconName": "document-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "UnallottedAccountsWidget",
				"values": {
					"config": {
						"title": "#ResourceString(UnallottedAccountsWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_3qn1a7y_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"f14afb8b-8b75-4352-9c29-689d5c13ed6b": {
												"filterType": 2,
												"comparisonType": 1,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Owner"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "Contact",
												"isNull": true
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(UnallottedAccountsWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "cadmium-red",
							"icon": {
								"iconName": "contact-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "AccountsWithOpenPipelineWidget",
				"values": {
					"config": {
						"title": "#ResourceString(AccountsWithOpenPipelineWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_zzyhw8n_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"7610e566-b571-4f19-a93d-0a64cf5f0e4b": {
												"filterType": 5,
												"comparisonType": 15,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "[Opportunity:Account].Id"
												},
												"isAggregative": true,
												"dataValueType": 0,
												"subFilters": {
													"items": {
														"d843108d-df3b-4044-8655-011b9f8f8a8d": {
															"filterType": 1,
															"comparisonType": 3,
															"isEnabled": true,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "Stage.End"
															},
															"isAggregative": false,
															"dataValueType": 12,
															"rightExpression": {
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 12,
																	"value": false
																}
															}
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "Opportunity",
													"key": "829c947e-ad1d-4d4b-82f0-be3103c0d01b"
												}
											},
											"11ba4b0b-aad0-4e8b-9a19-7e36ea4eb39b": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Owner"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "Contact",
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AccountsWithOpenPipelineWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "burnt-coral",
							"icon": {
								"iconName": "work-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenPipelineWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenPipelineWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_irtb6bt_Data",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"efa82321-88dd-4491-8eb1-4cd73396d81d": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": [
										{
											"attribute": "TimePeriodQuickFilter_IndicatorWidget_irtb6bt_Data",
											"loadOnChange": true
										}
									]
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Account.Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenPipelineWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "dark-green"
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenLeadsWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenLeadsWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ofusm8a_Data",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {
											"bb20bfac-e367-4fd5-b676-7b501643e103": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "QualifyStatus.IsFinal"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenLeadsWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "red",
							"icon": {
								"iconName": "contact-leads-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "OpenOpportunitiesWidget",
				"values": {
					"config": {
						"title": "#ResourceString(OpenOpportunitiesWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_waq1ntw_Data",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"d7f679bc-c3f9-469f-90c9-76cc7f5e3152": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [],
								"hierarchyConfig": {
									"hierarchicalColumnName": "Territory.ParentTerritory",
									"hierarchicalFullDataLoad": true,
									"hierarchicalColumnValueAttributeName": "Id"
								}
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OpenOpportunitiesWidget_config_text_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "forest-green",
							"icon": {
								"iconName": "filter-column-icon"
							}
						},
						"theme": "without-fill",
						"hideTitle": false,
						"comparison": {
							"type": null,
							"text": ""
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "AssignedAccountsByTierWidget",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AssignedAccountsByIndustryWidget",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AssignedAccountsByTypeWidget",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "Checkbox_awg78g6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsInactive_oh7f5h2",
					"ariaLabel": "",
					"labelPosition": "right",
					"tooltip": "",
					"control": "$PDS_PgrIsInactive_oh7f5h2",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_PgrIsInactive_oh7f5h2": {
						"modelConfig": {
							"path": "PDS.PgrIsInactive"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});