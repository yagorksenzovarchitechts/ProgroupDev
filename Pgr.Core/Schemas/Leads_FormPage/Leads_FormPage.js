define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "SideAreaProfileFieldFlexContainer"
			},
			{
				"operation": "remove",
				"name": "LeadDisqualifyReason"
			},
			{
				"operation": "remove",
				"name": "Status"
			},
			{
				"operation": "remove",
				"name": "Territory"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileFieldGridContainer"
			},
			{
				"operation": "remove",
				"name": "LeadTypeDetails"
			},
			{
				"operation": "remove",
				"name": "ContactSource"
			},
			{
				"operation": "remove",
				"name": "PredictiveScore"
			},
			{
				"operation": "remove",
				"name": "CustomerInfoFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ContactFieldsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ContactLabelContainer"
			},
			{
				"operation": "remove",
				"name": "ContactLabel"
			},
			{
				"operation": "remove",
				"name": "ContactCompactProfile"
			},
			{
				"operation": "remove",
				"name": "JobTitle"
			},
			{
				"operation": "remove",
				"name": "ContactCommunicationOptions"
			},
			{
				"operation": "remove",
				"name": "AccountFieldsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "AccountLabelContainer"
			},
			{
				"operation": "remove",
				"name": "AccountLabel"
			},
			{
				"operation": "remove",
				"name": "AccountCompactProfile"
			},
			{
				"operation": "remove",
				"name": "Web"
			},
			{
				"operation": "remove",
				"name": "Type"
			},
			{
				"operation": "remove",
				"name": "Industry"
			},
			{
				"operation": "remove",
				"name": "EmployeesNumber"
			},
			{
				"operation": "remove",
				"name": "AnnualRevenue"
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "OverviewTab",
				"values": {
					"caption": "#ResourceString(OverviewTab_caption)#"
				}
			},
			{
				"operation": "remove",
				"name": "OverviewNewAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "PredictiveProbabilityMetricFlexContainer"
			},
			{
				"operation": "remove",
				"name": "PredictiveProbabilityHeaderFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ProbabilityLabel"
			},
			{
				"operation": "remove",
				"name": "ExplainProbabilityScoreButton"
			},
			{
				"operation": "remove",
				"name": "PredictiveProbabilityMetric"
			},
			{
				"operation": "remove",
				"name": "EmailsSentNewMetric"
			},
			{
				"operation": "remove",
				"name": "OutgoingCallsNewMetric"
			},
			{
				"operation": "remove",
				"name": "CreatedOnMetric"
			},
			{
				"operation": "remove",
				"name": "OverviewAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "EmailsSentMetric"
			},
			{
				"operation": "remove",
				"name": "OutgoingCallsMetric"
			},
			{
				"operation": "remove",
				"name": "LeadType"
			},
			{
				"operation": "remove",
				"name": "CreatedOn"
			},
			{
				"operation": "move",
				"name": "QualifiedContact",
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "QualifiedAccount",
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
				"operation": "merge",
				"name": "LeadName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"label": "$Resources.Strings.PDS_LeadName_rlibak0",
					"control": "$PDS_LeadName_rlibak0",
					"readonly": false,
					"multiline": false
				}
			},
			{
				"operation": "remove",
				"name": "LeadName",
				"properties": [
					"visible"
				]
			},
			{
				"operation": "move",
				"name": "LeadName",
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "SalesChannel"
			},
			{
				"operation": "remove",
				"name": "Group"
			},
			{
				"operation": "remove",
				"name": "ContactChannel"
			},
			{
				"operation": "remove",
				"name": "ContactRegisterMethod"
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "Owner",
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "Commentary",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
						"rowSpan": 1
					},
					"label": "$Resources.Strings.StringAttribute_cg42kpk",
					"readonly": false
				}
			},
			{
				"operation": "move",
				"name": "Commentary",
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "remove",
				"name": "ClosingDetails"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadToolsContainer"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadRefreshButton"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadSettingsButton"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadExportDataButton"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadSearchFilter"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadListContainer"
			},
			{
				"operation": "remove",
				"name": "SimilarLeadList"
			},
			{
				"operation": "remove",
				"name": "ProcessingTab"
			},
			{
				"operation": "remove",
				"name": "Timeline"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Call"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Email"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Task"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_SysFile"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Feed"
			},
			{
				"operation": "remove",
				"name": "MessageComposer"
			},
			{
				"operation": "remove",
				"name": "EmailComposer"
			},
			{
				"operation": "remove",
				"name": "FeedComposer"
			},
			{
				"operation": "remove",
				"name": "TimelineFilter_Entity"
			},
			{
				"operation": "remove",
				"name": "TimelineFilter_Date"
			},
			{
				"operation": "remove",
				"name": "TimelineFilter_Owner"
			},
			{
				"operation": "remove",
				"name": "TimelineFilter_SystemMessages"
			},
			{
				"operation": "remove",
				"name": "TimelineFilterContainer"
			},
			{
				"operation": "remove",
				"name": "SalesTab"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningFieldsContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningFieldsFlexContainerLeft"
			},
			{
				"operation": "remove",
				"name": "Budget"
			},
			{
				"operation": "remove",
				"name": "Opportunity"
			},
			{
				"operation": "remove",
				"name": "addRecord_o3h2431"
			},
			{
				"operation": "remove",
				"name": "Order"
			},
			{
				"operation": "remove",
				"name": "addRecord_zbn39tz"
			},
			{
				"operation": "remove",
				"name": "OpportunityPlanningFieldsFlexContainerRight"
			},
			{
				"operation": "remove",
				"name": "DecisionDate"
			},
			{
				"operation": "remove",
				"name": "SalesOwner"
			},
			{
				"operation": "remove",
				"name": "addRecord_quqpon1"
			},
			{
				"operation": "remove",
				"name": "OrderOwner"
			},
			{
				"operation": "remove",
				"name": "BusinessCase"
			},
			{
				"operation": "remove",
				"name": "ProductSuggestions"
			},
			{
				"operation": "remove",
				"name": "ProductsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "ProductsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "ProductsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ProductsAddButton"
			},
			{
				"operation": "remove",
				"name": "ProductsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "ProductsSettingsButton"
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
				"name": "ProductsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "ProductsListContainer"
			},
			{
				"operation": "remove",
				"name": "ProductsList"
			},
			{
				"operation": "remove",
				"name": "HistoryTab"
			},
			{
				"operation": "remove",
				"name": "StageHistoryExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "StageHistoryToolsContainer"
			},
			{
				"operation": "remove",
				"name": "StageHistoryToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "StageHistoryRefreshButton"
			},
			{
				"operation": "remove",
				"name": "StageHistorySettingsButton"
			},
			{
				"operation": "remove",
				"name": "StageHistoryExportDataButton"
			},
			{
				"operation": "remove",
				"name": "StageHistorySearchFilter"
			},
			{
				"operation": "remove",
				"name": "StageHistoryListContainer"
			},
			{
				"operation": "remove",
				"name": "StageHistoryList"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerToolsContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerAddButton"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerRefreshButton"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerSettingsButton"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerExportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerImportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerSearchFilter"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerListContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsByCustomerList"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerAddButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerRefreshButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerSettingsButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerExportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerImportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerSearchFilter"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerListContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunitiesByCustomerList"
			},
			{
				"operation": "merge",
				"name": "NextStepsTabContainerHeaderLabel",
				"values": {
					"headingLevel": "label"
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
				"name": "FlexContainer_e6qlvsp",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileContainer",
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
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_e6qlvsp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrSalesRegion",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrSalesRegion_75v1ltv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrSalesRegion_75v1ltv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_1p9plmh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1p9plmh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "PgrSalesRegion",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QualifyStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_QualifyStatus_b6bpdyx",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_QualifyStatus_b6bpdyx"
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_b25del6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_b25del6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "QualifyStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrEstimatedVolume",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrEstimatedVolume_8fqkqh6",
					"control": "$PDS_PgrEstimatedVolume_8fqkqh6",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_f16gd48",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrEmployeesNumber_89ngjf5",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrEmployeesNumber_89ngjf5"
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_jymo5qw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jymo5qw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_f16gd48",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrPGPotential",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrPGPotential_grey0y6",
					"control": "$PDS_PgrPGPotential_grey0y6",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_dfa1y30",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Country_o4ppswt",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Country_o4ppswt"
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_vca71ao",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vca71ao_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_dfa1y30",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_gyij7qz",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_LeadDisqualifyReason_fbzk6vu",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_LeadDisqualifyReason_fbzk6vu",
					"visible": false,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_mwl9edq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mwl9edq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_gyij7qz",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rpqfsg9",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rpqfsg9_title)#",
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
				"parentName": "DetailsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_dmjm0b7",
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
				"parentName": "ExpansionPanel_rpqfsg9",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_r24mvm0",
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
				"parentName": "GridContainer_dmjm0b7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_br8mlpf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_br8mlpf_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AccountAddress"
						}
					}
				},
				"parentName": "FlexContainer_r24mvm0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_00lfve8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_00lfve8_caption)#",
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
							"dataSourceName": "GridDetail_c1kogheDS"
						}
					}
				},
				"parentName": "FlexContainer_r24mvm0",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pjq7f15",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pjq7f15_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_r24mvm0",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_m1mrypp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_m1mrypp_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_c1koghe"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pjq7f15",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_zrog8a0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_zrog8a0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AccountAddress"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pjq7f15",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_trggbnn",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_trggbnn_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_trggbnn_GridDetail_c1koghe",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_c1koghe"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_trggbnn_SearchValue",
							"GridDetailSearchFilter_trggbnn_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_r24mvm0",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ucsqtyy",
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
				"parentName": "ExpansionPanel_rpqfsg9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_c1koghe",
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
					"items": "$GridDetail_c1koghe",
					"primaryColumnName": "GridDetail_c1kogheDS_Id",
					"columns": [
						{
							"id": "82abf817-0c91-1e46-a688-44ec72d24b86",
							"code": "GridDetail_c1kogheDS_PgrWfAddressName",
							"caption": "#ResourceString(GridDetail_c1kogheDS_PgrWfAddressName)#",
							"dataValueType": 27
						},
						{
							"id": "b580c9a9-69ff-f22d-5c90-0727289cc19b",
							"code": "GridDetail_c1kogheDS_AddressType",
							"caption": "#ResourceString(GridDetail_c1kogheDS_AddressType)#",
							"dataValueType": 10
						},
						{
							"id": "270d0192-d7ee-f892-2b7e-a7f75518fe84",
							"code": "GridDetail_c1kogheDS_FullAddress",
							"caption": "#ResourceString(GridDetail_c1kogheDS_FullAddress)#",
							"dataValueType": 29
						},
						{
							"id": "b603a7eb-0d03-5796-da0e-2796124e097a",
							"code": "GridDetail_c1kogheDS_Primary",
							"caption": "#ResourceString(GridDetail_c1kogheDS_Primary)#",
							"dataValueType": 12
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_ucsqtyy",
				"propertyName": "items",
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
					"PDS_Territory_List",
					"LookupAttribute_dr0vsd0_List",
					"LookupAttribute_mfwvuqd_List"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Parameter_3pxm4wn_List": {
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
					"Parameter_r8t9n2f_List": {
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
					"PDS_PgrSalesRegion_75v1ltv": {
						"modelConfig": {
							"path": "PDS.PgrSalesRegion"
						}
					},
					"PDS_PgrSalesRegion_75v1ltv_List": {
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
					"PDS_PgrEstimatedVolume_8fqkqh6": {
						"modelConfig": {
							"path": "PDS.PgrEstimatedVolume"
						}
					},
					"PDS_PgrPGPotential_grey0y6": {
						"modelConfig": {
							"path": "PDS.PgrPGPotential"
						}
					},
					"LookupAttribute_0ljkabs_List": {
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
					"PDS_QualifyStatus_b6bpdyx": {
						"modelConfig": {
							"path": "PDS.QualifyStatus"
						}
					},
					"PDS_QualifyStatus_b6bpdyx_List": {
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
					"PDS_LeadName_rlibak0": {
						"modelConfig": {
							"path": "PDS.LeadName"
						}
					},
					"PDS_PgrEmployeesNumber_89ngjf5": {
						"modelConfig": {
							"path": "PDS.PgrEmployeesNumber"
						}
					},
					"PDS_PgrEmployeesNumber_89ngjf5_List": {
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
					"GridDetail_c1koghe": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_c1kogheDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_trggbnn_GridDetail_c1koghe",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_c1kogheDS_PgrWfAddressName": {
									"modelConfig": {
										"path": "GridDetail_c1kogheDS.PgrWfAddressName"
									}
								},
								"GridDetail_c1kogheDS_AddressType": {
									"modelConfig": {
										"path": "GridDetail_c1kogheDS.AddressType"
									}
								},
								"GridDetail_c1kogheDS_FullAddress": {
									"modelConfig": {
										"path": "GridDetail_c1kogheDS.FullAddress"
									}
								},
								"GridDetail_c1kogheDS_Primary": {
									"modelConfig": {
										"path": "GridDetail_c1kogheDS.Primary"
									}
								},
								"GridDetail_c1kogheDS_Id": {
									"modelConfig": {
										"path": "GridDetail_c1kogheDS.Id"
									}
								}
							}
						}
					},
					"PDS_Country_o4ppswt": {
						"modelConfig": {
							"path": "PDS.Country"
						}
					},
					"PDS_Country_o4ppswt_List": {
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
					"PDS_LeadDisqualifyReason_fbzk6vu": {
						"modelConfig": {
							"path": "PDS.LeadDisqualifyReason"
						}
					},
					"PDS_LeadDisqualifyReason_fbzk6vu_List": {
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
					"SimilarLeadList",
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
					"ProductsList",
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
					"GridDetail_q6k1kvr",
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
					"GridDetail_yoxos8p",
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
					"GridDetail_qiohu6o",
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
					"Timeline_AllTileFilters"
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
					"TimelineTile_OmniChat_eyd4hieDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OmniChat"
						}
					},
					"GridDetail_c1kogheDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountAddress",
							"attributes": {
								"PgrWfAddressName": {
									"path": "PgrWfAddressName"
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
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"SimilarLeadListDS",
					"ProductsListDS",
					"StageHistoryListDS",
					"LeadsByCustomerListDS",
					"OpportunitiesByCustomerListDS"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_c1kogheDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.QualifiedAccount"
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