define("Accounts_FormPage", /**SCHEMA_DEPS*/["PgrAccountCompetitorShareHelper", "@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(PgrAccountCompetitorShareHelper, sdk)/**SCHEMA_ARGS*/ {
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
				"name": "NBOContainer"
			},
			{
				"operation": "remove",
				"name": "NextBestOffer"
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileFieldFlexContainer",
				"values": {
					"gap": "small"
				}
			},
			{
				"operation": "remove",
				"name": "LeadConversionScore"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "addRecord_fhp55rg"
			},
			{
				"operation": "remove",
				"name": "Type"
			},
			{
				"operation": "merge",
				"name": "AccountCategory",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"labelPosition": "left",
					"readonly": false
				}
			},
			{
				"operation": "move",
				"name": "AccountCategory",
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "Territory",
				"values": {
					"showValueAsLink": false,
					"valueDetails": null,
					"secondaryDisplayValue": "Description"
				}
			},
			{
				"operation": "remove",
				"name": "Tier"
			},
			{
				"operation": "remove",
				"name": "Industry"
			},
			{
				"operation": "remove",
				"name": "AccountCommunicationOptions"
			},
			{
				"operation": "remove",
				"name": "AccountCommunicationOptionsAddButton"
			},
			{
				"operation": "merge",
				"name": "PrimaryContactContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"underlineSelectedTabColor": "crt-color-coral",
					"visible": true,
					"stretch": true,
					"selectedTab": {
						"value": "TabContainer_Customer"
					}
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "AccountInfoFieldsContainer"
			},
			{
				"operation": "remove",
				"name": "AlternativeName"
			},
			{
				"operation": "remove",
				"name": "Ownership"
			},
			{
				"operation": "remove",
				"name": "AnnualRevenue"
			},
			{
				"operation": "remove",
				"name": "EmployeesNumber"
			},
			{
				"operation": "merge",
				"name": "AddressExpansionPanel",
				"values": {
					"toggleType": "material",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "AddressExpansionPanel",
				"parentName": "TabContainer_Competitor",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "AddressList",
				"values": {
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"columns": [
						{
							"id": "690e72c4-7e7f-acf3-2606-8e518c7adca8",
							"code": "AddressListDS_PgrWepaformAddressName",
							"caption": "#ResourceString(AddressListDS_PgrWepaformAddressName)#",
							"dataValueType": 27
						},
						{
							"id": "380e56aa-3444-c9f4-9a06-01d2453cd40f",
							"code": "AddressListDS_AddressType",
							"caption": "#ResourceString(AddressListDS_AddressType)#",
							"dataValueType": 10,
							"width": 144
						},
						{
							"id": "5cc016f0-a5fe-1387-fad6-503b736b8aff",
							"code": "AddressListDS_FullAddress",
							"caption": "#ResourceString(AddressListDS_FullAddress)#",
							"dataValueType": 29,
							"width": 430
						},
						{
							"id": "33fa8761-c7d0-f11d-f48a-b2e9b715bc85",
							"code": "AddressListDS_Primary",
							"caption": "#ResourceString(AddressListDS_Primary)#",
							"dataValueType": 12,
							"width": 122
						}
					]
				}
			},
			{
				"operation": "remove",
				"name": "BankingDetailsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsAddButton"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsDataButton"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "GridContainer_8wcf7f2"
			},
			{
				"operation": "remove",
				"name": "BankingDetailsList"
			},
			{
				"operation": "merge",
				"name": "ContactsExpansionPanel",
				"values": {
					"toggleType": "material",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "ContactsExpansionPanel",
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "ContactsList",
				"values": {
					"columns": [
						{
							"id": "c1dd25a6-eb8e-e961-9345-a4e679bf5928",
							"code": "ContactsListDS_Name",
							"caption": "#ResourceString(ContactsListDS_Name)#",
							"dataValueType": 28,
							"width": 235
						},
						{
							"id": "593db3fb-3bc9-5b57-df86-21d34af63600",
							"code": "ContactsListDS_JobTitle",
							"caption": "#ResourceString(ContactsListDS_JobTitle)#",
							"dataValueType": 28,
							"width": 183
						},
						{
							"id": "cdea567b-2046-de92-1417-69f7e886b567",
							"code": "ContactsListDS_MobilePhone",
							"caption": "#ResourceString(ContactsListDS_MobilePhone)#",
							"dataValueType": 42,
							"width": 185
						},
						{
							"id": "d7adaacb-11fa-9428-a772-672d6e192781",
							"code": "ContactsListDS_Email",
							"caption": "#ResourceString(ContactsListDS_Email)#",
							"dataValueType": 45,
							"width": 242
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "NewsAndInsightsTab",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "SalesTab",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "CompetitorsExpansionPanel",
				"values": {
					"toggleType": "material",
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "CompetitorsExpansionPanel",
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "merge",
				"name": "GridDetail_DeleteBulkAction",
				"values": {
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetailDS",
							"filters": "$GridDetail | crt.ToCollectionFilters : 'GridDetail' : $GridDetail_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_SelectionState"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "CompetitorsList",
				"values": {
					"columns": [
						{
							"id": "7a4854a7-a8c0-9cbf-2fb7-8c82e2555f5d",
							"code": "GridDetailDS_PgrCompetitor",
							"caption": "#ResourceString(GridDetailDS_PgrCompetitor)#",
							"dataValueType": 10,
							"width": 265
						},
						{
							"id": "b1b98c44-0fd3-85e1-bc1b-c10459760f7b",
							"code": "GridDetailDS_PgrShare",
							"caption": "#ResourceString(GridDetailDS_PgrShare)#",
							"dataValueType": 4,
							"width": 117
						},
						{
							"id": "50f086fa-2a7b-978b-df47-93423fbc4e04",
							"code": "GridDetailDS_PgrValidFrom",
							"caption": "#ResourceString(GridDetailDS_PgrValidFrom)#",
							"dataValueType": 7,
							"width": 147
						},
						{
							"id": "1c2d8da8-476c-0a9f-1f69-4477a8833a3c",
							"code": "GridDetailDS_PgrValidTo",
							"caption": "#ResourceString(GridDetailDS_PgrValidTo)#",
							"dataValueType": 7,
							"width": 145
						},
						{
							"id": "b6b4a7a8-15ba-6008-700f-286c31f8ba9e",
							"code": "GridDetailDS_Description",
							"caption": "#ResourceString(GridDetailDS_Description)#",
							"dataValueType": 28,
							"width": 489
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "ContractExpansionPanel",
				"values": {
					"toggleType": "material",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "move",
				"name": "ContractExpansionPanel",
				"parentName": "ContractsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ContractList",
				"values": {
					"columns": [
						{
							"id": "4540b7f6-48d1-661d-0f0d-8c15be664a71",
							"code": "ContractListDS_Number",
							"caption": "#ResourceString(ContractListDS_Number)#",
							"dataValueType": 28,
							"width": 179
						},
						{
							"id": "4f56e248-b1fd-45eb-dbe0-5d18b0d36572",
							"code": "ContractListDS_StartDate",
							"caption": "#ResourceString(ContractListDS_StartDate)#",
							"dataValueType": 8,
							"width": 147
						},
						{
							"id": "61fde367-82f3-199c-6f8c-3b4233119d99",
							"code": "ContractListDS_EndDate",
							"caption": "#ResourceString(ContractListDS_EndDate)#",
							"dataValueType": 8,
							"width": 112
						},
						{
							"id": "4b252c11-47d1-6d54-6e8c-c7b0d00f94f5",
							"code": "ContractListDS_PgrContractRenewalReminderDate",
							"caption": "#ResourceString(ContractListDS_PgrContractRenewalReminderDate)#",
							"dataValueType": 8,
							"width": 220
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "ServiceTab",
				"values": {
					"visible": false
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
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(AttachmentsTabContainerHeaderLabel_caption)#)#",
					"visible": true,
					"headingLevel": "label"
				}
			},
			{
				"operation": "insert",
				"name": "Checkbox_khw4l41",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsActive_kz1dt68",
					"ariaLabel": "",
					"labelPosition": "right",
					"tooltip": "",
					"control": "$PDS_PgrIsActive_kz1dt68",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MultiSelect_unyiz66",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelect_unyiz66_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "PgrAccount",
					"selectSchemaName": "PgrAccountTypesInAccount",
					"selectColumnName": "PgrAccountType",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "#ResourceString(MultiSelect_unyiz66_placeholder)#",
					"tooltip": "",
					"required": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_tuutgko",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Country_4npsawy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Country_4npsawy",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(ComboBox_tuutgko_placeholder)#"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PhoneInput_a95qk36",
				"values": {
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_Phone_foyvyxh",
					"control": "$PDS_Phone_foyvyxh",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "EmailInput_x4xju0b",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_PgrEmail_qsukl9d",
					"control": "$PDS_PgrEmail_qsukl9d",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "WebInput_pjk9asa",
				"values": {
					"type": "crt.WebInput",
					"label": "$Resources.Strings.PDS_Web_k5w0a02",
					"control": "$PDS_Web_k5w0a02",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TabContainer_k86wbqq",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_k86wbqq_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_nqwyxm6",
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
				"parentName": "TabContainer_k86wbqq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ovpkb8a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ovpkb8a_title)#",
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
				"parentName": "GridContainer_nqwyxm6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jb6vov4",
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
				"parentName": "ExpansionPanel_ovpkb8a",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1od5ykb",
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
				"parentName": "GridContainer_jb6vov4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3fohkij",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3fohkij_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Account"
						}
					}
				},
				"parentName": "FlexContainer_1od5ykb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_7aypmum",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_7aypmum_caption)#",
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
							"dataSourceName": "GridDetail_fwd4w3aDS"
						}
					}
				},
				"parentName": "FlexContainer_1od5ykb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_6weak4s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_6weak4s_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_1od5ykb",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_eqx4wtk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_eqx4wtk_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_fwd4w3a"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6weak4s",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_g2ap2gd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_g2ap2gd_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Account"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_6weak4s",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_2nfdaxt",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_2nfdaxt_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_2nfdaxt_GridDetail_fwd4w3a",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_fwd4w3a"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_2nfdaxt_SearchValue",
							"GridDetailSearchFilter_2nfdaxt_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_1od5ykb",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_mmhpxhm",
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
				"parentName": "ExpansionPanel_ovpkb8a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_fwd4w3a",
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
					"items": "$GridDetail_fwd4w3a",
					"primaryColumnName": "GridDetail_fwd4w3aDS_Id",
					"columns": [
						{
							"id": "5bcb3d93-7843-9db5-4dd0-8fec6c8d70b9",
							"code": "GridDetail_fwd4w3aDS_Name",
							"caption": "#ResourceString(GridDetail_fwd4w3aDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "ce78c41f-9045-9e0d-e43b-ee8669fca39c",
							"code": "GridDetail_fwd4w3aDS_Country",
							"caption": "#ResourceString(GridDetail_fwd4w3aDS_Country)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_mmhpxhm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Customer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Customer_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_6shj6h0",
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
				},
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_gcuo1c6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrSapCustomerId_z5y13zl",
					"control": "$PDS_PgrSapCustomerId_z5y13zl",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_n90qqph",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrWepaformCustomerId_pn3f9ob",
					"control": "$PDS_PgrWepaformCustomerId_pn3f9ob",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_kypf8m4",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSalesManager_3n1dybs",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrSalesManager_3n1dybs",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_5z75fqd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5z75fqd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kypf8m4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_8gsoqoi",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSalesDirector_2tiaywd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrSalesDirector_2tiaywd",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_39a215k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrServiceTeamLead_jjhhd6x",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrServiceTeamLead_jjhhd6x",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_y36l020",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrCustomerServiceName_e6z07su",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrCustomerServiceName_e6z07su",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ComboBox_8v0lumw",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrAccountClassification_ilinsh2",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrAccountClassification_ilinsh2",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ComboBox_1xkr1aq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrMainPlantLinked_xd1c08b",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrMainPlantLinked_xd1c08b",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_k3m2ucs",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrEori_xp4lirj",
					"control": "$PDS_PgrEori_xp4lirj",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Checkbox_hwsk2h6",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsTestCustomer_fb0wxic",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrIsTestCustomer_fb0wxic",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Checkbox_of59b86",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsFsc_iqdgiac",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrIsFsc_iqdgiac"
				},
				"parentName": "GridContainer_6shj6h0",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_1mbln9s",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_1mbln9s_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_4xxpfxs",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ExpansionPanel_1mbln9s",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_vgwlte4",
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
				"parentName": "GridContainer_4xxpfxs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_4v2hyhs",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_4v2hyhs_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AccountAddress",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vgwlte4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_h41prxx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_h41prxx_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "AddressListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_vgwlte4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_wzoi3mp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_wzoi3mp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FlexContainer_vgwlte4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_5sivz5r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_5sivz5r_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AddressList"
						}
					},
					"visible": true
				},
				"parentName": "Button_wzoi3mp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_hgmncrh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_hgmncrh_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AccountAddress"
						}
					},
					"visible": true
				},
				"parentName": "Button_wzoi3mp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter_2pozl4n",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_2pozl4n_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_2pozl4n_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_2pozl4n_SearchValue",
							"SearchFilter_2pozl4n_FilteredColumnsGroups"
						]
					},
					"iconOnly": true
				},
				"parentName": "FlexContainer_vgwlte4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xddq3ha",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
				"parentName": "ExpansionPanel_1mbln9s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_v111gbq",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$DataGrid_v111gbq",
					"primaryColumnName": "DataGrid_v111gbqDS_Id",
					"columns": [
						{
							"id": "29558505-609c-9685-d5db-880b88d337f7",
							"code": "DataGrid_v111gbqDS_PgrWepaformAddressName",
							"caption": "#ResourceString(DataGrid_v111gbqDS_PgrWepaformAddressName)#",
							"dataValueType": 27
						},
						{
							"id": "f9eb005e-8317-ca4c-8ac4-141dd0cef8a0",
							"code": "DataGrid_v111gbqDS_AddressType",
							"caption": "#ResourceString(DataGrid_v111gbqDS_AddressType)#",
							"dataValueType": 10,
							"width": 169
						},
						{
							"id": "c8da8acf-05a9-e126-221c-93c959c7aa05",
							"code": "DataGrid_v111gbqDS_FullAddress",
							"caption": "#ResourceString(DataGrid_v111gbqDS_FullAddress)#",
							"dataValueType": 29,
							"width": 430
						},
						{
							"id": "d529efff-c653-4d74-44d6-a0fb3a662e4a",
							"code": "DataGrid_v111gbqDS_Primary",
							"caption": "#ResourceString(DataGrid_v111gbqDS_Primary)#",
							"dataValueType": 12,
							"width": 240
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "GridContainer_xddq3ha",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_0hsju2s",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_0hsju2s_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": false,
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_mbpugwb",
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
				"parentName": "ExpansionPanel_0hsju2s",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rz91ur1",
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
				"parentName": "GridContainer_mbpugwb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_lwk5ty1",
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
				"parentName": "ExpansionPanel_0hsju2s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_opipzuu",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrGroupAffiliation_16xlbgt",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrGroupAffiliation_16xlbgt",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_a19pxa0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_a19pxa0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_opipzuu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_kvi446f",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Parent_a18wz6d",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Parent_a18wz6d",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_0jf0lbq",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrIsVertIntegrated_rpdvhst",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrIsVertIntegrated_rpdvhst",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_3m5qms7",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3m5qms7_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_0jf0lbq",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_lpabgxv",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrCustomerlabel_2rq2ydk",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrCustomerlabel_2rq2ydk",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_4qdejo5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4qdejo5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lpabgxv",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rztcyul",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_rztcyul_label)#",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_EmployeesNumber_ntswngw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_z0aq18c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z0aq18c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rztcyul",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_2uqsgcb",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_cbvjys1",
					"control": "$PDS_Notes_cbvjys1",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lwk5ty1",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_ilw1gpx",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_ilw1gpx_title)#",
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_illisv1",
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
				"parentName": "ExpansionPanel_ilw1gpx",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9ykdhsd",
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
				"parentName": "GridContainer_illisv1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_4naivbq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": null
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "ExpansionPanel_ilw1gpx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_uin8kaf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_PgrInvoiceMailAddress_c9rbw7h",
					"control": "$PDS_PgrInvoiceMailAddress_c9rbw7h",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false
				},
				"parentName": "GridContainer_4naivbq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_yixwr59",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
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
				"parentName": "GridContainer_4naivbq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_isdbwb4",
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
					"label": "$Resources.Strings.PDS_PgrHasEInvoicing_0k60l4b",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrHasEInvoicing_0k60l4b"
				},
				"parentName": "GridContainer_yixwr59",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ryv5x8h",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrVatNumber_31l5fjn",
					"control": "$PDS_PgrVatNumber_31l5fjn",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_4naivbq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_56z210h",
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
					"label": "$Resources.Strings.PDS_PgrHasInvoiceMailprocess_1okroik",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrHasInvoiceMailprocess_1okroik"
				},
				"parentName": "GridContainer_4naivbq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_st0yau0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrDuns_shscakz",
					"control": "$PDS_PgrDuns_shscakz",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_4naivbq",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_udydmkf",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_udydmkf_title)#",
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_xj7fd0v",
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
				"parentName": "ExpansionPanel_udydmkf",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_qihql9y",
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
				"parentName": "GridContainer_xj7fd0v",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wzimzx0",
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
				"parentName": "ExpansionPanel_udydmkf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hw25wng",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrEBox_sl2zhwl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrEBox_sl2zhwl"
				},
				"parentName": "GridContainer_wzimzx0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_kn4usgd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kn4usgd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hw25wng",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_7fefplx",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrBoardConnect_m7g7u7z",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrBoardConnect_m7g7u7z"
				},
				"parentName": "GridContainer_wzimzx0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_jbtnscj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrErpSystem_976qk60",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrErpSystem_976qk60"
				},
				"parentName": "GridContainer_wzimzx0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_bgjrj6r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_bgjrj6r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jbtnscj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3jtu7p2",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3jtu7p2_title)#",
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_lghv90o",
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
				"parentName": "ExpansionPanel_3jtu7p2",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ly97bd1",
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
				"parentName": "GridContainer_lghv90o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ohcpre9",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "ExpansionPanel_3jtu7p2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_wzd766g",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
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
				"parentName": "GridContainer_ohcpre9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_6sjd0uu",
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
					"label": "$Resources.Strings.PDS_PgrOrderBl_5k8bzjn",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrOrderBl_5k8bzjn"
				},
				"parentName": "GridContainer_wzd766g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_hpdw0f4",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrDeliveryBl_bxvb9ez",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrDeliveryBl_bxvb9ez"
				},
				"parentName": "GridContainer_wzd766g",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_yrk7ezh",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrPlanningBl_qznzr6t",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrPlanningBl_qznzr6t"
				},
				"parentName": "GridContainer_wzd766g",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_sfz8xhb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrDateBl_l8n0kmr",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrDateBl_l8n0kmr"
				},
				"parentName": "GridContainer_wzd766g",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_pa1hlbi",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_pa1hlbi_title)#",
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_znjvysw",
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
				"parentName": "ExpansionPanel_pa1hlbi",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rqufy4f",
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
				"parentName": "GridContainer_znjvysw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_lalm3yc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "ExpansionPanel_pa1hlbi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_c8zxpbs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrMaxOverDelivery_hpxvg9w",
					"control": "$PDS_PgrMaxOverDelivery_hpxvg9w",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_z31u2ob",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrMaxUnderDelivery_bi2k281",
					"control": "$PDS_PgrMaxUnderDelivery_bi2k281",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_16huvt7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_16huvt7_label)#",
					"control": "$PDS_PgrOverDeliveryPercentage1_rbc2vyy",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_9wk64ol",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_9wk64ol_label)#",
					"control": "$PDS_PgrOverDeliveryPercentage2_9ni6r4f",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_63qzwaj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_63qzwaj_label)#",
					"control": "$PDS_PgrOverDeliveryQuantity1_qja3zys",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_g4pyp3s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_g4pyp3s_label)#",
					"control": "$PDS_PgrOverDeliveryQuantity2_93opr1b",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Checkbox_x5wqrsd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrSensitiveToOverDelivery_xcl6v1b",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrSensitiveToOverDelivery_xcl6v1b"
				},
				"parentName": "GridContainer_lalm3yc",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_br1488r",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_br1488r_title)#",
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
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_voa3ybc",
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
				"parentName": "ExpansionPanel_br1488r",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3dac0wy",
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
				"parentName": "GridContainer_voa3ybc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Pgr369RunBtn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Pgr369RunBtn_caption)#",
					"color": "primary",
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "Pgr369Process",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"notificationText": "#ResourceString(Pgr369RunBtn_clicked_params_notificationText)#",
							"recordIdProcessParameterName": "AccountId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FlexContainer_3dac0wy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_8plbcqj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "ExpansionPanel_br1488r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_84ghcah",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_84ghcah_label)#",
					"control": "$PDS_Pgr369ThresholdPercentage_45pvsdl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ThresholdMatrix",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 5
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "wrap",
					"items": [],
					"fitContent": true,
					"visible": true,
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "end",
					"gap": "small"
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ListWidget_6k17ufu",
				"values": {
					"type": "crt.ListWidget",
					"widgetConfig": {
						"theme": "full-fill",
						"layout": {
							"color": "dark-blue"
						}
					},
					"title": "#ResourceString(ListWidget_6k17ufu_title)#",
					"features": {
						"rows": {
							"numeration": false,
							"selection": {
								"enable": true,
								"multiple": false
							}
						},
						"editable": false,
						"columns": {
							"dragAndDrop": false,
							"resizing": false,
							"sorting": false
						}
					},
					"items": "$ListWidget_6k17ufu",
					"primaryColumnName": "ListWidget_6k17ufuDS_Id",
					"columns": [
						{
							"id": "61f74c11-8f6c-0b78-7ada-ddb4463624d6",
							"code": "ListWidget_6k17ufuDS_PgrCategory",
							"caption": "#ResourceString(ListWidget_6k17ufuDS_PgrCategory)#",
							"dataValueType": 10,
							"width": 148
						},
						{
							"id": "b8c941d6-892a-4c19-1dfe-c5aea70cd4f0",
							"code": "ListWidget_6k17ufuDS_PgrRegion",
							"caption": "#ResourceString(ListWidget_6k17ufuDS_PgrRegion)#",
							"dataValueType": 10,
							"width": 148
						},
						{
							"id": "eb61ba55-2cad-fd70-14e8-1418f857eee1",
							"code": "ListWidget_6k17ufuDS_PgrPercentage",
							"caption": "#ResourceString(ListWidget_6k17ufuDS_PgrPercentage)#",
							"dataValueType": 32,
							"width": 76
						},
						{
							"id": "25685be0-af84-c930-25cd-770fcc074ebc",
							"code": "ListWidget_6k17ufuDS_PgrAbsolute",
							"caption": "#ResourceString(ListWidget_6k17ufuDS_PgrAbsolute)#",
							"dataValueType": 4,
							"width": 122
						}
					],
					"placeholder": false,
					"layoutConfig": {
						"width": 569.375
					},
					"visible": true,
					"fitContent": true
				},
				"parentName": "FlexContainer_ThresholdMatrix",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_08fq2bk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(NumberInput_08fq2bk_label)#",
					"control": "$PDS_Pgr369ThresholdAbsolute_3jso02f",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PgrActual3DayOrderIntake",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(PgrActual3DayOrderIntake_label)#",
					"control": "$PDS_PgrActual3DayOrderIntake_p194oi",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PgrOrderIntakeDayCounter",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrOrderIntakeDayCounter_yux7ecs",
					"control": "$PDS_PgrOrderIntakeDayCounter_yux7ecs",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PgrCurrentDailyBudget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(PgrCurrentDailyBudget_label)#",
					"control": "$PDS_PgrCurrentDailyBudget_p194db",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PgrExcludeFrom369",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": false,
					"disabled": "$PgrSuspensionReadonly",
					"inversed": false,
					"label": "#ResourceString(PgrExcludeFrom369Label)#",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_PgrExcludeFrom369",
					"visible": true
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "PgrSuspensionEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "#ResourceString(PgrSuspensionEndDateLabel)#",
					"placeholder": "",
					"readonly": "$PgrSuspensionReadonly",
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrSuspensionEndDate",
					"visible": "$PDS_PgrExcludeFrom369"
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "PgrSuspensionReason",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(PgrSuspensionReasonLabel)#",
					"control": "$PDS_PgrSuspensionReason",
					"placeholder": "",
					"tooltip": "",
					"readonly": "$PgrSuspensionReadonly",
					"multiline": true,
					"labelPosition": "auto",
					"visible": "$PDS_PgrExcludeFrom369"
				},
				"parentName": "GridContainer_8plbcqj",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_2p6qhh0",
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "TabContainer_Customer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Pgr369BudgetCalculationExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(Pgr369BudgetCalculationExpansionPanel_title)#",
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
				"parentName": "GridContainer_2p6qhh0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_xofeh4b",
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
				"parentName": "Pgr369BudgetCalculationExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mwhci84",
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
				"parentName": "GridContainer_xofeh4b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_whsjtwh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_whsjtwh_caption)#",
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
							"dataSourceName": "GridDetail_29ab1xwDS"
						}
					}
				},
				"parentName": "FlexContainer_mwhci84",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pfp47bp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pfp47bp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FlexContainer_mwhci84",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_2hjq4ts",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_2hjq4ts_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_29ab1xw"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pfp47bp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_j524rwj",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_j524rwj_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_j524rwj_GridDetail_29ab1xw",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_29ab1xw"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_j524rwj_SearchValue",
							"GridDetailSearchFilter_j524rwj_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mwhci84",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_a2uqab2",
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
				"parentName": "Pgr369BudgetCalculationExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_29ab1xw",
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
					"items": "$GridDetail_29ab1xw",
					"style": "plain-white",
					"primaryColumnName": "GridDetail_29ab1xwDS_Id",
					"columns": [
						{
							"id": "75acd904-1975-eee1-723b-056834f4de6a",
							"code": "GridDetail_29ab1xwDS_PgrCalculationDate",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrCalculationDate)#",
							"dataValueType": 8,
							"width": 173
						},
						{
							"id": "11c422f5-273a-b5b1-de66-9d6b8bfcd79a",
							"code": "GridDetail_29ab1xwDS_PgrWindowFrom",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrWindowFrom)#",
							"dataValueType": 8,
							"width": 158
						},
						{
							"id": "b780b78b-9f90-8157-61e8-d2cd733011d5",
							"code": "GridDetail_29ab1xwDS_PgrWindowTo",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrWindowTo)#",
							"dataValueType": 8,
							"width": 163
						},
						{
							"id": "cafe2e7c-10ad-5f2b-7d13-761679c3090a",
							"code": "GridDetail_29ab1xwDS_PgrCalendar",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrCalendar)#",
							"dataValueType": 10,
							"width": 139
						},
						{
							"id": "d41b8513-bd76-2d37-257d-d55148b1ef94",
							"code": "GridDetail_29ab1xwDS_PgrToleranceAdjustedBudget",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrToleranceAdjustedBudget)#",
							"dataValueType": 32,
							"width": 234
						},
						{
							"id": "f5b7919c-0ec5-29e4-0a42-dac7b6bcca12",
							"code": "GridDetail_29ab1xwDS_PgrOrderIntakeAvg",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrOrderIntakeAvg)#",
							"dataValueType": 32,
							"width": 199
						},
						{
							"id": "f92bff2a-4819-c84b-384e-1f72cecd524d",
							"code": "GridDetail_29ab1xwDS_PgrFullBudget",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrFullBudget)#",
							"dataValueType": 32,
							"width": 156
						},
						{
							"id": "315588af-cc5d-cc51-ac07-8d695dd99c6e",
							"code": "GridDetail_29ab1xwDS_PgrBudgetCompareValue",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrBudgetCompareValue)#",
							"dataValueType": 32,
							"width": 210
						},
						{
							"id": "3a3dfa41-5972-08b4-1ddb-ca624f1b11f8",
							"code": "GridDetail_29ab1xwDS_PgrIsDeviation",
							"caption": "#ResourceString(GridDetail_29ab1xwDS_PgrIsDeviation)#",
							"dataValueType": 12,
							"width": 134
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_a2uqab2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_Competitor",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Competitor_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_hx3nlo3",
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
				"parentName": "TabContainer_Competitor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_98mapb3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrGroupAffiliation_9p29u38",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrGroupAffiliation_9p29u38"
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_oqjntxr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_oqjntxr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_98mapb3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_1devo8k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrYearOfCommissioning_yubna50",
					"control": "$PDS_PgrYearOfCommissioning_yubna50",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_rbduqdg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrProductionCapacity_37qxny8",
					"control": "$PDS_PgrProductionCapacity_37qxny8",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_i2c1tlj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrWorkingWidth_ek4fr0q",
					"control": "$PDS_PgrWorkingWidth_ek4fr0q",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_kgt3n8v",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrSpecialFeatures_i5xwrh9",
					"control": "$PDS_PgrSpecialFeatures_i5xwrh9",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Input_rse4zse",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrCompetitorNotes_0og4zxy",
					"control": "$PDS_PgrCompetitorNotes_0og4zxy",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_hx3nlo3",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AccountCompetitorsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AccountCompetitorsExpansionPanel_title)#",
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
				"parentName": "TabContainer_Competitor",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_clemq6h",
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
				"parentName": "AccountCompetitorsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pw1kbai",
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
				"parentName": "GridContainer_clemq6h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_yu6jgen",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": null
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "AccountCompetitorsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountCompetitorsDataGrid",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 12
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$CompetitorsGrid",
					"activeRow": "$CompetitorsGrid_ActiveRow",
					"selectionState": "$CompetitorsGrid_SelectionState",
					"_selectionOptions": {
						"attribute": "CompetitorsGrid_SelectionState"
					},
					"primaryColumnName": "CompetitorsGridDS_Id",
					"columns": [
						{
							"id": "fb6698a2-b622-b4cd-82dd-7c5c3d52bf20",
							"code": "CompetitorsGridDS_PgrCompetitor",
							"caption": "#ResourceString(CompetitorsGridDS_PgrCompetitor)#",
							"dataValueType": 10
						},
						{
							"id": "b890b765-3d26-2bc5-fc68-baf13c161db8",
							"code": "CompetitorsGridDS_PgrShare",
							"caption": "#ResourceString(CompetitorsGridDS_PgrShare)#",
							"dataValueType": 4
						},
						{
							"id": "70540db1-b9c0-1827-394b-e934d06e2228",
							"code": "CompetitorsGridDS_PgrValidFrom",
							"caption": "#ResourceString(CompetitorsGridDS_PgrValidFrom)#",
							"dataValueType": 7
						},
						{
							"id": "482726a1-dee1-d49b-cc70-334f5d54d5c3",
							"code": "CompetitorsGridDS_PgrValidTo",
							"caption": "#ResourceString(CompetitorsGridDS_PgrValidTo)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_yu6jgen",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsGrid_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "CompetitorsGridDS",
							"filters": "$CompetitorsGrid | crt.ToCollectionFilters : 'CompetitorsGrid' : $CompetitorsGrid_SelectionState | crt.SkipIfSelectionEmpty : $CompetitorsGrid_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "AccountCompetitorsDataGrid",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsGrid_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "CompetitorsGridDS",
							"filters": "$CompetitorsGrid | crt.ToCollectionFilters : 'CompetitorsGrid' : $CompetitorsGrid_SelectionState | crt.SkipIfSelectionEmpty : $CompetitorsGrid_SelectionState"
						}
					}
				},
				"parentName": "CompetitorsGrid_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsGrid_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AccountCompetitorsDataGrid",
							"filters": "$CompetitorsGrid | crt.ToCollectionFilters : 'CompetitorsGrid' : $CompetitorsGrid_SelectionState | crt.SkipIfSelectionEmpty : $CompetitorsGrid_SelectionState"
						}
					}
				},
				"parentName": "AccountCompetitorsDataGrid",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CompetitorsGrid_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "CompetitorsGridDS",
							"selectionState": "$CompetitorsGrid_SelectionState"
						}
					}
				},
				"parentName": "AccountCompetitorsDataGrid",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CompetitorsGrid_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "CompetitorsGridDS",
							"filters": "$CompetitorsGrid | crt.ToCollectionFilters : 'CompetitorsGrid' : $CompetitorsGrid_SelectionState | crt.SkipIfSelectionEmpty : $CompetitorsGrid_SelectionState"
						}
					}
				},
				"parentName": "AccountCompetitorsDataGrid",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabContainer_cyno10d",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_cyno10d_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_phl3626",
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
						"rowGap": null
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
				},
				"parentName": "TabContainer_cyno10d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_mdtee87",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_mdtee87_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_cyno10d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_ha73no2",
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
				"parentName": "ExpansionPanel_mdtee87",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_v337qmt",
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
				"parentName": "GridContainer_ha73no2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_hjdjyjh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_hjdjyjh_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrBonus"
						}
					}
				},
				"parentName": "FlexContainer_v337qmt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_p6oyc1z",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_p6oyc1z_caption)#",
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
							"dataSourceName": "GridDetail_tziba2dDS"
						}
					}
				},
				"parentName": "FlexContainer_v337qmt",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ehue78f",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ehue78f_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_v337qmt",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zbxckdo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zbxckdo_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_tziba2d"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ehue78f",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ajtxz0r",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ajtxz0r_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrBonus"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ehue78f",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_uac2rdb",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_uac2rdb_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_uac2rdb_GridDetail_tziba2d",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_tziba2d"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_uac2rdb_SearchValue",
							"GridDetailSearchFilter_uac2rdb_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_v337qmt",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ybr7mvg",
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
				"parentName": "ExpansionPanel_mdtee87",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tziba2d",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_tziba2d",
					"activeRow": "$GridDetail_tziba2d_ActiveRow",
					"_filterOptions": {
						"from": [
							"GridDetail_tziba2d",
							"GridDetail_tziba2d_ActiveRow"
						],
						"expose": [
							{
								"attribute": "GridDetail_tziba2d_d9ac70e6_ExposeFilter",
								"converters": [
									{
										"converter": "crt.ToValuesFromCollection",
										"args": [
											"GridDetail_tziba2d",
											"Id"
										]
									},
									{
										"converter": "crt.ToInFilter",
										"args": [
											"PgrBonus"
										]
									}
								]
							}
						]
					},
					"primaryColumnName": "GridDetail_tziba2dDS_Id",
					"columns": [
						{
							"id": "3e3adc21-7458-123f-8985-dcccda10b7c8",
							"code": "GridDetail_tziba2dDS_PgrName",
							"caption": "#ResourceString(GridDetail_tziba2dDS_PgrName)#",
							"dataValueType": 27
						},
						{
							"id": "1dc20b9a-d91e-c29c-d553-5f68cfd409b8",
							"code": "GridDetail_tziba2dDS_PgrBonusType",
							"caption": "#ResourceString(GridDetail_tziba2dDS_PgrBonusType)#",
							"dataValueType": 27
						},
						{
							"id": "1f81ca24-20c1-f58c-63ce-15e301360ac8",
							"code": "GridDetail_tziba2dDS_PgrBaseValueType",
							"caption": "#ResourceString(GridDetail_tziba2dDS_PgrBaseValueType)#",
							"dataValueType": 27
						},
						{
							"id": "0ef2902e-0ebb-0338-42f5-158b232e24ab",
							"code": "GridDetail_tziba2dDS_PgrStartDate",
							"caption": "#ResourceString(GridDetail_tziba2dDS_PgrStartDate)#",
							"dataValueType": 8,
							"width": 164
						},
						{
							"id": "c140ec10-ada1-67e9-10a5-fd00797bbef5",
							"code": "GridDetail_tziba2dDS_PgrEndDate",
							"caption": "#ResourceString(GridDetail_tziba2dDS_PgrEndDate)#",
							"dataValueType": 8,
							"width": 184
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_ybr7mvg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_f9i47to",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_f9i47to_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_cyno10d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_eympq5d",
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
				"parentName": "ExpansionPanel_f9i47to",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_5v9kuu4",
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
				"parentName": "GridContainer_eympq5d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5xe45y0",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5xe45y0_caption)#",
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
				"parentName": "FlexContainer_5v9kuu4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_e3slm2q",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_e3slm2q_caption)#",
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
							"dataSourceName": "GridDetail_84xltziDS"
						}
					}
				},
				"parentName": "FlexContainer_5v9kuu4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_mpajj38",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_mpajj38_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_5v9kuu4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_squ7nei",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_squ7nei_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_84xltzi"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_mpajj38",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_3326t1j",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_3326t1j_caption)#",
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
				"parentName": "GridDetailSettingsBtn_mpajj38",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_y7i3jt7",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_y7i3jt7_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_y7i3jt7_GridDetail_84xltzi",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_84xltzi"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_y7i3jt7_SearchValue",
							"GridDetailSearchFilter_y7i3jt7_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_5v9kuu4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_lezxoxe",
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
				"parentName": "ExpansionPanel_f9i47to",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_84xltzi",
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
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_84xltzi",
					"primaryColumnName": "GridDetail_84xltziDS_Id",
					"columns": [
						{
							"id": "67cfe272-beed-cb1f-df13-684fcba38d96",
							"code": "GridDetail_84xltziDS_PgrBonus",
							"caption": "#ResourceString(GridDetail_84xltziDS_PgrBonus)#",
							"dataValueType": 10
						},
						{
							"id": "d73b221e-d1a1-1fab-356e-9e0fd40b00d5",
							"code": "GridDetail_84xltziDS_PgrBonusPercentage",
							"caption": "#ResourceString(GridDetail_84xltziDS_PgrBonusPercentage)#",
							"dataValueType": 31,
							"width": 277
						},
						{
							"id": "a07ed76f-e82f-01b4-50aa-aa44c7f0ef88",
							"code": "GridDetail_84xltziDS_PgrTierThreshold",
							"caption": "#ResourceString(GridDetail_84xltziDS_PgrTierThreshold)#",
							"dataValueType": 33,
							"width": 355
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_lezxoxe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_rn66zaz",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_rn66zaz_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_iwudwor",
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
				"parentName": "TabContainer_rn66zaz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_h2q0n69",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_h2q0n69_title)#",
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
				"parentName": "TabContainer_rn66zaz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1snf31w",
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
				"parentName": "ExpansionPanel_h2q0n69",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rubof13",
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
				"parentName": "GridContainer_1snf31w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_91b3j6t",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_91b3j6t_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrProjectPrice"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_rubof13",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_mtxk8e9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_mtxk8e9_caption)#",
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
							"dataSourceName": "GridDetail_8xx12aeDS"
						}
					}
				},
				"parentName": "FlexContainer_rubof13",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_htwphpx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_htwphpx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_rubof13",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_5q76u7a",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_5q76u7a_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8xx12ae"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_htwphpx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_giwgj5f",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_giwgj5f_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrProjectPrice"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_htwphpx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_fdq0wc9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_fdq0wc9_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_fdq0wc9_GridDetail_8xx12ae",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_8xx12ae"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_fdq0wc9_SearchValue",
							"GridDetailSearchFilter_fdq0wc9_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_rubof13",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bncq612",
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
				"parentName": "ExpansionPanel_h2q0n69",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8xx12ae",
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
							"itemsCreation": true,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_8xx12ae",
					"primaryColumnName": "GridDetail_8xx12aeDS_Id",
					"columns": [
						{
							"id": "f175566f-5b09-99a3-45b7-41dbd3a70406",
							"code": "GridDetail_8xx12aeDS_PgrName",
							"caption": "#ResourceString(GridDetail_8xx12aeDS_PgrName)#",
							"dataValueType": 27
						},
						{
							"id": "f4f66216-04bd-3565-a747-55f28ddd5823",
							"code": "GridDetail_8xx12aeDS_PgrProjectPriceId",
							"caption": "#ResourceString(GridDetail_8xx12aeDS_PgrProjectPriceId)#",
							"dataValueType": 4
						},
						{
							"id": "9a36293a-7810-be57-f740-e1c379a54cdc",
							"code": "GridDetail_8xx12aeDS_PgrStartDate",
							"caption": "#ResourceString(GridDetail_8xx12aeDS_PgrStartDate)#",
							"dataValueType": 8,
							"width": 153
						},
						{
							"id": "2be79a89-484b-a072-da6e-e63a34691a12",
							"code": "GridDetail_8xx12aeDS_PgrEndDate",
							"caption": "#ResourceString(GridDetail_8xx12aeDS_PgrEndDate)#",
							"dataValueType": 8,
							"width": 152
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"style": "plain-white"
				},
				"parentName": "GridContainer_bncq612",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_0nkic4p",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_0nkic4p_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_aym7emn",
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "TabContainer_0nkic4p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vchxido",
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
				"parentName": "TabContainer_0nkic4p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_gdz6d8t",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrLastVisit_hwb1kgp",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrLastVisit_hwb1kgp",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vchxido",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_vthgzr6",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_vthgzr6_title)#",
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
				"parentName": "TabContainer_0nkic4p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_vvam3q9",
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
				"parentName": "ExpansionPanel_vthgzr6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_68cdp28",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "small",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
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
					"justifyContent": "start",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_vvam3q9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_9867vlj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_9867vlj_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Activity",
							"defaultValues": [
								{
									"attributeName": "PgrAccount",
									"value": "$Id"
								},
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_odg5fng",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_odg5fng_caption)#",
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
							"dataSourceName": "GridDetail_c3c1pioDS"
						}
					}
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_i5902hb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_i5902hb_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": false
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_3z4s2or",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_3z4s2or_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_c3c1pio"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_i5902hb",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_3o0b1dh",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_3o0b1dh_caption)#",
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
				"parentName": "GridDetailSettingsBtn_i5902hb",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_hx0yfnz",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_hx0yfnz_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "ActivityCategory",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_hx0yfnz_GridDetail_c3c1pio",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_c3c1pio",
													"filterColumn": "ActivityCategory"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_hx0yfnz_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_29xf66d",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_29xf66d_config_caption)#",
						"hint": "",
						"icon": "settings-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "ActivityStatus",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_29xf66d_GridDetail_c3c1pio",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_c3c1pio",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_29xf66d_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilter_hs77vju",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_hs77vju_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_hs77vju_GridDetail_c3c1pio",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_c3c1pio",
													"customFilter": {
														"items": {
															"4b69cfd2-db78-422e-ba4e-9d962f9a93ca": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrIsOverdue"
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
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_hs77vju_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_c5n22bw",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_c5n22bw_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_c5n22bw_GridDetail_c3c1pio",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_c3c1pio"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_c5n22bw_SearchValue",
							"GridDetailSearchFilter_c5n22bw_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_68cdp28",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_qjfr2re",
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
				"parentName": "ExpansionPanel_vthgzr6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_c3c1pio",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 9
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_c3c1pio",
					"primaryColumnName": "GridDetail_c3c1pioDS_Id",
					"columns": [
						{
							"id": "a7749229-e273-53cb-c37f-300f997c32a7",
							"code": "GridDetail_c3c1pioDS_Title",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_Title)#",
							"dataValueType": 28,
							"width": 187
						},
						{
							"id": "491a36b8-fe60-3794-4dee-eac086d97eda",
							"code": "GridDetail_c3c1pioDS_ActivityCategory",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_ActivityCategory)#",
							"dataValueType": 10
						},
						{
							"id": "317671c6-90a6-f9cf-d052-e55dd913e89e",
							"code": "GridDetail_c3c1pioDS_Status",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_Status)#",
							"dataValueType": 10,
							"width": 132
						},
						{
							"id": "3e6ab2a9-e1bd-28ee-787f-258461620ed8",
							"code": "GridDetail_c3c1pioDS_Owner",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_Owner)#",
							"dataValueType": 10
						},
						{
							"id": "ba38640c-5e41-76ba-58bf-4150f1541535",
							"code": "GridDetail_c3c1pioDS_DueDate",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_DueDate)#",
							"dataValueType": 7
						},
						{
							"id": "36d61217-f10f-1e33-b34d-df569d6402dd",
							"code": "GridDetail_c3c1pioDS_PgrPersonInCharge",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_PgrPersonInCharge)#",
							"dataValueType": 10
						},
						{
							"id": "4b4b55e9-8a86-613f-820b-12363dedf0d0",
							"code": "GridDetail_c3c1pioDS_PgrPersonInCharge_Email",
							"caption": "#ResourceString(GridDetail_c3c1pioDS_PgrPersonInCharge_Email)#",
							"dataValueType": 45
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_qjfr2re",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_4r2mr5k",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_4r2mr5k_title)#",
					"toggleType": "material",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "medium",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_0nkic4p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_na0r6qi",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "small",
						"rowGap": "large"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
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
				},
				"parentName": "ExpansionPanel_4r2mr5k",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yppel89",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "small",
					"alignItems": "flex-start",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
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
					"justifyContent": "center",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_na0r6qi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_jezor38",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_jezor38_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "PgrVisitReport"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_yppel89",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_8soib8z",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8soib8z_caption)#",
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
							"dataSourceName": "GridDetail_jexrtmfDS"
						}
					}
				},
				"parentName": "FlexContainer_yppel89",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_9b7zbr6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_9b7zbr6_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": false
				},
				"parentName": "FlexContainer_yppel89",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_c2tof2v",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_c2tof2v_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_jexrtmf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9b7zbr6",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_pvqdq58",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_pvqdq58_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrVisitReport"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_9b7zbr6",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_th32v2i",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_th32v2i_config_caption)#",
						"hint": "",
						"icon": "settings-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": true,
						"approachState": true
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_th32v2i_GridDetail_jexrtmf",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_jexrtmf",
													"customFilter": {
														"items": {
															"e42c1fa6-7dd6-41e8-83df-de9d69e3411f": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PgrVisitDidNotTakePlace"
																},
																"isAggregative": false,
																"dataValueType": 12,
																"rightExpression": {
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 12,
																		"value": false
																	}
																}
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "PgrVisitReport"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_th32v2i_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "FlexContainer_yppel89",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ermdvce",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ermdvce_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ermdvce_GridDetail_jexrtmf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_jexrtmf"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ermdvce_SearchValue",
							"GridDetailSearchFilter_ermdvce_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_yppel89",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_k8g95d9",
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
				"parentName": "ExpansionPanel_4r2mr5k",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_jexrtmf",
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
						},
						"columns": {
							"sorting": true
						}
					},
					"items": "$GridDetail_jexrtmf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_jexrtmfDS_Id",
					"columns": [
						{
							"id": "99e04d9e-55df-16d5-5bd6-493f528fe262",
							"code": "GridDetail_jexrtmfDS_PgrNumber",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrNumber)#",
							"dataValueType": 27,
							"width": 163
						},
						{
							"id": "dabfa9b3-e122-2539-4384-5476b536bf7e",
							"code": "GridDetail_jexrtmfDS_PgrVisitDate",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrVisitDate)#",
							"dataValueType": 8,
							"width": 138
						},
						{
							"id": "5b7b38c9-df60-a5c3-20bb-75eeb0b87016",
							"code": "GridDetail_jexrtmfDS_PgrOwner",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "00adb674-de3e-a559-4bfa-92e3996ba3ba",
							"code": "GridDetail_jexrtmfDS_PgrVisitType",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrVisitType)#",
							"dataValueType": 10
						},
						{
							"id": "1ce2b94c-4bad-803b-adb9-e0835062fdea",
							"code": "GridDetail_jexrtmfDS_PgrPerformance",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrPerformance)#",
							"dataValueType": 10
						},
						{
							"id": "8c867580-f038-3cf6-f1a8-4dbce4322726",
							"code": "GridDetail_jexrtmfDS_PgrIsRelevantForWeeklyReport",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrIsRelevantForWeeklyReport)#",
							"dataValueType": 12,
							"width": 251
						},
						{
							"id": "7a5852fb-6f5a-36ab-55d4-c126a4840b07",
							"code": "GridDetail_jexrtmfDS_PgrVisitDidNotTakePlace",
							"caption": "#ResourceString(GridDetail_jexrtmfDS_PgrVisitDidNotTakePlace)#",
							"dataValueType": 12,
							"width": 230
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_k8g95d9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ContractsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TabContainer_o1pkrnn",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_o1pkrnn_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_c8s89db",
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
						"rowGap": null
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
				},
				"parentName": "TabContainer_o1pkrnn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_nc0ykar",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_nc0ykar_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "caf2703b-bdc5-41eb-9ea1-c0b5c652d11a",
								"checkedState": true
							}
						],
						"entitySchemaName": "Period",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_nc0ykar_DataGrid_dr7ln3c",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_dr7ln3c",
													"filterColumn": "Period"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_nc0ykar_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "GridContainer_c8s89db",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_dr7ln3c",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_dr7ln3c",
					"primaryColumnName": "DataGrid_dr7ln3cDS_Id",
					"columns": [
						{
							"id": "2f56407c-1223-2e81-6f46-cf9465c98c19",
							"code": "DataGrid_dr7ln3cDS_Period",
							"caption": "#ResourceString(DataGrid_dr7ln3cDS_Period)#",
							"dataValueType": 10,
							"width": 337
						},
						{
							"id": "6c501d65-ecfa-ed47-ce6a-7168a45f0ff0",
							"code": "DataGrid_dr7ln3cDS_PgrOriginalValue",
							"caption": "#ResourceString(DataGrid_dr7ln3cDS_PgrOriginalValue)#",
							"dataValueType": 32
						},
						{
							"id": "4917a102-8059-f58f-0c14-ee7b1ce9f573",
							"code": "DataGrid_dr7ln3cDS_Value",
							"caption": "#ResourceString(DataGrid_dr7ln3cDS_Value)#",
							"dataValueType": 32,
							"width": 274
						},
						{
							"id": "27f65e4b-c13b-07a6-047b-9db382ba3f56",
							"code": "DataGrid_dr7ln3cDS_ModifiedBy",
							"caption": "#ResourceString(DataGrid_dr7ln3cDS_ModifiedBy)#",
							"dataValueType": 10
						},
						{
							"id": "1abe970b-3bcf-9bfd-0035-4cf52ecf2a91",
							"code": "DataGrid_dr7ln3cDS_ModifiedOn",
							"caption": "#ResourceString(DataGrid_dr7ln3cDS_ModifiedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "TabContainer_o1pkrnn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_jigo54h",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_jigo54h_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_yjdoo2c",
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
				"parentName": "TabContainer_jigo54h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hzgkxwg",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hzgkxwg_title)#",
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
				"parentName": "TabContainer_jigo54h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gje4fkt",
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
				"parentName": "ExpansionPanel_hzgkxwg",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gsnrt18",
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
					},
					"visible": false,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"justifyContent": "start",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_gje4fkt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_h1ztdaz",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_h1ztdaz_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Opportunity"
						}
					}
				},
				"parentName": "FlexContainer_gsnrt18",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_1tm6rqa",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_1tm6rqa_caption)#",
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
							"dataSourceName": "GridDetail_nzg1cklDS"
						}
					}
				},
				"parentName": "FlexContainer_gsnrt18",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_o98i8bf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_o98i8bf_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_gsnrt18",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_p3nd4vo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_p3nd4vo_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_nzg1ckl"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o98i8bf",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_2oem7mo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_2oem7mo_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Opportunity"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o98i8bf",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_94z9epr",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_94z9epr_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_94z9epr_GridDetail_nzg1ckl",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_nzg1ckl"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_94z9epr_SearchValue",
							"GridDetailSearchFilter_94z9epr_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_gsnrt18",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_g8fv817",
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
				"parentName": "ExpansionPanel_hzgkxwg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_nzg1ckl",
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
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_nzg1ckl",
					"primaryColumnName": "GridDetail_nzg1cklDS_Id",
					"columns": [
						{
							"id": "55b6be18-67af-dafa-d9ff-690dd9c7e159",
							"code": "GridDetail_nzg1cklDS_Title",
							"caption": "#ResourceString(GridDetail_nzg1cklDS_Title)#",
							"dataValueType": 30,
							"sticky": true,
							"width": 301
						},
						{
							"id": "22c353cd-5744-022f-7172-00ba3b355b2f",
							"code": "GridDetail_nzg1cklDS_Stage",
							"caption": "#ResourceString(GridDetail_nzg1cklDS_Stage)#",
							"dataValueType": 10
						},
						{
							"id": "d6812a18-ccc8-71c5-6b22-939f656813e1",
							"code": "GridDetail_nzg1cklDS_PgrEstimatedVolume",
							"caption": "#ResourceString(GridDetail_nzg1cklDS_PgrEstimatedVolume)#",
							"dataValueType": 32,
							"width": 374
						},
						{
							"id": "81ff9df0-26d0-4521-a361-10f82bc665e2",
							"code": "GridDetail_nzg1cklDS_PgrOpportunityStartDate",
							"caption": "#ResourceString(GridDetail_nzg1cklDS_PgrOpportunityStartDate)#",
							"dataValueType": 8,
							"width": 179
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_g8fv817",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_53gt8h5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"schemaName": "Activity",
						"schemaType": "Email",
						"isDefault": true,
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						}
					},
					"filters": "$TimelineTile_Email_53gt8h5_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_bmjjfsq",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Activity",
						"schemaType": "Activity",
						"isDefault": true,
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						}
					},
					"filters": "$TimelineTile_Activity_bmjjfsq_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call_o76o2si",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Contact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 13,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Call",
						"schemaType": null,
						"isDefault": true,
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"filter": null
					},
					"filters": "$TimelineTile_Call_o76o2si_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_f5wycgt",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Priority",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": {
									"column": 10,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Symptoms",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Case",
						"schemaType": null,
						"isDefault": true,
						"uId": "117d32f9-8275-4534-8411-1c66115ce9cd",
						"filter": null
					},
					"filters": "$TimelineTile_Case_f5wycgt_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract_9iz15cu",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "State",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 2,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Contract",
						"schemaType": null,
						"isDefault": true,
						"uId": "897be3e4-0333-467d-88e2-b7a945c0d810",
						"filter": null
					},
					"filters": "$TimelineTile_Contract_9iz15cu_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document_sia0w5c",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "State",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Document",
						"schemaType": null,
						"isDefault": true,
						"uId": "8b33b6b2-19f7-4222-9161-b4054b3fbb09",
						"filter": null
					},
					"filters": "$TimelineTile_Document_sia0w5c_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice_6uanfc5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DueDate",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Invoice",
						"schemaType": null,
						"isDefault": true,
						"uId": "bfb313dd-bb55-4e1b-8e42-3d346e0da7c5",
						"filter": null
					},
					"filters": "$TimelineTile_Invoice_6uanfc5_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Lead_5vhuvez",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "QualifiedAccount",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "LeadName",
								"columnLayout": null
							},
							{
								"columnName": "QualifiedAccount",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "QualifiedContact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "QualifyStatus",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Lead",
						"schemaType": null,
						"isDefault": true,
						"uId": "41af89e9-750b-4ebb-8cac-ff39b64841ec",
						"filter": null
					},
					"filters": "$TimelineTile_Lead_5vhuvez_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Opportunity_sq0yfy1",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DueDate",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Opportunity",
						"schemaType": null,
						"isDefault": true,
						"uId": "ae46fb87-c02c-4ae8-ad31-a923cdd994cf",
						"filter": null
					},
					"filters": "$TimelineTile_Opportunity_sq0yfy1_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order_jm9g18l",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Order",
						"schemaType": null,
						"isDefault": true,
						"uId": "80294582-06b5-4faa-a85f-3323e5536b71",
						"filter": null
					},
					"filters": "$TimelineTile_Order_jm9g18l_Items"
				},
				"parentName": "NewsAndInsightsTimeline",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "TabContainer_Account",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Account_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "GridContainer_7m810zi",
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
				"parentName": "TabContainer_Account",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_AIInsight_6f1e5ps",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							},
							{
								"columnName": "Description",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "AIInsight",
						"schemaType": null,
						"isDefault": true,
						"uId": "04184833-0a7d-4c43-a6da-fcd8bdd098c5",
						"filter": null
					},
					"filters": "$TimelineTile_AIInsight_6f1e5ps_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_ijt24xe",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						],
						"schemaName": "Activity",
						"schemaType": "Email",
						"isDefault": true,
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						}
					},
					"filters": "$TimelineTile_Email_ijt24xe_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_dse3x6s",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Activity",
						"schemaType": "Activity",
						"isDefault": true,
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						}
					},
					"filters": "$TimelineTile_Activity_dse3x6s_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call_n7hb4z5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Contact",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 13,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Call",
						"schemaType": null,
						"isDefault": true,
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"filter": null
					},
					"filters": "$TimelineTile_Call_n7hb4z5_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_7j640gq",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "RegisteredOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "Category",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Priority",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "SolutionDate",
								"columnLayout": {
									"column": 10,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Symptoms",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Case",
						"schemaType": null,
						"isDefault": true,
						"uId": "117d32f9-8275-4534-8411-1c66115ce9cd",
						"filter": null
					},
					"filters": "$TimelineTile_Case_7j640gq_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract_4zgrbe5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "State",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 2,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Contract",
						"schemaType": null,
						"isDefault": true,
						"uId": "897be3e4-0333-467d-88e2-b7a945c0d810",
						"filter": null
					},
					"filters": "$TimelineTile_Contract_4zgrbe5_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document_0mlkbbo",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "State",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Document",
						"schemaType": null,
						"isDefault": true,
						"uId": "8b33b6b2-19f7-4222-9161-b4054b3fbb09",
						"filter": null
					},
					"filters": "$TimelineTile_Document_0mlkbbo_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice_t0tvkl5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DueDate",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Invoice",
						"schemaType": null,
						"isDefault": true,
						"uId": "bfb313dd-bb55-4e1b-8e42-3d346e0da7c5",
						"filter": null
					},
					"filters": "$TimelineTile_Invoice_t0tvkl5_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order_44cshtp",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Account",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Order",
						"schemaType": null,
						"isDefault": true,
						"uId": "80294582-06b5-4faa-a85f-3323e5536b71",
						"filter": null
					},
					"filters": "$TimelineTile_Order_44cshtp_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_pjbrsdv",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline",
				"propertyName": "customFilters",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [
					"attributes"
				],
				"properties": [
					"Industry_List",
					"Type_List",
					"PDS_Tier_zi2auw2_List"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_dr7ln3c": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_dr7ln3cDS",
							"filterAttributes": [
								{
									"name": "QuickFilter_nc0ykar_DataGrid_dr7ln3c",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "DataGrid_dr7ln3c_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_dr7ln3cDS_Period": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.Period"
									}
								},
								"DataGrid_dr7ln3cDS_PgrOriginalValue": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.PgrOriginalValue"
									}
								},
								"DataGrid_dr7ln3cDS_Value": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.Value"
									}
								},
								"DataGrid_dr7ln3cDS_ModifiedBy": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.ModifiedBy"
									}
								},
								"DataGrid_dr7ln3cDS_ModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.ModifiedOn"
									}
								},
								"DataGrid_dr7ln3cDS_Id": {
									"modelConfig": {
										"path": "DataGrid_dr7ln3cDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_dr7ln3c_PredefinedFilter": {
						"value": {
							"items": {
								"aea9842d-e48e-48c9-8365-921cf1ec1e46": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Period"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "Period",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "October 2026",
													"Id": "0025ed01-0820-4f93-b7b8-ccfaed814cd9",
													"value": "0025ed01-0820-4f93-b7b8-ccfaed814cd9",
													"displayValue": "October 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "December 2026",
													"Id": "041f11f8-a01a-4cfa-aa3f-65da2c8afd78",
													"value": "041f11f8-a01a-4cfa-aa3f-65da2c8afd78",
													"displayValue": "December 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "June 2026",
													"Id": "0f297eb5-83de-4a2e-80e0-b73899d06345",
													"value": "0f297eb5-83de-4a2e-80e0-b73899d06345",
													"displayValue": "June 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "September 2026",
													"Id": "246e96ba-89ba-44ce-8283-2563832999c6",
													"value": "246e96ba-89ba-44ce-8283-2563832999c6",
													"displayValue": "September 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "April 2026",
													"Id": "35b2726e-cb37-45c2-968c-8c59e1525a54",
													"value": "35b2726e-cb37-45c2-968c-8c59e1525a54",
													"displayValue": "April 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "May 2026",
													"Id": "4d534ac3-2517-4f41-9542-455201e8a659",
													"value": "4d534ac3-2517-4f41-9542-455201e8a659",
													"displayValue": "May 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "January 2026",
													"Id": "53cb5e33-5cd4-46e1-bfda-ad69f90c6f81",
													"value": "53cb5e33-5cd4-46e1-bfda-ad69f90c6f81",
													"displayValue": "January 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "2026",
													"Id": "45a5d334-3746-4d2f-bebe-156d0b340687",
													"value": "45a5d334-3746-4d2f-bebe-156d0b340687",
													"displayValue": "2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "2nd quarter of 2026",
													"Id": "6f34f067-9e54-4278-8944-3bed915e4d47",
													"value": "6f34f067-9e54-4278-8944-3bed915e4d47",
													"displayValue": "2nd quarter of 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "February 2026",
													"Id": "79458d5c-4074-413f-90c7-b60ca3bf8162",
													"value": "79458d5c-4074-413f-90c7-b60ca3bf8162",
													"displayValue": "February 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "August 2026",
													"Id": "7f3cebf3-083d-4437-a3b7-bfcdd1c0fc66",
													"value": "7f3cebf3-083d-4437-a3b7-bfcdd1c0fc66",
													"displayValue": "August 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "March 2026",
													"Id": "8a319f46-e43b-4998-98a4-16d9b244d9f7",
													"value": "8a319f46-e43b-4998-98a4-16d9b244d9f7",
													"displayValue": "March 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "November 2026",
													"Id": "a8de3da7-aec8-4d17-8c7b-e6c05c722ba7",
													"value": "a8de3da7-aec8-4d17-8c7b-e6c05c722ba7",
													"displayValue": "November 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "4th quarter of 2026",
													"Id": "ab52b413-a93f-4f76-897d-959b3a300cd1",
													"value": "ab52b413-a93f-4f76-897d-959b3a300cd1",
													"displayValue": "4th quarter of 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "July 2026",
													"Id": "bbb8a664-d4f9-4c53-9cb1-8d037bad3719",
													"value": "bbb8a664-d4f9-4c53-9cb1-8d037bad3719",
													"displayValue": "July 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "3rd quarter of 2026",
													"Id": "bec74609-22e8-4579-af59-c39dc4011ee5",
													"value": "bec74609-22e8-4579-af59-c39dc4011ee5",
													"displayValue": "3rd quarter of 2026"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "1st quarter of 2026",
													"Id": "caf2703b-bdc5-41eb-9ea1-c0b5c652d11a",
													"value": "caf2703b-bdc5-41eb-9ea1-c0b5c652d11a",
													"displayValue": "1st quarter of 2026"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "AccountForecast"
						}
					},
					"PDS_EmployeesNumber_ntswngw": {
						"modelConfig": {
							"path": "PDS.EmployeesNumber"
						}
					},
					"PDS_EmployeesNumber_ntswngw_List": {
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
					"PDS_Notes_cbvjys1": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"PDS_Parent_a18wz6d": {
						"modelConfig": {
							"path": "PDS.Parent"
						}
					},
					"PDS_Parent_a18wz6d_List": {
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
					"PDS_PgrVatNumber_31l5fjn": {
						"modelConfig": {
							"path": "PDS.PgrVatNumber"
						}
					},
					"PDS_PgrIsActive_kz1dt68": {
						"modelConfig": {
							"path": "PDS.PgrIsActive"
						}
					},
					"PDS_PgrInvoiceMailAddress_c9rbw7h": {
						"modelConfig": {
							"path": "PDS.PgrInvoiceMailAddress"
						}
					},
					"PDS_PgrHasEInvoicing_0k60l4b": {
						"modelConfig": {
							"path": "PDS.PgrHasEInvoicing"
						}
					},
					"PDS_PgrHasInvoiceMailprocess_1okroik": {
						"modelConfig": {
							"path": "PDS.PgrHasInvoiceMailprocess"
						}
					},
					"PDS_PgrDuns_shscakz": {
						"modelConfig": {
							"path": "PDS.PgrDuns"
						}
					},
					"PDS_PgrEori_xp4lirj": {
						"modelConfig": {
							"path": "PDS.PgrEori"
						}
					},
					"PDS_PgrDeliveryBl_bxvb9ez": {
						"modelConfig": {
							"path": "PDS.PgrDeliveryBl"
						}
					},
					"PDS_PgrOrderBl_5k8bzjn": {
						"modelConfig": {
							"path": "PDS.PgrOrderBl"
						}
					},
					"PDS_PgrPlanningBl_qznzr6t": {
						"modelConfig": {
							"path": "PDS.PgrPlanningBl"
						}
					},
					"PDS_PgrDateBl_l8n0kmr": {
						"modelConfig": {
							"path": "PDS.PgrDateBl"
						}
					},
					"PDS_Pgr369ThresholdPercentage_45pvsdl": {
						"modelConfig": {
							"path": "PDS.Pgr369ThresholdPercentage"
						}
					},
					"PDS_Pgr369ThresholdAbsolute_3jso02f": {
						"modelConfig": {
							"path": "PDS.Pgr369ThresholdAbsolute"
						}
					},
					"PDS_PgrMaxOverDelivery_hpxvg9w": {
						"modelConfig": {
							"path": "PDS.PgrMaxOverDelivery"
						}
					},
					"PDS_PgrMaxUnderDelivery_bi2k281": {
						"modelConfig": {
							"path": "PDS.PgrMaxUnderDelivery"
						}
					},
					"PDS_PgrOverDeliveryPercentage2_9ni6r4f": {
						"modelConfig": {
							"path": "PDS.PgrOverDeliveryPercentage2"
						}
					},
					"PDS_PgrOverDeliveryPercentage1_rbc2vyy": {
						"modelConfig": {
							"path": "PDS.PgrOverDeliveryPercentage1"
						}
					},
					"PDS_PgrOverDeliveryQuantity1_qja3zys": {
						"modelConfig": {
							"path": "PDS.PgrOverDeliveryQuantity1"
						}
					},
					"PDS_PgrOverDeliveryQuantity2_93opr1b": {
						"modelConfig": {
							"path": "PDS.PgrOverDeliveryQuantity2"
						}
					},
					"PDS_PgrSensitiveToOverDelivery_xcl6v1b": {
						"modelConfig": {
							"path": "PDS.PgrSensitiveToOverDelivery"
						}
					},
					"PDS_PgrIsTestCustomer_fb0wxic": {
						"modelConfig": {
							"path": "PDS.PgrIsTestCustomer"
						}
					},
					"PDS_PgrIsFsc_iqdgiac": {
						"modelConfig": {
							"path": "PDS.PgrIsFsc"
						}
					},
					"PDS_PgrProductionCapacity_37qxny8": {
						"modelConfig": {
							"path": "PDS.PgrProductionCapacity"
						}
					},
					"PDS_PgrWorkingWidth_ek4fr0q": {
						"modelConfig": {
							"path": "PDS.PgrWorkingWidth"
						}
					},
					"PDS_PgrYearOfCommissioning_yubna50": {
						"modelConfig": {
							"path": "PDS.PgrYearOfCommissioning"
						}
					},
					"PDS_PgrSpecialFeatures_i5xwrh9": {
						"modelConfig": {
							"path": "PDS.PgrSpecialFeatures"
						}
					},
					"PDS_PgrGroupAffiliation_16xlbgt": {
						"modelConfig": {
							"path": "PDS.PgrGroupAffiliation"
						}
					},
					"PDS_PgrGroupAffiliation_16xlbgt_List": {
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
					"PDS_PgrCustomerlabel_2rq2ydk": {
						"modelConfig": {
							"path": "PDS.PgrCustomerlabel"
						}
					},
					"PDS_PgrCustomerlabel_2rq2ydk_List": {
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
					"PDS_PgrIsVertIntegrated_rpdvhst": {
						"modelConfig": {
							"path": "PDS.PgrIsVertIntegrated"
						}
					},
					"PDS_PgrIsVertIntegrated_rpdvhst_List": {
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
					"PDS_PgrErpSystem_976qk60": {
						"modelConfig": {
							"path": "PDS.PgrErpSystem"
						}
					},
					"PDS_PgrErpSystem_976qk60_List": {
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
					"PDS_PgrEBox_sl2zhwl": {
						"modelConfig": {
							"path": "PDS.PgrEBox"
						}
					},
					"PDS_PgrEBox_sl2zhwl_List": {
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
					"PDS_PgrSalesDirector_2tiaywd": {
						"modelConfig": {
							"path": "PDS.PgrSalesDirector"
						}
					},
					"PDS_PgrSalesDirector_2tiaywd_List": {
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
					"PDS_PgrCustomerServiceName_e6z07su": {
						"modelConfig": {
							"path": "PDS.PgrCustomerServiceName"
						}
					},
					"PDS_PgrCustomerServiceName_e6z07su_List": {
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
					"PDS_PgrServiceTeamLead_jjhhd6x": {
						"modelConfig": {
							"path": "PDS.PgrServiceTeamLead"
						}
					},
					"PDS_PgrServiceTeamLead_jjhhd6x_List": {
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
					"PDS_PgrBoardConnect_m7g7u7z": {
						"modelConfig": {
							"path": "PDS.PgrBoardConnect"
						}
					},
					"PDS_PgrAccountClassification_ilinsh2": {
						"modelConfig": {
							"path": "PDS.PgrAccountClassification"
						}
					},
					"PDS_PgrAccountClassification_ilinsh2_List": {
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
					"PDS_PgrMainPlantLinked_xd1c08b": {
						"modelConfig": {
							"path": "PDS.PgrMainPlantLinked"
						}
					},
					"PDS_PgrMainPlantLinked_xd1c08b_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "PgrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_PgrCompetitorNotes_0og4zxy": {
						"modelConfig": {
							"path": "PDS.PgrCompetitorNotes"
						}
					},
					"PDS_PgrDeliveryShare_8wr4r2b": {
						"modelConfig": {
							"path": "PDS.PgrDeliveryShare"
						}
					},
					"GridDetail_jexrtmf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_jexrtmfDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ermdvce_GridDetail_jexrtmf",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_th32v2i_GridDetail_jexrtmf",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "PgrVisitDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_jexrtmfDS_PgrNumber": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrNumber"
									}
								},
								"GridDetail_jexrtmfDS_PgrVisitDate": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrVisitDate"
									}
								},
								"GridDetail_jexrtmfDS_PgrOwner": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrOwner"
									}
								},
								"GridDetail_jexrtmfDS_PgrVisitType": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrVisitType"
									}
								},
								"GridDetail_jexrtmfDS_PgrPerformance": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrPerformance"
									}
								},
								"GridDetail_jexrtmfDS_PgrIsRelevantForWeeklyReport": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrIsRelevantForWeeklyReport"
									}
								},
								"GridDetail_jexrtmfDS_PgrVisitDidNotTakePlace": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.PgrVisitDidNotTakePlace"
									}
								},
								"GridDetail_jexrtmfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_jexrtmfDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrEmail_qsukl9d": {
						"modelConfig": {
							"path": "PDS.PgrEmail"
						}
					},
					"PDS_Phone_foyvyxh": {
						"modelConfig": {
							"path": "PDS.Phone"
						}
					},
					"PDS_Web_k5w0a02": {
						"modelConfig": {
							"path": "PDS.Web"
						}
					},
					"PDS_PgrSalesManager_3n1dybs": {
						"modelConfig": {
							"path": "PDS.PgrSalesManager"
						}
					},
					"PDS_PgrSalesManager_3n1dybs_List": {
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
					"PDS_PgrGroupAffiliation_9p29u38": {
						"modelConfig": {
							"path": "PDS.PgrGroupAffiliation"
						}
					},
					"PDS_PgrGroupAffiliation_9p29u38_List": {
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
					"DataGrid_v111gbq": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_v111gbqDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_v111gbqDS_PgrWepaformAddressName": {
									"modelConfig": {
										"path": "DataGrid_v111gbqDS.PgrWepaformAddressName"
									}
								},
								"DataGrid_v111gbqDS_AddressType": {
									"modelConfig": {
										"path": "DataGrid_v111gbqDS.AddressType"
									}
								},
								"DataGrid_v111gbqDS_FullAddress": {
									"modelConfig": {
										"path": "DataGrid_v111gbqDS.FullAddress"
									}
								},
								"DataGrid_v111gbqDS_Primary": {
									"modelConfig": {
										"path": "DataGrid_v111gbqDS.Primary"
									}
								},
								"DataGrid_v111gbqDS_Id": {
									"modelConfig": {
										"path": "DataGrid_v111gbqDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_fwd4w3a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_fwd4w3aDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_2nfdaxt_GridDetail_fwd4w3a",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_fwd4w3aDS_Name": {
									"modelConfig": {
										"path": "GridDetail_fwd4w3aDS.Name"
									}
								},
								"GridDetail_fwd4w3aDS_Country": {
									"modelConfig": {
										"path": "GridDetail_fwd4w3aDS.Country"
									}
								},
								"GridDetail_fwd4w3aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_fwd4w3aDS.Id"
									}
								}
							}
						}
					},
					"ContractList_PredefinedFilter": {
						"value": {
							"items": {},
							"logicalOperation": 0,
							"isEnabled": false,
							"filterType": 6,
							"rootSchemaName": "Contract"
						}
					},
					"GridDetail_c3c1pio": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_c3c1pioDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_c5n22bw_GridDetail_c3c1pio",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_hx0yfnz_GridDetail_c3c1pio",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_29xf66d_GridDetail_c3c1pio",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_hs77vju_GridDetail_c3c1pio",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_c3c1pioDS_Title": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.Title"
									}
								},
								"GridDetail_c3c1pioDS_ActivityCategory": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.ActivityCategory"
									}
								},
								"GridDetail_c3c1pioDS_Status": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.Status"
									}
								},
								"GridDetail_c3c1pioDS_Owner": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.Owner"
									}
								},
								"GridDetail_c3c1pioDS_DueDate": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.DueDate"
									}
								},
								"GridDetail_c3c1pioDS_PgrPersonInCharge": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.PgrPersonInCharge"
									}
								},
								"GridDetail_c3c1pioDS_PgrPersonInCharge_Email": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.PgrPersonInCharge_Email"
									}
								},
								"GridDetail_c3c1pioDS_Id": {
									"modelConfig": {
										"path": "GridDetail_c3c1pioDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrSapCustomerId_z5y13zl": {
						"modelConfig": {
							"path": "PDS.PgrSapCustomerId"
						}
					},
					"GridDetail_tziba2d": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tziba2dDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_uac2rdb_GridDetail_tziba2d",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tziba2dDS_PgrName": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.PgrName"
									}
								},
								"GridDetail_tziba2dDS_PgrBonusType": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.PgrBonusType"
									}
								},
								"GridDetail_tziba2dDS_PgrBaseValueType": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.PgrBaseValueType"
									}
								},
								"GridDetail_tziba2dDS_PgrStartDate": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.PgrStartDate"
									}
								},
								"GridDetail_tziba2dDS_PgrEndDate": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.PgrEndDate"
									}
								},
								"GridDetail_tziba2dDS_Id": {
									"modelConfig": {
										"path": "GridDetail_tziba2dDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_84xltzi": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_84xltziDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_y7i3jt7_GridDetail_84xltzi",
									"loadOnChange": true
								},
								{
									"name": "GridDetail_tziba2d_d9ac70e6_ExposeFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_84xltziDS_PgrBonus": {
									"modelConfig": {
										"path": "GridDetail_84xltziDS.PgrBonus"
									}
								},
								"GridDetail_84xltziDS_PgrBonusPercentage": {
									"modelConfig": {
										"path": "GridDetail_84xltziDS.PgrBonusPercentage"
									}
								},
								"GridDetail_84xltziDS_PgrTierThreshold": {
									"modelConfig": {
										"path": "GridDetail_84xltziDS.PgrTierThreshold"
									}
								},
								"GridDetail_84xltziDS_Id": {
									"modelConfig": {
										"path": "GridDetail_84xltziDS.Id"
									}
								}
							}
						}
					},
					"MultiSelect_unyiz66_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_PgrWepaformCustomerId_pn3f9ob": {
						"modelConfig": {
							"path": "PDS.PgrWepaformCustomerId"
						}
					},
					"CompetitorsGrid": {
						"isCollection": true,
						"modelConfig": {
							"path": "CompetitorsGridDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Description"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"CompetitorsGridDS_PgrCompetitor": {
									"modelConfig": {
										"path": "CompetitorsGridDS.PgrCompetitor"
									}
								},
								"CompetitorsGridDS_PgrShare": {
									"modelConfig": {
										"path": "CompetitorsGridDS.PgrShare"
									}
								},
								"CompetitorsGridDS_PgrValidFrom": {
									"modelConfig": {
										"path": "CompetitorsGridDS.PgrValidFrom"
									}
								},
								"CompetitorsGridDS_PgrValidTo": {
									"modelConfig": {
										"path": "CompetitorsGridDS.PgrValidTo"
									}
								},
								"CompetitorsGridDS_Id": {
									"modelConfig": {
										"path": "CompetitorsGridDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_29ab1xw": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_29ab1xwDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_j524rwj_GridDetail_29ab1xw",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_29ab1xwDS_PgrCalculationDate": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrCalculationDate"
									}
								},
								"GridDetail_29ab1xwDS_PgrWindowFrom": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrWindowFrom"
									}
								},
								"GridDetail_29ab1xwDS_PgrWindowTo": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrWindowTo"
									}
								},
								"GridDetail_29ab1xwDS_PgrCalendar": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrCalendar"
									}
								},
								"GridDetail_29ab1xwDS_PgrToleranceAdjustedBudget": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrToleranceAdjustedBudget"
									}
								},
								"GridDetail_29ab1xwDS_PgrOrderIntakeAvg": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrOrderIntakeAvg"
									}
								},
								"GridDetail_29ab1xwDS_PgrFullBudget": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrFullBudget"
									}
								},
								"GridDetail_29ab1xwDS_PgrBudgetCompareValue": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrBudgetCompareValue"
									}
								},
								"GridDetail_29ab1xwDS_PgrIsDeviation": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.PgrIsDeviation"
									}
								},
								"GridDetail_29ab1xwDS_Id": {
									"modelConfig": {
										"path": "GridDetail_29ab1xwDS.Id"
									}
								}
							}
						}
					},
					"PrimaryContact_List": {
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
					"GridDetail_nzg1ckl": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_nzg1cklDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_94z9epr_GridDetail_nzg1ckl",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_nzg1cklDS_Title": {
									"modelConfig": {
										"path": "GridDetail_nzg1cklDS.Title"
									}
								},
								"GridDetail_nzg1cklDS_Stage": {
									"modelConfig": {
										"path": "GridDetail_nzg1cklDS.Stage"
									}
								},
								"GridDetail_nzg1cklDS_PgrEstimatedVolume": {
									"modelConfig": {
										"path": "GridDetail_nzg1cklDS.PgrEstimatedVolume"
									}
								},
								"GridDetail_nzg1cklDS_PgrOpportunityStartDate": {
									"modelConfig": {
										"path": "GridDetail_nzg1cklDS.PgrOpportunityStartDate"
									}
								},
								"GridDetail_nzg1cklDS_Id": {
									"modelConfig": {
										"path": "GridDetail_nzg1cklDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrOrderIntakeDayCounter_yux7ecs": {
						"modelConfig": {
							"path": "PDS.PgrOrderIntakeDayCounter"
						}
					},
					"PDS_PgrActual3DayOrderIntake_p194oi": {
						"modelConfig": {
							"path": "PDS.PgrActual3DayOrderIntake"
						}
					},
					"PDS_PgrCurrentDailyBudget_p194db": {
						"modelConfig": {
							"path": "PDS.PgrCurrentDailyBudget"
						}
					},
					"PDS_PgrExcludeFrom369": {
						"modelConfig": {
							"path": "PDS.PgrExcludeFrom369"
						}
					},
					"PDS_PgrSuspensionEndDate": {
						"modelConfig": {
							"path": "PDS.PgrSuspensionEndDate"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							},
							"futureDate": {
								"type": "Pgr.FutureDate",
								"params": {
									"message": "#ResourceString(PgrSuspensionEndDateFutureError)#"
								}
							}
						}
					},
					"PDS_PgrSuspensionReason": {
						"modelConfig": {
							"path": "PDS.PgrSuspensionReason"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PgrCurrentUserContactId": {
						"value": ""
					},
					"PgrSuspensionReadonly": {
						"value": true
					},
					"ListWidget_6k17ufu": {
						"isCollection": true,
						"modelConfig": {
							"path": "ListWidget_6k17ufuDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ListWidget_6k17ufu_PredefinedFilter"
								}
							],
							"pagingConfig": {
								"rowCount": 30,
								"rowsLimit": 1
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ListWidget_6k17ufuDS_PgrCategory": {
									"modelConfig": {
										"path": "ListWidget_6k17ufuDS.PgrCategory"
									}
								},
								"ListWidget_6k17ufuDS_PgrRegion": {
									"modelConfig": {
										"path": "ListWidget_6k17ufuDS.PgrRegion"
									}
								},
								"ListWidget_6k17ufuDS_PgrPercentage": {
									"modelConfig": {
										"path": "ListWidget_6k17ufuDS.PgrPercentage"
									}
								},
								"ListWidget_6k17ufuDS_PgrAbsolute": {
									"modelConfig": {
										"path": "ListWidget_6k17ufuDS.PgrAbsolute"
									}
								},
								"ListWidget_6k17ufuDS_Id": {
									"modelConfig": {
										"path": "ListWidget_6k17ufuDS.Id"
									}
								}
							}
						}
					},
					"ListWidget_6k17ufu_PredefinedFilter": {
						"value": null
					},
					"PDS_PgrLastVisit_hwb1kgp": {
						"modelConfig": {
							"path": "PDS.PgrLastVisit"
						}
					},
					"GridDetail_8xx12ae": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8xx12aeDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_fdq0wc9_GridDetail_8xx12ae",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8xx12aeDS_PgrName": {
									"modelConfig": {
										"path": "GridDetail_8xx12aeDS.PgrName"
									}
								},
								"GridDetail_8xx12aeDS_PgrProjectPriceId": {
									"modelConfig": {
										"path": "GridDetail_8xx12aeDS.PgrProjectPriceId"
									}
								},
								"GridDetail_8xx12aeDS_PgrStartDate": {
									"modelConfig": {
										"path": "GridDetail_8xx12aeDS.PgrStartDate"
									}
								},
								"GridDetail_8xx12aeDS_PgrEndDate": {
									"modelConfig": {
										"path": "GridDetail_8xx12aeDS.PgrEndDate"
									}
								},
								"GridDetail_8xx12aeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8xx12aeDS.Id"
									}
								}
							}
						}
					},
					"PDS_Country_4npsawy": {
						"modelConfig": {
							"path": "PDS.Country"
						}
					},
					"PDS_Country_4npsawy_List": {
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
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "AddressList_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "AddressSearchFilter_AddressList",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_2pozl4n_AddressList",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"AddressList",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"AddressListDS_PgrWepaformAddressName": {
						"modelConfig": {
							"path": "AddressListDS.PgrWepaformAddressName"
						}
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"ContactsList",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"ContactsListDS_Address"
				]
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"ContractList",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"ContractListDS_Type",
					"ContractListDS_State",
					"ContractListDS_Amount",
					"ContractListDS_Owner"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ContractList",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"ContractListDS_EndDate": {
						"modelConfig": {
							"path": "ContractListDS.EndDate"
						}
					},
					"ContractListDS_PgrContractRenewalReminderDate": {
						"modelConfig": {
							"path": "ContractListDS.PgrContractRenewalReminderDate"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_qpp45xn",
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
					"NBOContainerVisible"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"GridDetail",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"GridDetailDS_Name",
					"GridDetailDS_Web"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"GridDetailDS_PgrCompetitor": {
						"modelConfig": {
							"path": "GridDetailDS.PgrCompetitor"
						}
					},
					"GridDetailDS_PgrShare": {
						"modelConfig": {
							"path": "GridDetailDS.PgrShare"
						}
					},
					"GridDetailDS_PgrValidFrom": {
						"modelConfig": {
							"path": "GridDetailDS.PgrValidFrom"
						}
					},
					"GridDetailDS_PgrValidTo": {
						"modelConfig": {
							"path": "GridDetailDS.PgrValidTo"
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
					"loadingConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_LeadDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					},
					"TimelineTile_OpportunityDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity"
						}
					},
					"DataGrid_dr7ln3cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountForecast",
							"attributes": {
								"Period": {
									"path": "Period"
								},
								"PgrOriginalValue": {
									"path": "PgrOriginalValue"
								},
								"Value": {
									"path": "Value"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								}
							}
						}
					},
					"TimelineTile_Email_53gt8h5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_bmjjfsqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Call_o76o2siDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_Case_f5wycgtDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					},
					"TimelineTile_Contract_9iz15cuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract"
						}
					},
					"TimelineTile_Document_sia0w5cDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_Invoice_6uanfc5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_Lead_5vhuvezDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					},
					"TimelineTile_Opportunity_sq0yfy1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity"
						}
					},
					"TimelineTile_Order_jm9g18lDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order"
						}
					},
					"TimelineTile_AIInsight_6f1e5psDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AIInsight"
						}
					},
					"TimelineTile_Email_ijt24xeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_dse3x6sDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Call_n7hb4z5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_Case_7j640gqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					},
					"TimelineTile_Contract_4zgrbe5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract"
						}
					},
					"TimelineTile_Document_0mlkbboDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_Invoice_t0tvkl5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_Order_44cshtpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order"
						}
					},
					"GridDetail_jexrtmfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrVisitReport",
							"attributes": {
								"PgrNumber": {
									"path": "PgrNumber"
								},
								"PgrVisitDate": {
									"path": "PgrVisitDate"
								},
								"PgrOwner": {
									"path": "PgrOwner"
								},
								"PgrVisitType": {
									"path": "PgrVisitType"
								},
								"PgrPerformance": {
									"path": "PgrPerformance"
								},
								"PgrIsRelevantForWeeklyReport": {
									"path": "PgrIsRelevantForWeeklyReport"
								},
								"PgrVisitDidNotTakePlace": {
									"path": "PgrVisitDidNotTakePlace"
								}
							}
						}
					},
					"DataGrid_v111gbqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountAddress",
							"attributes": {
								"PgrWepaformAddressName": {
									"path": "PgrWepaformAddressName"
								},
								"AddressType": {
									"path": "AddressType"
								},
								"FullAddress": {
									"path": "FullAddress"
								},
								"Primary": {
									"path": "Primary"
								}
							}
						}
					},
					"GridDetail_fwd4w3aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Account",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Country": {
									"path": "Country"
								}
							}
						}
					},
					"GridDetail_c3c1pioDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"ActivityCategory": {
									"path": "ActivityCategory"
								},
								"Status": {
									"path": "Status"
								},
								"Owner": {
									"path": "Owner"
								},
								"DueDate": {
									"path": "DueDate"
								},
								"PgrPersonInCharge": {
									"path": "PgrPersonInCharge"
								},
								"PgrPersonInCharge_Email": {
									"type": "ForwardReference",
									"path": "PgrPersonInCharge.Email"
								}
							}
						}
					},
					"GridDetail_tziba2dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrBonus",
							"attributes": {
								"PgrName": {
									"path": "PgrName"
								},
								"PgrBonusType": {
									"path": "PgrBonusType"
								},
								"PgrBaseValueType": {
									"path": "PgrBaseValueType"
								},
								"PgrStartDate": {
									"path": "PgrStartDate"
								},
								"PgrEndDate": {
									"path": "PgrEndDate"
								}
							}
						}
					},
					"GridDetail_84xltziDS": {
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
					"PgrAccountTypesInAccountDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "PgrAccountTypesInAccount",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": [
											{
												"columnName": "CreatedOn",
												"direction": "desc"
											}
										]
									}
								}
							},
							"allowCopyingRecords": true
						}
					},
					"CompetitorsGridDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountCompetitor",
							"attributes": {
								"PgrCompetitor": {
									"path": "PgrCompetitor"
								},
								"PgrShare": {
									"path": "PgrShare"
								},
								"PgrValidFrom": {
									"path": "PgrValidFrom"
								},
								"PgrValidTo": {
									"path": "PgrValidTo"
								}
							}
						}
					},
					"GridDetail_29ab1xwDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Pgr369BudgetCalculation",
							"attributes": {
								"PgrCalculationDate": {
									"path": "PgrCalculationDate"
								},
								"PgrWindowFrom": {
									"path": "PgrWindowFrom"
								},
								"PgrWindowTo": {
									"path": "PgrWindowTo"
								},
								"PgrCalendar": {
									"path": "PgrCalendar"
								},
								"PgrToleranceAdjustedBudget": {
									"path": "PgrToleranceAdjustedBudget"
								},
								"PgrOrderIntakeAvg": {
									"path": "PgrOrderIntakeAvg"
								},
								"PgrFullBudget": {
									"path": "PgrFullBudget"
								},
								"PgrBudgetCompareValue": {
									"path": "PgrBudgetCompareValue"
								},
								"PgrIsDeviation": {
									"path": "PgrIsDeviation"
								}
							}
						}
					},
					"GridDetail_nzg1cklDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"Stage": {
									"path": "Stage"
								},
								"PgrEstimatedVolume": {
									"path": "PgrEstimatedVolume"
								},
								"PgrOpportunityStartDate": {
									"path": "PgrOpportunityStartDate"
								}
							}
						}
					},
					"ListWidget_6k17ufuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrCustomerThresholdMatrix",
							"attributes": {
								"PgrCategory": {
									"path": "PgrCategory"
								},
								"PgrRegion": {
									"path": "PgrRegion"
								},
								"PgrPercentage": {
									"path": "PgrPercentage"
								},
								"PgrAbsolute": {
									"path": "PgrAbsolute"
								}
							}
						}
					},
					"GridDetail_8xx12aeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PgrProjectPrice",
							"attributes": {
								"PgrName": {
									"path": "PgrName"
								},
								"PgrProjectPriceId": {
									"path": "PgrProjectPriceId"
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
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AddressListDS",
					"config",
					"attributes"
				],
				"values": {
					"PgrWepaformAddressName": {
						"path": "PgrWepaformAddressName"
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"ContactsListDS",
					"config",
					"attributes"
				],
				"properties": [
					"Address"
				]
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"ContractListDS",
					"config",
					"attributes"
				],
				"properties": [
					"Type",
					"State",
					"Amount",
					"Owner"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"ContractListDS",
					"config",
					"attributes"
				],
				"values": {
					"EndDate": {
						"path": "EndDate"
					},
					"PgrContractRenewalReminderDate": {
						"path": "PgrContractRenewalReminderDate"
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"GridDetailDS",
					"config",
					"attributes"
				],
				"properties": [
					"Name",
					"Web"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"GridDetailDS",
					"config",
					"attributes"
				],
				"values": {
					"PgrCompetitor": {
						"path": "PgrCompetitor"
					},
					"PgrShare": {
						"path": "PgrShare"
					},
					"PgrValidFrom": {
						"path": "PgrValidFrom"
					},
					"PgrValidTo": {
						"path": "PgrValidTo"
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"BillingInfoListDS"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DataGrid_dr7ln3cDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_jexrtmfDS": [
						{
							"attributePath": "PgrAccount",
							"relationPath": "PDS.Id"
						}
					],
					"DataGrid_v111gbqDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_fwd4w3aDS": [
						{
							"attributePath": "Parent",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_c3c1pioDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_tziba2dDS": [
						{
							"attributePath": "PgrAccount",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_84xltziDS": [
						{
							"attributePath": "PgrBonus",
							"relationPath": "GridDetail_tziba2dDS.Id"
						}
					],
					"PgrAccountTypesInAccountDS": [
						{
							"attributePath": "PgrAccount",
							"relationPath": "PDS.Id"
						}
					],
					"CompetitorsGridDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_29ab1xwDS": [
						{
							"attributePath": "PgrAccount",
							"relationPath": "PDS.Id"
						}
					],
					"GridDetail_nzg1cklDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"ListWidget_6k17ufuDS": [
						{
							"attributePath": "PgrCategory",
							"relationPath": "PDS.PgrAccountClassification"
						},
						{
							"attributePath": "PgrRegion",
							"relationPath": "PDS.Territory"
						}
					],
					"GridDetail_8xx12aeDS": [
						{
							"attributePath": "PgrAccount",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			    request: "crt.HandleViewModelInitRequest",
			    handler: async (request, next) => {
			        const result = await next?.handle(request);
					const sysValues = await new sdk.SysValuesService().loadSysValues();
					const currentContactId = sysValues.userContact?.value;
					request.$context.PgrCurrentUserContactId = currentContactId || "";

					return result;
			    }
			},
			{
			    request: "crt.HandleViewModelAttributeChangeRequest",
			    handler: async (request, next) => {
			        const unwrap = (v) => {
			            if (v && typeof v === "object") {
			                if ("__zone_symbol__value" in v) { return v.__zone_symbol__value; }
			                if (v.value !== undefined) { return v.value; }
			            }
			            return v;
			        };
			        if (request.attributeName === "PDS_PgrExcludeFrom369") {
			            // Reason + end date are required only while suspended — toggle the crt.Required validators.
			            const isExcluded = unwrap(await request.$context.PDS_PgrExcludeFrom369) === true;
			            ["PDS_PgrSuspensionEndDate", "PDS_PgrSuspensionReason"].forEach((field) => {
			                if (isExcluded) {
			                    request.$context.enableAttributeValidator(field, "required");
			                } else {
			                    request.$context.disableAttributeValidator(field, "required");
			                }
			            });
			        } else if (request.attributeName === "PDS_PgrSalesDirector_2tiaywd") {
			            // Sales Director changed on the page — re-evaluate visibility (contact id is
						// cached on init).
						const currentContactId =
                            await request.$context.PgrCurrentUserContactId;
                        const salesDirectorId = unwrap(
                            await request.$context.PDS_PgrSalesDirector_2tiaywd,
                        );
                        const isSalesDirector = currentContactId === salesDirectorId;
                        request.$context.PgrSuspensionReadonly = !isSalesDirector;
			        }
			        return next?.handle(request);
			    }
			},
			{
			    request: "crt.SaveRecordsRequest",
			    handler: async (request, next) => {
			        // Validate the "delivery + competitor shares = 100%" rule on the competitors grids
			        // ("Account competitors" and "Share of wallet") "Save all". Shared logic lives in
			        // the PgrAccountCompetitorShareHelper module.
			        const grid = PgrAccountCompetitorShareHelper.getGridByItemsAttr(request.itemsAttributeName);
			        if (!grid) {
			            return await next?.handle(request);
			        }

			        let total;
			        try {
			            total = await PgrAccountCompetitorShareHelper.getAccountShareTotal(request, grid);
			        } catch (e) {
			            console.warn("Share validation skipped:", e);
			            return await next?.handle(request);
			        }

			        // The total is valid — let the save proceed.
			        if (total === PgrAccountCompetitorShareHelper.REQUIRED_TOTAL) {
			            return await next?.handle(request);
			        }

			        await PgrAccountCompetitorShareHelper.showTotalError(request, total);
			        return false;
			    }
			},
			{
			    request: "crt.DeleteRecordsRequest",
			    handler: async (request, next) => {
			        // Block deleting a competitor when it would leave the account share total != 100%.
			        // Deletes go through crt.DeleteRecordsRequest (immediate, not via "Save all").
			        const helper = PgrAccountCompetitorShareHelper;

			        let blockedTotal = null;
			        try {
			            const grid = await helper.resolveGridForDelete(request);
			            if (!grid) {
			                return await next?.handle(request);
			            }

			            const selection = await request.$context[grid.selectionAttr];
			            if (selection && selection.type === "all") {
			                return await next?.handle(request);   // deleting everything -> empty grid -> allowed
			            }

			            // Rows left once the deletion goes through; null means it could not be
			            // determined, in which case the delete must not be blocked.
			            const deletedIds = helper.getDeletedIds(request, selection);
			            const remaining = await helper.getRemainingRows(request, grid, deletedIds);
			            if (remaining === null || remaining.length === 0) {
			                return await next?.handle(request);
			            }

			            const remainingTotal = (await helper.getDeliveryShare(request)) + helper.sumShares(remaining, grid.shareColumn);
			            if (remainingTotal !== helper.REQUIRED_TOTAL) {
			                blockedTotal = remainingTotal;
			            }
			        } catch (e) {
			            console.warn("Competitor delete validation skipped:", e);
			            return await next?.handle(request);
			        }

			        if (blockedTotal === null) {
			            return await next?.handle(request);
			        }

			        await helper.showTotalError(request, blockedTotal);
			        return false;   // do not call next -> deletion is cancelled
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"Pgr.FutureDate": {
				"validator": function(config) {
					return function(control) {
						const value = control.value;
						// Empty is handled by the crt.Required validator; skip here.
						if (!value) {
							return null;
						}
						const endDate = new Date(value);
						endDate.setHours(0, 0, 0, 0);
						const today = new Date();
						today.setHours(0, 0, 0, 0);
						// CMVP-127: suspension end date must be strictly later than today.
						return endDate.getTime() > today.getTime()
							? null
							: { "Pgr.FutureDate": { message: config.message } };
					};
				},
				"params": [
					{ "name": "message" }
				],
				"async": false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});