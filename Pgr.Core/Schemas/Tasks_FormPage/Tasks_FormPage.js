define("Tasks_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"caption": "#ResourceString(CancelButton_caption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
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
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "DetailsLabel"
			},
			{
				"operation": "remove",
				"name": "Priority"
			},
			{
				"operation": "remove",
				"name": "Category"
			},
			{
				"operation": "remove",
				"name": "Location"
			},
			{
				"operation": "remove",
				"name": "MeetingPlatform"
			},
			{
				"operation": "remove",
				"name": "ShowInScheduler"
			},
			{
				"operation": "merge",
				"name": "GridContainer_3mhjndt",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "GridContainer_i2j0o75",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"underlineSelectedTabColor": "crt-color-coral"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "GridContainer_t8shp26"
			},
			{
				"operation": "remove",
				"name": "GridContainer_8fdqand"
			},
			{
				"operation": "remove",
				"name": "MeetingDetailsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "Title"
			},
			{
				"operation": "remove",
				"name": "GridContainer_nvmvpxk"
			},
			{
				"operation": "remove",
				"name": "Start"
			},
			{
				"operation": "remove",
				"name": "End"
			},
			{
				"operation": "remove",
				"name": "Status"
			},
			{
				"operation": "remove",
				"name": "Result"
			},
			{
				"operation": "remove",
				"name": "ResultDetails"
			},
			{
				"operation": "remove",
				"name": "ParticipantsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "GridContainer_zkjm2ww"
			},
			{
				"operation": "remove",
				"name": "FlexContainer_6hptjnf"
			},
			{
				"operation": "remove",
				"name": "SendInvitationButton"
			},
			{
				"operation": "remove",
				"name": "DataGrid_5hjajbn"
			},
			{
				"operation": "remove",
				"name": "ExpansionPanel_9kt2jf4"
			},
			{
				"operation": "remove",
				"name": "GridContainer_qxuk2z3"
			},
			{
				"operation": "remove",
				"name": "FlexContainer_3zwk0zu"
			},
			{
				"operation": "remove",
				"name": "Notes"
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "ConnectionsTabContainer",
				"values": {
					"caption": "#ResourceString(ConnectionsTabContainer_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "ConnectionsTabContainerHeaderLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(ConnectionsTabContainerHeaderLabel_caption)#)#",
					"headingLevel": "label"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(AttachmentsTabContainerHeaderLabel_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "insert",
				"name": "TabContainer_w3tsrln",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_w3tsrln_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_1qargav",
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
				"parentName": "TabContainer_w3tsrln",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_sye7f0d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Title_jhz7j1u",
					"control": "$PDS_Title_jhz7j1u",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_bkx69vx",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status_7agz5r3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Status_7agz5r3",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_2nooxby",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2nooxby_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bkx69vx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_h8c5gt8",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Account_u4t07h6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Account_u4t07h6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"secondaryDisplayValue": "PgrWepaformName"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_e0t6k33",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_StartDate_cj039qt",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_StartDate_cj039qt"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_am2lc3r",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_DueDate_f01kkuu",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_DueDate_f01kkuu"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_jogtsei",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrParentTask_8lucj1t",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrParentTask_8lucj1t"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_4dcm6au",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4dcm6au_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jogtsei",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hdht802",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_wlki7uc",
				"values": {
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
				"parentName": "FlexContainer_hdht802",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_blechm2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrVisitReport_bl3njly",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrVisitReport_bl3njly",
					"visible": false,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_wlki7uc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_k45qo5j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_k45qo5j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_blechm2",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_zp5ixl9",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrDepartment_c6krwbp",
					"control": "$PDS_PgrDepartment_c6krwbp",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": false,
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wlki7uc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ReasonCodeAndNotes",
				"values": {
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
						"left": "small"
					}
				},
				"parentName": "FlexContainer_hdht802",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_5yceyw3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrReasonCode_ukscpy6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrReasonCode_ukscpy6"
				},
				"parentName": "GridContainer_ReasonCodeAndNotes",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_a9s7x8w",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a9s7x8w_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5yceyw3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_16ouhqn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrReasonNotes_0c2belc",
					"control": "$PDS_PgrReasonNotes_0c2belc",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GridContainer_ReasonCodeAndNotes",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_d0zml3k",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrReasonCodeSetBy_km7i221",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrReasonCodeSetBy_km7i221",
					"visible": true,
					"readonly": true,
					"placeholder": ""
				},
				"parentName": "GridContainer_ReasonCodeAndNotes",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_005ou0u",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_005ou0u_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d0zml3k",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_gqhm1xl",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrReasonSetOn_6w4ri4l",
					"placeholder": "",
					"readonly": true,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_PgrReasonSetOn_6w4ri4l",
					"visible": true
				},
				"parentName": "GridContainer_ReasonCodeAndNotes",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rx674wm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 6,
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
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "GridContainer_1qargav",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Button_v4xaeyf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_v4xaeyf_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": false,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrVisitReport",
							"defaultValues": [
								{
									"attributeName": "PgrVisitDate",
									"value": "$StartDate"
								},
								{
									"attributeName": "PgrAccount",
									"value": "$LookupAttribute_3f4a8f9"
								},
								{
									"attributeName": "PgrTask",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default",
					"icon": "document-button-icon"
				},
				"parentName": "FlexContainer_rx674wm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_wki6rii",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_wki6rii_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "large",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_w3tsrln",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_jlcrjoz",
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
				"parentName": "ExpansionPanel_wki6rii",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tbup9r9",
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
				"parentName": "GridContainer_jlcrjoz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_yr1nylu",
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
				"parentName": "ExpansionPanel_wki6rii",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_7octqgt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_ivz0y09",
					"control": "$PDS_Notes_ivz0y09",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GridContainer_yr1nylu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_luhcskb",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_luhcskb_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
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
				"parentName": "TabContainer_w3tsrln",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_p0im1kb",
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
				"parentName": "ExpansionPanel_luhcskb",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_jji65be",
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
				"parentName": "GridContainer_p0im1kb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_ycxh01j",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_ycxh01j_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Activity"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_jji65be",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_nkxudbv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_nkxudbv_caption)#",
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
							"dataSourceName": "GridDetail_1ay6zynDS"
						}
					}
				},
				"parentName": "FlexContainer_jji65be",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_qc5rcs2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_qc5rcs2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_jji65be",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_cifbi8i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_cifbi8i_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_1ay6zyn"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_qc5rcs2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_0vsjg06",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_0vsjg06_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Activity"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_qc5rcs2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_a81j6le",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_a81j6le_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_a81j6le_GridDetail_1ay6zyn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_1ay6zyn"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_a81j6le_SearchValue",
							"GridDetailSearchFilter_a81j6le_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_jji65be",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_87xehhq",
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
				"parentName": "ExpansionPanel_luhcskb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_1ay6zyn",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 8
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": true
						}
					},
					"items": "$GridDetail_1ay6zyn",
					"primaryColumnName": "GridDetail_1ay6zynDS_Id",
					"columns": [
						{
							"id": "db23d481-299c-4d76-abf1-46b641db532c",
							"code": "GridDetail_1ay6zynDS_Title",
							"caption": "#ResourceString(GridDetail_1ay6zynDS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "002dab94-28af-803b-0753-5829cbf6a03c",
							"code": "GridDetail_1ay6zynDS_Priority",
							"caption": "#ResourceString(GridDetail_1ay6zynDS_Priority)#",
							"dataValueType": 10
						},
						{
							"id": "2bd1dd17-efc4-331b-cd45-3b222e84c33d",
							"code": "GridDetail_1ay6zynDS_Status",
							"caption": "#ResourceString(GridDetail_1ay6zynDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "6748266b-361b-cc45-366b-556c62ceaa47",
							"code": "GridDetail_1ay6zynDS_DueDate",
							"caption": "#ResourceString(GridDetail_1ay6zynDS_DueDate)#",
							"dataValueType": 7
						},
						{
							"id": "82b7e0cb-eb54-fbe6-decb-bffb631b8c26",
							"code": "GridDetail_1ay6zynDS_Owner",
							"caption": "#ResourceString(GridDetail_1ay6zynDS_Owner)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_87xehhq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_6uff3ez",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_6uff3ez_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_wxaphav",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_wxaphav_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
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
				"parentName": "TabContainer_6uff3ez",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_81oy3kd",
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
				"parentName": "ExpansionPanel_wxaphav",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_cat44f4",
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
				"parentName": "GridContainer_81oy3kd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_o2kvzmg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_o2kvzmg_caption)#",
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
							"dataSourceName": "GridDetail_bdh4aggDS"
						}
					}
				},
				"parentName": "FlexContainer_cat44f4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_aixs5d2",
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
				"parentName": "ExpansionPanel_wxaphav",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bdh4agg",
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
					"items": "$GridDetail_bdh4agg",
					"primaryColumnName": "GridDetail_bdh4aggDS_Id",
					"columns": [
						{
							"id": "678b3f1c-e6eb-7010-56f6-c5f1216bb86d",
							"code": "GridDetail_bdh4aggDS_PgrNumber",
							"caption": "#ResourceString(GridDetail_bdh4aggDS_PgrNumber)#",
							"dataValueType": 27,
							"width": 122
						},
						{
							"id": "b2723aec-ed7d-bf40-b61a-c94bbec5ea3c",
							"code": "GridDetail_bdh4aggDS_PgrVisitType",
							"caption": "#ResourceString(GridDetail_bdh4aggDS_PgrVisitType)#",
							"dataValueType": 10,
							"width": 151
						},
						{
							"id": "7a364fa4-48fb-7691-0813-477238438cb6",
							"code": "GridDetail_bdh4aggDS_PgrIsRelevantForWeeklyReport",
							"caption": "#ResourceString(GridDetail_bdh4aggDS_PgrIsRelevantForWeeklyReport)#",
							"dataValueType": 12,
							"width": 162
						},
						{
							"id": "d54be098-c76b-71c2-3b1f-d6628f4ab5d9",
							"code": "GridDetail_bdh4aggDS_CreatedBy",
							"caption": "#ResourceString(GridDetail_bdh4aggDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "88a7c369-cc26-9d9c-5560-f88a995a882c",
							"code": "GridDetail_bdh4aggDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_bdh4aggDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_aixs5d2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_k843hzt",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_k843hzt_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"headingLevel": "label"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_iabdv7s",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Priority_anpufr3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Priority_anpufr3"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_60hc7mu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_60hc7mu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_iabdv7s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_95mbp2s",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ActivityCategory_frl97qi",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_ActivityCategory_frl97qi"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_lt9y4t1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lt9y4t1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_95mbp2s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_1byvmps",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Owner_xlkj4in",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Owner_xlkj4in"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_ugresq2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ugresq2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1byvmps",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_hu63osa",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_CreatedOn_c41l4ok",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_CreatedOn_c41l4ok"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_11c6rfi",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_ShowInScheduler_iapi6sm",
					"ariaLabel": "",
					"labelPosition": "right",
					"tooltip": "",
					"control": "$PDS_ShowInScheduler_iapi6sm",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_6ebha94",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_mcn1olo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsOverdue_uzmhfdq",
					"ariaLabel": "",
					"labelPosition": "right",
					"tooltip": "",
					"control": "$PDS_PgrIsOverdue_uzmhfdq",
					"visible": true,
					"readonly": true,
					"placeholder": ""
				},
				"parentName": "GridContainer_6ebha94",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_zx6f1lg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrOverdueDays_qh1stcl",
					"control": "$PDS_PgrOverdueDays_qh1stcl",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_6ebha94",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "CenterContainer",
				"parentName": "CardContentWrapper",
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
					"PDS_Title_jhz7j1u": {
						"modelConfig": {
							"path": "PDS.Title"
						}
					},
					"PDS_Notes_ivz0y09": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"PDS_ActivityCategory_frl97qi": {
						"modelConfig": {
							"path": "PDS.ActivityCategory"
						}
					},
					"PDS_ActivityCategory_frl97qi_List": {
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
					"PDS_StartDate_cj039qt": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"PDS_DueDate_f01kkuu": {
						"modelConfig": {
							"path": "PDS.DueDate"
						}
					},
					"PDS_Status_7agz5r3": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_Status_7agz5r3_List": {
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
					"PDS_Owner_xlkj4in": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_Owner_xlkj4in_List": {
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
					"PDS_Account_u4t07h6": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_Account_u4t07h6_List": {
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
					"PDS_ShowInScheduler_iapi6sm": {
						"modelConfig": {
							"path": "PDS.ShowInScheduler"
						}
					},
					"PDS_Priority_anpufr3": {
						"modelConfig": {
							"path": "PDS.Priority"
						}
					},
					"PDS_Priority_anpufr3_List": {
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
					"PDS_PgrIsOverdue_uzmhfdq": {
						"modelConfig": {
							"path": "PDS.PgrIsOverdue"
						}
					},
					"PDS_PgrOverdueDays_qh1stcl": {
						"modelConfig": {
							"path": "PDS.PgrOverdueDays"
						}
					},
					"PDS_CreatedOn_c41l4ok": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"undefined_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"GridDetail_bdh4agg": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_bdh4aggDS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_bdh4aggDS_PgrNumber": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.PgrNumber"
									}
								},
								"GridDetail_bdh4aggDS_PgrVisitType": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.PgrVisitType"
									}
								},
								"GridDetail_bdh4aggDS_PgrIsRelevantForWeeklyReport": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.PgrIsRelevantForWeeklyReport"
									}
								},
								"GridDetail_bdh4aggDS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.CreatedBy"
									}
								},
								"GridDetail_bdh4aggDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.CreatedOn"
									}
								},
								"GridDetail_bdh4aggDS_Id": {
									"modelConfig": {
										"path": "GridDetail_bdh4aggDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrParentTask_8lucj1t": {
						"modelConfig": {
							"path": "PDS.PgrParentTask"
						}
					},
					"PDS_PgrParentTask_8lucj1t_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Title",
										"direction": "asc"
									}
								]
							}
						}
					},
					"GridDetail_1ay6zyn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_1ay6zynDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_a81j6le_GridDetail_1ay6zyn",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_1ay6zynDS_Title": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.Title"
									}
								},
								"GridDetail_1ay6zynDS_Priority": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.Priority"
									}
								},
								"GridDetail_1ay6zynDS_Status": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.Status"
									}
								},
								"GridDetail_1ay6zynDS_DueDate": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.DueDate"
									}
								},
								"GridDetail_1ay6zynDS_Owner": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.Owner"
									}
								},
								"GridDetail_1ay6zynDS_Id": {
									"modelConfig": {
										"path": "GridDetail_1ay6zynDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrReasonCode_ukscpy6": {
						"modelConfig": {
							"path": "PDS.PgrReasonCode"
						}
					},
					"PDS_PgrReasonCode_ukscpy6_List": {
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
					"PDS_PgrReasonNotes_0c2belc": {
						"modelConfig": {
							"path": "PDS.PgrReasonNotes"
						}
					},
					"PDS_PgrReasonCodeSetBy_km7i221": {
						"modelConfig": {
							"path": "PDS.PgrReasonCodeSetBy"
						}
					},
					"PDS_PgrReasonCodeSetBy_km7i221_List": {
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
					"PDS_PgrReasonSetOn_6w4ri4l": {
						"modelConfig": {
							"path": "PDS.PgrReasonSetOn"
						}
					},
					"PDS_PgrDepartment_c6krwbp": {
						"modelConfig": {
							"path": "PDS.PgrDepartment"
						}
					},
					"PDS_PgrVisitReport_bl3njly": {
						"modelConfig": {
							"path": "PDS.PgrVisitReport"
						}
					},
					"PDS_PgrVisitReport_bl3njly_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "PgrNumber",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGrid_5hjajbn",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"DataGrid_5hjajbn_PredefinedFilter"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"loadingConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"GridDetail_bdh4aggDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrVisitReport",
							"attributes": {
								"PgrNumber": {
									"path": "PgrNumber"
								},
								"PgrVisitType": {
									"path": "PgrVisitType"
								},
								"PgrIsRelevantForWeeklyReport": {
									"path": "PgrIsRelevantForWeeklyReport"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"GridDetail_1ay6zynDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"Priority": {
									"path": "Priority"
								},
								"Status": {
									"path": "Status"
								},
								"DueDate": {
									"path": "DueDate"
								},
								"Owner": {
									"path": "Owner"
								}
							}
						}
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"DataGrid_5hjajbnDS"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_bdh4aggDS": [
						{
							"attributePath": "PgrTask",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_1ay6zynDS": [
						{
							"attributePath": "PgrParentTask",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});