define("Contracts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "InactiveContractsQuickFilter"
			},
			{
				"operation": "remove",
				"name": "DurationQuickFilter"
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Number",
							"caption": "#ResourceString(PDS_Number)#",
							"dataValueType": 1,
							"width": 208
						},
						{
							"id": "2ed8aa30-bbc7-a3d6-436e-1c2bc4ee4532",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"width": 150
						},
						{
							"id": "bd936493-b219-e13b-636c-ce455c1e079e",
							"code": "PDS_State",
							"caption": "#ResourceString(PDS_State)#",
							"dataValueType": 10
						},
						{
							"id": "f2a3b40f-1b70-1281-d7a4-934694a48871",
							"code": "PDS_StartDate",
							"caption": "#ResourceString(PDS_StartDate)#",
							"dataValueType": 8,
							"width": 130
						},
						{
							"id": "21c4a79b-584e-0001-e681-b68a811dcc12",
							"code": "PDS_EndDate",
							"caption": "#ResourceString(PDS_EndDate)#",
							"dataValueType": 8,
							"width": 124
						},
						{
							"id": "6cfefe20-30ee-12bd-9601-0a5f456e4a82",
							"code": "PDS_PgrNoticePeriodDays",
							"caption": "#ResourceString(PDS_PgrNoticePeriodDays)#",
							"dataValueType": 4,
							"width": 212
						},
						{
							"id": "3ea73c83-f3a2-db26-7582-79811b7f3435",
							"code": "PDS_PgrContractRenewalReminderDate",
							"caption": "#ResourceString(PDS_PgrContractRenewalReminderDate)#",
							"dataValueType": 8,
							"width": 280
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ValidFromQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(ValidFromQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"showTime": false,
						"showFiscalPeriods": false
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ValidFromQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "StartDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "ValidFromQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ValidToQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(ValidToQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"showTime": false,
						"showFiscalPeriods": false
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ValidToQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "EndDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "ValidToQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(AccountQuickFilter_config_caption)#",
						"hint": "",
						"icon": "contact-leads-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Account",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AccountQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Account"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "AccountQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"properties": [
					"PDS_Type",
					"PDS_Owner"
				]
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_EndDate": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"PDS_PgrNoticePeriodDays": {
						"modelConfig": {
							"path": "PDS.PgrNoticePeriodDays"
						}
					},
					"PDS_PgrContractRenewalReminderDate": {
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
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "AccountQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "ValidFromQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "ValidToQuickFilter_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "State"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"properties": [
					"Type",
					"Owner"
				]
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"EndDate": {
						"path": "EndDate"
					},
					"PgrNoticePeriodDays": {
						"path": "PgrNoticePeriodDays"
					},
					"PgrContractRenewalReminderDate": {
						"path": "PgrContractRenewalReminderDate"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"config": {
						"attributes": {
							"State": {},
							"EndDate": {
								"path": "EndDate"
							},
							"PgrNoticePeriodDays": {
								"path": "PgrNoticePeriodDays"
							},
							"PgrContractRenewalReminderDate": {
								"path": "PgrContractRenewalReminderDate"
							}
						}
					}
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});