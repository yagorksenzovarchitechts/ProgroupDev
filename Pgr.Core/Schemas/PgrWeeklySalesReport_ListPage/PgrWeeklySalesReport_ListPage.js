define("PgrWeeklySalesReport_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrWeeklySalesReport"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrWeeklySalesReport"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_PgrName",
							"caption": "#ResourceString(PDS_PgrName)#",
							"dataValueType": 1,
							"width": 268
						},
						{
							"id": "71b90cbf-8674-16a2-4d74-632bf2544868",
							"code": "PDS_PgrWeekNumber",
							"caption": "#ResourceString(PDS_PgrWeekNumber)#",
							"dataValueType": 4,
							"width": 156
						},
						{
							"id": "3c7e5d08-c0d4-a71c-f22b-b9f524f87b33",
							"code": "PDS_PgrYearLookup",
							"caption": "#ResourceString(PDS_PgrYearLookup)#",
							"dataValueType": 10,
							"width": 125
						},
						{
							"id": "88acce67-8d8f-1a7c-3193-9d0bc551221c",
							"code": "PDS_PgrSalesManagerId",
							"caption": "#ResourceString(PDS_PgrSalesManagerId)#",
							"dataValueType": 10
						},
						{
							"id": "8ba4edb6-dea2-de7c-4063-2de8a09c61ed",
							"code": "PDS_PgrSalesManagerId_PgrTerritory",
							"caption": "#ResourceString(PDS_PgrSalesManagerId_PgrTerritory)#",
							"dataValueType": 10
						},
						{
							"id": "8351db44-63c2-e25f-dddd-382c261fc4fa",
							"code": "PDS_PgrStatusId",
							"caption": "#ResourceString(PDS_PgrStatusId)#",
							"dataValueType": 10
						},
						{
							"id": "2a6d0a63-0f8e-7352-f91a-ab0a18ef26ed",
							"code": "PDS_PgrVisitReportPgrWeeklyReportId_Id_yd2y0x9",
							"caption": "#ResourceString(PDS_PgrVisitReportPgrWeeklyReportId_Id_yd2y0x9)#",
							"dataValueType": 4
						},
						{
							"id": "49437d93-f5de-4137-6d63-50862edaabf4",
							"code": "PDS_PgrVisitReportPgrWeeklyReportId_Id_2jg1vxo",
							"caption": "#ResourceString(PDS_PgrVisitReportPgrWeeklyReportId_Id_2jg1vxo)#",
							"dataValueType": 4
						},
						{
							"id": "b73f2885-1b18-ac11-951c-f599a7245c36",
							"code": "PDS_PgrLanguageId",
							"caption": "#ResourceString(PDS_PgrLanguageId)#",
							"dataValueType": 10
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
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
						"entitySchemaName": "PgrWeeklySalesReport",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
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
					"PDS_PgrWeekNumber": {
						"modelConfig": {
							"path": "PDS.PgrWeekNumber"
						}
					},
					"PDS_PgrYearLookup": {
						"modelConfig": {
							"path": "PDS.PgrYearLookup"
						}
					},
					"PDS_PgrSalesManagerId": {
						"modelConfig": {
							"path": "PDS.PgrSalesManagerId"
						}
					},
					"PDS_PgrSalesManagerId_PgrTerritory": {
						"modelConfig": {
							"path": "PDS.PgrSalesManagerId_PgrTerritory"
						}
					},
					"PDS_PgrStatusId": {
						"modelConfig": {
							"path": "PDS.PgrStatusId"
						}
					},
					"PDS_PgrVisitReportPgrWeeklyReportId_Id_yd2y0x9": {
						"modelConfig": {
							"path": "PDS.PgrVisitReportPgrWeeklyReportId_Id_yd2y0x9"
						}
					},
					"PDS_PgrVisitReportPgrWeeklyReportId_Id_2jg1vxo": {
						"modelConfig": {
							"path": "PDS.PgrVisitReportPgrWeeklyReportId_Id_2jg1vxo"
						}
					},
					"PDS_PgrLanguageId": {
						"modelConfig": {
							"path": "PDS.PgrLanguageId"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					}
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
					"entitySchemaName": "PgrWeeklySalesReport",
					"attributes": {
						"PgrName": {
							"path": "PgrName"
						},
						"PgrWeekNumber": {
							"path": "PgrWeekNumber"
						},
						"PgrYearLookup": {
							"path": "PgrYearLookup"
						},
						"PgrSalesManagerId": {
							"path": "PgrSalesManagerId"
						},
						"PgrSalesManagerId_PgrTerritory": {
							"type": "ForwardReference",
							"path": "PgrSalesManagerId.PgrTerritory"
						},
						"PgrStatusId": {
							"path": "PgrStatusId"
						},
						"PgrVisitReportPgrWeeklyReportId_Id_yd2y0x9": {
							"type": "Aggregation",
							"path": "[PgrVisitReport:PgrWeeklyReportId].Id",
							"aggregationConfig": {
								"aggregationFunction": "Count",
								"filter": {
									"items": {
										"f05beb5b-0a26-4f79-aa09-cf79adfed69d": {
											"filterType": 1,
											"comparisonType": 3,
											"isEnabled": true,
											"trimDateTimeParameterToDate": false,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "PgrTopicQuality"
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
										}
									},
									"logicalOperation": 0,
									"isEnabled": true,
									"filterType": 6,
									"rootSchemaName": "PgrVisitReport"
								}
							}
						},
						"PgrVisitReportPgrWeeklyReportId_Id_2jg1vxo": {
							"type": "Aggregation",
							"path": "[PgrVisitReport:PgrWeeklyReportId].Id",
							"aggregationConfig": {
								"aggregationFunction": "Count",
								"filter": {
									"items": {
										"1ec5a8c9-2ef9-4c87-acbf-b626f345ce67": {
											"filterType": 1,
											"comparisonType": 3,
											"isEnabled": true,
											"trimDateTimeParameterToDate": false,
											"leftExpression": {
												"expressionType": 0,
												"columnPath": "PgrTopicServiceDelivery"
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
										}
									},
									"logicalOperation": 0,
									"isEnabled": true,
									"filterType": 6,
									"rootSchemaName": "PgrVisitReport"
								}
							}
						},
						"PgrLanguageId": {
							"path": "PgrLanguageId"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
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