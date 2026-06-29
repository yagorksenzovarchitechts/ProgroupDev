define("Leads_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "LeadTag",
						"defaultValue": null,
						"recordsFilter": null
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "TerritoryQuickFilter",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_LeadName",
							"caption": "#ResourceString(PDS_LeadName)#",
							"dataValueType": 1,
							"sticky": true,
							"width": 383
						},
						{
							"id": "6e13f682-17cc-cdbf-3ff9-9062bb82b731",
							"code": "PDS_QualifyStatus",
							"caption": "#ResourceString(PDS_QualifyStatus)#",
							"dataValueType": 10,
							"width": 259
						},
						{
							"id": "9b3af8ec-447b-88b4-21f2-e47337695031",
							"code": "PDS_QualifiedContact",
							"caption": "#ResourceString(PDS_QualifiedContact)#",
							"dataValueType": 10,
							"width": 219
						},
						{
							"id": "903980ab-3452-6f78-7083-11a61a7c2994",
							"code": "PDS_QualifiedAccount",
							"caption": "#ResourceString(PDS_QualifiedAccount)#",
							"dataValueType": 10,
							"width": 207
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilter_zked60v",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_zked60v_config_caption)#",
						"hint": "",
						"icon": "filter-funnel-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "QualifyStatus",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_zked60v_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "QualifyStatus"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_zked60v_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 4
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
					"PDS_Status",
					"PDS_LeadTypeDetails",
					"PDS_CreatedOn",
					"PDS_Territory",
					"PDS_Territory_InitialListActions"
				]
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
							"name": "QuickFilterByDate_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilterByOwner_Items",
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
							"name": "TerritoryQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_zked60v_Items",
							"loadOnChange": true
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
					"Status",
					"LeadTypeDetails",
					"CreatedOn",
					"Territory"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});