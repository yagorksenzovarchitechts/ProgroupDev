define("PgrWeeklySalesReport_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
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
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"padding": {
						"top": "small",
						"right": "medium",
						"bottom": "large",
						"left": "medium"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "none",
						"right": "none",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"gap": {
						"columnGap": "extra-small",
						"rowGap": "extra-small"
					},
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "medium",
						"left": "small"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "crt-color-coral",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true,
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "medium",
						"rowGap": "extra-small"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "PgrWeeklySalesReport"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "4b7b501e-83ad-4e47-974b-c6373297f4d5",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "FlexContainer_j8jlcyn",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "MainHeaderTop",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_eyjvkji",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_eyjvkji_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PgrGenerateAndPrintReportRequest"
					},
					"clickMode": "default",
					"icon": "document-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_7z59s97",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "PgrWeeklySalesReport"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabPanel_henjy4e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "crt-color-coral",
					"fitContent": true,
					"visible": true,
					"stretch": true,
					"allowToggleClose": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_vlwl5fh",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_vlwl5fh_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_henjy4e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_epvcbwz",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_vlwl5fh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ekf7rag",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSalesManagerId_p0obbmn",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrSalesManagerId_p0obbmn",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_xxhriw2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xxhriw2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ekf7rag",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_802hh3f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSalesManagerIdPgrTerritory_jk5wttg",
					"ariaLabel": "#ResourceString(ComboBox_802hh3f_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_PgrSalesManagerIdPgrTerritory_jk5wttg",
					"visible": true,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_6npx3e4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6npx3e4_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_802hh3f",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9z6iant",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrStatusId_jqi4wq8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrStatusId_jqi4wq8"
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_7dex4gt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7dex4gt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9z6iant",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_71sdtax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
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
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_vpi4hk8",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_vpi4hk8_label)#",
					"control": "$PDS_PgrWeekNumber_ecfkid1",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_71sdtax",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_oq37ktn",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrYearLookup_c4i5tul",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrYearLookup_c4i5tul",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_71sdtax",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_aua9fgq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aua9fgq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_oq37ktn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_jmiw34u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrPeriodStart_jtt82ph",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrPeriodStart_jtt82ph"
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_8wkotjz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrPeriodEnd_rgrgwxm",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrPeriodEnd_rgrgwxm"
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_dsnutqb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrLanguageId_larrdle",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrLanguageId_larrdle"
				},
				"parentName": "GridContainer_epvcbwz",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_p7ysrsm",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_p7ysrsm_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dsnutqb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_c8imne8",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
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
						"columnGap": "large",
						"rowGap": "medium"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_626yo4g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_626yo4g_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "dark-blue"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_626yo4g_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_626yo4g_Data",
								"schemaName": "PgrVwSalesManagerMetricSnapshot",
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
												"columnPath": "PgrActualMtd"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "PgrSalesManagerId",
										"relationPath": "PDS.PgrSalesManagerId"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_626yo4g_hint)#"
					},
					"visible": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_ta5uugn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_ta5uugn_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "vivid-purple"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_ta5uugn_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_ta5uugn_Data",
								"schemaName": "PgrVwSalesManagerMetricSnapshot",
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
												"columnPath": "PgrBudgetMtd"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "PgrSalesManagerId",
										"relationPath": "PDS.PgrSalesManagerId"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_ta5uugn_hint)#"
					},
					"visible": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_vdwd3qa",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_vdwd3qa_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "coral"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_vdwd3qa_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_vdwd3qa_Data",
								"schemaName": "PgrVwSalesManagerMetricSnapshot",
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
												"columnPath": "PgrDeviationPct"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "PgrSalesManagerId",
										"relationPath": "PDS.PgrSalesManagerId"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_vdwd3qa_hint)#"
					},
					"visible": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_jvd5tfw",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_jvd5tfw_title)#",
						"theme": "full-fill",
						"layout": {
							"color": "steel-blue"
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_jvd5tfw_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_jvd5tfw_Data",
								"schemaName": "PgrVwSalesManagerMetricSnapshot",
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
												"columnPath": "PgrNineDayAvgOrderIntake"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "PgrSalesManagerId",
										"relationPath": "PDS.PgrSalesManagerId"
									}
								]
							}
						},
						"comparison": {
							"type": null,
							"text": ""
						},
						"hint": "#ResourceString(IndicatorWidget_jvd5tfw_hint)#"
					},
					"visible": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ChartWidget_wqxpdh4",
				"values": {
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_wqxpdh4_title)#",
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
								"label": "#ResourceString(ChartWidget_wqxpdh4_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_wqxpdh4_SeriesData_ryfpvkn",
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
													"rankFilter": {
														"filterType": 1,
														"comparisonType": 6,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrRankBySalesManager"
														},
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 4,
																"value": 5
															}
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwAccountBudgetRank"
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
														"columnPath": "PgrBudgetValue"
													},
													"functionType": 2,
													"aggregationType": 5,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "PgrSalesManager",
												"relationPath": "PDS.PgrSalesManagerId"
											}
										],
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
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							},
							{
								"color": "vivid-purple",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_wqxpdh4_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_wqxpdh4_SeriesData_s0f8nai",
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
													"rankFilter": {
														"filterType": 1,
														"comparisonType": 6,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrRankBySalesManager"
														},
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 4,
																"value": 5
															}
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrVwAccountBudgetRank"
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
														"columnPath": "PgrOrderIntakeValue"
													},
													"functionType": 2,
													"aggregationType": 5,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "PgrSalesManager",
												"relationPath": "PDS.PgrSalesManagerId"
											}
										],
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
							"seriesIndex": 0
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 2,
						"rowSpan": 1
					},
					"visible": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fp81gjh",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_c8imne8",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_har31n7",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_har31n7_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "bright-red",
							"icon": {
								"iconName": "message-warning-icon"
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_har31n7_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_har31n7_Data",
								"schemaName": "PgrWeeklySalesReport",
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
												"columnPath": "PgrQualityCheckCount"
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
						"hint": "#ResourceString(IndicatorWidget_har31n7_hint)#"
					},
					"visible": true
				},
				"parentName": "FlexContainer_fp81gjh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_s6es0ld",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_s6es0ld_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "bright-red",
							"icon": {
								"iconName": "problem-icon"
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_s6es0ld_config_text_template)#",
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
							"providing": {
								"attribute": "IndicatorWidget_s6es0ld_Data",
								"schemaName": "PgrWeeklySalesReport",
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
												"columnPath": "PgrServiceDeliveryCheckCount"
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
						"hint": "#ResourceString(IndicatorWidget_s6es0ld_hint)#"
					},
					"visible": true
				},
				"parentName": "FlexContainer_fp81gjh",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_90wxkg9",
				"values": {
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabPanel_hc5ycmx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "crt-color-coral",
					"fitContent": true,
					"visible": true,
					"stretch": true,
					"allowToggleClose": true
				},
				"parentName": "GridContainer_90wxkg9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_6k84kcz",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_6k84kcz_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_hc5ycmx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_m66prs5",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_m66prs5_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6k84kcz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ea6ci90",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_m66prs5",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nztn3cj",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ea6ci90",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9jn4v4f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9jn4v4f_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_crlfqp1DS"
						}
					}
				},
				"parentName": "FlexContainer_nztn3cj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_df8iavo",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": null
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_m66prs5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_crlfqp1",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$GridDetail_crlfqp1",
					"primaryColumnName": "GridDetail_crlfqp1DS_Id",
					"columns": [
						{
							"id": "d3f9c850-c168-097e-b1f6-ee38acf832a5",
							"code": "GridDetail_crlfqp1DS_PgrAccount",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrAccount)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "24186f86-420c-d0a6-a50a-aef4ebb4359b",
							"code": "GridDetail_crlfqp1DS_PgrNumber",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrNumber)#",
							"dataValueType": 27,
							"width": 128
						},
						{
							"id": "4fff38ec-43ff-692f-972f-cda1f58c2515",
							"code": "GridDetail_crlfqp1DS_PgrVisitDate",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrVisitDate)#",
							"dataValueType": 8,
							"width": 119
						},
						{
							"id": "bc8dede9-9899-471b-3309-461d795b01c7",
							"code": "GridDetail_crlfqp1DS_PgrVisitType",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrVisitType)#",
							"dataValueType": 10,
							"width": 139
						},
						{
							"id": "3b07c5a7-3d5b-1ee6-c9b6-c3584969e07d",
							"code": "GridDetail_crlfqp1DS_PgrVisitReason",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrVisitReason)#",
							"dataValueType": 10,
							"width": 193
						},
						{
							"id": "a98a4508-5bcb-3e58-bf10-b17ca7a8b5d3",
							"code": "GridDetail_crlfqp1DS_PgrVisitDidNotTakePlace",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrVisitDidNotTakePlace)#",
							"dataValueType": 12,
							"width": 107
						},
						{
							"id": "6e225758-d357-c6e2-1225-b14b1b56d876",
							"code": "GridDetail_crlfqp1DS_PgrNoVisitReason",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrNoVisitReason)#",
							"dataValueType": 29,
							"width": 164
						},
						{
							"id": "9f1524d1-9c8a-c7a4-42ae-9d87a7dbdf2b",
							"code": "GridDetail_crlfqp1DS_PgrTopicQuality",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrTopicQuality)#",
							"dataValueType": 12,
							"width": 109
						},
						{
							"id": "aa745351-477b-99db-ad04-486a3de99bb9",
							"code": "GridDetail_crlfqp1DS_PgrTopicServiceDelivery",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrTopicServiceDelivery)#",
							"dataValueType": 12,
							"width": 172
						},
						{
							"id": "fdb82f5c-10cd-c1a3-2d79-f12da8de3d0b",
							"code": "GridDetail_crlfqp1DS_PgrTopicCommercial",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrTopicCommercial)#",
							"dataValueType": 12,
							"width": 190
						},
						{
							"id": "c270743d-9dbe-e11e-9b90-cf8215d1d9ca",
							"code": "GridDetail_crlfqp1DS_PgrTopicProjectsOpportunities",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrTopicProjectsOpportunities)#",
							"dataValueType": 12,
							"width": 164
						},
						{
							"id": "245fd19e-8304-3a96-bdba-b343c534a497",
							"code": "GridDetail_crlfqp1DS_PgrTopicSpecial",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrTopicSpecial)#",
							"dataValueType": 12,
							"width": 154
						},
						{
							"id": "7d13513c-3711-e93a-e17b-c96055abef8e",
							"code": "GridDetail_crlfqp1DS_PgrKeyTopics",
							"caption": "#ResourceString(GridDetail_crlfqp1DS_PgrKeyTopics)#",
							"dataValueType": 29
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_df8iavo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7crmuco",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7crmuco_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6k84kcz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lom1ety",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_7crmuco",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5yqsobq",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lom1ety",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_6xgltjn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_6xgltjn_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zcqdktnDS"
						}
					}
				},
				"parentName": "FlexContainer_5yqsobq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0je60yz",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_7crmuco",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zcqdktn",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$GridDetail_zcqdktn",
					"primaryColumnName": "GridDetail_zcqdktnDS_Id",
					"columns": [
						{
							"id": "be7c5798-63b8-1f3c-7e09-26eb65103b6d",
							"code": "GridDetail_zcqdktnDS_PgrAccount",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrAccount)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "695b03cd-6297-dffd-eac9-98ae982224a1",
							"code": "GridDetail_zcqdktnDS_PgrPerformance",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrPerformance)#",
							"dataValueType": 10
						},
						{
							"id": "dab3a3bf-7e53-5e77-0608-455b78e65446",
							"code": "GridDetail_zcqdktnDS_PgrPerformanceText",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrPerformanceText)#",
							"dataValueType": 29
						},
						{
							"id": "89cb9b0c-a2ad-dfc8-0347-831f121ca566",
							"code": "GridDetail_zcqdktnDS_PgrCompetition",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrCompetition)#",
							"dataValueType": 10,
							"width": 191
						},
						{
							"id": "6f2bb649-074d-9171-6be5-ef184845dd49",
							"code": "GridDetail_zcqdktnDS_PgrCompetitionText",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrCompetitionText)#",
							"dataValueType": 29
						},
						{
							"id": "a8a5c8fb-8121-c224-bbff-e6d8ee8414f2",
							"code": "GridDetail_zcqdktnDS_PgrVisitBudget",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrVisitBudget)#",
							"dataValueType": 32,
							"width": 156
						},
						{
							"id": "fd843cd1-0557-f423-046a-6ffb38c312c7",
							"code": "GridDetail_zcqdktnDS_PgrNineDayAvg",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrNineDayAvg)#",
							"dataValueType": 32,
							"width": 259
						},
						{
							"id": "8333f50a-d131-7fb8-cedc-c139441e4ce6",
							"code": "GridDetail_zcqdktnDS_PgrVisitDeviation",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrVisitDeviation)#",
							"dataValueType": 32,
							"width": 182
						},
						{
							"id": "7455258a-1c57-e83d-7d8d-822303a09224",
							"code": "GridDetail_zcqdktnDS_PgrDeliveryShare",
							"caption": "#ResourceString(GridDetail_zcqdktnDS_PgrDeliveryShare)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_0je60yz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_eki7qua",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_eki7qua_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6k84kcz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_rlvcl3w",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_eki7qua",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_eugxxwy",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_rlvcl3w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_hf5ya0h",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_hf5ya0h_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zs3al7lDS"
						}
					}
				},
				"parentName": "FlexContainer_eugxxwy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0jls0dm",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_eki7qua",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zs3al7l",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$GridDetail_zs3al7l",
					"primaryColumnName": "GridDetail_zs3al7lDS_Id",
					"columns": [
						{
							"id": "ef6bef3f-5a22-8110-d4eb-31b47903c5d4",
							"code": "GridDetail_zs3al7lDS_Account",
							"caption": "#ResourceString(GridDetail_zs3al7lDS_Account)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "f14ed9bd-c859-bc96-f8ee-2d1185c972fb",
							"code": "GridDetail_zs3al7lDS_Status",
							"caption": "#ResourceString(GridDetail_zs3al7lDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "daa2be0c-97e0-100d-c674-54f3c8d6fb87",
							"code": "GridDetail_zs3al7lDS_Account_PgrOrderIntakeDayCounter",
							"caption": "#ResourceString(GridDetail_zs3al7lDS_Account_PgrOrderIntakeDayCounter)#",
							"dataValueType": 4
						},
						{
							"id": "5cea34e2-c07b-d12c-f0eb-7177ca719698",
							"code": "GridDetail_zs3al7lDS_Account_Pgr369BudgetCalculationPgrAccount_PgrToleranceAdjustedBudget_w1apktm",
							"caption": "#ResourceString(GridDetail_zs3al7lDS_Account_Pgr369BudgetCalculationPgrAccount_PgrToleranceAdjustedBudget_w1apktm)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_0jls0dm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ihwyode",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ihwyode_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6k84kcz",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_lee157d",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ihwyode",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bc2ojji",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lee157d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_56o32ha",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_56o32ha_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zs3al7lDS"
						}
					}
				},
				"parentName": "FlexContainer_bc2ojji",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_rdnxrpf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_ihwyode",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_6y6mb4l",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$DataGrid_6y6mb4l",
					"primaryColumnName": "DataGrid_6y6mb4lDS_Id",
					"columns": [
						{
							"id": "9f9bed8e-7299-8a63-d9e5-1bb9c31e0ef9",
							"code": "DataGrid_6y6mb4lDS_PgrAccount",
							"caption": "#ResourceString(DataGrid_6y6mb4lDS_PgrAccount)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "2fdc4345-6a91-d587-1598-69cfbb6f1c2e",
							"code": "DataGrid_6y6mb4lDS_Title",
							"caption": "#ResourceString(DataGrid_6y6mb4lDS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "47476cab-cfa0-16c1-95ec-5c7179a0e650",
							"code": "DataGrid_6y6mb4lDS_Status",
							"caption": "#ResourceString(DataGrid_6y6mb4lDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "5a825135-a412-7778-4d63-04e42c35956a",
							"code": "DataGrid_6y6mb4lDS_DueDate",
							"caption": "#ResourceString(DataGrid_6y6mb4lDS_DueDate)#",
							"dataValueType": 7
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_rdnxrpf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_fvqh9lp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_fvqh9lp_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6k84kcz",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_j9dfuat",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_fvqh9lp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2ei74lj",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_j9dfuat",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_s34uw4b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_s34uw4b_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_zs3al7lDS"
						}
					}
				},
				"parentName": "FlexContainer_2ei74lj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ait2xex",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_fvqh9lp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_p9ugu6a",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$DataGrid_p9ugu6a",
					"primaryColumnName": "DataGrid_p9ugu6aDS_Id",
					"columns": [
						{
							"id": "e948e192-d2ee-b621-c20a-22c46758651f",
							"code": "DataGrid_p9ugu6aDS_Account",
							"caption": "#ResourceString(DataGrid_p9ugu6aDS_Account)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "042a0ae8-0ce5-f887-18d0-0a6ab8bc5140",
							"code": "DataGrid_p9ugu6aDS_Title",
							"caption": "#ResourceString(DataGrid_p9ugu6aDS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "407a5c9d-2e40-ff78-dcb5-e9e8b6e2bd86",
							"code": "DataGrid_p9ugu6aDS_Status",
							"caption": "#ResourceString(DataGrid_p9ugu6aDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "09982a07-d182-ab76-00b9-59b34b9aa0ac",
							"code": "DataGrid_p9ugu6aDS_DueDate",
							"caption": "#ResourceString(DataGrid_p9ugu6aDS_DueDate)#",
							"dataValueType": 7
						}
					],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_ait2xex",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_e992jrs",
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabPanel_38lv5j1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "crt-color-coral",
					"fitContent": true,
					"visible": true,
					"stretch": true,
					"allowToggleClose": true
				},
				"parentName": "GridContainer_e992jrs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ovp5q9m",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_ovp5q9m_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_38lv5j1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ape3mla",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_ovp5q9m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_rhhwgpi",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrCompetitorBehaviour_zfvqw2n",
					"control": "$PDS_PgrCompetitorBehaviour_zfvqw2n",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ape3mla",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_aj4eize",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrMarketOverview_76jky30",
					"control": "$PDS_PgrMarketOverview_76jky30",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ape3mla",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_ddcwl23",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrClosingSummary_2tpmjl5",
					"control": "$PDS_PgrClosingSummary_2tpmjl5",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ape3mla",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_Footer",
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "large",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabPanel_923nfr3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "crt-color-coral",
					"fitContent": true,
					"visible": true,
					"stretch": true,
					"allowToggleClose": true
				},
				"parentName": "GridContainer_Footer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_9wi9cfc",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_9wi9cfc_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "TabPanel_923nfr3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_uiiwy5v",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_9wi9cfc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lvkkdtb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_uiiwy5v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_ekvneh5",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsManuallyGenerated_1e9nkcm",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$PDS_PgrIsManuallyGenerated_1e9nkcm",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "FlexContainer_lvkkdtb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_2uhu0lj",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrGeneratedOn_3tt28uz",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "left",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_PgrGeneratedOn_3tt28uz",
					"visible": true
				},
				"parentName": "FlexContainer_lvkkdtb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_lbb23cq",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrGeneratedById_bilx4j2",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "left",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrGeneratedById_bilx4j2",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "FlexContainer_lvkkdtb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_u20e7cd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u20e7cd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lbb23cq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_5nc61cy",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrSentOn_uaj5bt7",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "left",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_PgrSentOn_uaj5bt7",
					"visible": true
				},
				"parentName": "FlexContainer_lvkkdtb",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_esi6qw7",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSentById_q6mvzr5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "left",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrSentById_q6mvzr5",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "FlexContainer_lvkkdtb",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_66hk99h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_66hk99h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_esi6qw7",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_PgrWeekNumber_ecfkid1": {
						"modelConfig": {
							"path": "PDS.PgrWeekNumber"
						}
					},
					"PDS_PgrYearLookup_c4i5tul": {
						"modelConfig": {
							"path": "PDS.PgrYearLookup"
						}
					},
					"PDS_PgrYearLookup_c4i5tul_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrStatusId_jqi4wq8": {
						"modelConfig": {
							"path": "PDS.PgrStatusId"
						}
					},
					"PDS_PgrStatusId_jqi4wq8_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrSalesManagerId_p0obbmn": {
						"modelConfig": {
							"path": "PDS.PgrSalesManagerId"
						}
					},
					"PDS_PgrSalesManagerId_p0obbmn_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrLanguageId_larrdle": {
						"modelConfig": {
							"path": "PDS.PgrLanguageId"
						}
					},
					"PDS_PgrLanguageId_larrdle_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrPeriodStart_jtt82ph": {
						"modelConfig": {
							"path": "PDS.PgrPeriodStart"
						}
					},
					"PDS_PgrPeriodEnd_rgrgwxm": {
						"modelConfig": {
							"path": "PDS.PgrPeriodEnd"
						}
					},
					"PDS_PgrIsManuallyGenerated_1e9nkcm": {
						"modelConfig": {
							"path": "PDS.PgrIsManuallyGenerated"
						}
					},
					"PDS_PgrGeneratedOn_3tt28uz": {
						"modelConfig": {
							"path": "PDS.PgrGeneratedOn"
						}
					},
					"PDS_PgrGeneratedById_bilx4j2": {
						"modelConfig": {
							"path": "PDS.PgrGeneratedById"
						}
					},
					"PDS_PgrGeneratedById_bilx4j2_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrCompetitorBehaviour_zfvqw2n": {
						"modelConfig": {
							"path": "PDS.PgrCompetitorBehaviour"
						}
					},
					"PDS_PgrClosingSummary_2tpmjl5": {
						"modelConfig": {
							"path": "PDS.PgrClosingSummary"
						}
					},
					"PDS_PgrMarketOverview_76jky30": {
						"modelConfig": {
							"path": "PDS.PgrMarketOverview"
						}
					},
					"PDS_PgrSentById_q6mvzr5": {
						"modelConfig": {
							"path": "PDS.PgrSentById"
						}
					},
					"PDS_PgrSentById_q6mvzr5_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrSentOn_uaj5bt7": {
						"modelConfig": {
							"path": "PDS.PgrSentOn"
						}
					},
					"GridDetail_crlfqp1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_crlfqp1DS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "PgrAccount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_crlfqp1DS_PgrAccount": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrAccount"
									}
								},
								"GridDetail_crlfqp1DS_PgrNumber": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrNumber"
									}
								},
								"GridDetail_crlfqp1DS_PgrVisitDate": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrVisitDate"
									}
								},
								"GridDetail_crlfqp1DS_PgrVisitType": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrVisitType"
									}
								},
								"GridDetail_crlfqp1DS_PgrVisitReason": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrVisitReason"
									}
								},
								"GridDetail_crlfqp1DS_PgrVisitDidNotTakePlace": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrVisitDidNotTakePlace"
									}
								},
								"GridDetail_crlfqp1DS_PgrNoVisitReason": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrNoVisitReason"
									}
								},
								"GridDetail_crlfqp1DS_PgrTopicQuality": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrTopicQuality"
									}
								},
								"GridDetail_crlfqp1DS_PgrTopicServiceDelivery": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrTopicServiceDelivery"
									}
								},
								"GridDetail_crlfqp1DS_PgrTopicCommercial": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrTopicCommercial"
									}
								},
								"GridDetail_crlfqp1DS_PgrTopicProjectsOpportunities": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrTopicProjectsOpportunities"
									}
								},
								"GridDetail_crlfqp1DS_PgrTopicSpecial": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrTopicSpecial"
									}
								},
								"GridDetail_crlfqp1DS_PgrKeyTopics": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.PgrKeyTopics"
									}
								},
								"GridDetail_crlfqp1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_crlfqp1DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zs3al7l": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zs3al7lDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_zs3al7l_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Account"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zs3al7lDS_Account": {
									"modelConfig": {
										"path": "GridDetail_zs3al7lDS.Account"
									}
								},
								"GridDetail_zs3al7lDS_Status": {
									"modelConfig": {
										"path": "GridDetail_zs3al7lDS.Status"
									}
								},
								"GridDetail_zs3al7lDS_Account_PgrOrderIntakeDayCounter": {
									"modelConfig": {
										"path": "GridDetail_zs3al7lDS.Account_PgrOrderIntakeDayCounter"
									}
								},
								"GridDetail_zs3al7lDS_Account_Pgr369BudgetCalculationPgrAccount_PgrToleranceAdjustedBudget_w1apktm": {
									"modelConfig": {
										"path": "GridDetail_zs3al7lDS.Account_Pgr369BudgetCalculationPgrAccount_PgrToleranceAdjustedBudget_w1apktm"
									}
								},
								"GridDetail_zs3al7lDS_Id": {
									"modelConfig": {
										"path": "GridDetail_zs3al7lDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zs3al7l_PredefinedFilter": {
						"value": {
							"items": {
								"1e46695c-3f61-4a3d-8fc1-9c1692f17c25": {
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
								"aa8bb582-ca5d-4aef-a0fb-9e4c414f64dc": {
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
													"Name": "Closed by system",
													"Id": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"value": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"displayValue": "Closed by system"
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
								"4bc7b8b9-1f33-48b7-9cdb-25d3fb3d6a86": {
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
										"macrosType": 8
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"DataGrid_6y6mb4l": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_6y6mb4lDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "PgrAccount"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_6y6mb4l_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_6y6mb4lDS_PgrAccount": {
									"modelConfig": {
										"path": "DataGrid_6y6mb4lDS.PgrAccount"
									}
								},
								"DataGrid_6y6mb4lDS_Title": {
									"modelConfig": {
										"path": "DataGrid_6y6mb4lDS.Title"
									}
								},
								"DataGrid_6y6mb4lDS_Status": {
									"modelConfig": {
										"path": "DataGrid_6y6mb4lDS.Status"
									}
								},
								"DataGrid_6y6mb4lDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_6y6mb4lDS.DueDate"
									}
								},
								"DataGrid_6y6mb4lDS_Id": {
									"modelConfig": {
										"path": "DataGrid_6y6mb4lDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_6y6mb4l_PredefinedFilter": {
						"value": {
							"items": {
								"795f221b-0c4e-4382-86e0-d06b88624062": {
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
										}
									]
								},
								"10df04d9-55a9-4ea4-bc05-93ef86e103e8": {
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
													"Name": "Closed by system",
													"Id": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"value": "de886b4e-c4c5-462f-bd85-ae1694a655ae",
													"displayValue": "Closed by system"
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
								"1294c30d-f9aa-43fe-8451-463ec0ee4ae6": {
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
										"macrosType": 8
									}
								},
								"3e8011f3-5e3a-4d7a-969b-3a666334a0cd": {
									"filterType": 2,
									"comparisonType": 2,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PgrVisitReport"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "PgrVisitReport",
									"isNull": false
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"DataGrid_p9ugu6a": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_p9ugu6aDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Account"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_p9ugu6a_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_p9ugu6aDS_Account": {
									"modelConfig": {
										"path": "DataGrid_p9ugu6aDS.Account"
									}
								},
								"DataGrid_p9ugu6aDS_Title": {
									"modelConfig": {
										"path": "DataGrid_p9ugu6aDS.Title"
									}
								},
								"DataGrid_p9ugu6aDS_Status": {
									"modelConfig": {
										"path": "DataGrid_p9ugu6aDS.Status"
									}
								},
								"DataGrid_p9ugu6aDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_p9ugu6aDS.DueDate"
									}
								},
								"DataGrid_p9ugu6aDS_Id": {
									"modelConfig": {
										"path": "DataGrid_p9ugu6aDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_p9ugu6a_PredefinedFilter": {
						"value": {
							"items": {
								"889a0679-30f8-4e20-aea7-d03bfd13b554": {
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
								"259de205-2f5a-4543-91db-7ce2daf996e7": {
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
										"macrosType": 8
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_PgrSalesManagerIdPgrTerritory_jk5wttg": {
						"modelConfig": {
							"path": "PDS.PgrSalesManagerIdPgrTerritory_jk5wttg"
						}
					},
					"PDS_PgrSalesManagerIdPgrTerritory_jk5wttg_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"GridDetail_zcqdktn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zcqdktnDS",
							"filterAttributes": [],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "PgrAccount"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zcqdktnDS_PgrAccount": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrAccount"
									}
								},
								"GridDetail_zcqdktnDS_PgrPerformance": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrPerformance"
									}
								},
								"GridDetail_zcqdktnDS_PgrPerformanceText": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrPerformanceText"
									}
								},
								"GridDetail_zcqdktnDS_PgrCompetition": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrCompetition"
									}
								},
								"GridDetail_zcqdktnDS_PgrCompetitionText": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrCompetitionText"
									}
								},
								"GridDetail_zcqdktnDS_PgrVisitBudget": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrVisitBudget"
									}
								},
								"GridDetail_zcqdktnDS_PgrNineDayAvg": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrNineDayAvg"
									}
								},
								"GridDetail_zcqdktnDS_PgrVisitDeviation": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrVisitDeviation"
									}
								},
								"GridDetail_zcqdktnDS_PgrDeliveryShare": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.PgrDeliveryShare"
									}
								},
								"GridDetail_zcqdktnDS_Id": {
									"modelConfig": {
										"path": "GridDetail_zcqdktnDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_crlfqp1DS": [
							{
								"attributePath": "PgrWeeklyReportId",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_zs3al7lDS": [
							{
								"attributePath": "Owner",
								"relationPath": "PDS.PgrSalesManagerId"
							}
						],
						"DataGrid_p9ugu6aDS": [
							{
								"attributePath": "Owner",
								"relationPath": "PDS.PgrSalesManagerId"
							}
						],
						"GridDetail_zcqdktnDS": [
							{
								"attributePath": "PgrWeeklyReportId",
								"relationPath": "PDS.Id"
							}
						],
						"DataGrid_6y6mb4lDS": [
							{
								"attributePath": "PgrVisitReport",
								"relationPath": "GridDetail_crlfqp1DS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "PgrWeeklySalesReport",
							"attributes": {
								"PgrSalesManagerIdPgrTerritory_jk5wttg": {
									"path": "PgrSalesManagerId.PgrTerritory",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_crlfqp1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrVisitReport",
							"attributes": {
								"PgrAccount": {
									"path": "PgrAccount"
								},
								"PgrNumber": {
									"path": "PgrNumber"
								},
								"PgrVisitDate": {
									"path": "PgrVisitDate"
								},
								"PgrVisitType": {
									"path": "PgrVisitType"
								},
								"PgrVisitReason": {
									"path": "PgrVisitReason"
								},
								"PgrVisitDidNotTakePlace": {
									"path": "PgrVisitDidNotTakePlace"
								},
								"PgrNoVisitReason": {
									"path": "PgrNoVisitReason"
								},
								"PgrTopicQuality": {
									"path": "PgrTopicQuality"
								},
								"PgrTopicServiceDelivery": {
									"path": "PgrTopicServiceDelivery"
								},
								"PgrTopicCommercial": {
									"path": "PgrTopicCommercial"
								},
								"PgrTopicProjectsOpportunities": {
									"path": "PgrTopicProjectsOpportunities"
								},
								"PgrTopicSpecial": {
									"path": "PgrTopicSpecial"
								},
								"PgrKeyTopics": {
									"path": "PgrKeyTopics"
								}
							}
						}
					},
					"GridDetail_zs3al7lDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Account": {
									"path": "Account"
								},
								"Status": {
									"path": "Status"
								},
								"Account_PgrOrderIntakeDayCounter": {
									"type": "ForwardReference",
									"path": "Account.PgrOrderIntakeDayCounter"
								},
								"Account_Pgr369BudgetCalculationPgrAccount_PgrToleranceAdjustedBudget_w1apktm": {
									"type": "Aggregation",
									"path": "Account.[Pgr369BudgetCalculation:PgrAccount].PgrToleranceAdjustedBudget",
									"aggregationConfig": {
										"aggregationFunction": "Sum"
									}
								}
							}
						}
					},
					"DataGrid_6y6mb4lDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"PgrAccount": {
									"path": "PgrAccount"
								},
								"Title": {
									"path": "Title"
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
					"DataGrid_p9ugu6aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Account": {
									"path": "Account"
								},
								"Title": {
									"path": "Title"
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
					"GridDetail_zcqdktnDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrVisitReport",
							"attributes": {
								"PgrAccount": {
									"path": "PgrAccount"
								},
								"PgrPerformance": {
									"path": "PgrPerformance"
								},
								"PgrPerformanceText": {
									"path": "PgrPerformanceText"
								},
								"PgrCompetition": {
									"path": "PgrCompetition"
								},
								"PgrCompetitionText": {
									"path": "PgrCompetitionText"
								},
								"PgrVisitBudget": {
									"path": "PgrVisitBudget"
								},
								"PgrNineDayAvg": {
									"path": "PgrNineDayAvg"
								},
								"PgrVisitDeviation": {
									"path": "PgrVisitDeviation"
								},
								"PgrDeliveryShare": {
									"path": "PgrDeliveryShare"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PgrGenerateAndPrintReportRequest",
				handler: async (request, next) => {
					await sdk.HandlerChainService.instance.process({
						type: "crt.RunBusinessProcessRequest",
						processName: "PgrWeeklyReportData",
						processRunType: "ForTheSelectedPage",
						saveAtProcessStart: true,
						showNotification: true,
						recordIdProcessParameterName: "ParameterReportID",
						$context: request.$context,
						scopes: [...request.scopes]
					});
					await sdk.HandlerChainService.instance.process({
						type: "crt.PrintablesRequest",
						dataSourceName: "PDS",
						templateId: "fac82928-2a73-5569-fe8b-baf7d7c23974",
						printableCaption: "Weekly Sales Report",
						filters: null,
						$context: request.$context,
						scopes: [...request.scopes]
					});
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});