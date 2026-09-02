define("SalesEnterpriseDesktop", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "TitleFlexContainer"
			},
			{
				"operation": "merge",
				"name": "GreetingLabel",
				"values": {
					"labelColor": "#181818",
					"headingLevel": "label"
				}
			},
			{
				"operation": "move",
				"name": "GreetingLabel",
				"parentName": "FlexContainer_71jzh1x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "TotalOpportunityCountIndicatorWidget"
			},
			{
				"operation": "remove",
				"name": "OpportunityAmountCurrentMonthIndicatorWidget"
			},
			{
				"operation": "remove",
				"name": "OpenLeadsIndicatorWidget"
			},
			{
				"operation": "remove",
				"name": "PlanVsFactBySalesManagerCurrentQuarterChartWidget"
			},
			{
				"operation": "insert",
				"name": "GridContainer_jpbvrp2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 8,
						"row": 1,
						"rowSpan": 13
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "primary",
					"borderRadius": "small",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					}
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_r8emdff",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_jpbvrp2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_71jzh1x",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "center",
					"justifyContent": "space-between",
					"gap": "small",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_r8emdff",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2t3lqd2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "FlexContainer_71jzh1x",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_CurrentContact",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_CurrentContact_config_caption)#",
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
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_ja4jylx",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_ja4jylx",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_mff7gl1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_mff7gl1",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_w7fcc7z",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7fcc7z",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_dnrd7y2",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_dnrd7y2",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_qn3ubmu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_qn3ubmu",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_CurrentContact_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_2t3lqd2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_Territory",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_Territory_config_caption)#",
						"hint": "",
						"icon": "webcheck-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Territory",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_zc3tqqa",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"filterColumn": "PgrAccount.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"filterColumn": "PgrAccount.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_IndicatorWidget_1i78h71_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_1i78h71_Data",
													"filterColumn": "PgrAccount.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_9z8sadx",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_9z8sadx",
													"filterColumn": "PgrAccount.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_IndicatorWidget_hjabhyi_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_hjabhyi_Data",
													"filterColumn": "PgrAccount.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_IndicatorWidget_w2xzqke_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_w2xzqke_Data",
													"filterColumn": "Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_Territory_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_2t3lqd2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_SalesDirector",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_SalesDirector_config_caption)#",
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
								"attribute": "QuickFilter_SalesDirector_IndicatorWidget_hjabhyi_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_hjabhyi_Data",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_IndicatorWidget_1i78h71_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_1i78h71_Data",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_IndicatorWidget_w2xzqke_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_w2xzqke_Data",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_zc3tqqa",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_9z8sadx",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_9z8sadx",
													"filterColumn": "PgrAccount.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_SalesDirector_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_2t3lqd2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_SalesManager",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_SalesManager_config_caption)#",
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
								"attribute": "QuickFilter_SalesManager_IndicatorWidget_hjabhyi_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_hjabhyi_Data",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_IndicatorWidget_1i78h71_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_1i78h71_Data",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_IndicatorWidget_w2xzqke_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_w2xzqke_Data",
													"filterColumn": "PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_zc3tqqa",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_9z8sadx",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_l52twdo_SeriesData_9z8sadx",
													"filterColumn": "PgrAccount.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_SalesManager_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_2t3lqd2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d6smrj9",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "FlexContainer_71jzh1x",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Button_978ivs9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_978ivs9_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Activity",
							"defaultValues": [
								{
									"attributeName": "Owner",
									"value": null
								}
							]
						}
					},
					"clickMode": "default",
					"icon": "add-button-icon"
				},
				"parentName": "FlexContainer_71jzh1x",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7bocb5l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_jpbvrp2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChartWidget_l52twdo",
				"values": {
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_l52twdo_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "burnt-coral",
								"type": "spline",
								"label": "#ResourceString(ChartWidget_l52twdo_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_l52twdo_SeriesData_zc3tqqa",
										"schemaName": "PgrVwTopAccountsByBudget",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrAccount"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwTopAccountsByBudget"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_zc3tqqa",
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
														"columnPath": "PgrOrderIntakeValue"
													},
													"functionType": 2,
													"aggregationType": 5,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "PgrAccount"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							},
							{
								"color": "purple",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_l52twdo_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_l52twdo_SeriesData_9z8sadx",
										"schemaName": "PgrVwTopAccountsByBudget",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrAccount"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwTopAccountsByBudget"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_9z8sadx",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_9z8sadx",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_9z8sadx",
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
														"columnPath": "PgrBudgetValue"
													},
													"functionType": 2,
													"aggregationType": 5,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "PgrAccount"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 2
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7bocb5l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChartWidget_vpvvd4s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_vpvvd4s_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "orange-red",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_vpvvd4s_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_vpvvd4s_SeriesData_g09hdv9",
										"schemaName": "PgrVwTopNegativeDeviation",
										"filters": {
											"filter": {
												"items": {
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrAccount"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwTopNegativeDeviation"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
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
														"columnPath": "PgrDeviationValue"
													},
													"functionType": 2,
													"aggregationType": 4,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "PgrAccount"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "GridContainer_7bocb5l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mkso5rv",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_7bocb5l",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_hjabhyi",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_hjabhyi_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "purple"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_hjabhyi_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"comparisonProviding": null,
							"providing": {
								"attribute": "IndicatorWidget_hjabhyi_Data",
								"schemaName": "PgrVwAccountMetricSnapshot",
								"filters": {
									"filterAttributes": [
										{
											"attribute": "QuickFilter_Territory_IndicatorWidget_hjabhyi_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesDirector_IndicatorWidget_hjabhyi_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesManager_IndicatorWidget_hjabhyi_Data",
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
												"columnPath": "PgrBudgetValue"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_hjabhyi_hint)#"
					},
					"visible": true
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_1i78h71",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_1i78h71_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "coral"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_1i78h71_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"comparisonProviding": null,
							"providing": {
								"attribute": "IndicatorWidget_1i78h71_Data",
								"schemaName": "PgrVwAccountMetricSnapshot",
								"filters": null,
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "PgrOrderIntakeValue"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_1i78h71_hint)#"
					},
					"visible": true
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_w2xzqke",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_w2xzqke_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "dark-blue"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_w2xzqke_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "medium"
						},
						"data": {
							"formatting": {
								"type": "number",
								"decimalPrecision": 0,
								"decimalSeparator": ".",
								"thousandSeparator": ","
							},
							"comparisonProviding": null,
							"providing": {
								"attribute": "IndicatorWidget_w2xzqke_Data",
								"schemaName": "Account",
								"filters": {
									"filterAttributes": [
										{
											"attribute": "QuickFilter_Territory_IndicatorWidget_w2xzqke_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesDirector_IndicatorWidget_w2xzqke_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesManager_IndicatorWidget_w2xzqke_Data",
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
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_w2xzqke_hint)#"
					},
					"visible": true
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ng7r8z8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_jpbvrp2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_zp2172z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "primary",
					"borderRadius": "small",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_ng7r8z8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_sebye3q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					}
				},
				"parentName": "GridContainer_zp2172z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3zquehw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "GridContainer_sebye3q",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Icon_w48ygoq",
				"values": {
					"type": "crt.Icon",
					"iconName": "catalog-icon",
					"size": "16",
					"color": "#0D2E4E",
					"backgroundType": "circle",
					"backgroundColor": "#E3D9FC",
					"padding": "l",
					"visible": true,
					"ariaLabel": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_3zquehw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_gy2c3xl",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_gy2c3xl_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexContainer_3zquehw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_sprjmsi",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "center",
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "GridContainer_sebye3q",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_b4rutg0",
				"values": {
					"for": "TabPanel_6quibyh",
					"fitContent": true,
					"toggleViewMode": "button",
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "FlexContainer_sprjmsi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vaaa4oj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_zp2172z",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabPanel_6quibyh",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"visible": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"stretch": true,
					"selectedTab": {
						"value": "TabContainer_mvhf4la"
					},
					"allowToggleClose": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"selectedTabIndex": 0
				},
				"parentName": "GridContainer_vaaa4oj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_mvhf4la",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_mvhf4la_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_6quibyh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rw7wjc1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_mvhf4la",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_xibhisv",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_xibhisv_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_rw7wjc1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_imwrguh",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_mvhf4la",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_TasksDue7Days",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_mff7gl1",
					"primaryColumnName": "DataGrid_mff7gl1DS_Id",
					"columns": [
						{
							"id": "3b53ec72-abe4-9846-463e-fb170be47244",
							"code": "DataGrid_mff7gl1DS_Title",
							"caption": "#ResourceString(DataGrid_mff7gl1DS_Title)#",
							"dataValueType": 28,
							"width": 169
						},
						{
							"id": "9d397206-1fee-06d6-bea3-0c47fc4b64cf",
							"code": "DataGrid_mff7gl1DS_Account",
							"caption": "#ResourceString(DataGrid_mff7gl1DS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "6510d8e8-7793-c153-f017-facd9b7a987b",
							"code": "DataGrid_mff7gl1DS_ActivityCategory",
							"caption": "#ResourceString(DataGrid_mff7gl1DS_ActivityCategory)#",
							"dataValueType": 10
						},
						{
							"id": "3752ed2d-14cd-a3f1-de33-86c34168180a",
							"code": "DataGrid_mff7gl1DS_Status",
							"caption": "#ResourceString(DataGrid_mff7gl1DS_Status)#",
							"dataValueType": 10,
							"width": 101
						},
						{
							"id": "aa0b75c4-9718-4280-0be0-b6e1f11c830d",
							"code": "DataGrid_mff7gl1DS_DueDate",
							"caption": "#ResourceString(DataGrid_mff7gl1DS_DueDate)#",
							"dataValueType": 7,
							"width": 178
						}
					],
					"visible": true,
					"fitContent": true,
					"activeRow": "$DataGrid_mff7gl1_ActiveRow",
					"selectionState": "$DataGrid_mff7gl1_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_mff7gl1_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "FlexContainer_imwrguh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_mff7gl1_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_mff7gl1DS",
							"filters": "$DataGrid_mff7gl1 | crt.ToCollectionFilters : 'DataGrid_mff7gl1' : $DataGrid_mff7gl1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_mff7gl1_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_TasksDue7Days",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_mff7gl1_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_mff7gl1DS",
							"filters": "$DataGrid_mff7gl1 | crt.ToCollectionFilters : 'DataGrid_mff7gl1' : $DataGrid_mff7gl1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_mff7gl1_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_mff7gl1_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_mff7gl1_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_TasksDue7Days",
							"filters": "$DataGrid_mff7gl1 | crt.ToCollectionFilters : 'DataGrid_mff7gl1' : $DataGrid_mff7gl1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_mff7gl1_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksDue7Days",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_mff7gl1_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_mff7gl1DS",
							"selectionState": "$DataGrid_mff7gl1_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksDue7Days",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_mff7gl1_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_mff7gl1DS",
							"filters": "$DataGrid_mff7gl1 | crt.ToCollectionFilters : 'DataGrid_mff7gl1' : $DataGrid_mff7gl1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_mff7gl1_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksDue7Days",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_1jc1xxr",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_1jc1xxr_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_6quibyh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kg0xdfr",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_1jc1xxr",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_ievcl1k",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ievcl1k_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_kg0xdfr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tewpupn",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_1jc1xxr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_TasksStarted",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_w7fcc7z",
					"primaryColumnName": "DataGrid_w7fcc7zDS_Id",
					"columns": [
						{
							"id": "e1cbadd4-d708-35ee-2223-4a99abf269a4",
							"code": "DataGrid_w7fcc7zDS_Title",
							"caption": "#ResourceString(DataGrid_w7fcc7zDS_Title)#",
							"dataValueType": 28,
							"width": 201
						},
						{
							"id": "5e7f088f-bcad-fbac-40bd-617009204d7c",
							"code": "DataGrid_w7fcc7zDS_Account",
							"caption": "#ResourceString(DataGrid_w7fcc7zDS_Account)#",
							"dataValueType": 10,
							"width": 170
						},
						{
							"id": "600ff017-641f-6ee2-e985-1763b7504926",
							"code": "DataGrid_w7fcc7zDS_ActivityCategory",
							"caption": "#ResourceString(DataGrid_w7fcc7zDS_ActivityCategory)#",
							"dataValueType": 10
						},
						{
							"id": "80dd9ca5-bc85-78ec-3458-2545f9075695",
							"code": "DataGrid_w7fcc7zDS_Status",
							"caption": "#ResourceString(DataGrid_w7fcc7zDS_Status)#",
							"dataValueType": 10,
							"width": 101
						},
						{
							"id": "f66f7cd9-2a28-1909-603f-4db5ea16669a",
							"code": "DataGrid_w7fcc7zDS_DueDate",
							"caption": "#ResourceString(DataGrid_w7fcc7zDS_DueDate)#",
							"dataValueType": 7
						}
					],
					"visible": true,
					"fitContent": true,
					"activeRow": "$DataGrid_w7fcc7z_ActiveRow",
					"selectionState": "$DataGrid_w7fcc7z_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_w7fcc7z_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "FlexContainer_tewpupn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7fcc7z_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_w7fcc7zDS",
							"filters": "$DataGrid_w7fcc7z | crt.ToCollectionFilters : 'DataGrid_w7fcc7z' : $DataGrid_w7fcc7z_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_w7fcc7z_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_TasksStarted",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7fcc7z_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_w7fcc7zDS",
							"filters": "$DataGrid_w7fcc7z | crt.ToCollectionFilters : 'DataGrid_w7fcc7z' : $DataGrid_w7fcc7z_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_w7fcc7z_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_w7fcc7z_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7fcc7z_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_TasksStarted",
							"filters": "$DataGrid_w7fcc7z | crt.ToCollectionFilters : 'DataGrid_w7fcc7z' : $DataGrid_w7fcc7z_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_w7fcc7z_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksStarted",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7fcc7z_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_w7fcc7zDS",
							"selectionState": "$DataGrid_w7fcc7z_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksStarted",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7fcc7z_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_w7fcc7zDS",
							"filters": "$DataGrid_w7fcc7z | crt.ToCollectionFilters : 'DataGrid_w7fcc7z' : $DataGrid_w7fcc7z_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_w7fcc7z_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksStarted",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_0zl56x2",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_0zl56x2_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_6quibyh",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1d15ygi",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_0zl56x2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_rt9u18e",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_rt9u18e_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_1d15ygi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3m41u2f",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_0zl56x2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_TasksAll",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_ja4jylx",
					"primaryColumnName": "DataGrid_ja4jylxDS_Id",
					"columns": [
						{
							"id": "0c841fa9-3ba9-3958-5952-3d12ab1fdc47",
							"code": "DataGrid_ja4jylxDS_Title",
							"caption": "#ResourceString(DataGrid_ja4jylxDS_Title)#",
							"dataValueType": 28,
							"width": 175
						},
						{
							"id": "b29002d7-f5a8-6bf6-7911-bf78d8494c6a",
							"code": "DataGrid_ja4jylxDS_Account",
							"caption": "#ResourceString(DataGrid_ja4jylxDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "51d492c2-076f-acb0-48e8-e357a812c832",
							"code": "DataGrid_ja4jylxDS_ActivityCategory",
							"caption": "#ResourceString(DataGrid_ja4jylxDS_ActivityCategory)#",
							"dataValueType": 10
						},
						{
							"id": "a30c857f-737f-af4b-94e4-2dcb17f490c7",
							"code": "DataGrid_ja4jylxDS_Status",
							"caption": "#ResourceString(DataGrid_ja4jylxDS_Status)#",
							"dataValueType": 10,
							"width": 101
						},
						{
							"id": "26ce5dd1-69bd-c523-002f-937bd7cc756a",
							"code": "DataGrid_ja4jylxDS_DueDate",
							"caption": "#ResourceString(DataGrid_ja4jylxDS_DueDate)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"activeRow": "$DataGrid_ja4jylx_ActiveRow",
					"selectionState": "$DataGrid_ja4jylx_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_ja4jylx_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "FlexContainer_3m41u2f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ja4jylx_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_ja4jylxDS",
							"filters": "$DataGrid_ja4jylx | crt.ToCollectionFilters : 'DataGrid_ja4jylx' : $DataGrid_ja4jylx_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_ja4jylx_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_TasksAll",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ja4jylx_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_ja4jylxDS",
							"filters": "$DataGrid_ja4jylx | crt.ToCollectionFilters : 'DataGrid_ja4jylx' : $DataGrid_ja4jylx_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_ja4jylx_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_ja4jylx_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_ja4jylx_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_TasksAll",
							"filters": "$DataGrid_ja4jylx | crt.ToCollectionFilters : 'DataGrid_ja4jylx' : $DataGrid_ja4jylx_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_ja4jylx_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksAll",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_ja4jylx_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_ja4jylxDS",
							"selectionState": "$DataGrid_ja4jylx_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksAll",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_ja4jylx_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_ja4jylxDS",
							"filters": "$DataGrid_ja4jylx | crt.ToCollectionFilters : 'DataGrid_ja4jylx' : $DataGrid_ja4jylx_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_ja4jylx_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_TasksAll",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_y4hn2gq",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "primary",
					"borderRadius": "small",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_ng7r8z8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_oh6kmqw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					}
				},
				"parentName": "GridContainer_y4hn2gq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7eum1n7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "GridContainer_oh6kmqw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Icon_tereumh",
				"values": {
					"type": "crt.Icon",
					"iconName": "contact-group-icon",
					"size": "16",
					"color": "#0D2E4E",
					"backgroundType": "circle",
					"backgroundColor": "#E3D9FC",
					"padding": "l",
					"visible": true,
					"ariaLabel": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_7eum1n7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_yh979bd",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_yh979bd_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexContainer_7eum1n7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_g3vdlp6",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "center",
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "GridContainer_oh6kmqw",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_h0dsikf",
				"values": {
					"for": "TabPanel_v7ws3jj",
					"fitContent": true,
					"toggleViewMode": "button",
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "FlexContainer_g3vdlp6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_9ys43tp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_y4hn2gq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabPanel_v7ws3jj",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"visible": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"stretch": true,
					"selectedTab": {
						"value": "TabContainer_f9urj41"
					},
					"allowToggleClose": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_9ys43tp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_f9urj41",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_f9urj41_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_v7ws3jj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4d60bma",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_f9urj41",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_yv7lboj",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_yv7lboj_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_4d60bma",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_54ytx3u",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_f9urj41",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_VisitsNext7Days",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_dnrd7y2",
					"primaryColumnName": "DataGrid_dnrd7y2DS_Id",
					"columns": [
						{
							"id": "1ede8c02-eb2c-287c-8671-5d8467cc5676",
							"code": "DataGrid_dnrd7y2DS_Account",
							"caption": "#ResourceString(DataGrid_dnrd7y2DS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "7cf7dfd1-5717-d130-6382-bb07b0082552",
							"code": "DataGrid_dnrd7y2DS_DueDate",
							"caption": "#ResourceString(DataGrid_dnrd7y2DS_DueDate)#",
							"dataValueType": 7,
							"width": 178
						}
					],
					"visible": true,
					"fitContent": true,
					"activeRow": "$DataGrid_dnrd7y2_ActiveRow",
					"selectionState": "$DataGrid_dnrd7y2_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_dnrd7y2_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "FlexContainer_54ytx3u",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dnrd7y2_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_dnrd7y2DS",
							"filters": "$DataGrid_dnrd7y2 | crt.ToCollectionFilters : 'DataGrid_dnrd7y2' : $DataGrid_dnrd7y2_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_dnrd7y2_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_VisitsNext7Days",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dnrd7y2_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_dnrd7y2DS",
							"filters": "$DataGrid_dnrd7y2 | crt.ToCollectionFilters : 'DataGrid_dnrd7y2' : $DataGrid_dnrd7y2_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_dnrd7y2_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_dnrd7y2_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dnrd7y2_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_VisitsNext7Days",
							"filters": "$DataGrid_dnrd7y2 | crt.ToCollectionFilters : 'DataGrid_dnrd7y2' : $DataGrid_dnrd7y2_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_dnrd7y2_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsNext7Days",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_dnrd7y2_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_dnrd7y2DS",
							"selectionState": "$DataGrid_dnrd7y2_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsNext7Days",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_dnrd7y2_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_dnrd7y2DS",
							"filters": "$DataGrid_dnrd7y2 | crt.ToCollectionFilters : 'DataGrid_dnrd7y2' : $DataGrid_dnrd7y2_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_dnrd7y2_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsNext7Days",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_0i53x2r",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_0i53x2r_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_v7ws3jj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0yis77v",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_0i53x2r",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_u2ka648",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_u2ka648_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_0yis77v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zn1u4bt",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_0i53x2r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_VisitsAll",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_qn3ubmu",
					"primaryColumnName": "DataGrid_qn3ubmuDS_Id",
					"columns": [
						{
							"id": "4b1c537e-d493-c414-3aa2-b9cedf2c6165",
							"code": "DataGrid_qn3ubmuDS_Account",
							"caption": "#ResourceString(DataGrid_qn3ubmuDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "e1cef9e9-a8da-4e53-55d5-145ae73d5251",
							"code": "DataGrid_qn3ubmuDS_DueDate",
							"caption": "#ResourceString(DataGrid_qn3ubmuDS_DueDate)#",
							"dataValueType": 7,
							"width": 178
						}
					],
					"visible": true,
					"fitContent": true,
					"activeRow": "$DataGrid_qn3ubmu_ActiveRow",
					"selectionState": "$DataGrid_qn3ubmu_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_qn3ubmu_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "FlexContainer_zn1u4bt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_qn3ubmu_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_qn3ubmuDS",
							"filters": "$DataGrid_qn3ubmu | crt.ToCollectionFilters : 'DataGrid_qn3ubmu' : $DataGrid_qn3ubmu_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_qn3ubmu_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "DataGrid_VisitsAll",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_qn3ubmu_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_qn3ubmuDS",
							"filters": "$DataGrid_qn3ubmu | crt.ToCollectionFilters : 'DataGrid_qn3ubmu' : $DataGrid_qn3ubmu_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_qn3ubmu_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_qn3ubmu_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_qn3ubmu_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_VisitsAll",
							"filters": "$DataGrid_qn3ubmu | crt.ToCollectionFilters : 'DataGrid_qn3ubmu' : $DataGrid_qn3ubmu_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_qn3ubmu_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsAll",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_qn3ubmu_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_qn3ubmuDS",
							"selectionState": "$DataGrid_qn3ubmu_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsAll",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_qn3ubmu_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_qn3ubmuDS",
							"filters": "$DataGrid_qn3ubmu | crt.ToCollectionFilters : 'DataGrid_qn3ubmu' : $DataGrid_qn3ubmu_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_qn3ubmu_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_VisitsAll",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_ja4jylx": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_ja4jylxDS",
							"filterAttributes": [
								{
									"name": "QuickFilter_CurrentContact_DataGrid_ja4jylx",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "DataGrid_ja4jylx_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DueDate"
									}
								]
							},
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_ja4jylxDS_Title": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.Title"
									}
								},
								"DataGrid_ja4jylxDS_Account": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.Account"
									}
								},
								"DataGrid_ja4jylxDS_ActivityCategory": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.ActivityCategory"
									}
								},
								"DataGrid_ja4jylxDS_Status": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.Status"
									}
								},
								"DataGrid_ja4jylxDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.DueDate"
									}
								},
								"DataGrid_ja4jylxDS_Id": {
									"modelConfig": {
										"path": "DataGrid_ja4jylxDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_ja4jylx_PredefinedFilter": {
						"value": {
							"items": {
								"e5fe0b5e-cfb4-4dbb-92f1-3fb2d14b2712": {
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
													"Name": "Done",
													"Id": "4bdbb88f-58e6-df11-971b-001d60e938c6",
													"value": "4bdbb88f-58e6-df11-971b-001d60e938c6",
													"displayValue": "Done"
												}
											}
										},
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
										}
									]
								},
								"0c8c7fa0-17af-41db-b49a-39629328552c": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
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
						}
					},
					"DataGrid_w7fcc7z": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_w7fcc7zDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DueDate"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_w7fcc7z_PredefinedFilter"
								},
								{
									"name": "QuickFilter_CurrentContact_DataGrid_w7fcc7z",
									"loadOnChange": true
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_w7fcc7zDS_Title": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.Title"
									}
								},
								"DataGrid_w7fcc7zDS_Account": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.Account"
									}
								},
								"DataGrid_w7fcc7zDS_ActivityCategory": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.ActivityCategory"
									}
								},
								"DataGrid_w7fcc7zDS_Status": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.Status"
									}
								},
								"DataGrid_w7fcc7zDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.DueDate"
									}
								},
								"DataGrid_w7fcc7zDS_Id": {
									"modelConfig": {
										"path": "DataGrid_w7fcc7zDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_w7fcc7z_PredefinedFilter": {
						"value": {
							"items": {
								"43e97b1a-5312-4a18-9eca-b8f3e0c014c8": {
									"filterType": 4,
									"comparisonType": 3,
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
													"Name": "In progress",
													"Id": "394d4b84-58e6-df11-971b-001d60e938c6",
													"value": "394d4b84-58e6-df11-971b-001d60e938c6",
													"displayValue": "In progress"
												}
											}
										}
									]
								},
								"02503424-3f7c-4023-93a7-e949a2578386": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
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
						}
					},
					"DataGrid_mff7gl1": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_mff7gl1DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DueDate"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_mff7gl1_PredefinedFilter"
								},
								{
									"name": "QuickFilter_CurrentContact_DataGrid_mff7gl1",
									"loadOnChange": true
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_mff7gl1DS_Title": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.Title"
									}
								},
								"DataGrid_mff7gl1DS_Account": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.Account"
									}
								},
								"DataGrid_mff7gl1DS_ActivityCategory": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.ActivityCategory"
									}
								},
								"DataGrid_mff7gl1DS_Status": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.Status"
									}
								},
								"DataGrid_mff7gl1DS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.DueDate"
									}
								},
								"DataGrid_mff7gl1DS_Id": {
									"modelConfig": {
										"path": "DataGrid_mff7gl1DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_mff7gl1_PredefinedFilter": {
						"value": {
							"items": {
								"d03026c8-96e0-45c5-818d-17764a0c67fe": {
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
								},
								"bbe9c517-22a1-4e46-90ca-a6cd5d47369a": {
									"filterType": 1,
									"comparisonType": 6,
									"isEnabled": true,
									"trimDateTimeParameterToDate": true,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "DueDate"
									},
									"isAggregative": false,
									"dataValueType": 7,
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"functionArgument": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 4,
												"value": 7
											}
										},
										"macrosType": 24
									}
								},
								"6fc2ef7c-dd78-4dc9-ab27-8332e816d246": {
									"filterType": 4,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
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
						}
					},
					"DataGrid_dnrd7y2": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_dnrd7y2DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DueDate"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_dnrd7y2_PredefinedFilter"
								},
								{
									"name": "QuickFilter_CurrentContact_DataGrid_dnrd7y2",
									"loadOnChange": true
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_dnrd7y2DS_Account": {
									"modelConfig": {
										"path": "DataGrid_dnrd7y2DS.Account"
									}
								},
								"DataGrid_dnrd7y2DS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_dnrd7y2DS.DueDate"
									}
								},
								"DataGrid_dnrd7y2DS_Id": {
									"modelConfig": {
										"path": "DataGrid_dnrd7y2DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_dnrd7y2_PredefinedFilter": {
						"value": {
							"items": {
								"a5131435-f62f-47a9-a436-e874bcb8f4ad": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
												}
											}
										}
									]
								},
								"27499db3-8212-41cf-8420-da67850c8034": {
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
								},
								"a3dffc14-ca5d-4b8f-bfcf-1793e84702d9": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": true,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "StartDate"
									},
									"isAggregative": false,
									"dataValueType": 7,
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"functionArgument": {
											"expressionType": 2,
											"parameter": {
												"dataValueType": 4,
												"value": 7
											}
										},
										"macrosType": 24
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"DataGrid_qn3ubmu": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_qn3ubmuDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DueDate"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_qn3ubmu_PredefinedFilter"
								},
								{
									"name": "QuickFilter_CurrentContact_DataGrid_qn3ubmu",
									"loadOnChange": true
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_qn3ubmuDS_Account": {
									"modelConfig": {
										"path": "DataGrid_qn3ubmuDS.Account"
									}
								},
								"DataGrid_qn3ubmuDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_qn3ubmuDS.DueDate"
									}
								},
								"DataGrid_qn3ubmuDS_Id": {
									"modelConfig": {
										"path": "DataGrid_qn3ubmuDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_qn3ubmu_PredefinedFilter": {
						"value": {
							"items": {
								"0f7c39a8-05a4-40ed-908d-1a2f3a7e3b6b": {
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
								},
								"54c36f26-fa75-48a6-93ad-84856ec8b981": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
												}
											}
										}
									]
								},
								"f93f9b22-9498-4160-87aa-d25b45ca7db9": {
									"filterType": 1,
									"comparisonType": 8,
									"isEnabled": true,
									"trimDateTimeParameterToDate": true,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "StartDate"
									},
									"isAggregative": false,
									"dataValueType": 7,
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"macrosType": 4
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DataGrid_ja4jylxDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Title": {
										"path": "Title"
									},
									"Account": {
										"path": "Account"
									},
									"ActivityCategory": {
										"path": "ActivityCategory"
									},
									"Status": {
										"path": "Status"
									},
									"DueDate": {
										"path": "DueDate"
									}
								}
							}
						},
						"DataGrid_w7fcc7zDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Title": {
										"path": "Title"
									},
									"Account": {
										"path": "Account"
									},
									"ActivityCategory": {
										"path": "ActivityCategory"
									},
									"Status": {
										"path": "Status"
									},
									"DueDate": {
										"path": "DueDate"
									}
								}
							}
						},
						"DataGrid_mff7gl1DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Title": {
										"path": "Title"
									},
									"Account": {
										"path": "Account"
									},
									"ActivityCategory": {
										"path": "ActivityCategory"
									},
									"Status": {
										"path": "Status"
									},
									"DueDate": {
										"path": "DueDate"
									}
								}
							}
						},
						"DataGrid_dnrd7y2DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Account": {
										"path": "Account"
									},
									"DueDate": {
										"path": "DueDate"
									}
								}
							}
						},
						"DataGrid_qn3ubmuDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Account": {
										"path": "Account"
									},
									"DueDate": {
										"path": "DueDate"
									}
								}
							}
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