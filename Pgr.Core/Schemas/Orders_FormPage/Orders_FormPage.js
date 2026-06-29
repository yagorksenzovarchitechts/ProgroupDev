define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "merge",
				"name": "MenuItemCreateInvoice",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "MenuItemCreateContract",
				"values": {
					"visible": true
				}
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
				"name": "ProgressBar",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "TotalWidget"
			},
			{
				"operation": "remove",
				"name": "TotalMetric"
			},
			{
				"operation": "merge",
				"name": "OrderInfoLabel",
				"values": {
					"headingLevel": "label"
				}
			},
			{
				"operation": "remove",
				"name": "RecipientName"
			},
			{
				"operation": "merge",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "Account",
				"parentName": "GridContainer_2wdyna1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "Contact"
			},
			{
				"operation": "remove",
				"name": "addRecord_xx9pdmu"
			},
			{
				"operation": "remove",
				"name": "PaymentAmount"
			},
			{
				"operation": "remove",
				"name": "Owner"
			},
			{
				"operation": "remove",
				"name": "addRecord_mb4zwk4"
			},
			{
				"operation": "remove",
				"name": "PlannedEndDate"
			},
			{
				"operation": "remove",
				"name": "OrderChannel"
			},
			{
				"operation": "remove",
				"name": "Opportunity"
			},
			{
				"operation": "remove",
				"name": "addRecord_fqbv4qt"
			},
			{
				"operation": "remove",
				"name": "ProductsNewAnalyticsContainer"
			},
			{
				"operation": "remove",
				"name": "TotalNewMetric"
			},
			{
				"operation": "remove",
				"name": "PlannedDateNewMetric"
			},
			{
				"operation": "remove",
				"name": "ActualEndDateNewMetric"
			},
			{
				"operation": "remove",
				"name": "NumberOfProductsNewMetric"
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
				"name": "ProductsTab",
				"values": {
					"caption": "#ResourceString(ProductsTab_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "ProductsList",
				"values": {
					"columns": [
						{
							"id": "bf951c36-8c39-90fb-92fe-70524acf7c8c",
							"code": "GridDetail_tviz7gfDS_Product",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Product)#",
							"dataValueType": 10,
							"sticky": true
						},
						{
							"id": "72ad842a-357b-74aa-6cf3-8d36146cc858",
							"code": "GridDetail_tviz7gfDS_Quantity",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Quantity)#",
							"dataValueType": 33,
							"width": 114
						},
						{
							"id": "9193de08-73af-03ae-76ee-261fdeaabbf6",
							"code": "GridDetail_tviz7gfDS_PgrQuantityOrigin",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrQuantityOrigin)#",
							"dataValueType": 4,
							"width": 180
						},
						{
							"id": "68f57e87-24bf-59aa-af49-a8a5a37e9e1b",
							"code": "GridDetail_tviz7gfDS_Unit",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Unit)#",
							"dataValueType": 10,
							"width": 168
						},
						{
							"id": "ea49c1b5-321a-c922-4fc1-a87a8988df88",
							"code": "GridDetail_tviz7gfDS_Price",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Price)#",
							"dataValueType": 6,
							"width": 204
						},
						{
							"id": "d6296981-2075-4819-d159-8abaf86d99e6",
							"code": "GridDetail_tviz7gfDS_DiscountPercent",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_DiscountPercent)#",
							"dataValueType": 6
						},
						{
							"id": "1120b001-8d46-76fa-1bc3-2f80ae0bf95f",
							"code": "GridDetail_tviz7gfDS_Amount",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Amount)#",
							"dataValueType": 6
						},
						{
							"id": "0ca45950-6df6-1476-be67-c2c823d6f6f4",
							"code": "GridDetail_tviz7gfDS_PgrConfirmedDeliveryDate",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrConfirmedDeliveryDate)#",
							"dataValueType": 8,
							"width": 216
						},
						{
							"id": "f0387c70-361e-6629-962d-0c9b188c4cca",
							"code": "GridDetail_tviz7gfDS_PgrWidth",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrWidth)#",
							"dataValueType": 4
						},
						{
							"id": "bcede678-28d6-b160-5fdc-9e1952ae9c50",
							"code": "GridDetail_tviz7gfDS_PgrChopLength",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrChopLength)#",
							"dataValueType": 4
						},
						{
							"id": "c10dd345-0497-33e1-ea8b-52193b2fc594",
							"code": "GridDetail_tviz7gfDS_PgrIsCancelled",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrIsCancelled)#",
							"dataValueType": 12,
							"width": 142
						},
						{
							"id": "350713d2-fff2-0c54-8e58-59c4cc9fc171",
							"code": "GridDetail_tviz7gfDS_PgrProjectPriceId",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrProjectPriceId)#",
							"dataValueType": 4
						},
						{
							"id": "10a4046e-1c22-9fdb-9f70-2441f9588269",
							"code": "GridDetail_tviz7gfDS_PgrCustomerProjectId",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrCustomerProjectId)#",
							"dataValueType": 4
						},
						{
							"id": "3760b1c5-98ab-67ce-3815-1cd0f78908d6",
							"code": "GridDetail_tviz7gfDS_PgrOrderVolumeSqm",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrOrderVolumeSqm)#",
							"dataValueType": 32
						},
						{
							"id": "fb6cdde5-c207-96fd-159e-a0a827f98835",
							"code": "GridDetail_tviz7gfDS_PgrReqDeliveryDate",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_PgrReqDeliveryDate)#",
							"dataValueType": 8,
							"width": 226
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "ApprovalsTab",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "remove",
				"name": "DeliveryStatus"
			},
			{
				"operation": "remove",
				"name": "DeliveryType"
			},
			{
				"operation": "remove",
				"name": "PaymentStatus"
			},
			{
				"operation": "remove",
				"name": "PaymentType"
			},
			{
				"operation": "remove",
				"name": "ActualEndDate"
			},
			{
				"operation": "merge",
				"name": "Date",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "AddressFlexContainer"
			},
			{
				"operation": "remove",
				"name": "AccountAddress"
			},
			{
				"operation": "remove",
				"name": "ContactAddress"
			},
			{
				"operation": "merge",
				"name": "InstallmentPlanExpansionPanel",
				"values": {
					"visible": false,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "DocumentsTab",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "Timeline",
				"values": {
					"filterValues": "$Timeline_AllTileFilters",
					"customFilters": []
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Email",
				"values": {
					"filters": "$TimelineTile_Email_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Task",
				"values": {
					"filters": "$TimelineTile_Task_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Call",
				"values": {
					"filters": "$TimelineTile_Call_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Document",
				"values": {
					"filters": "$TimelineTile_Document_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Contract",
				"values": {
					"filters": "$TimelineTile_Contract_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineTile_Invoice",
				"values": {
					"filters": "$TimelineTile_Invoice_Items"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Entity",
				"values": {
					"type": "TimelineFilter_Entity"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Date",
				"values": {
					"type": "TimelineFilter_Date"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_Owner",
				"values": {
					"type": "TimelineFilter_Owner"
				}
			},
			{
				"operation": "merge",
				"name": "TimelineFilter_SystemMessages",
				"values": {
					"type": "TimelineFilter_SystemMessages"
				}
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
				"operation": "merge",
				"name": "CustomerProfileLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(CustomerProfileLabel_caption)#)#",
					"headingLevel": "label"
				}
			},
			{
				"operation": "insert",
				"name": "Input_rg704pi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_PgrCustomerOrderId_fncxiqn",
					"control": "$PDS_PgrCustomerOrderId_fncxiqn",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PgrCurrencyRate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrCurrencyRate_bsiobtl",
					"control": "$PDS_PgrCurrencyRate_bsiobtl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PgrAmountInEuro",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrAmountInEuro_5ptmvkr",
					"control": "$PDS_PgrAmountInEuro_5ptmvkr",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_amxtsuc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Status_vzewx4u",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Status_vzewx4u"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_086g0vs",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_086g0vs_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_amxtsuc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_c3ri1ji",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_Amount_cuqpypq",
					"control": "$PDS_Amount_cuqpypq",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Checkbox_4f30iqm",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_PgrIsCancelled_937hzga",
					"ariaLabel": "",
					"labelPosition": "right",
					"tooltip": "",
					"control": "$PDS_PgrIsCancelled_937hzga",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_2wdyna1",
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
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_hucrqgk",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Contact_32urpab",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Contact_32urpab",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_2wdyna1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_uwc6wje",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_uwc6wje_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_hucrqgk",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2mhimqc",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Owner_qjqokso",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_Owner_qjqokso"
				},
				"parentName": "GridContainer_2wdyna1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_jewh8o2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jewh8o2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2mhimqc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_y9cjglc",
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
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_7piw7o6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_CreatedOn_ztbvjjl",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$PDS_CreatedOn_ztbvjjl"
				},
				"parentName": "GridContainer_y9cjglc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_wzy660n",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_ModifiedOn_71yvx5l",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_ModifiedOn_71yvx5l"
				},
				"parentName": "GridContainer_y9cjglc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_fyb043l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_PgrWorkingDayDate_7k497cc",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "date",
					"control": "$PDS_PgrWorkingDayDate_7k497cc"
				},
				"parentName": "GridContainer_y9cjglc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_xrrfaed",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_PaymentType_g8qb6e4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_PaymentType_g8qb6e4"
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_x2pismq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x2pismq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_xrrfaed",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_3b3f7ut",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_DeliveryAddress_sg9q4k0",
					"control": "$PDS_DeliveryAddress_sg9q4k0",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_a6q034b",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_PgrTotalPrice_nb8nuoo",
					"control": "$PDS_PgrTotalPrice_nb8nuoo",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_ywvsg0l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_DeliveryType_gis4j11",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_DeliveryType_gis4j11"
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_s5zzlta",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_s5zzlta_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ywvsg0l",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_3dmysyn",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_3dmysyn_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_g390hu6",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_Notes_4rhv2a3",
					"control": "$PDS_Notes_4rhv2a3",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "TabContainer_3dmysyn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Lead_h7snn4f",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Order",
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
					"filters": "$TimelineTile_Lead_h7snn4f_Items"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineFilterContainer_5igfrds",
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
			},
			{
				"operation": "move",
				"name": "SideAreaProfileContainer",
				"parentName": "SideContainer",
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
					"PDS_PgrCustomerOrderId_fncxiqn": {
						"modelConfig": {
							"path": "PDS.PgrCustomerOrderId"
						}
					},
					"LookupAttribute_xm7t1f4_List": {
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
					"PDS_Status_vzewx4u": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_Status_vzewx4u_List": {
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
					"PDS_Amount_cuqpypq": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"LookupAttribute_tnq0vc3_List": {
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
					"PDS_DeliveryAddress_sg9q4k0": {
						"modelConfig": {
							"path": "PDS.DeliveryAddress"
						}
					},
					"PDS_ModifiedOn_71yvx5l": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					},
					"PDS_PgrWorkingDayDate_7k497cc": {
						"modelConfig": {
							"path": "PDS.PgrWorkingDayDate"
						}
					},
					"PDS_PgrIsCancelled_937hzga": {
						"modelConfig": {
							"path": "PDS.PgrIsCancelled"
						}
					},
					"PDS_PgrTotalPrice_nb8nuoo": {
						"modelConfig": {
							"path": "PDS.PgrTotalPrice"
						}
					},
					"Timeline_AllTileFilters": {
						"from": [],
						"converter": "crt.ToTileFilterGroup"
					},
					"PDS_Contact_32urpab": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Contact_32urpab_List": {
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
					"PDS_DeliveryType_gis4j11": {
						"modelConfig": {
							"path": "PDS.DeliveryType"
						}
					},
					"PDS_DeliveryType_gis4j11_List": {
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
					"PDS_Owner_qjqokso": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_Owner_qjqokso_List": {
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
					"PDS_PaymentType_g8qb6e4": {
						"modelConfig": {
							"path": "PDS.PaymentType"
						}
					},
					"PDS_PaymentType_g8qb6e4_List": {
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
					"PDS_Notes_4rhv2a3": {
						"modelConfig": {
							"path": "PDS.Notes"
						}
					},
					"PDS_CreatedOn_ztbvjjl": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_PgrCurrencyRate_bsiobtl": {
						"modelConfig": {
							"path": "PDS.PgrCurrencyRate"
						}
					},
					"PDS_PgrAmountInEuro_5ptmvkr": {
						"modelConfig": {
							"path": "PDS.PgrAmountInEuro"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_tviz7gf",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "Unit"
						}
					]
				}
			},
			{
				"operation": "remove",
				"path": [
					"attributes",
					"GridDetail_tviz7gf",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"GridDetail_tviz7gfDS_TotalAmount"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"GridDetail_tviz7gf",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"GridDetail_tviz7gfDS_PgrQuantityOrigin": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrQuantityOrigin"
						}
					},
					"GridDetail_tviz7gfDS_Amount": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.Amount"
						}
					},
					"GridDetail_tviz7gfDS_PgrConfirmedDeliveryDate": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrConfirmedDeliveryDate"
						}
					},
					"GridDetail_tviz7gfDS_PgrWidth": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrWidth"
						}
					},
					"GridDetail_tviz7gfDS_PgrChopLength": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrChopLength"
						}
					},
					"GridDetail_tviz7gfDS_PgrIsCancelled": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrIsCancelled"
						}
					},
					"GridDetail_tviz7gfDS_PgrProjectPriceId": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrProjectPriceId"
						}
					},
					"GridDetail_tviz7gfDS_PgrCustomerProjectId": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrCustomerProjectId"
						}
					},
					"GridDetail_tviz7gfDS_PgrOrderVolumeSqm": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrOrderVolumeSqm"
						}
					},
					"GridDetail_tviz7gfDS_PgrReqDeliveryDate": {
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS.PgrReqDeliveryDate"
						}
					}
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
					"TimelineTile_EmailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_TaskDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Activity"
						}
					},
					"TimelineTile_CallDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Call"
						}
					},
					"TimelineTile_DocumentDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document"
						}
					},
					"TimelineTile_ContractDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract"
						}
					},
					"TimelineTile_InvoiceDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice"
						}
					},
					"TimelineTile_Lead_h7snn4fDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead"
						}
					}
				}
			},
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"GridDetail_tviz7gfDS",
					"config",
					"attributes"
				],
				"properties": [
					"TotalAmount"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"GridDetail_tviz7gfDS",
					"config",
					"attributes"
				],
				"values": {
					"PgrQuantityOrigin": {
						"path": "PgrQuantityOrigin"
					},
					"Amount": {
						"path": "Amount"
					},
					"PgrConfirmedDeliveryDate": {
						"path": "PgrConfirmedDeliveryDate"
					},
					"PgrWidth": {
						"path": "PgrWidth"
					},
					"PgrChopLength": {
						"path": "PgrChopLength"
					},
					"PgrIsCancelled": {
						"path": "PgrIsCancelled"
					},
					"PgrProjectPriceId": {
						"path": "PgrProjectPriceId"
					},
					"PgrCustomerProjectId": {
						"path": "PgrCustomerProjectId"
					},
					"PgrOrderVolumeSqm": {
						"path": "PgrOrderVolumeSqm"
					},
					"PgrReqDeliveryDate": {
						"path": "PgrReqDeliveryDate"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});