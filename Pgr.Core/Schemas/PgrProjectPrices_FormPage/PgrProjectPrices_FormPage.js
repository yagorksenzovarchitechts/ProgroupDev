define("PgrProjectPrices_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
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
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "TagInRecord"
				}
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
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 9
					}
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
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
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
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "PgrProjectPrice"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentsTabContainer",
				"values": {
					"caption": "#ResourceString(AttachmentsTabContainer_caption)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "fbc72bbd-bca3-43b5-b1f0-84c870ca9e07",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
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
				"name": "Input_g23wa4d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrName_z9ufq5b",
					"control": "$PDS_PgrName_z9ufq5b",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_drnsqbk",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrProjectPriceId_f5avvxl",
					"control": "$PDS_PgrProjectPriceId_f5avvxl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_nwnzqmj",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrAccount_wkui9bw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrAccount_wkui9bw",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_d3uxr1j",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_d3uxr1j_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_nwnzqmj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_3ubqkhx",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrCustomerProjectMandatory_6f06d4t",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrCustomerProjectMandatory_6f06d4t",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ps5rhp1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrStartDate_ogzx09b",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrStartDate_ogzx09b"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_609xhxu",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrEndDate_244nkez",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrEndDate_244nkez"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_inykyal",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_inykyal_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_meo270f",
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
				"parentName": "ExpansionPanel_inykyal",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_u1e89mg",
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
				"parentName": "ExpansionPanel_inykyal",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_p83i62l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrSapId_5ag7eh2",
					"control": "$PDS_PgrSapId_5ag7eh2",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_u1e89mg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_1v0q0ss",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrWfId_sx1pdpv",
					"control": "$PDS_PgrWfId_sx1pdpv",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_u1e89mg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_h5h73ms",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_h5h73ms_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_8skqwo4",
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
				"parentName": "ExpansionPanel_h5h73ms",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_on18zw7",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrNotes_h0ktfg0",
					"control": "$PDS_PgrNotes_h0ktfg0",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "ExpansionPanel_h5h73ms",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ixutzf7",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ixutzf7_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_tpxv9pv",
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
				"parentName": "ExpansionPanel_ixutzf7",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_q1gxdge",
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
				"parentName": "GridContainer_tpxv9pv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_lqwte3w",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_lqwte3w_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrProjectPriceRule"
						}
					}
				},
				"parentName": "FlexContainer_q1gxdge",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_u6esjyx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_u6esjyx_caption)#",
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
							"dataSourceName": "GridDetail_7aw16gjDS"
						}
					}
				},
				"parentName": "FlexContainer_q1gxdge",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_zyrp9hx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_zyrp9hx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_q1gxdge",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vvk9krh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vvk9krh_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_7aw16gj"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zyrp9hx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_wd16bna",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_wd16bna_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrProjectPriceRule"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zyrp9hx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_fl1oogx",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_fl1oogx_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_fl1oogx_GridDetail_7aw16gj",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_7aw16gj"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_fl1oogx_SearchValue",
							"GridDetailSearchFilter_fl1oogx_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_q1gxdge",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7gqdxoz",
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
				"parentName": "ExpansionPanel_ixutzf7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_7aw16gj",
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
							},
							"numeration": true
						}
					},
					"items": "$GridDetail_7aw16gj",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_7aw16gjDS_Id",
					"columns": [
						{
							"id": "832af4f4-ed23-7459-240c-d170a5cda253",
							"code": "GridDetail_7aw16gjDS_PgrPlant",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrPlant)#",
							"dataValueType": 10
						},
						{
							"id": "2522f456-2636-d85a-3558-b14bc3158e1d",
							"code": "GridDetail_7aw16gjDS_PgrAddressMatchcode",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrAddressMatchcode)#",
							"dataValueType": 27
						},
						{
							"id": "d8dd7d36-f47d-c3b7-1676-f6ef6f0ee0e2",
							"code": "GridDetail_7aw16gjDS_PgrDiscountPercentage",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrDiscountPercentage)#",
							"dataValueType": 32
						},
						{
							"id": "9d69ee4a-5146-b19d-513c-80f64e94e88c",
							"code": "GridDetail_7aw16gjDS_PgrDiscountAbsoluteCurrency",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrDiscountAbsoluteCurrency)#",
							"dataValueType": 32
						},
						{
							"id": "1c272c85-c487-e942-4055-edf390f6ef00",
							"code": "GridDetail_7aw16gjDS_PgrDiscountAbsoluteEur",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrDiscountAbsoluteEur)#",
							"dataValueType": 32
						},
						{
							"id": "90cf2117-f196-b61f-6c86-0e9e0a267df3",
							"code": "GridDetail_7aw16gjDS_PgrMostlyPgPaper",
							"caption": "#ResourceString(GridDetail_7aw16gjDS_PgrMostlyPgPaper)#",
							"dataValueType": 12,
							"width": 190
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_7gqdxoz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_seziytl",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_seziytl_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_zway9jk",
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
				"parentName": "ExpansionPanel_seziytl",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wab1zwq",
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
				"parentName": "GridContainer_zway9jk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_v6lrc2g",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_v6lrc2g_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrCustomerProject"
						}
					}
				},
				"parentName": "FlexContainer_wab1zwq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_xf6m1oq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_xf6m1oq_caption)#",
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
							"dataSourceName": "GridDetail_x5ojh6qDS"
						}
					}
				},
				"parentName": "FlexContainer_wab1zwq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ixljdko",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ixljdko_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wab1zwq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8zmyasi",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_8zmyasi_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_x5ojh6q"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ixljdko",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_69ggcj3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_69ggcj3_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrCustomerProject"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ixljdko",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_pq1b86d",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_pq1b86d_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_pq1b86d_GridDetail_x5ojh6q",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_x5ojh6q"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_pq1b86d_SearchValue",
							"GridDetailSearchFilter_pq1b86d_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_wab1zwq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_lxe66p3",
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
				"parentName": "ExpansionPanel_seziytl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_x5ojh6q",
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
					"items": "$GridDetail_x5ojh6q",
					"primaryColumnName": "GridDetail_x5ojh6qDS_Id",
					"columns": [
						{
							"id": "d95264b5-8ae2-ece3-3ac8-34da238059a8",
							"code": "GridDetail_x5ojh6qDS_PgrCustomerProjectId",
							"caption": "#ResourceString(GridDetail_x5ojh6qDS_PgrCustomerProjectId)#",
							"dataValueType": 4
						},
						{
							"id": "e010ff31-c0ca-7520-f62f-6357e8ff3ad5",
							"code": "GridDetail_x5ojh6qDS_PgrName",
							"caption": "#ResourceString(GridDetail_x5ojh6qDS_PgrName)#",
							"dataValueType": 27
						},
						{
							"id": "bdadd1a5-7f34-f9fa-476b-171383c0db28",
							"code": "GridDetail_x5ojh6qDS_PgrNote",
							"caption": "#ResourceString(GridDetail_x5ojh6qDS_PgrNote)#",
							"dataValueType": 27
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_lxe66p3",
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
					"PDS_PgrName_z9ufq5b": {
						"modelConfig": {
							"path": "PDS.PgrName"
						}
					},
					"PDS_PgrProjectPriceId_f5avvxl": {
						"modelConfig": {
							"path": "PDS.PgrProjectPriceId"
						}
					},
					"PDS_PgrAccount_wkui9bw": {
						"modelConfig": {
							"path": "PDS.PgrAccount"
						}
					},
					"PDS_PgrAccount_wkui9bw_List": {
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
					"PDS_PgrCustomerProjectMandatory_6f06d4t": {
						"modelConfig": {
							"path": "PDS.PgrCustomerProjectMandatory"
						}
					},
					"PDS_PgrStartDate_ogzx09b": {
						"modelConfig": {
							"path": "PDS.PgrStartDate"
						}
					},
					"PDS_PgrEndDate_244nkez": {
						"modelConfig": {
							"path": "PDS.PgrEndDate"
						}
					},
					"PDS_PgrSapId_5ag7eh2": {
						"modelConfig": {
							"path": "PDS.PgrSapId"
						}
					},
					"PDS_PgrWfId_sx1pdpv": {
						"modelConfig": {
							"path": "PDS.PgrWfId"
						}
					},
					"PDS_PgrNotes_h0ktfg0": {
						"modelConfig": {
							"path": "PDS.PgrNotes"
						}
					},
					"GridDetail_7aw16gj": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_7aw16gjDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_fl1oogx_GridDetail_7aw16gj",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_7aw16gjDS_PgrPlant": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrPlant"
									}
								},
								"GridDetail_7aw16gjDS_PgrAddressMatchcode": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrAddressMatchcode"
									}
								},
								"GridDetail_7aw16gjDS_PgrDiscountPercentage": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrDiscountPercentage"
									}
								},
								"GridDetail_7aw16gjDS_PgrDiscountAbsoluteCurrency": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrDiscountAbsoluteCurrency"
									}
								},
								"GridDetail_7aw16gjDS_PgrDiscountAbsoluteEur": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrDiscountAbsoluteEur"
									}
								},
								"GridDetail_7aw16gjDS_PgrMostlyPgPaper": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.PgrMostlyPgPaper"
									}
								},
								"GridDetail_7aw16gjDS_Id": {
									"modelConfig": {
										"path": "GridDetail_7aw16gjDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_x5ojh6q": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_x5ojh6qDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_pq1b86d_GridDetail_x5ojh6q",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_x5ojh6qDS_PgrCustomerProjectId": {
									"modelConfig": {
										"path": "GridDetail_x5ojh6qDS.PgrCustomerProjectId"
									}
								},
								"GridDetail_x5ojh6qDS_PgrName": {
									"modelConfig": {
										"path": "GridDetail_x5ojh6qDS.PgrName"
									}
								},
								"GridDetail_x5ojh6qDS_PgrNote": {
									"modelConfig": {
										"path": "GridDetail_x5ojh6qDS.PgrNote"
									}
								},
								"GridDetail_x5ojh6qDS_Id": {
									"modelConfig": {
										"path": "GridDetail_x5ojh6qDS.Id"
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
						"GridDetail_7aw16gjDS": [
							{
								"attributePath": "PgrProjectPriceId",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_x5ojh6qDS": [
							{
								"attributePath": "PgrProjectPriceId",
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
							"entitySchemaName": "PgrProjectPrice"
						},
						"scope": "page"
					},
					"GridDetail_7aw16gjDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrProjectPriceRule",
							"attributes": {
								"PgrPlant": {
									"path": "PgrPlant"
								},
								"PgrAddressMatchcode": {
									"path": "PgrAddressMatchcode"
								},
								"PgrDiscountPercentage": {
									"path": "PgrDiscountPercentage"
								},
								"PgrDiscountAbsoluteCurrency": {
									"path": "PgrDiscountAbsoluteCurrency"
								},
								"PgrDiscountAbsoluteEur": {
									"path": "PgrDiscountAbsoluteEur"
								},
								"PgrMostlyPgPaper": {
									"path": "PgrMostlyPgPaper"
								}
							}
						}
					},
					"GridDetail_x5ojh6qDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrCustomerProject",
							"attributes": {
								"PgrCustomerProjectId": {
									"path": "PgrCustomerProjectId"
								},
								"PgrName": {
									"path": "PgrName"
								},
								"PgrNote": {
									"path": "PgrNote"
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