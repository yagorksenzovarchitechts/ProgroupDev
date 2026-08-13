define("PgrSalesPersonOverviewPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_fu2sgb8",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_fu2sgb8_config_caption)#",
						"hint": "",
						"icon": "contact-leads-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "PgrTeam",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_fu2sgb8_DataGrid_vmm3jfp",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_vmm3jfp",
													"filterColumn": "PgrTeam"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_fu2sgb8_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_vumvdng",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_vumvdng_config_caption)#",
						"hint": "",
						"icon": "map-with-pin-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Territory",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_vumvdng_DataGrid_vmm3jfp",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_vmm3jfp",
													"filterColumn": "PgrTerritory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_vumvdng_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_r1hc9v3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_r1hc9v3_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_r1hc9v3_DataGrid_vmm3jfp",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"DataGrid_vmm3jfp"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_r1hc9v3_SearchValue",
							"SearchFilter_r1hc9v3_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_8blg20y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
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
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vmm3jfp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"hierarchical": {
							"enable": true
						},
						"rows": {
							"selection": false,
							"numeration": false
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": true,
							"resizing": true,
							"sorting": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$DataGrid_vmm3jfp",
					"primaryColumnName": "DataGrid_vmm3jfpDS_Id",
					"columns": [
						{
							"id": "9e0747a0-2e32-3abc-95a2-3b5fd681e9cd",
							"code": "DataGrid_vmm3jfpDS_Name",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_Name)#",
							"dataValueType": 28,
							"sticky": true,
							"width": 275
						},
						{
							"id": "d04d071d-d09a-5a0a-5faf-df4864175140",
							"code": "DataGrid_vmm3jfpDS_PgrProGroupSalesPerson",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrProGroupSalesPerson)#",
							"dataValueType": 27
						},
						{
							"id": "9beaf0e7-4013-6867-1f10-128091b4c3f0",
							"code": "DataGrid_vmm3jfpDS_Department",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_Department)#",
							"dataValueType": 10
						},
						{
							"id": "a1910fab-eb5b-36dd-3303-0933b2e1996d",
							"code": "DataGrid_vmm3jfpDS_PgrTeam",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrTeam)#",
							"dataValueType": 10
						},
						{
							"id": "faf0bb19-8b0e-6d62-a087-1242c7fe3ebd",
							"code": "DataGrid_vmm3jfpDS_PgrTerritory",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrTerritory)#",
							"dataValueType": 10
						},
						{
							"id": "a1ab27f7-4696-c7e9-7c1e-243bf8687fd1",
							"code": "DataGrid_vmm3jfpDS_PgrReportsTo",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrReportsTo)#",
							"dataValueType": 10
						},
						{
							"id": "612837a0-aff3-8c73-f095-7f7b39b212d3",
							"code": "DataGrid_vmm3jfpDS_PgrIsActive",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrIsActive)#",
							"dataValueType": 12,
							"width": 134
						},
						{
							"id": "780c1890-b504-4576-30bb-3b08b731d9cc",
							"code": "DataGrid_vmm3jfpDS_PgrCreatioUser",
							"caption": "#ResourceString(DataGrid_vmm3jfpDS_PgrCreatioUser)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"style": "plain-white"
				},
				"parentName": "GridContainer_8blg20y",
				"propertyName": "items",
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
					"EntityHierarchyFilter_x3iog97_PredefinedFilter": {
						"value": {
							"items": {
								"f215548a-8101-47f7-91aa-81ca76ee1029": {
									"filterType": 2,
									"comparisonType": 2,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PgrReportsTo"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "Contact",
									"isNull": false
								},
								"ef65db8f-4f24-42df-bd21-254373b9db7d": {
									"filterType": 1,
									"comparisonType": 11,
									"isEnabled": false,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PgrProGroupSalesPerson"
									},
									"isAggregative": false,
									"dataValueType": 1,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "Sales"
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Contact"
						}
					},
					"DataGrid_vmm3jfp": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_vmm3jfpDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_vmm3jfp_PredefinedFilter"
								},
								{
									"name": "QuickFilter_fu2sgb8_DataGrid_vmm3jfp",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_vumvdng_DataGrid_vmm3jfp",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_r1hc9v3_DataGrid_vmm3jfp",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_vmm3jfpDS_Name": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.Name"
									}
								},
								"DataGrid_vmm3jfpDS_PgrProGroupSalesPerson": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrProGroupSalesPerson"
									}
								},
								"DataGrid_vmm3jfpDS_Department": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.Department"
									}
								},
								"DataGrid_vmm3jfpDS_PgrTeam": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrTeam"
									}
								},
								"DataGrid_vmm3jfpDS_PgrTerritory": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrTerritory"
									}
								},
								"DataGrid_vmm3jfpDS_PgrReportsTo": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrReportsTo"
									}
								},
								"DataGrid_vmm3jfpDS_PgrIsActive": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrIsActive"
									}
								},
								"DataGrid_vmm3jfpDS_PgrCreatioUser": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.PgrCreatioUser"
									}
								},
								"DataGrid_vmm3jfpDS_Id": {
									"modelConfig": {
										"path": "DataGrid_vmm3jfpDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_vmm3jfp_PredefinedFilter": {
						"value": {
							"items": {
								"0484b1f1-51c8-4699-910c-d517ff211e5d": {
									"filterType": 2,
									"comparisonType": 2,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "PgrReportsTo"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "Contact",
									"isNull": false
								},
								"6e391301-b33e-47b7-bad6-bfb25db293e6": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Department"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "Department",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Sales",
													"Id": "2076c4b6-7fe6-df11-971b-001d60e938c6",
													"value": "2076c4b6-7fe6-df11-971b-001d60e938c6",
													"displayValue": "Sales"
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
						"DataGrid_vmm3jfpDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Contact",
								"loadParameters": {
									"options": {
										"hierarchyConfig": {
											"type": "ClientSide",
											"hierarchicalColumnName": "PgrReportsTo"
										}
									}
								},
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"PgrProGroupSalesPerson": {
										"path": "PgrProGroupSalesPerson"
									},
									"Department": {
										"path": "Department"
									},
									"PgrTeam": {
										"path": "PgrTeam"
									},
									"PgrTerritory": {
										"path": "PgrTerritory"
									},
									"PgrReportsTo": {
										"path": "PgrReportsTo"
									},
									"PgrIsActive": {
										"path": "PgrIsActive"
									},
									"PgrCreatioUser": {
										"path": "PgrCreatioUser"
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