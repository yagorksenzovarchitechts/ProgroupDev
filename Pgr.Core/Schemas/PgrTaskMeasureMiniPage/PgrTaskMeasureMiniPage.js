define("PgrTaskMeasureMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "move",
				"name": "ContinueInOtherPageButton",
				"parentName": "GridContainer_v592bhd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContinueInOtherPageButton",
				"values": {
					"color": "default",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "GridContainer_v592bhd",
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
					"visible": false,
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
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_fhm2tjd",
				"values": {
					"layoutConfig": {
						"column": 1,
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_e8n8zt8",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ActivityDS_Title_b204mqb",
					"control": "$ActivityDS_Title_b204mqb",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_oo5y19m",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ActivityDS_PgrDepartment_vv1pfz1",
					"control": "$ActivityDS_PgrDepartment_vv1pfz1",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_kfer77j",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ActivityDS_PgrPersonInCharge_o0n7p4l",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ActivityDS_PgrPersonInCharge_o0n7p4l"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_z0zksoa",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z0zksoa_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kfer77j",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_e2mq5s2",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ActivityDS_PgrAccount_9vdmdt3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ActivityDS_PgrAccount_9vdmdt3"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_4xl4su0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4xl4su0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_e2mq5s2",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_u3kznx6",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ActivityDS_Notes_lndogi2",
					"control": "$ActivityDS_Notes_lndogi2",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_9ipfs7n",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ActivityDS_PgrReasonCode_9tbcuu5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ActivityDS_PgrReasonCode_9tbcuu5"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_t7pjwet",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t7pjwet_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9ipfs7n",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0r28n2v",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ActivityDS_PgrCorrectiveMeasureAction_6fsjxxk",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$ActivityDS_PgrCorrectiveMeasureAction_6fsjxxk"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_j8yzf98",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_j8yzf98_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0r28n2v",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5rehfv4",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ActivityDS_PgrReasonNotes_oj9gedu",
					"control": "$ActivityDS_PgrReasonNotes_oj9gedu",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "FlexContainer_fhm2tjd",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ActivityDS_Title_b204mqb": {
						"modelConfig": {
							"path": "ActivityDS.Title"
						}
					},
					"ActivityDS_Notes_lndogi2": {
						"modelConfig": {
							"path": "ActivityDS.Notes"
						}
					},
					"ActivityDS_PgrDepartment_vv1pfz1": {
						"modelConfig": {
							"path": "ActivityDS.PgrDepartment"
						}
					},
					"ActivityDS_PgrAccount_9vdmdt3": {
						"modelConfig": {
							"path": "ActivityDS.PgrAccount"
						}
					},
					"ActivityDS_PgrAccount_9vdmdt3_List": {
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
					"ActivityDS_PgrPersonInCharge_o0n7p4l": {
						"modelConfig": {
							"path": "ActivityDS.PgrPersonInCharge"
						}
					},
					"ActivityDS_PgrPersonInCharge_o0n7p4l_List": {
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
					"ActivityDS_PgrReasonCode_9tbcuu5": {
						"modelConfig": {
							"path": "ActivityDS.PgrReasonCode"
						}
					},
					"ActivityDS_PgrReasonCode_9tbcuu5_List": {
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
					"ActivityDS_PgrReasonNotes_oj9gedu": {
						"modelConfig": {
							"path": "ActivityDS.PgrReasonNotes"
						}
					},
					"ActivityDS_PgrCorrectiveMeasureAction_6fsjxxk": {
						"modelConfig": {
							"path": "ActivityDS.PgrCorrectiveMeasureAction"
						}
					},
					"ActivityDS_PgrCorrectiveMeasureAction_6fsjxxk_List": {
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
						"ActivityDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Activity",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "ActivityDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});