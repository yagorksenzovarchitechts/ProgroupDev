define("PgrAccountAddressFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true,
					"alignItems": "stretch"
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
				"operation": "insert",
				"name": "Input_akiv7vi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AccountAddressDS_Address_diesqny",
					"control": "$AccountAddressDS_Address_diesqny",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "left",
					"visible": true
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_uz0l71e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAddressDS_Region_lh86k5e",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$AccountAddressDS_Region_lh86k5e"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_7lxfka2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7lxfka2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_uz0l71e",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_aodhml8",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAddressDS_Country_xxebp21",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$AccountAddressDS_Country_xxebp21",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_9lhedb6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9lhedb6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_aodhml8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_0bey5z8",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAddressDS_City_ajr19vx",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$AccountAddressDS_City_ajr19vx",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_fm1ygcv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fm1ygcv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0bey5z8",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_agm1koj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AccountAddressDS_Zip_itvhzsn",
					"control": "$AccountAddressDS_Zip_itvhzsn",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_5la5k4n",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAddressDS_AddressType_9nu05tf",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$AccountAddressDS_AddressType_9nu05tf",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_1ggl9c3",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 3,
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
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Input_juo3t3b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AccountAddressDS_PgrWepaformAddressName_k4953sl",
					"control": "$AccountAddressDS_PgrWepaformAddressName_k4953sl",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "left",
					"visible": true
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_j13y1kt",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AccountAddressDS_PgrWepaformAddressId_8cs6vr3",
					"control": "$AccountAddressDS_PgrWepaformAddressId_8cs6vr3",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Checkbox_m6u1gdg",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.AccountAddressDS_Primary_5t8s0bg",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$AccountAddressDS_Primary_5t8s0bg",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_s9yk8er",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_s9yk8er_title)#",
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
				"name": "GridContainer_4ydsqmn",
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
				"parentName": "ExpansionPanel_s9yk8er",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_54utas6",
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
				"parentName": "GridContainer_4ydsqmn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_hjt4bq3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_hjt4bq3_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrPlantAccountAddress"
						}
					}
				},
				"parentName": "FlexContainer_54utas6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_v0d1gro",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_v0d1gro_caption)#",
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
							"dataSourceName": "GridDetail_agutdo1DS"
						}
					}
				},
				"parentName": "FlexContainer_54utas6",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_v6obxg8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_v6obxg8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_54utas6",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_y1m4315",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_y1m4315_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_agutdo1"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_v6obxg8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2402ztj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2402ztj_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrPlantAccountAddress"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_v6obxg8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_f9b0rct",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_f9b0rct_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_f9b0rct_GridDetail_agutdo1",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_agutdo1"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_f9b0rct_SearchValue",
							"GridDetailSearchFilter_f9b0rct_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_54utas6",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_wo4w0yt",
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
				"parentName": "ExpansionPanel_s9yk8er",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_agutdo1",
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
					"items": "$GridDetail_agutdo1",
					"primaryColumnName": "GridDetail_agutdo1DS_Id",
					"columns": [
						{
							"id": "b6d8449f-bc02-c9b5-cef3-e91a7b27b8aa",
							"code": "GridDetail_agutdo1DS_PgrPlantId",
							"caption": "#ResourceString(GridDetail_agutdo1DS_PgrPlantId)#",
							"dataValueType": 10,
							"width": 218
						},
						{
							"id": "399cf05e-50f2-9f5e-de51-0baa91bb0c12",
							"code": "GridDetail_agutdo1DS_PgrCurrency",
							"caption": "#ResourceString(GridDetail_agutdo1DS_PgrCurrency)#",
							"dataValueType": 10
						},
						{
							"id": "2b8a446e-c1a2-b6a3-dad5-6400f393e0fc",
							"code": "GridDetail_agutdo1DS_PgrPaymentTerms",
							"caption": "#ResourceString(GridDetail_agutdo1DS_PgrPaymentTerms)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_wo4w0yt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_i5fzjab",
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
					"visible": true,
					"alignItems": "stretch",
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_jd5h7os",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_jd5h7os_title)#",
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
				"name": "GridContainer_5reqata",
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
				"parentName": "ExpansionPanel_jd5h7os",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_zelbcxa",
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
				"parentName": "GridContainer_5reqata",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_6q0awlm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_6q0awlm_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrDeliveryTimesAccountAddress"
						}
					}
				},
				"parentName": "FlexContainer_zelbcxa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_hvdu3aw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_hvdu3aw_caption)#",
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
							"dataSourceName": "GridDetail_bzmq35rDS"
						}
					}
				},
				"parentName": "FlexContainer_zelbcxa",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_xqgiqsu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_xqgiqsu_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_zelbcxa",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ah1nj62",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ah1nj62_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_bzmq35r"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xqgiqsu",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_8l83uh3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_8l83uh3_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrDeliveryTimesAccountAddress"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_xqgiqsu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_wy1k49q",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_wy1k49q_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_wy1k49q_GridDetail_bzmq35r",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_bzmq35r"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_wy1k49q_SearchValue",
							"GridDetailSearchFilter_wy1k49q_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_zelbcxa",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_shn2eng",
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
				"parentName": "ExpansionPanel_jd5h7os",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_bzmq35r",
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
							"enable": true,
							"itemsCreation": true
						},
						"columns": {
							"sorting": false
						}
					},
					"items": "$GridDetail_bzmq35r",
					"primaryColumnName": "GridDetail_bzmq35rDS_Id",
					"columns": [
						{
							"id": "915700c7-a01c-7c5d-6aae-e88868ba9278",
							"code": "GridDetail_bzmq35rDS_PgrDayOfWeek_Number",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrDayOfWeek_Number)#",
							"dataValueType": 4,
							"width": 76
						},
						{
							"id": "b9a0c06d-18d9-3824-ebb5-8e10e5af32a2",
							"code": "GridDetail_bzmq35rDS_PgrDayOfWeek",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrDayOfWeek)#",
							"dataValueType": 10,
							"width": 170
						},
						{
							"id": "73cda5f0-d10a-bb85-232d-e7bca231846d",
							"code": "GridDetail_bzmq35rDS_PgrOpeningHoursFrom1",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrOpeningHoursFrom1)#",
							"dataValueType": 27,
							"width": 202
						},
						{
							"id": "67329489-4b38-cbd5-0b56-6957569ff5e4",
							"code": "GridDetail_bzmq35rDS_PgrOpeningHoursTo1",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrOpeningHoursTo1)#",
							"dataValueType": 27,
							"width": 187
						},
						{
							"id": "6ca71f1a-ebf8-ddf5-1109-6c115343f221",
							"code": "GridDetail_bzmq35rDS_PgrOpeningHoursFrom2",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrOpeningHoursFrom2)#",
							"dataValueType": 27,
							"width": 205
						},
						{
							"id": "e4c04bda-9fdd-c7f3-f074-e30ef5323891",
							"code": "GridDetail_bzmq35rDS_PgrOpeningHoursTo2",
							"caption": "#ResourceString(GridDetail_bzmq35rDS_PgrOpeningHoursTo2)#",
							"dataValueType": 27,
							"width": 187
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_shn2eng",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_wuleg2y",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_wuleg2y_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_k4twbm7",
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
				"parentName": "TabContainer_wuleg2y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_ccemeuw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.AccountAddressDS_PgrValidFrom_7ons7ox",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "left",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$AccountAddressDS_PgrValidFrom_7ons7ox",
					"visible": true
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pccif6v",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.AccountAddressDS_PgrValidTo_lridfk8",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "left",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$AccountAddressDS_PgrValidTo_lridfk8",
					"visible": true
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_2dbtdqa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.AccountAddressDS_PgrMaxStackWeight_yyfik64",
					"control": "$AccountAddressDS_PgrMaxStackWeight_yyfik64",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_cqgkanz",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.AccountAddressDS_PgrMaxStackHeight_tdd0lwk",
					"control": "$AccountAddressDS_PgrMaxStackHeight_tdd0lwk",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_50xft4s",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 2,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.AccountAddressDS_PgrLoadingSillHeight_eev1ymh",
					"control": "$AccountAddressDS_PgrLoadingSillHeight_eev1ymh",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_517a1dj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAddressDS_PgrPalletManagementContact_u7641u7",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$AccountAddressDS_PgrPalletManagementContact_u7641u7"
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_dhxtf7i",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dhxtf7i_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_517a1dj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_h3bcsqu",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.AccountAddressDS_PgrReverseUnloading_plc23jp",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$AccountAddressDS_PgrReverseUnloading_plc23jp",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_k4twbm7",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AccountAddressDS_Address_diesqny": {
						"modelConfig": {
							"path": "AccountAddressDS.Address"
						}
					},
					"AccountAddressDS_AddressType_9nu05tf": {
						"modelConfig": {
							"path": "AccountAddressDS.AddressType"
						}
					},
					"AccountAddressDS_AddressType_9nu05tf_List": {
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
					"AccountAddressDS_Primary_5t8s0bg": {
						"modelConfig": {
							"path": "AccountAddressDS.Primary"
						}
					},
					"AccountAddressDS_Zip_itvhzsn": {
						"modelConfig": {
							"path": "AccountAddressDS.Zip"
						}
					},
					"GridDetail_bzmq35r": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_bzmq35rDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_wy1k49q_GridDetail_bzmq35r",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "PgrDayOfWeek_Number"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_bzmq35rDS_PgrDayOfWeek_Number": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrDayOfWeek_Number"
									}
								},
								"GridDetail_bzmq35rDS_PgrDayOfWeek": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrDayOfWeek"
									}
								},
								"GridDetail_bzmq35rDS_PgrOpeningHoursFrom1": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrOpeningHoursFrom1"
									}
								},
								"GridDetail_bzmq35rDS_PgrOpeningHoursTo1": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrOpeningHoursTo1"
									}
								},
								"GridDetail_bzmq35rDS_PgrOpeningHoursFrom2": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrOpeningHoursFrom2"
									}
								},
								"GridDetail_bzmq35rDS_PgrOpeningHoursTo2": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.PgrOpeningHoursTo2"
									}
								},
								"GridDetail_bzmq35rDS_Id": {
									"modelConfig": {
										"path": "GridDetail_bzmq35rDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_agutdo1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_agutdo1DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_f9b0rct_GridDetail_agutdo1",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_agutdo1DS_PgrPlantId": {
									"modelConfig": {
										"path": "GridDetail_agutdo1DS.PgrPlantId"
									}
								},
								"GridDetail_agutdo1DS_PgrCurrency": {
									"modelConfig": {
										"path": "GridDetail_agutdo1DS.PgrCurrency"
									}
								},
								"GridDetail_agutdo1DS_PgrPaymentTerms": {
									"modelConfig": {
										"path": "GridDetail_agutdo1DS.PgrPaymentTerms"
									}
								},
								"GridDetail_agutdo1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_agutdo1DS.Id"
									}
								}
							}
						}
					},
					"AccountAddressDS_Country_xxebp21": {
						"modelConfig": {
							"path": "AccountAddressDS.Country"
						}
					},
					"AccountAddressDS_Country_xxebp21_List": {
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
					"AccountAddressDS_Region_lh86k5e": {
						"modelConfig": {
							"path": "AccountAddressDS.Region"
						}
					},
					"AccountAddressDS_Region_lh86k5e_List": {
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
					"AccountAddressDS_City_ajr19vx": {
						"modelConfig": {
							"path": "AccountAddressDS.City"
						}
					},
					"AccountAddressDS_City_ajr19vx_List": {
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
					"AccountAddressDS_PgrValidFrom_7ons7ox": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrValidFrom"
						}
					},
					"AccountAddressDS_PgrValidTo_lridfk8": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrValidTo"
						}
					},
					"AccountAddressDS_PgrMaxStackWeight_yyfik64": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrMaxStackWeight"
						}
					},
					"AccountAddressDS_PgrMaxStackHeight_tdd0lwk": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrMaxStackHeight"
						}
					},
					"AccountAddressDS_PgrLoadingSillHeight_eev1ymh": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrLoadingSillHeight"
						}
					},
					"AccountAddressDS_PgrReverseUnloading_plc23jp": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrReverseUnloading"
						}
					},
					"AccountAddressDS_PgrPalletManagementContact_u7641u7": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrPalletManagementContact"
						}
					},
					"AccountAddressDS_PgrPalletManagementContact_u7641u7_List": {
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
					"AccountAddressDS_PgrWepaformAddressId_8cs6vr3": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrWepaformAddressId"
						}
					},
					"AccountAddressDS_PgrWepaformAddressName_k4953sl": {
						"modelConfig": {
							"path": "AccountAddressDS.PgrWepaformAddressName"
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
						"AccountAddressDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "AccountAddress",
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
						},
						"GridDetail_bzmq35rDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "PgrDeliveryTimesAccountAddress",
								"attributes": {
									"PgrDayOfWeek_Number": {
										"type": "ForwardReference",
										"path": "PgrDayOfWeek.Number"
									},
									"PgrDayOfWeek": {
										"path": "PgrDayOfWeek"
									},
									"PgrOpeningHoursFrom1": {
										"path": "PgrOpeningHoursFrom1"
									},
									"PgrOpeningHoursTo1": {
										"path": "PgrOpeningHoursTo1"
									},
									"PgrOpeningHoursFrom2": {
										"path": "PgrOpeningHoursFrom2"
									},
									"PgrOpeningHoursTo2": {
										"path": "PgrOpeningHoursTo2"
									}
								}
							}
						},
						"GridDetail_agutdo1DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "PgrPlantAccountAddress",
								"attributes": {
									"PgrPlantId": {
										"path": "PgrPlantId"
									},
									"PgrCurrency": {
										"path": "PgrCurrency"
									},
									"PgrPaymentTerms": {
										"path": "PgrPaymentTerms"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "AccountAddressDS",
					"dependencies": {
						"GridDetail_bzmq35rDS": [
							{
								"attributePath": "PgrAccountAddress",
								"relationPath": "AccountAddressDS.Id"
							}
						],
						"GridDetail_agutdo1DS": [
							{
								"attributePath": "PgrAccountAddress",
								"relationPath": "AccountAddressDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});