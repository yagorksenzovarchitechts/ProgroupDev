define("Calendar_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "QuickFilter_CanceledTasks",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_CanceledTasks_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Calendar_n8j0xn9",
													"customFilter": {
														"items": {
															"9a125318-648e-4697-96e0-847992432ad1": {
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
																	}
																]
															},
															"4c1b02ef-fc92-44fa-8482-90aeab08244e": {
																"filterType": 5,
																"comparisonType": 16,
																"isEnabled": false,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "[ActivityParticipant:Activity].Id"
																},
																"isAggregative": true,
																"dataValueType": 0,
																"subFilters": {
																	"items": {
																		"7a0f5ffb-aa2a-4290-b092-015f86845745": {
																			"filterType": 1,
																			"comparisonType": 3,
																			"isEnabled": true,
																			"trimDateTimeParameterToDate": false,
																			"leftExpression": {
																				"expressionType": 0,
																				"columnPath": "Participant"
																			},
																			"isAggregative": false,
																			"dataValueType": 0,
																			"referenceSchemaName": "Contact",
																			"rightExpression": {
																				"expressionType": 1,
																				"functionType": 1,
																				"macrosType": 2
																			}
																		},
																		"3ef72aa6-354b-46a5-b81a-0c2d61ab2141": {
																			"filterType": 4,
																			"comparisonType": 3,
																			"isEnabled": true,
																			"trimDateTimeParameterToDate": false,
																			"leftExpression": {
																				"expressionType": 0,
																				"columnPath": "InviteResponse"
																			},
																			"isAggregative": false,
																			"dataValueType": 10,
																			"referenceSchemaName": "ParticipantResponse",
																			"rightExpressions": [
																				{
																					"expressionType": 2,
																					"parameter": {
																						"dataValueType": 10,
																						"value": {
																							"Name": "Declined",
																							"Id": "cc256758-4051-4021-9c51-216e37635c46",
																							"value": "cc256758-4051-4021-9c51-216e37635c46",
																							"displayValue": "Declined"
																						}
																					}
																				}
																			]
																		}
																	},
																	"logicalOperation": 0,
																	"isEnabled": false,
																	"filterType": 6,
																	"rootSchemaName": "ActivityParticipant",
																	"key": "f1f08017-edc8-40db-bacd-b901434812a4"
																}
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": false
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_CanceledTasks_Value"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_MyTasks",
				"values": {
					"config": {
						"caption": "#ResourceString(QuickFilter_MyTasks_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Calendar_Tasks",
				"values": {
					"colorizationType": "default"
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Calendar_n8j0xn9_PredefinedFilter",
					"value",
					"items",
					"c6d0caa2-0bdc-4075-804c-8395b9fdbd5a"
				],
				"values": {
					"rightExpressions": [
						{
							"expressionType": 2,
							"parameter": {
								"dataValueType": 10,
								"value": {
									"Name": "Task",
									"Id": "fbe0acdc-cfc0-df11-b00f-001d60e938c6",
									"value": "fbe0acdc-cfc0-df11-b00f-001d60e938c6",
									"displayValue": "Task"
								}
							}
						},
						{
							"expressionType": 2,
							"parameter": {
								"dataValueType": 10,
								"value": {
									"Name": "Visit",
									"Id": "e3831dec-cfc0-df11-b00f-001d60e938c6",
									"value": "e3831dec-cfc0-df11-b00f-001d60e938c6",
									"displayValue": "Visit"
								}
							}
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});