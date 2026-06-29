define("Accounts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "MainFilterContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "TerritoryQuickFilter",
				"values": {
					"config": {
						"caption": "#ResourceString(TerritoryQuickFilter_config_caption)#",
						"hint": "",
						"icon": "webcheck-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Territory",
						"recordsFilter": null
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
							"id": "8a438b24-e88d-1e5c-93b7-d16e119ae24b",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28,
							"sticky": true
						},
						{
							"id": "2aecbdc3-a89a-b9eb-3734-6f525695c284",
							"code": "PDS_PgrWepaformName",
							"caption": "#ResourceString(PDS_PgrWepaformName)#",
							"dataValueType": 27,
							"width": 187
						},
						{
							"id": "dd3fdbba-4903-9de0-e832-82fa0c69ee37",
							"code": "PDS_Country",
							"caption": "#ResourceString(PDS_Country)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "2ab201ad-4a42-b48d-8c27-60b5fd59e685",
							"code": "PDS_PgrMainPlantLinked",
							"caption": "#ResourceString(PDS_PgrMainPlantLinked)#",
							"dataValueType": 10
						},
						{
							"id": "b9d78970-0ff5-7a11-bf8f-4f7610562eed",
							"code": "PDS_Owner",
							"caption": "#ResourceString(PDS_Owner)#",
							"dataValueType": 10
						},
						{
							"id": "41326f92-a6d5-4494-cf31-bf1052c0293f",
							"code": "PDS_PgrSalesDirector",
							"caption": "#ResourceString(PDS_PgrSalesDirector)#",
							"dataValueType": 10
						},
						{
							"id": "354c0ed2-aaf8-8182-92ea-f02303cf5bd9",
							"code": "PDS_PgrCustomerServiceName",
							"caption": "#ResourceString(PDS_PgrCustomerServiceName)#",
							"dataValueType": 10,
							"width": 210
						},
						{
							"id": "3a73e2a5-1f23-74a9-0a46-7aedfbe585c6",
							"code": "PDS_Parent",
							"caption": "#ResourceString(PDS_Parent)#",
							"dataValueType": 10
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "Account",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": [
							{
								"attribute": "TerritoryQuickFilter_Dashboards",
								"loadOnChange": true
							},
							{
								"attribute": "QuickFilter_5bm0ul6_Dashboards",
								"loadOnChange": true
							},
							{
								"attribute": "QuickFilter_0yd6qle_Dashboards",
								"loadOnChange": true
							},
							{
								"attribute": "QuickFilter_iihiiel_Dashboards",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_0yd6qle",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_0yd6qle_config_caption)#",
						"hint": "",
						"icon": "filter-funnel-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "03a75490-53e6-df11-971b-001d60e938c6",
								"checkedState": true
							}
						],
						"entitySchemaName": "AccountType",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_0yd6qle_Items",
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
							},
							{
								"attribute": "QuickFilter_0yd6qle_Dashboards",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Dashboards",
													"filterColumn": "Type"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_0yd6qle_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_5bm0ul6",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_5bm0ul6_config_caption)#",
						"hint": "",
						"icon": "business-contact-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_5bm0ul6_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_5bm0ul6_Dashboards",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Dashboards",
													"filterColumn": "PgrSalesDirector"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_5bm0ul6_Value"
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
				"name": "QuickFilter_iihiiel",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_iihiiel_config_caption)#",
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
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_iihiiel_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "QuickFilter_iihiiel_Dashboards",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Dashboards",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_iihiiel_Value"
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
				"operation": "remove",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"PDS_PrimaryContact",
					"PDS_Type",
					"PDS_AccountCategory",
					"PDS_Industry",
					"PDS_Web",
					"PDS_CreatedOn",
					"PDS_Tier",
					"PDS_Territory",
					"PDS_Territory_InitialListActions"
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
					"PDS_PgrWepaformName": {
						"modelConfig": {
							"path": "PDS.PgrWepaformName"
						}
					},
					"PDS_PgrMainPlantLinked": {
						"modelConfig": {
							"path": "PDS.PgrMainPlantLinked"
						}
					},
					"PDS_Owner": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_PgrSalesDirector": {
						"modelConfig": {
							"path": "PDS.PgrSalesDirector"
						}
					},
					"PDS_PgrCustomerServiceName": {
						"modelConfig": {
							"path": "PDS.PgrCustomerServiceName"
						}
					},
					"PDS_Parent": {
						"modelConfig": {
							"path": "PDS.Parent"
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
							"name": "TerritoryQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_5bm0ul6_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_0yd6qle_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_iihiiel_Items",
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
					"PrimaryContact",
					"Type",
					"AccountCategory",
					"Industry",
					"Web",
					"CreatedOn",
					"Tier",
					"Territory"
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
					"PgrWepaformName": {
						"path": "PgrWepaformName"
					},
					"PgrMainPlantLinked": {
						"path": "PgrMainPlantLinked"
					},
					"Owner": {
						"path": "Owner"
					},
					"PgrSalesDirector": {
						"path": "PgrSalesDirector"
					},
					"PgrCustomerServiceName": {
						"path": "PgrCustomerServiceName"
					},
					"Parent": {
						"path": "Parent"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});