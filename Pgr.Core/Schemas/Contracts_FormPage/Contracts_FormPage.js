define("Contracts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ActionButtonsContainer",
				"values": {
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
					"gap": "small"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "RequeueQueueItemButton"
			},
			{
				"operation": "merge",
				"name": "PrintButton",
				"values": {
					"visible": false
				}
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
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "AmountMetric"
			},
			{
				"operation": "remove",
				"name": "ContractApprovalWidget"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "remove",
				"name": "ContractInfoLabel"
			},
			{
				"operation": "remove",
				"name": "Number"
			},
			{
				"operation": "remove",
				"name": "Type"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "addRecord_jw0oh71"
			},
			{
				"operation": "remove",
				"name": "StartDate"
			},
			{
				"operation": "remove",
				"name": "EndDate"
			},
			{
				"operation": "remove",
				"name": "Order"
			},
			{
				"operation": "remove",
				"name": "addRecord_aidjims"
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
				"operation": "remove",
				"name": "GeneralInformationNewAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "AmountNewMetric"
			},
			{
				"operation": "remove",
				"name": "StartDateNewMetric"
			},
			{
				"operation": "remove",
				"name": "EndDateNewMetric"
			},
			{
				"operation": "remove",
				"name": "NumberOfProductsNewMetric"
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"underlineSelectedTabColor": "crt-color-coral",
					"allowToggleClose": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"visible": true,
					"stretch": true
				}
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
				"name": "GeneralInfoTab",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInformationAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "StartDateMetric"
			},
			{
				"operation": "remove",
				"name": "EndDateMetric"
			},
			{
				"operation": "remove",
				"name": "NumberOfProductsMetric"
			},
			{
				"operation": "merge",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "OurCompany"
			},
			{
				"operation": "remove",
				"name": "addRecord_2425btr"
			},
			{
				"operation": "remove",
				"name": "AccountBankingDetails"
			},
			{
				"operation": "remove",
				"name": "OurBankingDetails"
			},
			{
				"operation": "remove",
				"name": "Amount"
			},
			{
				"operation": "remove",
				"name": "Currency"
			},
			{
				"operation": "remove",
				"name": "Contact"
			},
			{
				"operation": "remove",
				"name": "addRecord_948r1p3"
			},
			{
				"operation": "remove",
				"name": "ParentContract"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListAddButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListRefreshButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListSettingsButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListExportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListImportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListSearchFilter"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractListGridContainer"
			},
			{
				"operation": "remove",
				"name": "SubordinateContractList"
			},
			{
				"operation": "remove",
				"name": "ContractDetailsTab"
			},
			{
				"operation": "remove",
				"name": "ContractDetailsGridContainer"
			},
			{
				"operation": "remove",
				"name": "ProductsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "ProductToolsContainer"
			},
			{
				"operation": "remove",
				"name": "ProductsDividerFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ProductToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ProductListAddButton"
			},
			{
				"operation": "remove",
				"name": "ProductListRefreshButton"
			},
			{
				"operation": "remove",
				"name": "ProductListSettingsButton"
			},
			{
				"operation": "remove",
				"name": "ProductsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "ProductsImportDataButton"
			},
			{
				"operation": "remove",
				"name": "ProductListSearchFilter"
			},
			{
				"operation": "remove",
				"name": "ProductsSummaries"
			},
			{
				"operation": "remove",
				"name": "SummaryItem_17sk4nn"
			},
			{
				"operation": "remove",
				"name": "SummaryItem_tjbyatz"
			},
			{
				"operation": "remove",
				"name": "SummaryItem_ghzlu4x"
			},
			{
				"operation": "remove",
				"name": "ProductsListGridContainer"
			},
			{
				"operation": "remove",
				"name": "ProductList"
			},
			{
				"operation": "remove",
				"name": "ApprovalsTab"
			},
			{
				"operation": "remove",
				"name": "GridContainer_gdvkrxm"
			},
			{
				"operation": "remove",
				"name": "ApprovalListExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "ApprovalsListToolsContainer"
			},
			{
				"operation": "remove",
				"name": "ApprovalsListToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ApprovalListRefreshButton"
			},
			{
				"operation": "remove",
				"name": "ApprovalListSearchFilter"
			},
			{
				"operation": "remove",
				"name": "ApprovalsListGridContainer"
			},
			{
				"operation": "remove",
				"name": "ApprovalList"
			},
			{
				"operation": "remove",
				"name": "DocumentsTab"
			},
			{
				"operation": "remove",
				"name": "DocumentsTabGridContainer"
			},
			{
				"operation": "remove",
				"name": "DocumentsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "DocumentsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "DocumentsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "DocumentsAddButton"
			},
			{
				"operation": "remove",
				"name": "DocumentsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "DocumentsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "DocumentsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "DocumentsImportDataButton"
			},
			{
				"operation": "remove",
				"name": "DocumentsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "DocumentsListContainer"
			},
			{
				"operation": "remove",
				"name": "DocumentsList"
			},
			{
				"operation": "remove",
				"name": "InvoicesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "InvoicesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "InvoicesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "InvoicesAddButton"
			},
			{
				"operation": "remove",
				"name": "InvoicesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "InvoicesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "InvoicesExportDataButton"
			},
			{
				"operation": "remove",
				"name": "InvoicesImportDataButton"
			},
			{
				"operation": "remove",
				"name": "InvoicesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "InvoicesListContainer"
			},
			{
				"operation": "remove",
				"name": "InvoicesList"
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
				"name": "Input_775nvgv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Number_gdud8p8",
					"control": "$PDS_Number_gdud8p8",
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
				"name": "DateTimePicker_hdh16pb",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_StartDate_o5br24b",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_StartDate_o5br24b",
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
				"name": "DateTimePicker_2yllr6w",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_EndDate_bqpmqb2",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_EndDate_bqpmqb2",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_1m8nk5n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrNoticePeriodDays_d2ud2ky",
					"control": "$PDS_PgrNoticePeriodDays_d2ud2ky",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_xguz4i3",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrContractRenewalReminderDate_voh8vsk",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrContractRenewalReminderDate_voh8vsk"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_qktp1zq",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_rhdebto",
					"control": "$PDS_Notes_rhdebto",
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
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_c1gtxz5",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_c1gtxz5_title)#",
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
				"name": "GridContainer_jjv4e28",
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
				"parentName": "ExpansionPanel_c1gtxz5",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9kmqdfm",
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
				"parentName": "GridContainer_jjv4e28",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_qqua8e5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qqua8e5_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "FileList_kw71i7w"
						}
					}
				},
				"parentName": "FlexContainer_9kmqdfm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_z28jaog",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_z28jaog_caption)#",
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
							"dataSourceName": "FileList_kw71i7wDS"
						}
					}
				},
				"parentName": "FlexContainer_9kmqdfm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_7h57lrd",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_7h57lrd_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_7h57lrd_FileList_kw71i7w",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"FileList_kw71i7w"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_7h57lrd_SearchValue",
							"GridDetailSearchFilter_7h57lrd_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_9kmqdfm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_adkbbvk",
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
				"parentName": "ExpansionPanel_c1gtxz5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FileList_kw71i7w",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "Contract",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"items": "$FileList_kw71i7w",
					"primaryColumnName": "FileList_kw71i7wDS_Id",
					"columns": [
						{
							"id": "1e8396ae-c368-4881-8bee-6d95c96c3c60",
							"code": "FileList_kw71i7wDS_Name",
							"caption": "#ResourceString(FileList_kw71i7wDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "18939e3b-b360-2c98-3c90-8b2498ae4980",
							"code": "FileList_kw71i7wDS_CreatedOn",
							"caption": "#ResourceString(FileList_kw71i7wDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "71fdca8b-ca21-50c3-a425-c05d2b1c62cb",
							"code": "FileList_kw71i7wDS_CreatedBy",
							"caption": "#ResourceString(FileList_kw71i7wDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "0f01df71-e664-da21-a7d3-847fff7eb85f",
							"code": "FileList_kw71i7wDS_Size",
							"caption": "#ResourceString(FileList_kw71i7wDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true,
					"viewType": "gallery",
					"tileSize": "medium"
				},
				"parentName": "GridContainer_adkbbvk",
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
					"LookupAttribute_alcaee6_List": {
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
					"PDS_StartDate_o5br24b": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"PDS_EndDate_bqpmqb2": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"PDS_Number_gdud8p8": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"PDS_Notes_rhdebto": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"FileList_kw71i7w": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_kw71i7wDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_7h57lrd_FileList_kw71i7w",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_kw71i7wDS_Name": {
									"modelConfig": {
										"path": "FileList_kw71i7wDS.Name"
									}
								},
								"FileList_kw71i7wDS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_kw71i7wDS.CreatedOn"
									}
								},
								"FileList_kw71i7wDS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_kw71i7wDS.CreatedBy"
									}
								},
								"FileList_kw71i7wDS_Size": {
									"modelConfig": {
										"path": "FileList_kw71i7wDS.Size"
									}
								},
								"FileList_kw71i7wDS_Id": {
									"modelConfig": {
										"path": "FileList_kw71i7wDS.Id"
									}
								}
							}
						}
					},
					"PDS_PgrNoticePeriodDays_d2ud2ky": {
						"modelConfig": {
							"path": "PDS.PgrNoticePeriodDays"
						}
					},
					"PDS_PgrContractRenewalReminderDate_voh8vsk": {
						"modelConfig": {
							"path": "PDS.PgrContractRenewalReminderDate"
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
					"ApprovalList_jfk4ucx",
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
					"GridDetail_fx2q9fo",
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
					"GridDetail_eq9xc68",
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
					"GridDetail_vx3pwmf",
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
					"GridDetail_wvkrihv",
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
					"ProductsSummaries_Expanded"
				],
				"values": {
					"modelConfig": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"FileList_kw71i7wDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContractFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
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
					"ApprovalList_jfk4ucxDS",
					"GridDetail_fx2q9foDS",
					"GridDetail_eq9xc68DS",
					"DocumentsListDS",
					"InvoicesListDS"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});