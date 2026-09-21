define("SalesForecasts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuarterlySalesForecastTabContainer",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "ForecastByHierarchyFilter",
				"values": {
					"config": {
						"caption": "Account",
						"defaultValue": [],
						"icon": "organizational-structure-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Account",
						"recordsFilter": null,
						"defaultValueListSorting": null,
						"hint": ""
					},
					"_filterOptions": {
						"from": "ForecastByHierarchyFilter_Value",
						"expose": [
							{
								"attribute": "ForecastByHierarchyFilter_ForecastGrid_QuarterlySales_HierarchyFilterGroup",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ForecastGrid_QuarterlySales_HierarchyFilterGroup",
													"filterColumn": "Id"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "ForecastByPeriodFilter",
				"values": {
					"config": {
						"caption": "Period",
						"defaultValue": [],
						"icon": "calendar-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Period",
						"recordsFilter": {
							"filterType": 6,
							"isEnabled": true,
							"logicalOperation": 0,
							"trimDateTimeParameterToDate": false,
							"items": {
								"ForecastPeriodTypeFilter": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PeriodType"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "d4346752-cb02-4edf-b071-6946738e1d40"
										}
									}
								}
							}
						},
						"defaultValueListSorting": {
							"columnName": "StartDate",
							"direction": "asc"
						},
						"hint": ""
					},
					"_forecastManagedRecordsFilter": {
						"filterType": 6,
						"isEnabled": true,
						"logicalOperation": 0,
						"trimDateTimeParameterToDate": false,
						"items": {
							"ForecastPeriodTypeFilter": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "PeriodType"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "d4346752-cb02-4edf-b071-6946738e1d40"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "ForecastGrid_QuarterlySales",
				"values": {
					"_filterableOptions": [
						{
							"filterAttributeName": "ForecastGrid_QuarterlySales_PeriodFilterGroup",
							"entitySchemaName": "Period",
							"caption": "ForecastGrid_QuarterlySales | Period",
							"filterAttributes": [
								"ForecastByPeriodFilter_ForecastGrid_QuarterlySales_PeriodFilterGroup"
							],
							"directLookup": true
						},
						{
							"filterAttributeName": "ForecastGrid_QuarterlySales_HierarchyFilterGroup",
							"entitySchemaName": "Account",
							"caption": "ForecastGrid_QuarterlySales | Hierarchy",
							"filterAttributes": [
								"ForecastByHierarchyFilter_ForecastGrid_QuarterlySales_HierarchyFilterGroup"
							],
							"directLookup": true
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "TabContainer_zuw1idq",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_zuw1idq_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "ForecastGridTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gdruelj",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_zuw1idq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_4x4mu9p",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_4x4mu9p_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"headingLevel": "label"
				},
				"parentName": "FlexContainer_gdruelj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_f9ibo9z",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_zuw1idq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_s660xti",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 1fr)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"fitContent": true,
					"visible": true,
					"columns": [
						"minmax(64px, 1fr)"
					],
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "medium"
					},
					"items": [],
					"forecastGridName": "ForecastGrid_vuyr07d"
				},
				"parentName": "FlexContainer_f9ibo9z",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ForecastToolbarGrid_vuyr07d",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 1fr)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"fitContent": true,
					"visible": true,
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"items": [],
					"layoutConfig": {
						"row": 1,
						"column": 1,
						"rowSpan": 1,
						"colSpan": 1
					}
				},
				"parentName": "GridContainer_s660xti",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ForecastToolbarLeft_t823xzj",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"gap": "medium",
					"fitContent": true,
					"items": [],
					"layoutConfig": {
						"row": 1,
						"column": 1,
						"rowSpan": 1,
						"colSpan": 3
					}
				},
				"parentName": "ForecastToolbarGrid_vuyr07d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ForecastFilters_vuyr07d",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "medium",
					"borderRadius": "none",
					"wrap": "wrap",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "none"
					},
					"items": []
				},
				"parentName": "ForecastToolbarLeft_t823xzj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ForecastByHierarchyFilter_vuyr07d",
				"values": {
					"type": "crt.QuickFilter",
					"filterType": "lookup",
					"config": {
						"caption": "Account",
						"defaultValue": [],
						"icon": "organizational-structure-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Account"
					},
					"_filterOptions": {
						"from": "ForecastByHierarchyFilter_vuyr07d_Value",
						"expose": [
							{
								"attribute": "ForecastByHierarchyFilter_vuyr07d_ForecastGrid_vuyr07d_HierarchyFilterGroup",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ForecastGrid_vuyr07d_HierarchyFilterGroup",
													"filterColumn": "Id"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						]
					}
				},
				"parentName": "ForecastFilters_vuyr07d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ForecastByPeriodFilter_vuyr07d",
				"values": {
					"type": "crt.QuickFilter",
					"filterType": "lookup",
					"config": {
						"caption": "Period",
						"defaultValue": [],
						"icon": "calendar-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Period",
						"defaultValueListSorting": {
							"columnName": "StartDate",
							"direction": "asc"
						},
						"recordsFilter": {
							"filterType": 6,
							"isEnabled": true,
							"logicalOperation": 0,
							"trimDateTimeParameterToDate": false,
							"items": {
								"ForecastPeriodTypeFilter": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PeriodType"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "83140788-d3f8-4dcc-9497-1d6ece36f2db"
										}
									}
								}
							}
						}
					},
					"_filterOptions": {
						"from": "ForecastByPeriodFilter_vuyr07d_Value",
						"expose": [
							{
								"attribute": "ForecastByPeriodFilter_vuyr07d_ForecastGrid_vuyr07d_PeriodFilterGroup",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ForecastGrid_vuyr07d_PeriodFilterGroup",
													"filterColumn": "Id"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						]
					},
					"_forecastManagedRecordsFilter": {
						"filterType": 6,
						"isEnabled": true,
						"logicalOperation": 0,
						"trimDateTimeParameterToDate": false,
						"items": {
							"ForecastPeriodTypeFilter": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "PeriodType"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "83140788-d3f8-4dcc-9497-1d6ece36f2db"
									}
								}
							}
						}
					}
				},
				"parentName": "ForecastFilters_vuyr07d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ForecastToolbarRight_949pt04",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"gap": "medium",
					"fitContent": false,
					"items": [],
					"layoutConfig": {
						"row": 1,
						"column": 4,
						"rowSpan": 1,
						"colSpan": 1
					},
					"justifyContent": "end"
				},
				"parentName": "ForecastToolbarGrid_vuyr07d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ForecastCalculateButton_2b09na8",
				"values": {
					"type": "crt.Button",
					"color": "outline",
					"size": "large",
					"caption": "#ResourceString(ForecastCalculateButton_2b09na8_caption)#",
					"icon": "reload-icon",
					"iconPosition": "left-icon",
					"disabled": "$CalculateButtonDisabled",
					"clicked": {
						"request": "crt.ForecastCalculateRequest"
					}
				},
				"parentName": "ForecastToolbarRight_949pt04",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculationInProgressLabel_3o4jc9v",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(CalculationInProgressLabel_3o4jc9v_caption)#",
					"visible": "$CalculationInProgress",
					"labelColor": "var(--crt-color-text-muted)",
					"labelType": "body",
					"labelThickness": "default"
				},
				"parentName": "ForecastToolbarRight_949pt04",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ForecastCalcCaptions_yryuxy1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"alignItems": "start",
					"gap": "none",
					"fitContent": true,
					"items": []
				},
				"parentName": "ForecastToolbarRight_949pt04",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LastCalcLabel_klqoplf",
				"values": {
					"type": "crt.Label",
					"caption": "$LastCalculationCaption",
					"visible": "$LastCalculationCaption",
					"labelColor": "var(--crt-color-text-muted)",
					"labelType": "body",
					"labelThickness": "default"
				},
				"parentName": "ForecastCalcCaptions_yryuxy1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextCalcLabel_tu8yxv9",
				"values": {
					"type": "crt.Label",
					"caption": "$NextCalculationCaption",
					"visible": "$NextCalculationCaption",
					"labelColor": "var(--crt-color-text-muted)",
					"labelType": "body",
					"labelThickness": "default"
				},
				"parentName": "ForecastCalcCaptions_yryuxy1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ForecastGrid_vuyr07d",
				"values": {
					"type": "crt.ForecastGrid",
					"toolbar": [],
					"title": "#ResourceString(ForecastGrid_vuyr07d_title)#",
					"fitContent": false,
					"_filterableOptions": [
						{
							"filterAttributeName": "ForecastGrid_vuyr07d_PeriodFilterGroup",
							"entitySchemaName": "Period",
							"caption": "ForecastGrid_vuyr07d | Period",
							"filterAttributes": [
								"ForecastByPeriodFilter_vuyr07d_ForecastGrid_vuyr07d_PeriodFilterGroup"
							],
							"directLookup": true
						},
						{
							"filterAttributeName": "ForecastGrid_vuyr07d_HierarchyFilterGroup",
							"entitySchemaName": "Account",
							"caption": "ForecastGrid_vuyr07d | Hierarchy",
							"filterAttributes": [
								"ForecastByHierarchyFilter_vuyr07d_ForecastGrid_vuyr07d_HierarchyFilterGroup"
							],
							"directLookup": true
						}
					],
					"visible": true,
					"forecastSheetId": "fc79a4ee-2dae-48f6-85e0-619ad98ae1bf"
				},
				"parentName": "FlexContainer_f9ibo9z",
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
					"ForecastByHierarchyFilter_ForecastGrid_QuarterlySales_HierarchyFilterGroup": {
						"from": "ForecastByHierarchyFilter_Value",
						"converter": "crt.QuickFilterAttributeConverter : $ForecastByHierarchyFilter_ForecastGrid_QuarterlySales_HierarchyFilterGroup_0_Arg_0"
					},
					"ForecastByHierarchyFilter_ForecastGrid_QuarterlySales_HierarchyFilterGroup_0_Arg_0": {
						"value": {
							"target": {
								"viewAttributeName": "ForecastGrid_QuarterlySales_HierarchyFilterGroup",
								"filterColumn": "Id"
							},
							"quickFilterType": "lookup"
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