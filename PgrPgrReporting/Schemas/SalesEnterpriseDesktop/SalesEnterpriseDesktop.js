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
							},
							{
								"attribute": "QuickFilter_CurrentContact_DataGrid_fwpbspp",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_fwpbspp",
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
								"attribute": "QuickFilter_Territory_IndicatorWidget_fa2aur9_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_fa2aur9_Data",
													"filterColumn": "Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_Territory_IndicatorWidget_h8gyel3_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_h8gyel3_Data",
													"filterColumn": "PgrAccount.Territory"
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
				"name": "QuickFilter_SalesManager",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_SalesManager_config_caption)#",
						"hint": "",
						"icon": "consultation-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": {
							"items": {
								"39454c3c-ab66-460e-95e4-95ab723d7e23": {
									"filterType": 1,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": true,
									"leftExpression": {
										"expressionType": 3,
										"functionType": 2,
										"aggregationType": 5,
										"columnPath": "[Account:PgrSalesManager].CreatedOn",
										"subFilters": {
											"items": {},
											"logicalOperation": 0,
											"isEnabled": true,
											"filterType": 6,
											"rootSchemaName": "Account",
											"key": "f54ef9dc-1b13-4e0f-b014-36c084954d89"
										}
									},
									"isAggregative": true,
									"dataValueType": 7,
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"macrosType": 5
									},
									"subFilters": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account",
										"key": "f54ef9dc-1b13-4e0f-b014-36c084954d89"
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Contact"
						},
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
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
							},
							{
								"attribute": "QuickFilter_SalesManager_IndicatorWidget_fa2aur9_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_fa2aur9_Data",
													"filterColumn": "PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesManager_IndicatorWidget_h8gyel3_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_h8gyel3_Data",
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
				"index": 2
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
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": {
							"items": {
								"b3170f3d-c60e-4776-b568-e2cd093d16f0": {
									"filterType": 1,
									"comparisonType": 4,
									"isEnabled": true,
									"trimDateTimeParameterToDate": true,
									"leftExpression": {
										"expressionType": 3,
										"functionType": 2,
										"aggregationType": 5,
										"columnPath": "[Account:PgrSalesDirector].CreatedOn",
										"subFilters": {
											"items": {},
											"logicalOperation": 0,
											"isEnabled": true,
											"filterType": 6,
											"rootSchemaName": "Account",
											"key": "78ed3c43-25dd-4fa5-98cd-27e34a899148"
										}
									},
									"isAggregative": true,
									"dataValueType": 7,
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"macrosType": 5
									},
									"subFilters": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account",
										"key": "78ed3c43-25dd-4fa5-98cd-27e34a899148"
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Contact"
						},
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
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
							},
							{
								"attribute": "QuickFilter_SalesDirector_IndicatorWidget_fa2aur9_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_fa2aur9_Data",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_SalesDirector_IndicatorWidget_h8gyel3_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_h8gyel3_Data",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3xtypsc",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ng7r8z8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_zp2172z",
				"values": {
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
				"parentName": "FlexContainer_3xtypsc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_do4icls",
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
				"parentName": "GridContainer_do4icls",
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
						"colSpan": 2,
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
				"parentName": "GridContainer_do4icls",
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
				"name": "FlexContainer_pgm8jad",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
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
					"gap": "medium"
				},
				"parentName": "GridContainer_ng7r8z8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_u3zbey1",
				"values": {
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
				"parentName": "FlexContainer_pgm8jad",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hk0uorj",
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
				"parentName": "GridContainer_u3zbey1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_necbkfw",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 2,
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
				"parentName": "GridContainer_hk0uorj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d8o29gb",
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
				"parentName": "GridContainer_hk0uorj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Icon_bhhh7mx",
				"values": {
					"type": "crt.Icon",
					"iconName": "flag-icon",
					"size": "16",
					"color": "#0D2E4E",
					"backgroundType": "circle",
					"backgroundColor": "#E3D9FC",
					"padding": "l",
					"visible": true,
					"ariaLabel": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer_d8o29gb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_gjt8g2n",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_gjt8g2n_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "FlexContainer_d8o29gb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_q5h64ro",
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
				"parentName": "GridContainer_u3zbey1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_fwpbspp",
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
					"items": "$DataGrid_fwpbspp",
					"primaryColumnName": "DataGrid_fwpbsppDS_Id",
					"columns": [
						{
							"id": "062429a9-a14c-1a4f-8468-828d87ea89d1",
							"code": "DataGrid_fwpbsppDS_Account",
							"caption": "#ResourceString(DataGrid_fwpbsppDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "0185dcb6-8c3b-7e41-d32b-005b86edc529",
							"code": "DataGrid_fwpbsppDS_ActivityCategory",
							"caption": "#ResourceString(DataGrid_fwpbsppDS_ActivityCategory)#",
							"dataValueType": 10,
							"width": 131
						},
						{
							"id": "d6ac70c4-5b5f-b410-0ca0-596ca1c1522a",
							"code": "DataGrid_fwpbsppDS_Status",
							"caption": "#ResourceString(DataGrid_fwpbsppDS_Status)#",
							"dataValueType": 10,
							"width": 101
						},
						{
							"id": "50ad1ec8-152c-9bb4-4b3c-aa8d829381dd",
							"code": "DataGrid_fwpbsppDS_DueDate",
							"caption": "#ResourceString(DataGrid_fwpbsppDS_DueDate)#",
							"dataValueType": 7,
							"width": 178
						}
					],
					"visible": true,
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_q5h64ro",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_y4hn2gq",
				"values": {
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
				"parentName": "FlexContainer_pgm8jad",
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
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0xymx4d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
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
				"parentName": "GridContainer_ng7r8z8",
				"propertyName": "items",
				"index": 2
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_nlgvvop",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
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
				"parentName": "GridContainer_7bocb5l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_30ivfl7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
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
				"parentName": "GridContainer_nlgvvop",
				"propertyName": "items",
				"index": 0
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
								"color": "dark-blue",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_l52twdo_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_l52twdo_SeriesData_zc3tqqa",
										"schemaName": "PgrVwAccountBudgetRank",
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
												"rootSchemaName": "PgrVwAccountBudgetRank"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_zc3tqqa",
													"loadOnChange": true
												}
											]
										},
										"aggregation": {
											"column": {
												"orderDirection": 1,
												"orderPosition": 0,
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
										"rowCount": 5,
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
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
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
										"schemaName": "PgrVwAccountBudgetRank",
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
												"rootSchemaName": "PgrVwAccountBudgetRank"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_l52twdo_SeriesData_9z8sadx",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_l52twdo_SeriesData_9z8sadx",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_l52twdo_SeriesData_9z8sadx",
													"loadOnChange": true
												}
											]
										},
										"aggregation": {
											"column": {
												"orderDirection": 1,
												"orderPosition": 0,
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
										"rowCount": 5,
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
										"decimalPrecision": 0,
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
							"direction": 2,
							"seriesIndex": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 9
					}
				},
				"parentName": "GridContainer_30ivfl7",
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
						"rowSpan": 9
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
								"color": "dark-blue",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_vpvvd4s_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_vpvvd4s_SeriesData_g09hdv9",
										"schemaName": "PgrVwAccountBudgetRank",
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
													},
													"deviationIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDeviationPctBudget"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwAccountBudgetRank"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_Territory_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesManager_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_SalesDirector_ChartWidget_vpvvd4s_SeriesData_g09hdv9",
													"loadOnChange": true
												}
											]
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": 0,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "PgrDeviationPctBudget"
													},
													"functionType": 2,
													"aggregationType": 4,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 5,
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
										"decimalPrecision": 0,
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
				"parentName": "GridContainer_30ivfl7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mkso5rv",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
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
				"parentName": "GridContainer_nlgvvop",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zjkpii5",
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
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_fa2aur9",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_fa2aur9_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "filter-column-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_fa2aur9_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "before-after",
							"fontSizeMode": "extra-small"
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
								"attribute": "IndicatorWidget_fa2aur9_Data",
								"schemaName": "Account",
								"filters": {
									"filterAttributes": [
										{
											"attribute": "QuickFilter_Territory_IndicatorWidget_fa2aur9_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesDirector_IndicatorWidget_fa2aur9_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesManager_IndicatorWidget_fa2aur9_Data",
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
						"hint": "#ResourceString(IndicatorWidget_fa2aur9_hint)#",
						"hideTitle": true
					},
					"visible": true,
					"layoutConfig": {
						"width": 314
					}
				},
				"parentName": "FlexContainer_zjkpii5",
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
							"color": "purple"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_1i78h71_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "small"
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
								"filters": {
									"filterAttributes": [
										{
											"attribute": "QuickFilter_Territory_IndicatorWidget_1i78h71_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesDirector_IndicatorWidget_1i78h71_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesManager_IndicatorWidget_1i78h71_Data",
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
						"hint": "#ResourceString(IndicatorWidget_1i78h71_hint)#",
						"hideTitle": true
					},
					"visible": true,
					"layoutConfig": {
						"height": 70
					}
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_h8gyel3",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_h8gyel3_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "dark-blue"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_h8gyel3_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "small"
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
								"attribute": "IndicatorWidget_h8gyel3_Data",
								"schemaName": "PgrVwAccountMetricSnapshot",
								"filters": {
									"filterAttributes": [
										{
											"attribute": "QuickFilter_Territory_IndicatorWidget_h8gyel3_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesDirector_IndicatorWidget_h8gyel3_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_SalesManager_IndicatorWidget_h8gyel3_Data",
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
						"hint": "#ResourceString(IndicatorWidget_h8gyel3_hint)#",
						"hideTitle": true
					},
					"visible": true
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_jzvgr6l",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_jzvgr6l_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "burnt-coral"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_jzvgr6l_config_text_template)#",
							"metricMacros": "{0}",
							"labelPosition": "above-under",
							"fontSizeMode": "small"
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
								"attribute": "IndicatorWidget_jzvgr6l_Data",
								"expressionSchema": {
									"typeName": "Terrasoft.Core.ExpressionEngine.Schema.ExpressionSchema",
									"uId": "7410c564-e723-4ef6-835d-f1414746c58e",
									"name": "IndicatorWidget_jzvgr6l_Data",
									"engineType": "PowerFx",
									"resultDataValueType": "Float",
									"expression": "(#jzvgr6l_DevAgg#.sumDeviation / #jzvgr6l_BudAgg#.sumBudget) * 100",
									"parameters": [],
									"expressionVariables": [
										{
											"typeName": "Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariable",
											"uId": "a768b6b5-ad94-44ac-a797-6cf73a57e010",
											"name": "jzvgr6l_DevAgg",
											"dataValueType": "Text",
											"variableType": "EsqAggregation",
											"config": {
												"typeName": "Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaAggregationVariableConfig",
												"uId": "fea45d45-46b0-41db-bcfe-135db708af29",
												"name": "VariableConfig",
												"value": "PgrVwAccountMetricSnapshot",
												"expressions": [
													{
														"name": "sumDeviation",
														"aggregationType": "Sum",
														"expression": {
															"type": "SchemaColumn",
															"columnPath": "PgrDeviationValue"
														}
													}
												],
												"filters": {
													"items": {
														"budgetNotNullFilter": {
															"comparisonType": 2,
															"filterType": 2,
															"isEnabled": true,
															"isNull": false,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "PgrBudgetValue"
															}
														},
														"deviationNotNullFilter": {
															"comparisonType": 2,
															"filterType": 2,
															"isEnabled": true,
															"isNull": false,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "PgrDeviationValue"
															}
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "PgrVwAccountMetricSnapshot"
												},
												"filterAttributes": [
													{
														"attribute": "VariableConfig_fea45d45_46b0_41db_bcfe_135db708af29",
														"loadOnChange": true
													}
												]
											}
										},
										{
											"typeName": "Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariable",
											"uId": "65f00c9a-139c-49fc-a140-de2dbd7be528",
											"name": "jzvgr6l_BudAgg",
											"dataValueType": "Text",
											"variableType": "EsqAggregation",
											"config": {
												"typeName": "Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaAggregationVariableConfig",
												"uId": "35aacb0a-3458-4997-9122-7dd866dab3ab",
												"name": "VariableConfig",
												"value": "PgrVwAccountMetricSnapshot",
												"expressions": [
													{
														"name": "sumBudget",
														"aggregationType": "Sum",
														"expression": {
															"type": "SchemaColumn",
															"columnPath": "PgrBudgetValue"
														}
													}
												],
												"filters": {
													"items": {
														"budgetNotNullFilter": {
															"comparisonType": 2,
															"filterType": 2,
															"isEnabled": true,
															"isNull": false,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "PgrBudgetValue"
															}
														},
														"deviationNotNullFilter": {
															"comparisonType": 2,
															"filterType": 2,
															"isEnabled": true,
															"isNull": false,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "PgrDeviationValue"
															}
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "PgrVwAccountMetricSnapshot"
												},
												"filterAttributes": [
													{
														"attribute": "VariableConfig_35aacb0a_3458_4997_9122_7dd866dab3ab",
														"loadOnChange": true
													}
												]
											}
										}
									]
								}
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_jzvgr6l_hint)#",
						"hideTitle": true
					},
					"visible": true,
					"_filterableOptions": [
						{
							"filterAttributeName": "VariableConfig_fea45d45_46b0_41db_bcfe_135db708af29",
							"entitySchemaName": "PgrVwAccountMetricSnapshot",
							"caption": "#ResourceString(IndicatorWidget_jzvgr6l_title_ratio)# | PgrVwAccountMetricSnapshot.PgrDeviationValue",
							"filterAttributes": [
								"QuickFilter_Territory_jzvgr6l_DevAgg",
								"QuickFilter_SalesDirector_jzvgr6l_DevAgg",
								"QuickFilter_SalesManager_jzvgr6l_DevAgg"
							]
						},
						{
							"filterAttributeName": "VariableConfig_35aacb0a_3458_4997_9122_7dd866dab3ab",
							"entitySchemaName": "PgrVwAccountMetricSnapshot",
							"caption": "#ResourceString(IndicatorWidget_jzvgr6l_title_ratio)# | PgrVwAccountMetricSnapshot.PgrBudgetValue",
							"filterAttributes": [
								"QuickFilter_Territory_jzvgr6l_BudAgg",
								"QuickFilter_SalesDirector_jzvgr6l_BudAgg",
								"QuickFilter_SalesManager_jzvgr6l_BudAgg"
							]
						}
					]
				},
				"parentName": "FlexContainer_mkso5rv",
				"propertyName": "items",
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
													"Name": "Cancelled",
													"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
													"value": "201cfba8-58e6-df11-971b-001d60e938c6",
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
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Closed by system",
													"Id": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"value": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"displayValue": "Closed by system"
												}
											}
										}
									]
								},
								"0c8c7fa0-17af-41db-b49a-39629328552c": {
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
													"Name": "Measure",
													"Id": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"value": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"displayValue": "Measure"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Customer Visit Overdue",
													"Id": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"value": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"displayValue": "Customer Visit Overdue"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Tasks",
													"Id": "f51c4643-58e6-df11-971b-001d60e938c6",
													"value": "f51c4643-58e6-df11-971b-001d60e938c6",
													"displayValue": "Tasks"
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
													"Name": "Customer Visit Overdue",
													"Id": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"value": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"displayValue": "Customer Visit Overdue"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Measure",
													"Id": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"value": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"displayValue": "Measure"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Tasks",
													"Id": "f51c4643-58e6-df11-971b-001d60e938c6",
													"value": "f51c4643-58e6-df11-971b-001d60e938c6",
													"displayValue": "Tasks"
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
													"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
													"value": "201cfba8-58e6-df11-971b-001d60e938c6",
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
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Closed by system",
													"Id": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"value": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"displayValue": "Closed by system"
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
												"value": 2
											}
										},
										"macrosType": 24
									}
								},
								"6fc2ef7c-dd78-4dc9-ab27-8332e816d246": {
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
													"Name": "Customer Visit Overdue",
													"Id": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"value": "8452bb92-4000-4c3c-8850-c391f45f05f8",
													"displayValue": "Customer Visit Overdue"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Measure",
													"Id": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"value": "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
													"displayValue": "Measure"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Tasks",
													"Id": "f51c4643-58e6-df11-971b-001d60e938c6",
													"value": "f51c4643-58e6-df11-971b-001d60e938c6",
													"displayValue": "Tasks"
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
													"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
													"value": "201cfba8-58e6-df11-971b-001d60e938c6",
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
													"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
													"value": "201cfba8-58e6-df11-971b-001d60e938c6",
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
					},
					"DataGrid_fwpbspp": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_fwpbsppDS",
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 15
							},
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ActivityCategory"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_fwpbspp_PredefinedFilter"
								},
								{
									"name": "QuickFilter_CurrentContact_DataGrid_fwpbspp",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_fwpbsppDS_Account": {
									"modelConfig": {
										"path": "DataGrid_fwpbsppDS.Account"
									}
								},
								"DataGrid_fwpbsppDS_ActivityCategory": {
									"modelConfig": {
										"path": "DataGrid_fwpbsppDS.ActivityCategory"
									}
								},
								"DataGrid_fwpbsppDS_Status": {
									"modelConfig": {
										"path": "DataGrid_fwpbsppDS.Status"
									}
								},
								"DataGrid_fwpbsppDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_fwpbsppDS.DueDate"
									}
								},
								"DataGrid_fwpbsppDS_Id": {
									"modelConfig": {
										"path": "DataGrid_fwpbsppDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_fwpbspp_PredefinedFilter": {
						"value": {
							"items": {
								"64673c98-1647-4c70-94fb-d794938277c1": {
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
													"Name": "369",
													"Id": "8038a396-7825-e011-8165-00155d043204",
													"value": "8038a396-7825-e011-8165-00155d043204",
													"displayValue": "369"
												}
											}
										}
									]
								},
								"6a886c37-a8a4-4219-9b96-a7c714cb992f": {
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
													"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
													"value": "201cfba8-58e6-df11-971b-001d60e938c6",
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
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Closed by system",
													"Id": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"value": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"displayValue": "Closed by system"
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
						},
						"DataGrid_fwpbsppDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
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
