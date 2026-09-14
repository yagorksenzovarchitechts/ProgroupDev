define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "remove",
				"name": "CompactProfile"
			},
			{
				"operation": "remove",
				"name": "LeadConversionScore"
			},
			{
				"operation": "merge",
				"name": "Account",
				"values": {
					"readonly": false,
					"secondaryDisplayValue": "PgrWepaformName"
				}
			},
			{
				"operation": "remove",
				"name": "addRecord_oz5z1xx"
			},
			{
				"operation": "remove",
				"name": "ContactCommunicationOptions"
			},
			{
				"operation": "remove",
				"name": "ContactCommunicationOptionsAddButton",
				"properties": [
					"menuItems",
					"displayType",
					"layoutConfig"
				]
			},
			{
				"operation": "merge",
				"name": "ContactCommunicationOptionsAddButton",
				"values": {
					"size": "small",
					"clicked": {
						"request": "crt.AddCommunicationOptionsRequest",
						"params": {
							"viewElementName": "CommunicationOptions"
						}
					},
					"disabled": false
				}
			},
			{
				"operation": "remove",
				"name": "AccountInfoContainer"
			},
			{
				"operation": "remove",
				"name": "AccountInfoExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "AccountInfoToolsContainer"
			},
			{
				"operation": "remove",
				"name": "AccountInfoToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "AccountInfoFieldContainer"
			},
			{
				"operation": "remove",
				"name": "AccountCompactProfile"
			},
			{
				"operation": "remove",
				"name": "AccountWeb"
			},
			{
				"operation": "remove",
				"name": "AccountCategory"
			},
			{
				"operation": "remove",
				"name": "AccountIndustry"
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"underlineSelectedTabColor": "crt-color-coral",
					"visible": true,
					"stretch": true,
					"selectedTab": {
						"value": "GeneralInfoTab"
					}
				}
			},
			{
				"operation": "merge",
				"name": "Type",
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
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "addRecord_e9kbl5o"
			},
			{
				"operation": "remove",
				"name": "Dear"
			},
			{
				"operation": "remove",
				"name": "Gender"
			},
			{
				"operation": "merge",
				"name": "SalutationType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Language",
				"values": {
					"readonly": false
				}
			},
			{
				"operation": "merge",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "AddressExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "AddressToolsContainer"
			},
			{
				"operation": "remove",
				"name": "AddressToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "AddressAddButton"
			},
			{
				"operation": "remove",
				"name": "AddressRefreshButton"
			},
			{
				"operation": "remove",
				"name": "AddressSettingsButton"
			},
			{
				"operation": "remove",
				"name": "AddressExportDataButton"
			},
			{
				"operation": "remove",
				"name": "AddressImportDataButton"
			},
			{
				"operation": "remove",
				"name": "AddressSearchFilter"
			},
			{
				"operation": "remove",
				"name": "AddressListContainer"
			},
			{
				"operation": "remove",
				"name": "AddressList"
			},
			{
				"operation": "remove",
				"name": "CareerExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CareerToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CareerToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CareerAddButton"
			},
			{
				"operation": "remove",
				"name": "CareerRefreshButton"
			},
			{
				"operation": "remove",
				"name": "CareerSettingsButton"
			},
			{
				"operation": "remove",
				"name": "CareerExportDataButton"
			},
			{
				"operation": "remove",
				"name": "CareerImportDataButton"
			},
			{
				"operation": "remove",
				"name": "CareerSearchFilter"
			},
			{
				"operation": "remove",
				"name": "CareerListContainer"
			},
			{
				"operation": "remove",
				"name": "CareerList"
			},
			{
				"operation": "remove",
				"name": "TimelineTab"
			},
			{
				"operation": "remove",
				"name": "GridContainer_4fm3l31"
			},
			{
				"operation": "remove",
				"name": "Timeline"
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
				"name": "TimelineTile_Call"
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
				"name": "TimelineTile_OmniChat"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Opportunity"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Lead"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Order"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Invoice"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Contract"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Document"
			},
			{
				"operation": "remove",
				"name": "TimelineTile_Case"
			},
			{
				"operation": "remove",
				"name": "SalesTab"
			},
			{
				"operation": "remove",
				"name": "LeadExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "LeadToolsContainer"
			},
			{
				"operation": "remove",
				"name": "LeadToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "LeadAddButton"
			},
			{
				"operation": "remove",
				"name": "LeadRefreshButton"
			},
			{
				"operation": "remove",
				"name": "LeadSettingsButton"
			},
			{
				"operation": "remove",
				"name": "LeadExportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadImportDataButton"
			},
			{
				"operation": "remove",
				"name": "LeadSearchFilter"
			},
			{
				"operation": "remove",
				"name": "LeadListContainer"
			},
			{
				"operation": "remove",
				"name": "LeadList"
			},
			{
				"operation": "remove",
				"name": "OrderExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OrderToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OrderToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OrderAddButton"
			},
			{
				"operation": "remove",
				"name": "OrderRefreshButton"
			},
			{
				"operation": "remove",
				"name": "OrderSettingsButton"
			},
			{
				"operation": "remove",
				"name": "OrderExportDataButton"
			},
			{
				"operation": "remove",
				"name": "OrderImportDataButton"
			},
			{
				"operation": "remove",
				"name": "OrderSearchFilter"
			},
			{
				"operation": "remove",
				"name": "OrderListContainer"
			},
			{
				"operation": "remove",
				"name": "OrderList"
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
				"name": "OpportunityExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "OpportunityToolsContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityAddButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityRefreshButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitySettingsButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityExportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunityImportDataButton"
			},
			{
				"operation": "remove",
				"name": "OpportunitySearchFilter"
			},
			{
				"operation": "remove",
				"name": "OpportunityListContainer"
			},
			{
				"operation": "remove",
				"name": "OpportunityList"
			},
			{
				"operation": "remove",
				"name": "SubscriptionsTab"
			},
			{
				"operation": "remove",
				"name": "DoNotUseEmailTogglePanel"
			},
			{
				"operation": "remove",
				"name": "SubscriptionModelGridContainer"
			},
			{
				"operation": "remove",
				"name": "SubcriptionModelTitleFlex"
			},
			{
				"operation": "remove",
				"name": "SubcriptionModelTitleLabel"
			},
			{
				"operation": "remove",
				"name": "SubcriptionModelHelpTextLabel"
			},
			{
				"operation": "remove",
				"name": "UnsubscribeInfoContainer"
			},
			{
				"operation": "remove",
				"name": "UnsubcribeInfoTextContainer"
			},
			{
				"operation": "remove",
				"name": "UnsubscribeInfoLargeText"
			},
			{
				"operation": "remove",
				"name": "UnsubscribeInfoText"
			},
			{
				"operation": "remove",
				"name": "SubscribeButton"
			},
			{
				"operation": "remove",
				"name": "SubscribeInfoContainer"
			},
			{
				"operation": "remove",
				"name": "SubcribeInfoTextContainer"
			},
			{
				"operation": "remove",
				"name": "SubscribeInfoLargeText"
			},
			{
				"operation": "remove",
				"name": "SubscribeInfoText"
			},
			{
				"operation": "remove",
				"name": "UnsubscribeButton"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionToolsContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionRefreshButton"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionSettingsButton"
			},
			{
				"operation": "remove",
				"name": "GridDetailExportDataBtn_23fe8ko"
			},
			{
				"operation": "remove",
				"name": "GridDetailImportDataBtn_su2a5tm"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionSearchFilter"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionListContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSubscriptionList"
			},
			{
				"operation": "remove",
				"name": "GridDetail_guswpo0_AddTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "GridDetail_guswpo0_RemoveTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "GridDetail_guswpo0_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "GridDetail_guswpo0_DeleteBulkAction"
			},
			{
				"operation": "remove",
				"name": "ContactSubscriptions_ExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "GridContainer_rr4pc75"
			},
			{
				"operation": "remove",
				"name": "FlexContainer_klc0q56"
			},
			{
				"operation": "remove",
				"name": "Button_6g2hkz7"
			},
			{
				"operation": "remove",
				"name": "Button_5wnd7c6"
			},
			{
				"operation": "remove",
				"name": "MenuItem_2mr227g"
			},
			{
				"operation": "remove",
				"name": "MenuItem_h6sf9eo"
			},
			{
				"operation": "remove",
				"name": "SearchFilter_Subscriptions"
			},
			{
				"operation": "remove",
				"name": "FlexContainer_ew2hfss"
			},
			{
				"operation": "remove",
				"name": "Label_ywjapbv"
			},
			{
				"operation": "remove",
				"name": "GridContainer_x3ihv1k"
			},
			{
				"operation": "remove",
				"name": "ContactSubscriptions_DataGrid"
			},
			{
				"operation": "remove",
				"name": "DataGrid_sc2w2z4_AddTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_sc2w2z4_RemoveTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_sc2w2z4_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_sc2w2z4_MergeBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_sc2w2z4_DeleteBulkAction"
			},
			{
				"operation": "remove",
				"name": "MarketingTab"
			},
			{
				"operation": "remove",
				"name": "MarketingTabGridContainer"
			},
			{
				"operation": "remove",
				"name": "MarketingFieldsContainer"
			},
			{
				"operation": "remove",
				"name": "CustomerNeed"
			},
			{
				"operation": "remove",
				"name": "RegisterMethod"
			},
			{
				"operation": "remove",
				"name": "Channel"
			},
			{
				"operation": "remove",
				"name": "Source"
			},
			{
				"operation": "remove",
				"name": "AdCampaign"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormToolContainer"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormRefreshButton"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormSettingsButton"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormExportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormImportDataButton"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormSearchFilter"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormListContainer"
			},
			{
				"operation": "remove",
				"name": "SubmittedFormList"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesExportMenuItem"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesImportMenuItem"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "GridContainer_jilqo44"
			},
			{
				"operation": "remove",
				"name": "AdAudiencesDataGrid"
			},
			{
				"operation": "remove",
				"name": "DataGrid_wij59kw_AddTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_wij59kw_RemoveTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_wij59kw_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_wij59kw_MergeBulkAction"
			},
			{
				"operation": "remove",
				"name": "DataGrid_wij59kw_DeleteBulkAction"
			},
			{
				"operation": "remove",
				"name": "MrktLeadExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "MrktLeadToolsContainer"
			},
			{
				"operation": "remove",
				"name": "MrktLeadToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CreateLeadButton"
			},
			{
				"operation": "remove",
				"name": "MrktLeadRefreshButton"
			},
			{
				"operation": "remove",
				"name": "GridDetailSettingsBtn_icmycs2"
			},
			{
				"operation": "remove",
				"name": "MrktLeadExportDataButton"
			},
			{
				"operation": "remove",
				"name": "MrktLeadImportDataButton"
			},
			{
				"operation": "remove",
				"name": "MrktLeadSearchFilter"
			},
			{
				"operation": "remove",
				"name": "MrktLeadListContainer"
			},
			{
				"operation": "remove",
				"name": "MrktLeadList"
			},
			{
				"operation": "remove",
				"name": "BulkEmailExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "BulkEmailToolContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailRefreshButton"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSettingsButton"
			},
			{
				"operation": "remove",
				"name": "BulkEmailExportDataButton"
			},
			{
				"operation": "remove",
				"name": "BulkEmailSearchFilter"
			},
			{
				"operation": "remove",
				"name": "BulkEmailListContainer"
			},
			{
				"operation": "remove",
				"name": "BulkEmailList"
			},
			{
				"operation": "remove",
				"name": "BulkEmailList_AddTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "BulkEmailList_RemoveTagsBulkAction"
			},
			{
				"operation": "remove",
				"name": "BulkEmailList_ExportToExcelBulkAction"
			},
			{
				"operation": "remove",
				"name": "CampaignExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CampaignToolContainer"
			},
			{
				"operation": "remove",
				"name": "CampaignToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CampaignRefreshButton"
			},
			{
				"operation": "remove",
				"name": "CampaignSettingsButton"
			},
			{
				"operation": "remove",
				"name": "CampaignExportDataButton"
			},
			{
				"operation": "remove",
				"name": "CampaignSearchFilter"
			},
			{
				"operation": "remove",
				"name": "CampaignListContainer"
			},
			{
				"operation": "remove",
				"name": "CampaignList"
			},
			{
				"operation": "remove",
				"name": "WebSessionExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "WebSessionToolContainer"
			},
			{
				"operation": "remove",
				"name": "WebSessionToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "WebSessionRefreshButton"
			},
			{
				"operation": "remove",
				"name": "WebSessionSettingsButton"
			},
			{
				"operation": "remove",
				"name": "WebSessionExportDataButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_tz82vh6"
			},
			{
				"operation": "remove",
				"name": "WebSessionSearchFilter"
			},
			{
				"operation": "remove",
				"name": "WebSessionListContainer"
			},
			{
				"operation": "remove",
				"name": "WebSessionList"
			},
			{
				"operation": "remove",
				"name": "WebActionExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "WebActionToolContainer"
			},
			{
				"operation": "remove",
				"name": "WebActionToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "WebActionRefreshButton"
			},
			{
				"operation": "remove",
				"name": "WebActionSettingsButton"
			},
			{
				"operation": "remove",
				"name": "WebActionExportDataButton"
			},
			{
				"operation": "remove",
				"name": "WebActionImportDataButton"
			},
			{
				"operation": "remove",
				"name": "WebActionSearchFilter"
			},
			{
				"operation": "remove",
				"name": "WebActionListContainer"
			},
			{
				"operation": "remove",
				"name": "WebActionList"
			},
			{
				"operation": "remove",
				"name": "EventExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "EventToolContainer"
			},
			{
				"operation": "remove",
				"name": "EventToolFlexContainer"
			},
			{
				"operation": "remove",
				"name": "EventRefreshButton"
			},
			{
				"operation": "remove",
				"name": "EventSettingsButton"
			},
			{
				"operation": "remove",
				"name": "EventExportDataButton"
			},
			{
				"operation": "remove",
				"name": "EventSearchFilter"
			},
			{
				"operation": "remove",
				"name": "EventListContainer"
			},
			{
				"operation": "remove",
				"name": "EventList"
			},
			{
				"operation": "remove",
				"name": "ServiceTab"
			},
			{
				"operation": "remove",
				"name": "CasesExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "CasesToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CasesToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "CasesAddButton"
			},
			{
				"operation": "remove",
				"name": "CasesRefreshButton"
			},
			{
				"operation": "remove",
				"name": "CasesSettingsButton"
			},
			{
				"operation": "remove",
				"name": "CasesExportDataButton"
			},
			{
				"operation": "remove",
				"name": "CasesImportDataButton"
			},
			{
				"operation": "remove",
				"name": "CasesSearchFilter"
			},
			{
				"operation": "remove",
				"name": "CasesListContainer"
			},
			{
				"operation": "remove",
				"name": "CasesList"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsExpansionPanel"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsToolsContainer"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsToolsFlexContainer"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsRefreshButton"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsSettingsButton"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsExportDataButton"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsImportDataButton"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsSearchFilter"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsListContainer"
			},
			{
				"operation": "remove",
				"name": "ServiceAgreementsList"
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
				"name": "ContactCompactProfile_lpwah0r",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": false,
					"referenceColumn": "$Id"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_5odrxac",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Name_l21gnrw",
					"control": "$PDS_Name_l21gnrw",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_o6emyj1",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_BirthDate_0v6vcrk",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_BirthDate_0v6vcrk"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_cf5dsmd",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Country_8qu1qoo",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Country_8qu1qoo"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_zy76tmv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zy76tmv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_cf5dsmd",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_vzkwr3o",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_Email_14i2z8y",
					"control": "$PDS_Email_14i2z8y",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"visible": false,
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "PhoneInput_ft4hr28",
				"values": {
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_Phone_g0l1r5a",
					"control": "$PDS_Phone_g0l1r5a",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"visible": false,
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "CommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": false,
					"columnsCount": 1,
					"showNoDataPlaceholder": true,
					"labelPosition": "above",
					"masterRecordColumnValue": "$Id",
					"masterRecordColumnName": "Contact",
					"items": "$CommunicationOptions_558wj6f",
					"visible": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_6qoqovy",
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
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile_65r84pe",
				"values": {
					"type": "crt.AccountCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$Account",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_6qoqovy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GivenName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_GivenName_97c45ey",
					"control": "$PDS_GivenName_97c45ey",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Surname",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Surname_edpljsz",
					"control": "$PDS_Surname_edpljsz",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DoNotUseCall",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_DoNotUseCall_2ixvtut",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_DoNotUseCall_2ixvtut"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DoNotUseEmail",
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
					"label": "$Resources.Strings.PDS_DoNotUseEmail_fmp9dpv",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_DoNotUseEmail_fmp9dpv"
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_esjuwnh",
					"control": "$PDS_Notes_esjuwnh",
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
				"name": "ExpansionPanel_Employee",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Employee_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_qvb63s5",
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
				"parentName": "ExpansionPanel_Employee",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_c8wafzr",
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
				"parentName": "GridContainer_qvb63s5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_lrmq544",
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
				"parentName": "ExpansionPanel_Employee",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrEmployeeCode",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrProGroupSalesPerson_bpuquo5",
					"control": "$PDS_PgrProGroupSalesPerson_bpuquo5",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5o3vqg9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrReportsTo_q5r3mvs",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "left",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrReportsTo_q5r3mvs",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_0rz6p78",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0rz6p78_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5o3vqg9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_f1mc61r",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsActive_g6chb63",
					"ariaLabel": "",
					"labelPosition": "left",
					"tooltip": "",
					"control": "$PDS_PgrIsActive_g6chb63",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_8hzpzs3",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_8hzpzs3_label)#",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrCreatioUser_4t4xa0z",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_hq33amx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hq33amx_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_8hzpzs3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Department",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Department_blp5ygl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Department_blp5ygl",
					"visible": true,
					"readonly": false,
					"placeholder": "#ResourceString(Department_placeholder)#"
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_2lrvn2r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2lrvn2r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Department",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_hv4r0n7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrTerritory_4gny4bv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "left",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrTerritory_4gny4bv",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_dl5wfrs",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dl5wfrs_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hv4r0n7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_9kaap0p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PgrTeam_wa51w6k",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PgrTeam_wa51w6k"
				},
				"parentName": "GridContainer_lrmq544",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_mvth9pz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mvth9pz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_9kaap0p",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_uf2redb",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_uf2redb_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gmba0s7",
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
				"parentName": "TabContainer_uf2redb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_p5mzqae",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_p5mzqae_title)#",
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
				"parentName": "TabContainer_uf2redb",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_29367nz",
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
				"parentName": "ExpansionPanel_p5mzqae",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8br65c3",
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
				"parentName": "GridContainer_29367nz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_uqi8e2s",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_uqi8e2s_caption)#",
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
				"parentName": "FlexContainer_8br65c3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_5ot987e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_5ot987e_caption)#",
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
							"dataSourceName": "GridDetail_qib93u6DS"
						}
					}
				},
				"parentName": "FlexContainer_8br65c3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_yswzqgr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_yswzqgr_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_8br65c3",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_a2t14jx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_a2t14jx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_qib93u6"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yswzqgr",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_46ygazv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_46ygazv_caption)#",
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
				"parentName": "GridDetailSettingsBtn_yswzqgr",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_46tlg98",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_46tlg98_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_46tlg98_GridDetail_qib93u6",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qib93u6"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_46tlg98_SearchValue",
							"GridDetailSearchFilter_46tlg98_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_8br65c3",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_dzfwyhp",
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
				"parentName": "ExpansionPanel_p5mzqae",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_qib93u6",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 24
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
					"items": "$GridDetail_qib93u6",
					"primaryColumnName": "GridDetail_qib93u6DS_Id",
					"columns": [
						{
							"id": "aea80fea-d179-8935-789b-91a980688e4d",
							"code": "GridDetail_qib93u6DS_Title",
							"caption": "#ResourceString(GridDetail_qib93u6DS_Title)#",
							"dataValueType": 28
						},
						{
							"id": "328628ab-c8bd-69ec-fa0d-1449202333a0",
							"code": "GridDetail_qib93u6DS_ActivityCategory",
							"caption": "#ResourceString(GridDetail_qib93u6DS_ActivityCategory)#",
							"dataValueType": 10
						},
						{
							"id": "5eec774b-e231-834e-a381-2af002ad8a0d",
							"code": "GridDetail_qib93u6DS_Account",
							"caption": "#ResourceString(GridDetail_qib93u6DS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "b72ff5f1-f4a0-5bf0-6f84-10fa575da9c3",
							"code": "GridDetail_qib93u6DS_DueDate",
							"caption": "#ResourceString(GridDetail_qib93u6DS_DueDate)#",
							"dataValueType": 7
						},
						{
							"id": "22db8500-8036-5248-67ea-936aec72ab33",
							"code": "GridDetail_qib93u6DS_Status",
							"caption": "#ResourceString(GridDetail_qib93u6DS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "88b5c9e3-3421-28c6-715e-d90cfd3901b4",
							"code": "GridDetail_qib93u6DS_Priority",
							"caption": "#ResourceString(GridDetail_qib93u6DS_Priority)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_dzfwyhp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_c5ul5fu",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_c5ul5fu_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ufsy3y4",
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
				"parentName": "TabContainer_c5ul5fu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_3he5r0h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"customFilters": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_3he5r0h_caption)#",
					"label": "#ResourceString(Timeline_3he5r0h_label)#",
					"filters": [],
					"masterEntitySchemaName": "Contact",
					"filterValues": "$Timeline_3he5r0h_AllTileFilters"
				},
				"parentName": "GridContainer_ufsy3y4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_AIInsight_7n98584",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_AIInsight_7n98584_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email_34ye0et",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Email_34ye0et_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Activity_jmg3xc1",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Activity_jmg3xc1_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call_8cvfhvx",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Call_8cvfhvx_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Case_208t5cu",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Case_208t5cu_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract_6t646q5",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Contract_6t646q5_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document_g8gvxke",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Document_g8gvxke_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice_40frp9u",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Invoice_40frp9u_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Lead_17ib00b",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Lead_17ib00b_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_OmniChat_dqrzhn4",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Contact",
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
							}
						],
						"schemaName": "OmniChat",
						"schemaType": null,
						"isDefault": true,
						"uId": "af1f685c-315b-4b44-a957-c5094417a57a",
						"filter": null
					},
					"filters": "$TimelineTile_OmniChat_dqrzhn4_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Opportunity_98t5jza",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Opportunity_98t5jza_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order_v658o88",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "CreatedBy",
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
					"filters": "$TimelineTile_Order_v658o88_Items"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile_vdtgf1m",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile",
						"isDefault": true
					}
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed_u6mzz4c",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed",
						"isDefault": true
					}
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_pin5a5y",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_3q0qhpi",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "6d006667-3496-4e2d-adc0-3a42648dd97b",
						"schemaType": "Feed",
						"caption": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"icon": "feed-composer-icon"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Contact",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposerSelector_pin5a5y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer_1if7xm4",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "75aadc65-a834-42d0-b880-fac9bdee4c86",
						"schemaType": "Email",
						"caption": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"icon": "email-composer-icon"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "Contact"
				},
				"parentName": "MessageComposerSelector_pin5a5y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatComposer_z6vmu8j",
				"values": {
					"type": "crt.ChatComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "a1c2d3e4-f5a6-47b8-c9d0-e1f2a3b4c5d6",
						"schemaType": "Telegram",
						"caption": "Telegram",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.ChatComposer",
						"icon": "telegram-composer-icon"
					},
					"items": [],
					"providerId": "$ChatComposer_z6vmu8j_ProviderId",
					"selectedChannelSchemaType": "$ChatComposer_z6vmu8j_SelectedChannelSchemaType",
					"selectedChannelId": "$ChatComposer_z6vmu8j_SelectedChannelId",
					"selectedContactId": "$ChatComposer_z6vmu8j_SelectedContactId",
					"channels": "$ChatComposer_z6vmu8j_Channels",
					"sendersChannels": "$ChatComposer_z6vmu8j_ActiveChannels",
					"recipientContacts": "$ChatComposer_z6vmu8j_RecipientContacts",
					"chatInput": "$OutboundChatInput",
					"filesToUpload": "$FilesToUpload",
					"selectedChannelIdChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "ChatComposer_z6vmu8j_SelectedChannelId",
							"attributeValue": "@event"
						}
					},
					"selectedContactIdChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "ChatComposer_z6vmu8j_SelectedContactId",
							"attributeValue": "@event"
						}
					},
					"chatId": "$ChatComposer_z6vmu8j_ChatId",
					"chatIdChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "ChatComposer_z6vmu8j_ChatId",
							"attributeValue": "@event"
						}
					},
					"editorReadonlyChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInputReadonly",
							"attributeValue": "@event"
						}
					},
					"editorPlaceholderKeyChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatReadonlyPlaceholderKey",
							"attributeValue": "@event"
						}
					},
					"editorTooltipChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatEditorTooltip",
							"attributeValue": "@event"
						}
					},
					"sendDisabledChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInputDisabled",
							"attributeValue": "@event"
						}
					},
					"messageInputDisabledChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatMessageInputDisabled",
							"attributeValue": "@event"
						}
					},
					"templateSelectDisabledChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatTemplateSelectDisabled",
							"attributeValue": "@event"
						}
					},
					"chatInputChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInput",
							"attributeValue": "@event"
						}
					},
					"filesToUploadChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "FilesToUpload",
							"attributeValue": "@event"
						}
					},
					"recordIdDataSourceName": "PDS",
					"sendMessage": {
						"request": "crt.SendOutboundChatRequest",
						"params": {
							"composerName": "ChatComposer_z6vmu8j",
							"recordIdDataSourceName": "PDS"
						}
					}
				},
				"parentName": "MessageComposerSelector_pin5a5y",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OutboundChat_EditorBody",
				"values": {
					"type": "crt.MessageEditorBody",
					"toolbarItems": [],
					"inputs": [],
					"chatInput": "$OutboundChatInput",
					"isDisabled": "$OutboundChatInputDisabled",
					"attachments": "$FilesToUpload",
					"isFileUploadEnabled": "$OutboundIsFileUploadEnabled",
					"editorTooltip": "$OutboundChatEditorTooltip",
					"sendMessage": {
						"request": "crt.SendOutboundChatRequest",
						"params": {
							"composerName": "ChatComposer_z6vmu8j",
							"recordIdDataSourceName": "PDS"
						}
					}
				},
				"parentName": "ChatComposer_z6vmu8j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OutboundChat_AttachFileButton",
				"values": {
					"type": "crt.Button",
					"icon": "clip-button-icon",
					"size": "small",
					"iconPosition": "only-icon",
					"clicked": {
						"request": "crt.SelectChatFilesRequest"
					},
					"visible": "$OutboundIsFileUploadEnabled",
					"disabled": "$OutboundChatInputDisabled"
				},
				"parentName": "OutboundChat_EditorBody",
				"propertyName": "toolbarItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OutboundChat_EmojiSelect",
				"values": {
					"type": "crt.EmojiSelect",
					"chatInput": "$OutboundChatInput",
					"chatId": "$ChatComposer_z6vmu8j_ChatId",
					"chatInputChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInput",
							"attributeValue": "@event"
						}
					},
					"disabled": "$OutboundChatInputDisabled"
				},
				"parentName": "OutboundChat_EditorBody",
				"propertyName": "toolbarItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OutboundChat_TemplateSelect",
				"values": {
					"type": "crt.TemplateSelect",
					"disabled": "$OutboundChatTemplateSelectDisabled",
					"chatInput": "$OutboundChatInput",
					"chatId": "$ChatComposer_z6vmu8j_ChatId",
					"editorDisabled": "$OutboundChatInputDisabled",
					"chatInputChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInput",
							"attributeValue": "@event"
						}
					}
				},
				"parentName": "OutboundChat_EditorBody",
				"propertyName": "toolbarItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OutboundChat_EditorInput",
				"values": {
					"type": "crt.MessageEditorInput",
					"inputMode": "text",
					"chatInput": "$OutboundChatInput",
					"attachments": "$FilesToUpload",
					"isFileUploadEnabled": "$OutboundIsFileUploadEnabled",
					"isDisabled": "$OutboundChatMessageInputDisabled",
					"readonly": "$OutboundChatInputReadonly",
					"readonlyPlaceholderKey": "$OutboundChatReadonlyPlaceholderKey",
					"chatInputChange": {
						"request": "crt.ChangeViewModelAttributeValueRequest",
						"params": {
							"attributeName": "OutboundChatInput",
							"attributeValue": "@event"
						}
					},
					"sendMessage": {
						"request": "crt.SendOutboundChatRequest",
						"params": {
							"composerName": "ChatComposer_z6vmu8j",
							"recordIdDataSourceName": "PDS"
						}
					}
				},
				"parentName": "OutboundChat_EditorBody",
				"propertyName": "inputs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_dtu222y",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"classes": [],
					"fitContent": true,
					"direction": "row"
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "customFilters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_3he5r0h_TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity",
					"visible": true
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline_3he5r0h_TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date",
					"visible": true
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline_3he5r0h_TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner",
					"visible": true
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Timeline_3he5r0h_TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages",
					"visible": true
				},
				"parentName": "Timeline_3he5r0h",
				"propertyName": "filters",
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
					"Account_List": {
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
					"Language_List": {
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
					"PDS_GivenName_97c45ey": {
						"modelConfig": {
							"path": "PDS.GivenName"
						}
					},
					"PDS_Surname_edpljsz": {
						"modelConfig": {
							"path": "PDS.Surname"
						}
					},
					"PDS_DoNotUseEmail_fmp9dpv": {
						"modelConfig": {
							"path": "PDS.DoNotUseEmail"
						}
					},
					"PDS_Department_blp5ygl": {
						"modelConfig": {
							"path": "PDS.Department"
						}
					},
					"PDS_Department_blp5ygl_List": {
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
					"PDS_DoNotUseCall_2ixvtut": {
						"modelConfig": {
							"path": "PDS.DoNotUseCall"
						}
					},
					"PDS_Notes_esjuwnh": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"Type_List": {
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
					"PDS_PgrProGroupSalesPerson_bpuquo5": {
						"modelConfig": {
							"path": "PDS.PgrProGroupSalesPerson"
						}
					},
					"PDS_Name_l21gnrw": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_PgrIsActive_g6chb63": {
						"modelConfig": {
							"path": "PDS.PgrIsActive"
						}
					},
					"PDS_PgrReportsTo_q5r3mvs": {
						"modelConfig": {
							"path": "PDS.PgrReportsTo"
						}
					},
					"PDS_PgrReportsTo_q5r3mvs_List": {
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
					"PDS_PgrTeam_wa51w6k": {
						"modelConfig": {
							"path": "PDS.PgrTeam"
						}
					},
					"PDS_PgrTeam_wa51w6k_List": {
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
					"PDS_PgrCreatioUser_4t4xa0z": {
						"modelConfig": {
							"path": "PDS.PgrCreatioUser"
						}
					},
					"PDS_PgrCreatioUser_4t4xa0z_List": {
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
					"CommunicationOptions_558wj6f": {
						"isCollection": true,
						"modelConfig": {
							"path": "CommunicationOptionsDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"CommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.CreatedOn"
									}
								},
								"CommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.Number"
									}
								},
								"CommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.Primary"
									}
								},
								"CommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.NonActual"
									}
								},
								"CommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.CommunicationType"
									}
								},
								"CommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"CommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"CommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "CommunicationOptionsDS.Id"
									}
								}
							}
						}
					},
					"PDS_Email_14i2z8y": {
						"modelConfig": {
							"path": "PDS.Email"
						}
					},
					"PDS_Phone_g0l1r5a": {
						"modelConfig": {
							"path": "PDS.Phone"
						}
					},
					"PDS_Country_8qu1qoo": {
						"modelConfig": {
							"path": "PDS.Country"
						}
					},
					"PDS_Country_8qu1qoo_List": {
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
					"PDS_PgrTerritory_4gny4bv": {
						"modelConfig": {
							"path": "PDS.PgrTerritory"
						}
					},
					"PDS_PgrTerritory_4gny4bv_List": {
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
					"GridDetail_qib93u6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_qib93u6DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_46tlg98_GridDetail_qib93u6",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_qib93u6_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_qib93u6DS_Title": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.Title"
									}
								},
								"GridDetail_qib93u6DS_ActivityCategory": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.ActivityCategory"
									}
								},
								"GridDetail_qib93u6DS_Account": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.Account"
									}
								},
								"GridDetail_qib93u6DS_DueDate": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.DueDate"
									}
								},
								"GridDetail_qib93u6DS_Status": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.Status"
									}
								},
								"GridDetail_qib93u6DS_Priority": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.Priority"
									}
								},
								"GridDetail_qib93u6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_qib93u6DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qib93u6_PredefinedFilter": {
						"value": {
							"items": {
								"e36e3628-b584-42da-8922-0dc6936f0b71": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ActivityCategory"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityCategory",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit call",
													"Id": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"value": "543d0f02-c32e-45ae-8427-365a5fa5ea43",
													"displayValue": "Visit call"
												}
											}
										},
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Visit",
													"Id": "fbef561a-c041-4bf7-9715-38123ec86789",
													"value": "fbef561a-c041-4bf7-9715-38123ec86789",
													"displayValue": "Visit"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"PDS_BirthDate_0v6vcrk": {
						"modelConfig": {
							"path": "PDS.BirthDate"
						}
					},
					"OutboundChatInput": {
						"value": ""
					},
					"OutboundChatInputDisabled": {
						"value": false
					},
					"OutboundChatMessageInputDisabled": {
						"value": false
					},
					"OutboundChatInputReadonly": {
						"value": false
					},
					"OutboundChatReadonlyPlaceholderKey": {
						"value": ""
					},
					"OutboundChatEditorTooltip": {
						"value": null
					},
					"OutboundChatTemplateSelectDisabled": {
						"value": false
					},
					"FilesToUpload": {
						"value": []
					},
					"OutboundIsFileUploadEnabled": {
						"value": true
					},
					"ChatComposer_z6vmu8j_SelectedChannelId": {
						"value": ""
					},
					"ChatComposer_z6vmu8j_SelectedContactId": {
						"value": ""
					},
					"ChatComposer_z6vmu8j_ChatId": {
						"value": ""
					},
					"ChatComposer_z6vmu8j_Channels": {
						"value": [
							{
								"schemaType": "Telegram",
								"caption": "Telegram",
								"icon": "telegram-composer-icon",
								"providerId": "645170ab-c67a-4dcc-9def-c0e5236bdfe0"
							},
							{
								"schemaType": "FacebookMessenger",
								"caption": "Facebook messenger",
								"icon": "messenger-composer-icon",
								"providerId": "50491c6c-d82b-4b86-b38c-99262d11a5ac"
							},
							{
								"schemaType": "SMS",
								"caption": "SMS",
								"icon": "sms-composer-icon",
								"providerId": "21af0484-eee0-4f61-8822-f8789838ba66"
							},
							{
								"schemaType": "WhatsApp",
								"caption": "WhatsApp",
								"icon": "whatsapp-composer-icon",
								"providerId": "1398dc73-b428-4e21-b97a-c1bb6b4bc621"
							}
						]
					},
					"ChatComposer_z6vmu8j_SelectedChannelSchemaType": {
						"value": "Telegram"
					},
					"ChatComposer_z6vmu8j_ProviderId": {
						"from": [
							"ChatComposer_z6vmu8j_SelectedChannelSchemaType",
							"ChatComposer_z6vmu8j_Channels"
						],
						"converter": "crt.ToProviderIdBySchemaType"
					},
					"ChatComposer_z6vmu8j_ActiveChannels": {
						"from": "ChatComposer_z6vmu8j_ProviderId",
						"converter": "crt.ToActiveChannelsByProvider"
					},
					"ChatComposer_z6vmu8j_RecipientContacts": {
						"from": "ChatComposer_z6vmu8j_ProviderId",
						"converter": "crt.ToRecipientsByProvider"
					},
					"Timeline_3he5r0h_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
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
					"filterAttributes": []
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CareerList",
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
					"CasesList",
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
					"BulkEmailList",
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
					"GridDetail_guswpo0",
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
					"OpportunityList",
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
					"OrderList",
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
					"GridDetail_dm1myag",
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
					"DataGrid_wij59kw",
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
					"DataGrid_wij59kw_PredefinedFilter"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"LeadList",
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
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"TimelineTile_OpportunityDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity"
						}
					},
					"TimelineTile_LeadDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					},
					"TimelineTile_OrderDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order"
						}
					},
					"TimelineTile_InvoiceDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_ContractDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract"
						}
					},
					"TimelineTile_DocumentDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_CaseDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					},
					"TimelineTile_AIInsight_r8x6rn7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AIInsight"
						}
					},
					"CommunicationOptions_558wj6fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"CommunicationOptionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"GridDetail_qib93u6DS": {
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
								"Account": {
									"path": "Account"
								},
								"DueDate": {
									"path": "DueDate"
								},
								"Status": {
									"path": "Status"
								},
								"Priority": {
									"path": "Priority"
								}
							}
						}
					},
					"TimelineTile_AIInsight_7n98584DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AIInsight"
						}
					},
					"TimelineTile_Email_34ye0etDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Activity_jmg3xc1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_Call_8cvfhvxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_Case_208t5cuDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Case"
						}
					},
					"TimelineTile_Contract_6t646q5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract"
						}
					},
					"TimelineTile_Document_g8gvxkeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_Invoice_40frp9uDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_Lead_17ib00bDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					},
					"TimelineTile_OmniChat_dqrzhn4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OmniChat"
						}
					},
					"TimelineTile_Opportunity_98t5jzaDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity"
						}
					},
					"TimelineTile_Order_v658o88DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order"
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
					"AddressListDS",
					"CareerListDS",
					"CasesListDS",
					"BulkEmailListDS",
					"RecommendedProductListDS",
					"OpportunityListDS",
					"OrderListDS",
					"GridDetail_dm1myagDS",
					"DataGrid_wij59kwDS",
					"LeadListDS"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"GridDetail_qib93u6DS": [
						{
							"attributePath": "Owner",
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