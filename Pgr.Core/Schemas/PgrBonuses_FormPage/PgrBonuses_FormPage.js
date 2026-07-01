define("PgrBonuses_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
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
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "remove",
				"name": "CenterContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "move",
				"name": "Tabs",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
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
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
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
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "PgrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PgrName",
					"control": "$PgrName",
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_z3bbkp0",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrAccount_lm4afll",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrAccount_lm4afll"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_mfra0rh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mfra0rh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_z3bbkp0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_o1da14p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrBonusId_dk8wwid",
					"control": "$PDS_PgrBonusId_dk8wwid",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_450wtbi",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrEndDate_uqhmj5m",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrEndDate_uqhmj5m"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_3iaj2w9",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrStartDate_n0qastw",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrStartDate_n0qastw",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_y630h5k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrBaseValueType_1my862m",
					"control": "$PDS_PgrBaseValueType_1my862m",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_nm323ly",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrBonusType_q6rhxr9",
					"control": "$PDS_PgrBonusType_q6rhxr9",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_pwn8c59",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrDescription_33q24ha",
					"control": "$PDS_PgrDescription_33q24ha",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nggrqb0",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nggrqb0_title)#",
					"toggleType": "default",
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
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_bxc97a6",
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
				"parentName": "ExpansionPanel_nggrqb0",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5ixqdir",
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
				"parentName": "GridContainer_bxc97a6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_asgflp9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_asgflp9_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrBonusThreshold"
						}
					}
				},
				"parentName": "FlexContainer_5ixqdir",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_u3f83rk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_u3f83rk_caption)#",
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
							"dataSourceName": "GridDetail_gyzdejbDS"
						}
					}
				},
				"parentName": "FlexContainer_5ixqdir",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_01pgx06",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_01pgx06_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_5ixqdir",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_15srmqf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_15srmqf_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_BonusTresholds"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_01pgx06",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_y1ca6ri",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_y1ca6ri_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrBonusThreshold"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_01pgx06",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BonusSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(BonusSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "BonusSearchFilter_GridDetail_gyzdejb",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gyzdejb"
										]
									}
								]
							}
						],
						"from": [
							"BonusSearchFilter_SearchValue",
							"BonusSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_5ixqdir",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d0j90om",
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
				"parentName": "ExpansionPanel_nggrqb0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_BonusTresholds",
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
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_gyzdejb",
					"activeRow": "$GridDetail_gyzdejb_ActiveRow",
					"selectionState": "$GridDetail_gyzdejb_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_gyzdejb_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gyzdejbDS_Id",
					"columns": [
						{
							"id": "8b0f1749-5994-b6a5-9221-7ba2b2066782",
							"code": "GridDetail_gyzdejbDS_PgrBonus",
							"caption": "#ResourceString(GridDetail_gyzdejbDS_PgrBonus)#",
							"dataValueType": 10
						},
						{
							"id": "741004a2-2a17-972b-0581-af95634cd07c",
							"code": "GridDetail_gyzdejbDS_PgrBonusPercentage",
							"caption": "#ResourceString(GridDetail_gyzdejbDS_PgrBonusPercentage)#",
							"dataValueType": 31
						},
						{
							"id": "7e8bb51b-b70c-a014-5942-0b4b5c4165f2",
							"code": "GridDetail_gyzdejbDS_PgrTierThreshold",
							"caption": "#ResourceString(GridDetail_gyzdejbDS_PgrTierThreshold)#",
							"dataValueType": 33
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_d0j90om",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyzdejb_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gyzdejbDS",
							"filters": "$GridDetail_gyzdejb | crt.ToCollectionFilters : 'GridDetail_gyzdejb' : $GridDetail_gyzdejb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gyzdejb_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_BonusTresholds",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyzdejb_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gyzdejbDS",
							"filters": "$GridDetail_gyzdejb | crt.ToCollectionFilters : 'GridDetail_gyzdejb' : $GridDetail_gyzdejb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gyzdejb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_gyzdejb_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyzdejb_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_BonusTresholds",
							"filters": "$GridDetail_gyzdejb | crt.ToCollectionFilters : 'GridDetail_gyzdejb' : $GridDetail_gyzdejb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gyzdejb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusTresholds",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyzdejb_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gyzdejbDS",
							"selectionState": "$GridDetail_gyzdejb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusTresholds",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_gyzdejb_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gyzdejbDS",
							"filters": "$GridDetail_gyzdejb | crt.ToCollectionFilters : 'GridDetail_gyzdejb' : $GridDetail_gyzdejb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gyzdejb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusTresholds",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_2ii744k",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_2ii744k_title)#",
					"toggleType": "default",
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
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_gd2v3z1",
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
				"parentName": "ExpansionPanel_2ii744k",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_b52vyoe",
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
				"parentName": "GridContainer_gd2v3z1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_17kp2fm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_17kp2fm_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrBonusCondition"
						}
					}
				},
				"parentName": "FlexContainer_b52vyoe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_5pdsqe9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5pdsqe9_caption)#",
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
							"dataSourceName": "GridDetail_pbgwc5rDS"
						}
					}
				},
				"parentName": "FlexContainer_b52vyoe",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_k9b555f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_k9b555f_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_b52vyoe",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_muboyj1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_muboyj1_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_BonusConditions"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_k9b555f",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_jjmrmmi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_jjmrmmi_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrBonusCondition"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_k9b555f",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BonusConditionsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(BonusConditionsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "BonusConditionsSearchFilter_GridDetail_pbgwc5r",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_pbgwc5r"
										]
									}
								]
							}
						],
						"from": [
							"BonusConditionsSearchFilter_SearchValue",
							"BonusConditionsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_b52vyoe",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ql4261y",
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
				"parentName": "ExpansionPanel_2ii744k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_BonusConditions",
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
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_pbgwc5r",
					"activeRow": "$GridDetail_pbgwc5r_ActiveRow",
					"selectionState": "$GridDetail_pbgwc5r_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_pbgwc5r_SelectionState"
					},
					"primaryColumnName": "GridDetail_pbgwc5rDS_Id",
					"columns": [
						{
							"id": "11268585-b28c-e501-5ff1-0aa81a3c52ee",
							"code": "GridDetail_pbgwc5rDS_PgrCondition",
							"caption": "#ResourceString(GridDetail_pbgwc5rDS_PgrCondition)#",
							"dataValueType": 27,
							"width": 165
						},
						{
							"id": "0a3644a7-0b1b-7f06-a556-1dc23b5fc7de",
							"code": "GridDetail_pbgwc5rDS_PgrCondition",
							"caption": "#ResourceString(GridDetail_pbgwc5rDS_PgrCondition)#",
							"dataValueType": 27,
							"width": 183
						},
						{
							"id": "3d62e0f3-4aea-37ae-d951-cac2e8d342b8",
							"code": "GridDetail_pbgwc5rDS_PgrBonusConditionGroup",
							"caption": "#ResourceString(GridDetail_pbgwc5rDS_PgrBonusConditionGroup)#",
							"dataValueType": 4,
							"width": 194
						},
						{
							"id": "898e8a7f-4e7d-2923-401f-a7a4669352eb",
							"code": "GridDetail_pbgwc5rDS_PgrOperator",
							"caption": "#ResourceString(GridDetail_pbgwc5rDS_PgrOperator)#",
							"dataValueType": 27,
							"width": 163
						},
						{
							"id": "7d9e343c-5fab-b2ba-3373-c6c08b5b54ac",
							"code": "GridDetail_pbgwc5rDS_PgrValue",
							"caption": "#ResourceString(GridDetail_pbgwc5rDS_PgrValue)#",
							"dataValueType": 27
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_ql4261y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pbgwc5r_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pbgwc5rDS",
							"filters": "$GridDetail_pbgwc5r | crt.ToCollectionFilters : 'GridDetail_pbgwc5r' : $GridDetail_pbgwc5r_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pbgwc5r_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_BonusConditions",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pbgwc5r_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pbgwc5rDS",
							"filters": "$GridDetail_pbgwc5r | crt.ToCollectionFilters : 'GridDetail_pbgwc5r' : $GridDetail_pbgwc5r_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pbgwc5r_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_pbgwc5r_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_pbgwc5r_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_BonusConditions",
							"filters": "$GridDetail_pbgwc5r | crt.ToCollectionFilters : 'GridDetail_pbgwc5r' : $GridDetail_pbgwc5r_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pbgwc5r_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusConditions",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_pbgwc5r_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pbgwc5rDS",
							"selectionState": "$GridDetail_pbgwc5r_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusConditions",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_pbgwc5r_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_pbgwc5rDS",
							"filters": "$GridDetail_pbgwc5r | crt.ToCollectionFilters : 'GridDetail_pbgwc5r' : $GridDetail_pbgwc5r_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_pbgwc5r_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_BonusConditions",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PgrName": {
						"modelConfig": {
							"path": "PDS.PgrName"
						}
					},
					"PDS_PgrBonusId_dk8wwid": {
						"modelConfig": {
							"path": "PDS.PgrBonusId"
						}
					},
					"PDS_PgrStartDate_n0qastw": {
						"modelConfig": {
							"path": "PDS.PgrStartDate"
						}
					},
					"PDS_PgrBonusType_q6rhxr9": {
						"modelConfig": {
							"path": "PDS.PgrBonusType"
						}
					},
					"PDS_PgrBaseValueType_1my862m": {
						"modelConfig": {
							"path": "PDS.PgrBaseValueType"
						}
					},
					"PDS_PgrEndDate_uqhmj5m": {
						"modelConfig": {
							"path": "PDS.PgrEndDate"
						}
					},
					"PDS_PgrAccount_lm4afll": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrAccount_lm4afll_List": {
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
					"PDS_PgrDescription_33q24ha": {
						"modelConfig": {
							"path": "PDS.PgrDescription"
						}
					},
					"GridDetail_gyzdejb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gyzdejbDS",
							"filterAttributes": [
								{
									"name": "BonusSearchFilter_GridDetail_gyzdejb",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gyzdejbDS_PgrBonus": {
									"modelConfig": {
										"path": "GridDetail_gyzdejbDS.PgrBonus"
									}
								},
								"GridDetail_gyzdejbDS_PgrBonusPercentage": {
									"modelConfig": {
										"path": "GridDetail_gyzdejbDS.PgrBonusPercentage"
									}
								},
								"GridDetail_gyzdejbDS_PgrTierThreshold": {
									"modelConfig": {
										"path": "GridDetail_gyzdejbDS.PgrTierThreshold"
									}
								},
								"GridDetail_gyzdejbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gyzdejbDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_pbgwc5r": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_pbgwc5rDS",
							"filterAttributes": [
								{
									"name": "BonusConditionsSearchFilter_GridDetail_pbgwc5r",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_pbgwc5rDS_PgrCondition": {
									"modelConfig": {
										"path": "GridDetail_pbgwc5rDS.PgrCondition"
									}
								},
								"GridDetail_pbgwc5rDS_PgrBonusConditionGroup": {
									"modelConfig": {
										"path": "GridDetail_pbgwc5rDS.PgrBonusConditionGroup"
									}
								},
								"GridDetail_pbgwc5rDS_PgrOperator": {
									"modelConfig": {
										"path": "GridDetail_pbgwc5rDS.PgrOperator"
									}
								},
								"GridDetail_pbgwc5rDS_PgrValue": {
									"modelConfig": {
										"path": "GridDetail_pbgwc5rDS.PgrValue"
									}
								},
								"GridDetail_pbgwc5rDS_Id": {
									"modelConfig": {
										"path": "GridDetail_pbgwc5rDS.Id"
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
					"CardState"
				],
				"values": {
					"modelConfig": {}
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
						"GridDetail_gyzdejbDS": [
							{
								"attributePath": "PgrBonus",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_pbgwc5rDS": [
							{
								"attributePath": "PgrBonus",
								"relationPath": "PDS.Id"
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
							"entitySchemaName": "PgrBonus"
						},
						"scope": "page"
					},
					"GridDetail_gyzdejbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrBonusThreshold",
							"attributes": {
								"PgrBonus": {
									"path": "PgrBonus"
								},
								"PgrBonusPercentage": {
									"path": "PgrBonusPercentage"
								},
								"PgrTierThreshold": {
									"path": "PgrTierThreshold"
								}
							}
						}
					},
					"GridDetail_pbgwc5rDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrBonusCondition",
							"attributes": {
								"PgrCondition": {
									"path": "PgrCondition"
								},
								"PgrBonusConditionGroup": {
									"path": "PgrBonusConditionGroup"
								},
								"PgrOperator": {
									"path": "PgrOperator"
								},
								"PgrValue": {
									"path": "PgrValue"
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