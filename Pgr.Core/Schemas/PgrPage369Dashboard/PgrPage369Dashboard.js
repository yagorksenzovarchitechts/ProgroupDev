define("PgrPage369Dashboard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "GridContainer_xu8nnal",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 12,
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d8em3q2",
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
					"fitContent": true
				},
				"parentName": "GridContainer_xu8nnal",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_euba5qp",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_euba5qp_config_caption)#",
						"hint": "",
						"icon": "work-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Account",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_euba5qp_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_euba5qp_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_euba5qp_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_8dqngzb",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_8dqngzb_config_caption)#",
						"hint": "",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_8dqngzb_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_5vg8g3r",
													"filterColumn": "PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "Account.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "Account.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_IndicatorWidget_4zzc2is_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_4zzc2is_Data",
													"filterColumn": "PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "Account.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "Account.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_8dqngzb_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "Account.PgrSalesManager"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_8dqngzb_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_hfjkws3",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_hfjkws3_config_caption)#",
						"hint": "",
						"icon": "contact-leads-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_hfjkws3_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_5vg8g3r",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "Account.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "Account.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_IndicatorWidget_4zzc2is_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_4zzc2is_Data",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "Account.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "Account.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_hfjkws3_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "Account.PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_hfjkws3_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_qlugkq6",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_qlugkq6_config_caption)#",
						"hint": "",
						"icon": "webcheck-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Country",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_qlugkq6_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_5vg8g3r",
													"filterColumn": "Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "Account.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "Account.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_IndicatorWidget_4zzc2is_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_4zzc2is_Data",
													"filterColumn": "Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "Account.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "Account.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_qlugkq6_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "Account.Country"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_qlugkq6_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_gw8mhx3",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_gw8mhx3_config_caption)#",
						"hint": "",
						"icon": "map-with-pin-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Territory",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_gw8mhx3_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_5vg8g3r",
													"filterColumn": "Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "Account.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "Account.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_4zzc2is_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_4zzc2is_Data",
													"filterColumn": "Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "Account.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "Account.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_gw8mhx3_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "Account.Territory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_gw8mhx3_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_oavwhzq",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_oavwhzq_config_caption)#",
						"hint": "",
						"icon": "dashboards-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "PgrDeviationReasonCode",
						"recordsFilter": null,
						"defaultValueListSorting": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_oavwhzq_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_5vg8g3r",
													"filterColumn": "[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_IndicatorWidget_omfkkrs_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_omfkkrs_Data",
													"filterColumn": "PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_IndicatorWidget_2a8rq9m_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_2a8rq9m_Data",
													"filterColumn": "PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_x197886_SeriesData_n2dbcs9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_n2dbcs9",
													"filterColumn": "PgrAccountId.[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_x197886_SeriesData_l0snlf1",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_x197886_SeriesData_l0snlf1",
													"filterColumn": "PgrAccountId.[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_IndicatorWidget_4zzc2is_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "IndicatorWidget_4zzc2is_Data",
													"filterColumn": "[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"filterColumn": "PgrAccountId.[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_v0di9fu_SeriesData_jdshjzu",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"filterColumn": "PgrAccountId.[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"filterColumn": "PgrAccountId.[Activity:Account].PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"filterColumn": "PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_ChartWidget_owf9zxk_SeriesData_7f4bwea",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"filterColumn": "PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_oavwhzq_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_w7vmwme",
													"filterColumn": "PgrReasonCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_oavwhzq_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "FlexContainer_d8em3q2",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_4zzc2is",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 4,
						"row": 2,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_4zzc2is_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "navy-blue",
							"icon": {
								"iconName": "contact-icon",
								"color": "navy-blue"
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_4zzc2is_config_text_template)#",
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
								"attribute": "IndicatorWidget_4zzc2is_Data",
								"schemaName": "Account",
								"filters": {
									"filter": {
										"items": {
											"2812b1f4-08c1-430b-b69f-bdebf3b7873b": {
												"filterType": 1,
												"comparisonType": 7,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 3,
													"functionType": 2,
													"aggregationType": 1,
													"columnPath": "[Activity:Account].Id",
													"subFilters": {
														"items": {
															"5c74f084-cc3b-43b1-8474-619bd31b166c": {
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
																	},
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Open",
																				"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																				"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																				"displayValue": "Open"
																			}
																		}
																	}
																]
															},
															"66333e9b-9874-4651-a72f-c3e33ac3d95a": {
																"items": {
																	"7cfb8a7a-47a1-4d05-8387-dd8cbd833aba": {
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
																	"32d31948-40a4-4ec8-84d4-bf6053993171": {
																		"filterType": 4,
																		"comparisonType": 3,
																		"isEnabled": true,
																		"trimDateTimeParameterToDate": false,
																		"leftExpression": {
																			"expressionType": 0,
																			"columnPath": "PgrParentTask.ActivityCategory"
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
																	}
																},
																"logicalOperation": 1,
																"isEnabled": true,
																"filterType": 6,
																"rootSchemaName": "Activity",
																"key": "66333e9b-9874-4651-a72f-c3e33ac3d95a"
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity",
														"key": "4a0f8020-626e-448b-9454-507b207951cb"
													}
												},
												"isAggregative": true,
												"dataValueType": 4,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 4,
														"value": 0
													}
												},
												"subFilters": {
													"items": {
														"5c74f084-cc3b-43b1-8474-619bd31b166c": {
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
																},
																{
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 10,
																		"value": {
																			"Name": "Open",
																			"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																			"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																			"displayValue": "Open"
																		}
																	}
																}
															]
														},
														"66333e9b-9874-4651-a72f-c3e33ac3d95a": {
															"items": {
																"7cfb8a7a-47a1-4d05-8387-dd8cbd833aba": {
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
																"32d31948-40a4-4ec8-84d4-bf6053993171": {
																	"filterType": 4,
																	"comparisonType": 3,
																	"isEnabled": true,
																	"trimDateTimeParameterToDate": false,
																	"leftExpression": {
																		"expressionType": 0,
																		"columnPath": "PgrParentTask.ActivityCategory"
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
																}
															},
															"logicalOperation": 1,
															"isEnabled": true,
															"filterType": 6,
															"rootSchemaName": "Activity",
															"key": "66333e9b-9874-4651-a72f-c3e33ac3d95a"
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "Activity",
													"key": "4a0f8020-626e-448b-9454-507b207951cb"
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Account"
									},
									"filterAttributes": [
										{
											"attribute": "QuickFilter_8dqngzb_IndicatorWidget_4zzc2is_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_hfjkws3_IndicatorWidget_4zzc2is_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_qlugkq6_IndicatorWidget_4zzc2is_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_4zzc2is_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_oavwhzq_IndicatorWidget_4zzc2is_Data",
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
						"hint": "#ResourceString(IndicatorWidget_4zzc2is_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_omfkkrs",
				"values": {
					"layoutConfig": {
						"column": 5,
						"colSpan": 4,
						"row": 2,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_omfkkrs_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "navy-blue",
							"icon": {
								"iconName": "info-icon"
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_omfkkrs_config_text_template)#",
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
								"attribute": "IndicatorWidget_omfkkrs_Data",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"4abb4a01-e33e-4fff-81a4-2ba7173acf64": {
												"items": {
													"4651936c-30bc-43b1-96c7-aab953298bc9": {
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
													"f235fc6a-9426-4012-b6df-15dfba04e0cc": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrParentTask.ActivityCategory"
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
													}
												},
												"logicalOperation": 1,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Activity",
												"key": "4abb4a01-e33e-4fff-81a4-2ba7173acf64"
											},
											"f9bf9f6f-98f1-4171-a07c-01a0dc53d65e": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "PgrOverdueDays"
												},
												"isAggregative": false,
												"dataValueType": 4,
												"isNull": false
											},
											"de54ae5e-cc1c-46f3-b683-464b93b997d1": {
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
											},
											"c5ab406f-1ff4-4ee4-a0d2-aadb28f3da87": {
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
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Open",
																"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																"displayValue": "Open"
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
									"filterAttributes": [
										{
											"attribute": "QuickFilter_euba5qp_IndicatorWidget_omfkkrs_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_8dqngzb_IndicatorWidget_omfkkrs_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_hfjkws3_IndicatorWidget_omfkkrs_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_qlugkq6_IndicatorWidget_omfkkrs_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_omfkkrs_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_oavwhzq_IndicatorWidget_omfkkrs_Data",
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
						"hint": "#ResourceString(IndicatorWidget_omfkkrs_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_2a8rq9m",
				"values": {
					"layoutConfig": {
						"column": 9,
						"colSpan": 4,
						"row": 2,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_2a8rq9m_title)#",
						"theme": "without-fill",
						"layout": {
							"color": "navy-blue",
							"icon": {
								"iconName": "catalog-icon"
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_2a8rq9m_config_text_template)#",
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
								"attribute": "IndicatorWidget_2a8rq9m_Data",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"4abb4a01-e33e-4fff-81a4-2ba7173acf64": {
												"items": {
													"4651936c-30bc-43b1-96c7-aab953298bc9": {
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
													"f235fc6a-9426-4012-b6df-15dfba04e0cc": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrParentTask.ActivityCategory"
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
													}
												},
												"logicalOperation": 1,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Activity",
												"key": "4abb4a01-e33e-4fff-81a4-2ba7173acf64"
											},
											"c5ab406f-1ff4-4ee4-a0d2-aadb28f3da87": {
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
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Open",
																"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																"displayValue": "Open"
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
									"filterAttributes": [
										{
											"attribute": "QuickFilter_euba5qp_IndicatorWidget_2a8rq9m_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_8dqngzb_IndicatorWidget_2a8rq9m_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_hfjkws3_IndicatorWidget_2a8rq9m_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_qlugkq6_IndicatorWidget_2a8rq9m_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_gw8mhx3_IndicatorWidget_2a8rq9m_Data",
											"loadOnChange": true
										},
										{
											"attribute": "QuickFilter_oavwhzq_IndicatorWidget_2a8rq9m_Data",
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
						"hint": "#ResourceString(IndicatorWidget_2a8rq9m_hint)#"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ChartWidget_v0di9fu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 6,
						"row": 4,
						"rowSpan": 2
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_v0di9fu_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_v0di9fu_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_v0di9fu_yAxis)#",
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
								"color": "navy-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_v0di9fu_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_v0di9fu_SeriesData_6nlz3dw",
										"schemaName": "PgrAccountMetricValue",
										"filters": {
											"filter": {
												"items": {
													"2aa14ec7-dfc0-4a5a-ad69-79ea050c4a85": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														},
														"isAggregative": false,
														"dataValueType": 8,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 7
														}
													},
													"f6b0b80e-7833-4f4c-b895-94542db5f51f": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"20c03efd-8528-41e4-8df1-cfe35192ab38": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrPeriodUnitId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrPeriodUnit",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Day",
																		"Id": "9a6270c7-4fee-4f8a-98a9-896d1a462947",
																		"value": "9a6270c7-4fee-4f8a-98a9-896d1a462947",
																		"displayValue": "Day"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_v0di9fu_SeriesData_6nlz3dw",
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
														"columnPath": "PgrValue"
													},
													"functionType": 2,
													"aggregationType": 2,
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
													"columnPath": "PgrMetricTypeId"
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
								"color": "dark-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_v0di9fu_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_v0di9fu_SeriesData_jdshjzu",
										"schemaName": "PgrAccountMetricValue",
										"filters": {
											"filter": {
												"items": {
													"2aa14ec7-dfc0-4a5a-ad69-79ea050c4a85": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														},
														"isAggregative": false,
														"dataValueType": 8,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 6
														}
													},
													"f6b0b80e-7833-4f4c-b895-94542db5f51f": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"20c03efd-8528-41e4-8df1-cfe35192ab38": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrPeriodUnitId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrPeriodUnit",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Day",
																		"Id": "9a6270c7-4fee-4f8a-98a9-896d1a462947",
																		"value": "9a6270c7-4fee-4f8a-98a9-896d1a462947",
																		"displayValue": "Day"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_v0di9fu_SeriesData_jdshjzu",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_v0di9fu_SeriesData_jdshjzu",
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
														"columnPath": "PgrValue"
													},
													"functionType": 2,
													"aggregationType": 2,
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
													"columnPath": "PgrMetricTypeId"
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
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ChartWidget_x197886",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"rowSpan": 2,
						"row": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_x197886_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_x197886_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_x197886_yAxis)#",
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
								"color": "navy-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_x197886_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_x197886_SeriesData_n2dbcs9",
										"schemaName": "PgrAccountMetricValue",
										"filters": {
											"filter": {
												"items": {
													"2aa14ec7-dfc0-4a5a-ad69-79ea050c4a85": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														},
														"isAggregative": false,
														"dataValueType": 8,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 10
														}
													},
													"f6b0b80e-7833-4f4c-b895-94542db5f51f": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"20c03efd-8528-41e4-8df1-cfe35192ab38": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrPeriodUnitId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrPeriodUnit",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Month",
																		"Id": "deda94c4-255e-4def-b4e7-d991b44d3f74",
																		"value": "deda94c4-255e-4def-b4e7-d991b44d3f74",
																		"displayValue": "Month"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_x197886_SeriesData_n2dbcs9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_x197886_SeriesData_n2dbcs9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_x197886_SeriesData_n2dbcs9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_x197886_SeriesData_n2dbcs9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_x197886_SeriesData_n2dbcs9",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_x197886_SeriesData_n2dbcs9",
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
														"columnPath": "PgrValue"
													},
													"functionType": 2,
													"aggregationType": 2,
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
													"columnPath": "PgrMetricTypeId"
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
								"color": "dark-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(ChartWidget_x197886_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_x197886_SeriesData_l0snlf1",
										"schemaName": "PgrAccountMetricValue",
										"filters": {
											"filter": {
												"items": {
													"2aa14ec7-dfc0-4a5a-ad69-79ea050c4a85": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														},
														"isAggregative": false,
														"dataValueType": 8,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 9
														}
													},
													"f6b0b80e-7833-4f4c-b895-94542db5f51f": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"20c03efd-8528-41e4-8df1-cfe35192ab38": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrPeriodUnitId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrPeriodUnit",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Month",
																		"Id": "deda94c4-255e-4def-b4e7-d991b44d3f74",
																		"value": "deda94c4-255e-4def-b4e7-d991b44d3f74",
																		"displayValue": "Month"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_x197886_SeriesData_l0snlf1",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_x197886_SeriesData_l0snlf1",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_x197886_SeriesData_l0snlf1",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_x197886_SeriesData_l0snlf1",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_x197886_SeriesData_l0snlf1",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_x197886_SeriesData_l0snlf1",
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
														"columnPath": "PgrValue"
													},
													"functionType": 2,
													"aggregationType": 2,
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
													"columnPath": "PgrMetricTypeId"
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
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_2lq2p86",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 7,
						"row": 6,
						"rowSpan": 5
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_15lebsl",
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
				"parentName": "GridContainer_2lq2p86",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_gvcwang",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_gvcwang_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#003089",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_15lebsl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rh50oqd",
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
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "GridContainer_15lebsl",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_5j4wspu",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_5j4wspu_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_5j4wspu_DataGrid_5vg8g3r",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_5vg8g3r"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_5j4wspu_SearchValue",
							"SearchFilter_5j4wspu_FilteredColumnsGroups"
						]
					},
					"iconOnly": true
				},
				"parentName": "FlexContainer_rh50oqd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_5vg8g3r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 7
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_5vg8g3r",
					"primaryColumnName": "DataGrid_5vg8g3rDS_Id",
					"columns": [
						{
							"id": "15db48b4-8413-be1c-37fd-b5f3e9cf49dd",
							"code": "DataGrid_5vg8g3rDS_Name",
							"caption": "#ResourceString(DataGrid_5vg8g3rDS_Name)#",
							"dataValueType": 28,
							"width": 144
						},
						{
							"id": "55fafb72-e805-2b0e-b64e-7c350f845a6b",
							"code": "DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_fyzkp9p",
							"caption": "#ResourceString(DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_fyzkp9p)#",
							"dataValueType": 32
						},
						{
							"id": "c3e05800-3dbe-9e6e-b4f2-7501a032233c",
							"code": "DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_zm8sxhl",
							"caption": "#ResourceString(DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_zm8sxhl)#",
							"dataValueType": 32,
							"width": 259
						},
						{
							"id": "6eb972ce-94ca-ff35-ea21-3a9f442debf3",
							"code": "DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_003adui",
							"caption": "#ResourceString(DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_003adui)#",
							"dataValueType": 32,
							"width": 257
						},
						{
							"id": "d207e5e3-129a-8285-7327-b4990b2c17a5",
							"code": "DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_nlb9hy3",
							"caption": "#ResourceString(DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_nlb9hy3)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_2lq2p86",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChartWidget_jg9ahyn",
				"values": {
					"layoutConfig": {
						"column": 8,
						"colSpan": 5,
						"row": 6,
						"rowSpan": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_jg9ahyn_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "#ResourceString(ChartWidget_jg9ahyn_xAxis)#",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "#ResourceString(ChartWidget_jg9ahyn_yAxis)#",
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
								"label": "#ResourceString(ChartWidget_jg9ahyn_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_jg9ahyn_SeriesData_sjau3r8",
										"schemaName": "PgrAccountMetricValue",
										"filters": {
											"filter": {
												"items": {
													"dde41d16-ed57-4565-979f-def4176461cf": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"c423f0c2-b3e1-4b67-b6ae-bfa3eb047323": {
														"items": {
															"99eff1c5-c04a-4f2f-be2e-8aa698cff8d0": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": true,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrDate"
																},
																"isAggregative": false,
																"dataValueType": 8,
																"rightExpression": {
																	"expressionType": 1,
																	"functionType": 1,
																	"macrosType": 10
																}
															},
															"441ebbda-dfe5-4865-940b-354a2de49789": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": true,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrDate"
																},
																"isAggregative": false,
																"dataValueType": 8,
																"rightExpression": {
																	"expressionType": 1,
																	"functionType": 1,
																	"macrosType": 9
																}
															}
														},
														"logicalOperation": 1,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "PgrAccountMetricValue",
														"key": "c423f0c2-b3e1-4b67-b6ae-bfa3eb047323"
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_jg9ahyn_SeriesData_sjau3r8",
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
														"columnPath": "PgrValue"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "PgrDate"
														},
														"functionType": 3,
														"datePartType": 2
													}
												}
											]
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
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ChartWidget_jk2m9xb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 11,
						"rowSpan": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_jk2m9xb_title)#",
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
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_jk2m9xb_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
										"schemaName": "Activity",
										"filters": {
											"filter": {
												"items": {
													"27282b1a-44e9-4e9e-b782-aa784fbcacd5": {
														"items": {
															"6cb62bdb-9d18-433e-be24-9cd1756f0d8c": {
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
															"aa8a1093-0ceb-40e0-80ab-2b845ae1c632": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrParentTask.ActivityCategory"
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
															}
														},
														"logicalOperation": 1,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity",
														"key": "27282b1a-44e9-4e9e-b782-aa784fbcacd5"
													},
													"1804a800-3a40-4ae1-8bfe-9b43572695e7": {
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
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Open",
																		"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																		"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
																		"displayValue": "Open"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrReasonCode"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Activity"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_jk2m9xb_SeriesData_j4fu2ys",
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
													"columnPath": "PgrReasonCode"
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
									"display": false
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
				"parentName": "Main",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ChartWidget_owf9zxk",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 5,
						"row": 11
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_owf9zxk_title)#",
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
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_owf9zxk_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_owf9zxk_SeriesData_7f4bwea",
										"schemaName": "Activity",
										"filters": {
											"filter": {
												"items": {
													"27282b1a-44e9-4e9e-b782-aa784fbcacd5": {
														"items": {
															"6cb62bdb-9d18-433e-be24-9cd1756f0d8c": {
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
															"aa8a1093-0ceb-40e0-80ab-2b845ae1c632": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrParentTask.ActivityCategory"
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
															}
														},
														"logicalOperation": 1,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity",
														"key": "27282b1a-44e9-4e9e-b782-aa784fbcacd5"
													},
													"1804a800-3a40-4ae1-8bfe-9b43572695e7": {
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
																		"Name": "Cancelled",
																		"Id": "8dd2d787-2792-420c-8891-be9de36a600d",
																		"value": "8dd2d787-2792-420c-8891-be9de36a600d",
																		"displayValue": "Cancelled"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrReasonCode"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Activity"
											},
											"filterAttributes": [
												{
													"attribute": "QuickFilter_euba5qp_ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_8dqngzb_ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_hfjkws3_ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_qlugkq6_ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_gw8mhx3_ChartWidget_owf9zxk_SeriesData_7f4bwea",
													"loadOnChange": true
												},
												{
													"attribute": "QuickFilter_oavwhzq_ChartWidget_owf9zxk_SeriesData_7f4bwea",
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
													"columnPath": "PgrReasonCode"
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
									"display": false
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
				"parentName": "Main",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "GridContainer_42ssxrv",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"rowSpan": 5,
						"row": 11
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "GridContainer_cugzrra",
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
				"parentName": "GridContainer_42ssxrv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_c4756rt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_c4756rt_caption)#)#",
					"labelType": "headline-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#003089",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_cugzrra",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_lb0t90d",
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
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "GridContainer_cugzrra",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_ble6xgu",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_ble6xgu_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_ble6xgu_DataGrid_w7vmwme",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_w7vmwme"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_ble6xgu_SearchValue",
							"SearchFilter_ble6xgu_FilteredColumnsGroups"
						]
					},
					"iconOnly": true
				},
				"parentName": "FlexContainer_lb0t90d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_w7vmwme",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 8
					},
					"type": "crt.DataGrid",
					"features": {
						"hierarchical": {
							"enable": true
						},
						"rows": {
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_w7vmwme",
					"primaryColumnName": "DataGrid_w7vmwmeDS_Id",
					"columns": [
						{
							"id": "55ae86a9-9a89-07af-cf2e-d46f90a9686b",
							"code": "DataGrid_w7vmwmeDS_Title",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "c9cc9670-fe38-278e-563f-87aaa895820f",
							"code": "DataGrid_w7vmwmeDS_Account",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "6966728a-18f5-ef40-7451-6eeb9982c333",
							"code": "DataGrid_w7vmwmeDS_Owner",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_Owner)#",
							"dataValueType": 10
						},
						{
							"id": "d31df6c8-46c4-e561-45f2-817e0fb4a16a",
							"code": "DataGrid_w7vmwmeDS_Status",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "d4aa1996-1c9e-6909-6527-3859bd616461",
							"code": "DataGrid_w7vmwmeDS_PgrOverdueDays",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_PgrOverdueDays)#",
							"dataValueType": 4
						},
						{
							"id": "14fea63f-4fe5-cc5b-2bb8-ef1ca0852ed7",
							"code": "DataGrid_w7vmwmeDS_PgrOverdueDays",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_PgrOverdueDays)#",
							"dataValueType": 4
						},
						{
							"id": "2d72a7b9-3842-a0a9-aa74-3933de5d2930",
							"code": "DataGrid_w7vmwmeDS_DueDate",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_DueDate)#",
							"dataValueType": 7,
							"width": 200
						},
						{
							"id": "76bdd1ec-fbe1-0008-bfbc-6c0d91c7640c",
							"code": "DataGrid_w7vmwmeDS_PgrReasonCode",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_PgrReasonCode)#",
							"dataValueType": 10
						},
						{
							"id": "efa33c8b-8b85-f8f8-29c3-6c33c39c7925",
							"code": "DataGrid_w7vmwmeDS_PgrParentTask",
							"caption": "#ResourceString(DataGrid_w7vmwmeDS_PgrParentTask)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_42ssxrv",
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
					"DataGrid_5vg8g3r": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_5vg8g3rDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_5vg8g3r_PredefinedFilter"
								},
								{
									"name": "QuickFilter_8dqngzb_DataGrid_5vg8g3r",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_hfjkws3_DataGrid_5vg8g3r",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_qlugkq6_DataGrid_5vg8g3r",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_gw8mhx3_DataGrid_5vg8g3r",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_oavwhzq_DataGrid_5vg8g3r",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_5j4wspu_DataGrid_5vg8g3r",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_5vg8g3rDS_Name": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.Name"
									}
								},
								"DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_fyzkp9p": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.PgrAccountMetricValuePgrAccountId_PgrValue_fyzkp9p"
									}
								},
								"DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_zm8sxhl": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.PgrAccountMetricValuePgrAccountId_PgrValue_zm8sxhl"
									}
								},
								"DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_003adui": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.PgrAccountMetricValuePgrAccountId_PgrValue_003adui"
									}
								},
								"DataGrid_5vg8g3rDS_PgrAccountMetricValuePgrAccountId_PgrValue_nlb9hy3": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.PgrAccountMetricValuePgrAccountId_PgrValue_nlb9hy3"
									}
								},
								"DataGrid_5vg8g3rDS_Id": {
									"modelConfig": {
										"path": "DataGrid_5vg8g3rDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_5vg8g3r_PredefinedFilter": {
						"value": {
							"items": {
								"bd1b5d47-c368-4e2c-a3c1-49dd83d399c9": {
									"filterType": 5,
									"comparisonType": 15,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "[PgrAccountMetricValue:PgrAccountId].Id"
									},
									"isAggregative": true,
									"dataValueType": 0,
									"subFilters": {
										"items": {
											"6a428130-bf30-4da7-b35e-fa8aaf78d5bf": {
												"filterType": 1,
												"comparisonType": 5,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "PgrValue"
												},
												"isAggregative": false,
												"dataValueType": 5,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 5,
														"value": 0
													}
												}
											},
											"a5b13beb-5579-4cd1-bc53-5761e236f45e": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "PgrMetricTypeId"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "PgrMetricType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Deviation",
																"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																"displayValue": "Deviation"
															}
														}
													}
												]
											},
											"2266fa26-56a2-4b46-8737-65a5f345f860": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": false,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "PgrDate"
												},
												"isAggregative": false,
												"dataValueType": 8,
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
										"rootSchemaName": "PgrAccountMetricValue",
										"key": "c48eb1bb-ba53-41ed-b7a3-27880873c133"
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Account"
						}
					},
					"DataGrid_w7vmwme": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_w7vmwmeDS",
							"sortingConfig": {
								"default": []
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_w7vmwme_PredefinedFilter"
								},
								{
									"name": "SearchFilter_ble6xgu_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_euba5qp_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_8dqngzb_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_hfjkws3_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_qlugkq6_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_gw8mhx3_DataGrid_w7vmwme",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_oavwhzq_DataGrid_w7vmwme",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_w7vmwmeDS_Title": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.Title"
									}
								},
								"DataGrid_w7vmwmeDS_Account": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.Account"
									}
								},
								"DataGrid_w7vmwmeDS_Owner": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.Owner"
									}
								},
								"DataGrid_w7vmwmeDS_Status": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.Status"
									}
								},
								"DataGrid_w7vmwmeDS_PgrOverdueDays": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.PgrOverdueDays"
									}
								},
								"DataGrid_w7vmwmeDS_DueDate": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.DueDate"
									}
								},
								"DataGrid_w7vmwmeDS_PgrReasonCode": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.PgrReasonCode"
									}
								},
								"DataGrid_w7vmwmeDS_PgrParentTask": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.PgrParentTask"
									}
								},
								"DataGrid_w7vmwmeDS_Id": {
									"modelConfig": {
										"path": "DataGrid_w7vmwmeDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_w7vmwme_PredefinedFilter": {
						"value": {
							"items": {
								"7388e715-2c03-49e1-a6a6-63f053072549": {
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
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Open",
													"Id": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
													"value": "9d78df31-4cec-4202-bad9-1da9181a8bfc",
													"displayValue": "Open"
												}
											}
										}
									]
								},
								"6f4a15bc-700d-4ba4-b9fe-a522b1ec050a": {
									"items": {
										"b6475a33-6ef8-4533-9fa1-0208e130c2dd": {
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
										"fb6981c9-65f2-4faa-802f-6baf790ff5ef": {
											"filterType": 4,
											"comparisonType": 3,
											"isEnabled": true,
											"trimDateTimeParameterToDate": false,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "PgrParentTask.ActivityCategory"
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
										}
									},
									"logicalOperation": 1,
									"isEnabled": true,
									"filterType": 6,
									"rootSchemaName": "Activity",
									"key": "6f4a15bc-700d-4ba4-b9fe-a522b1ec050a"
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
						"DataGrid_5vg8g3rDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Account",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"PgrAccountMetricValuePgrAccountId_PgrValue_fyzkp9p": {
										"type": "Aggregation",
										"path": "[PgrAccountMetricValue:PgrAccountId].PgrValue",
										"aggregationConfig": {
											"aggregationFunction": "TopOne",
											"filter": {
												"items": {
													"28f10c2f-5efe-4fd8-a802-d3b06193af4c": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Deviation",
																		"Id": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"value": "b962c96f-b5ca-47d2-83e8-8abbe755e3a3",
																		"displayValue": "Deviation"
																	}
																}
															}
														]
													},
													"96fed23b-959b-46ab-8923-14aa24692177": {
														"filterType": 1,
														"comparisonType": 5,
														"isEnabled": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrValue"
														},
														"isAggregative": false,
														"dataValueType": 5,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 5,
																"value": 0
															}
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"sortByColumn": "PgrDate",
											"sortByDirection": "2"
										}
									},
									"PgrAccountMetricValuePgrAccountId_PgrValue_zm8sxhl": {
										"type": "Aggregation",
										"path": "[PgrAccountMetricValue:PgrAccountId].PgrValue",
										"aggregationConfig": {
											"aggregationFunction": "TopOne",
											"filter": {
												"items": {
													"4c5757dd-d21a-400a-a4d2-32e0716b62f5": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Avg Order Intake (3 days)",
																		"Id": "deaf43be-659a-48b8-bea6-d8e9527a1cc3",
																		"value": "deaf43be-659a-48b8-bea6-d8e9527a1cc3",
																		"displayValue": "Avg Order Intake (3 days)"
																	}
																}
															}
														]
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											},
											"sortByColumn": "PgrDate",
											"sortByDirection": "2"
										}
									},
									"PgrAccountMetricValuePgrAccountId_PgrValue_003adui": {
										"type": "Aggregation",
										"path": "[PgrAccountMetricValue:PgrAccountId].PgrValue",
										"aggregationConfig": {
											"aggregationFunction": "TopOne",
											"sortByColumn": "PgrDate",
											"sortByDirection": "2",
											"filter": {
												"items": {
													"81ec4f63-5b59-497c-8e6f-bfcb587dafcb": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Avg Order Intake (9 days)",
																		"Id": "1a24cfe1-2dc9-410b-9c7f-10cc0ab7c058",
																		"value": "1a24cfe1-2dc9-410b-9c7f-10cc0ab7c058",
																		"displayValue": "Avg Order Intake (9 days)"
																	}
																}
															}
														]
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											}
										}
									},
									"PgrAccountMetricValuePgrAccountId_PgrValue_nlb9hy3": {
										"type": "Aggregation",
										"path": "[PgrAccountMetricValue:PgrAccountId].PgrValue",
										"aggregationConfig": {
											"aggregationFunction": "TopOne",
											"sortByColumn": "PgrDate",
											"sortByDirection": "2",
											"filter": {
												"items": {
													"a6140890-b0d1-478f-9e09-13fc33f8b073": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "PgrMetricTypeId"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "PgrMetricType",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Budget",
																		"Id": "abad9912-b6a4-4777-b445-d55d9e9a7ae1",
																		"value": "abad9912-b6a4-4777-b445-d55d9e9a7ae1",
																		"displayValue": "Budget"
																	}
																}
															}
														]
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "PgrAccountMetricValue"
											}
										}
									}
								}
							}
						},
						"DataGrid_w7vmwmeDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"loadParameters": {
									"options": {
										"hierarchyConfig": {
											"type": "ClientSide",
											"hierarchicalColumnName": "PgrParentTask"
										}
									}
								},
								"attributes": {
									"Title": {
										"path": "Title"
									},
									"Account": {
										"path": "Account"
									},
									"Owner": {
										"path": "Owner"
									},
									"Status": {
										"path": "Status"
									},
									"PgrOverdueDays": {
										"path": "PgrOverdueDays"
									},
									"DueDate": {
										"path": "DueDate"
									},
									"PgrReasonCode": {
										"path": "PgrReasonCode"
									},
									"PgrParentTask": {
										"path": "PgrParentTask"
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