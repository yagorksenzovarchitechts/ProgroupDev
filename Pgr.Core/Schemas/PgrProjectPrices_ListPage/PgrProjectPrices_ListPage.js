define("PgrProjectPrices_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
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
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrProjectPrice"
						}
					}
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
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": null,
						"recordsFilter": null
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrProjectPrice"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "3389e37e-e27e-72b0-4b10-678bda989973",
							"code": "PDS_PgrName",
							"caption": "#ResourceString(PDS_PgrName)#",
							"dataValueType": 27
						},
						{
							"id": "e56ac6eb-31b6-e570-d9c1-0066bb0ff58a",
							"code": "PDS_PgrProjectPriceId",
							"caption": "#ResourceString(PDS_PgrProjectPriceId)#",
							"dataValueType": 4
						},
						{
							"id": "777e6357-fcf8-0ce1-9409-607652038dac",
							"code": "PDS_PgrAccount",
							"caption": "#ResourceString(PDS_PgrAccount)#",
							"dataValueType": 10
						},
						{
							"id": "a20fb8bd-af03-db5b-3952-2c6972069171",
							"code": "PDS_PgrStartDate",
							"caption": "#ResourceString(PDS_PgrStartDate)#",
							"dataValueType": 8,
							"width": 146
						},
						{
							"id": "19213e94-827c-e505-c5b9-b6e3c95285b1",
							"code": "PDS_PgrEndDate",
							"caption": "#ResourceString(PDS_PgrEndDate)#",
							"dataValueType": 8,
							"width": 131
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrProjectPrice",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_dsylv6x",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_dsylv6x_config_caption)#",
						"hint": "",
						"icon": "person-button-icon",
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
								"attribute": "QuickFilter_dsylv6x_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "PgrAccount"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_dsylv6x_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_t4jq17j",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_t4jq17j_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"showTime": false,
						"showFiscalPeriods": false
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_t4jq17j_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumnStart": "PgrStartDate",
													"filterColumnEnd": "PgrStartDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_t4jq17j_Value"
					},
					"filterType": "date-range"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_uwqyba7",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_uwqyba7_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"showTime": false,
						"showFiscalPeriods": false
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_uwqyba7_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumnStart": "PgrEndDate",
													"filterColumnEnd": "PgrEndDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_uwqyba7_Value"
					},
					"filterType": "date-range",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_PgrName": {
						"modelConfig": {
							"path": "PDS.PgrName"
						}
					},
					"PDS_PgrProjectPriceId": {
						"modelConfig": {
							"path": "PDS.PgrProjectPriceId"
						}
					},
					"PDS_PgrAccount": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrStartDate": {
						"modelConfig": {
							"path": "PDS.PgrStartDate"
						}
					},
					"PDS_PgrEndDate": {
						"modelConfig": {
							"path": "PDS.PgrEndDate"
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
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_dsylv6x_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_t4jq17j_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_uwqyba7_Items",
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
							"columnName": "PgrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "PgrProjectPrice",
					"attributes": {
						"PgrName": {
							"path": "PgrName"
						},
						"PgrProjectPriceId": {
							"path": "PgrProjectPriceId"
						},
						"PgrAccount": {
							"path": "PgrAccount"
						},
						"PgrStartDate": {
							"path": "PgrStartDate"
						},
						"PgrEndDate": {
							"path": "PgrEndDate"
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