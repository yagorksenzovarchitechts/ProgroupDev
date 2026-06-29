define("Opportunities_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "CloseReason",
				"values": {
					"visible": true,
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Winner",
				"values": {
					"visible": true,
					"readonly": false
				}
			},
			{
				"operation": "remove",
				"name": "DecisionMaker"
			},
			{
				"operation": "remove",
				"name": "addRecord_0hxbi4r"
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
				"name": "Amount"
			},
			{
				"operation": "remove",
				"name": "DueDate",
				"properties": [
					"layoutConfig",
					"visible"
				]
			},
			{
				"operation": "merge",
				"name": "DueDate",
				"values": {
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_DueDate_idigl92",
					"labelPosition": "auto",
					"control": "$PDS_DueDate_idigl92",
					"tooltip": "",
					"readonly": false
				}
			},
			{
				"operation": "move",
				"name": "DueDate",
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "remove",
				"name": "ForecastCommit"
			},
			{
				"operation": "remove",
				"name": "IsPrimary"
			},
			{
				"operation": "remove",
				"name": "PredictiveProbability"
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
				"operation": "remove",
				"name": "OverviewNewAnalyticsContainer"
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
				"name": "DaysInFunnelNewMetric"
			},
			{
				"operation": "remove",
				"name": "DaysAtCurrentStageNewMetric"
			},
			{
				"operation": "remove",
				"name": "OverviewAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "DaysInFunnelMetric"
			},
			{
				"operation": "remove",
				"name": "DaysAtCurrentStageMetric"
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
				"name": "CustomerNeed"
			},
			{
				"operation": "merge",
				"name": "CreatedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "CreatedOn",
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "merge",
				"name": "Contact",
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
				"name": "Title",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "Title",
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "OpportunityType"
			},
			{
				"operation": "remove",
				"name": "Group"
			},
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "Description"
			},
			{
				"operation": "remove",
				"name": "ClosingDetails"
			},
			{
				"operation": "remove",
				"name": "ContactRolesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "ContactRolesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "ContactRolesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ContactRolesAddButton"
			},
			{
				"operation": "remove",
				"name": "ContactRolesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "ContactRolesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "ContactRolesExportDataButton"
			},
			{
				"operation": "remove",
				"name": "ContactRolesImportDataButton"
			},
			{
				"operation": "remove",
				"name": "ContactRolesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "ContactRolesListContainer"
			},
			{
				"operation": "remove",
				"name": "ContactRolesList"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamAddButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamRefreshButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamSettingsButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamExportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamImportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamSearchFilter"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamListContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityTeamList"
			},
			{
				"operation": "merge",
				"name": "CompetitorsExpansionPanel",
				"values": {
					"toggleType": "material",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CompetitorsListContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CompetitorsList",
				"values": {
					"columns": [
						{
							"id": "b4955f2e-f70f-4040-18d6-283e0f091a26",
							"code": "CompetitorsListDS_Competitor",
							"caption": "#ResourceString(CompetitorsListDS_Competitor)#",
							"dataValueType": 10,
							"width": 480
						}
					]
				}
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
				"name": "TimelineTile_Lead"
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
				"name": "OpportunityInsightsTab"
			},
			{
				"operation": "remove",
				"name": "CustomerPerspectiveExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CustomerPerspectiveToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CustomerPerspectiveToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CustomerPerspectiveFieldsContainer"
			},
			{
				"operation": "remove",
				"name": "What"
			},
			{
				"operation": "remove",
				"name": "Why"
			},
			{
				"operation": "remove",
				"name": "WhyNow"
			},
			{
				"operation": "remove",
				"name": "BuyingProcess"
			},
			{
				"operation": "remove",
				"name": "OurPerspectiveExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OurPerspectiveToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OurPerspectiveToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OurPerspectiveFieldsContainer"
			},
			{
				"operation": "remove",
				"name": "Strength"
			},
			{
				"operation": "remove",
				"name": "Weaknesses"
			},
			{
				"operation": "remove",
				"name": "WhyOurCompany"
			},
			{
				"operation": "remove",
				"name": "EngagementTactic"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionToolsContainer"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionContainer"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionFeed"
			},
			{
				"operation": "remove",
				"name": "NextKeyActionList"
			},
			{
				"operation": "remove",
				"name": "ProductsTab"
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
				"name": "ProductsList_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "ProductsList_DeleteBulkAction"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductToolsContainer"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductRefreshButton"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductSettingsButton"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductExportDataButton"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductSearchFilter"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductListContainer"
			},
			{
				"operation": "remove",
				"name": "RecommendedProductList"
			},
			{
				"operation": "remove",
				"name": "HistoryTab"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryExpansionGridContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryRefreshBtn"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistorySettingsBtn"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryExportDataBtn"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistorySearchFilter"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistoryGridContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory_AddTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory_RemoveTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory_MergeBulkAction"
			},
			{
				"operation": "remove",
				"name": "OpportunityHistory_DeleteBulkAction"
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
				"name": "LeadsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "LeadsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsAddButton"
			},
			{
				"operation": "remove",
				"name": "LeadsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "LeadsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "LeadsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadsImportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "LeadsQuickFilterFlexContainer"
			},
			{
				"operation": "remove",
				"name": "QuickFilterShowAllLeads"
			},
			{
				"operation": "remove",
				"name": "LeadsListContainer"
			},
			{
				"operation": "remove",
				"name": "LeadsList"
			},
			{
				"operation": "remove",
				"name": "OrdersExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OrdersToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OrdersToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OrdersAddButton"
			},
			{
				"operation": "remove",
				"name": "OrdersRefreshButton"
			},
			{
				"operation": "remove",
				"name": "OrdersSettingsButton"
			},
			{
				"operation": "remove",
				"name": "OrdersExportDataButton"
			},
			{
				"operation": "remove",
				"name": "OrdersImportDataButton"
			},
			{
				"operation": "remove",
				"name": "OrdersSearchFilter"
			},
			{
				"operation": "remove",
				"name": "OrdersQuickFilterFlexContainer"
			},
			{
				"operation": "remove",
				"name": "QuickFilterShowAllOrders"
			},
			{
				"operation": "remove",
				"name": "OrdersListContainer"
			},
			{
				"operation": "remove",
				"name": "OrdersList"
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
				"name": "InvoicesQuickFilterFlexContainer"
			},
			{
				"operation": "remove",
				"name": "QuickFilterShowAllInvoices"
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
				"name": "DataGrid_o1m7u6h_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_o1m7u6h_DeleteBulkAction"
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
				"name": "DocumentsQuickFilterFlexContainer"
			},
			{
				"operation": "remove",
				"name": "QuickFilterShowAllDocuments"
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
				"name": "CardToggleTabPanel",
				"values": {
					"allowToggleClose": true
				}
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
				"name": "Stage",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Stage_d0cddel",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Stage_d0cddel"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_c4z34vo",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c4z34vo_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Stage",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Category",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Category_u6yq2u9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Category_u6yq2u9",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_mu4m9oi",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mu4m9oi_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Category",
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
					"label": "$Resources.Strings.PDS_PgrEstimatedVolume_mn2b8fm",
					"control": "$PDS_PgrEstimatedVolume_mn2b8fm",
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
				"name": "PgrDiscount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrDiscount_y08o03j",
					"control": "$PDS_PgrDiscount_y08o03j",
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
				"name": "Probability",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_Probability_4u9wdw6",
					"control": "$PDS_Probability_4u9wdw6",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "PgrFollowUpDate",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrFollowUpDate_b5idy35",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrFollowUpDate_b5idy35",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					}
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_p4ncqcs",
					"control": "$PDS_Notes_p4ncqcs",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lmmvc10",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lmmvc10_title)#",
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
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_uyifkw5",
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
				"parentName": "ExpansionPanel_lmmvc10",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_kkrk68p",
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
				"parentName": "GridContainer_uyifkw5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_dxaug4j",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_dxaug4j_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "FlexContainer_kkrk68p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_vkje95b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_vkje95b_caption)#",
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
							"dataSourceName": "GridDetail_yfh05mfDS"
						}
					}
				},
				"parentName": "FlexContainer_kkrk68p",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_g8nrvem",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_g8nrvem_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_kkrk68p",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_gp84e5g",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_gp84e5g_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_yfh05mf"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_g8nrvem",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_bcm6a9x",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_bcm6a9x_caption)#",
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
				"parentName": "GridDetailSettingsBtn_g8nrvem",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_9iu9e6b",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_9iu9e6b_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_9iu9e6b_GridDetail_yfh05mf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_yfh05mf"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_9iu9e6b_SearchValue",
							"GridDetailSearchFilter_9iu9e6b_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_kkrk68p",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_xrljt4u",
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
				"parentName": "ExpansionPanel_lmmvc10",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_yfh05mf",
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
					"items": "$GridDetail_yfh05mf",
					"primaryColumnName": "GridDetail_yfh05mfDS_Id",
					"columns": [
						{
							"id": "89a09848-d76f-eb94-7b54-967339e800c5",
							"code": "GridDetail_yfh05mfDS_Title",
							"caption": "#ResourceString(GridDetail_yfh05mfDS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "b47ea55e-0e77-5e2b-f22f-2fa2d4723c1e",
							"code": "GridDetail_yfh05mfDS_Type",
							"caption": "#ResourceString(GridDetail_yfh05mfDS_Type)#",
							"dataValueType": 10
						},
						{
							"id": "64ca1c1d-0db9-452d-df09-6bc4d70d12ea",
							"code": "GridDetail_yfh05mfDS_Status",
							"caption": "#ResourceString(GridDetail_yfh05mfDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "b4d5b0a7-1638-6335-9023-ba03583f9b6d",
							"code": "GridDetail_yfh05mfDS_Owner",
							"caption": "#ResourceString(GridDetail_yfh05mfDS_Owner)#",
							"dataValueType": 10
						},
						{
							"id": "bad1c05a-3f7c-ad3c-1d63-3eb5fab50767",
							"code": "GridDetail_yfh05mfDS_DueDate",
							"caption": "#ResourceString(GridDetail_yfh05mfDS_DueDate)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 2
					}
				},
				"parentName": "GridContainer_xrljt4u",
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
					"PDS_Territory_List"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Parameter_fpx7x9n_List": {
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
					"LookupAttribute_juw5c8t_List": {
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
					"PDS_DueDate_idigl92": {
						"modelConfig": {
							"path": "PDS.DueDate"
						}
					},
					"Parameter_q8l08xk_List": {
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
					"LookupAttribute_85sj3qr_List": {
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
					"PDS_PgrFollowUpDate_b5idy35": {
						"modelConfig": {
							"path": "PDS.PgrFollowUpDate"
						}
					},
					"PDS_PgrEstimatedVolume_mn2b8fm": {
						"modelConfig": {
							"path": "PDS.PgrEstimatedVolume"
						}
					},
					"PDS_Stage_d0cddel": {
						"modelConfig": {
							"path": "PDS.Stage"
						}
					},
					"PDS_Stage_d0cddel_List": {
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
					"PDS_Probability_4u9wdw6": {
						"modelConfig": {
							"path": "PDS.Probability"
						}
					},
					"PDS_Category_u6yq2u9": {
						"modelConfig": {
							"path": "PDS.Category"
						}
					},
					"PDS_Category_u6yq2u9_List": {
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
					"PDS_Notes_p4ncqcs": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"PDS_PgrDiscount_y08o03j": {
						"modelConfig": {
							"path": "PDS.PgrDiscount"
						}
					},
					"GridDetail_yfh05mf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_yfh05mfDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_9iu9e6b_GridDetail_yfh05mf",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_yfh05mfDS_Title": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.Title"
									}
								},
								"GridDetail_yfh05mfDS_Type": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.Type"
									}
								},
								"GridDetail_yfh05mfDS_Status": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.Status"
									}
								},
								"GridDetail_yfh05mfDS_Owner": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.Owner"
									}
								},
								"GridDetail_yfh05mfDS_DueDate": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.DueDate"
									}
								},
								"GridDetail_yfh05mfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_yfh05mfDS.Id"
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
					"ProductsList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"ProductsList",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"ProductsListDS_ProductCurrency",
					"ProductsListDS_ProductPrice",
					"ProductsListDS_OfferResult",
					"ProductsListDS_Quantity",
					"ProductsListDS_Price",
					"ProductsListDS_Amount"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"ProductsList",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"ProductsListDS_PgrDiscount": {
						"modelConfig": {
							"path": "ProductsListDS.PgrDiscount"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"RecommendedProductList",
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
					"ContactRolesList",
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
					"OpportunityTeamList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"CompetitorsList",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"CompetitorsListDS_CompetitorProduct",
					"CompetitorsListDS_Strengths",
					"CompetitorsListDS_Weakness",
					"CompetitorsListDS_IsWinner",
					"CompetitorsListDS_Supplier"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_rnogu7n",
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
					"GridDetail_n4l8edn",
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
					"GridDetail_iwda2md",
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
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"OpportunityHistory",
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
					"OpportunityHistory_PredefinedFilter"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_h0s6i43",
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
					"DataGrid_o1m7u6h",
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
					"DataGrid_o1m7u6h_PredefinedFilter"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_zuuqj1c",
					"modelConfig"
				],
				"values": {
					"filterAttributes": []
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
					"TimelineTile_Document_5nt4uvtDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_Invoice_hwvpvh7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_Order_5ba9zocDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order"
						}
					},
					"GridDetail_yfh05mfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"Type": {
									"path": "Type"
								},
								"Status": {
									"path": "Status"
								},
								"Owner": {
									"path": "Owner"
								},
								"DueDate": {
									"path": "DueDate"
								}
							}
						}
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"ProductsListDS",
					"config",
					"attributes"
				],
				"properties": [
					"ProductCurrency",
					"ProductPrice",
					"OfferResult",
					"Quantity",
					"Price",
					"Amount"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"ProductsListDS",
					"config",
					"attributes"
				],
				"values": {
					"PgrDiscount": {
						"path": "PgrDiscount"
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"CompetitorsListDS",
					"config",
					"attributes"
				],
				"properties": [
					"CompetitorProduct",
					"Strengths",
					"Weakness",
					"IsWinner",
					"Supplier"
				]
			},
			{
				"operation": "remove",
				"path": [
					"dependencies"
				],
				"properties": [
					"ProductsListDS",
					"RecommendedProductListDS",
					"ContactRolesListDS",
					"OpportunityTeamListDS",
					"StageHistoryListDS",
					"OpportunitiesByCustomerListDS",
					"NextKeyActionListDS",
					"LeadsListDS",
					"OpportunityHistoryDS",
					"OrdersListDS",
					"DataGrid_o1m7u6hDS",
					"DocumentsListDS"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_yfh05mfDS": [
						{
							"attributePath": "Opportunity",
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