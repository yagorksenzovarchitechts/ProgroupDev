define("Orders_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"caption": "#ResourceString(MenuItem_ImportFromExcel_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilterByDate",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilterByOwner",
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
							"code": "PDS_Number",
							"caption": "#ResourceString(PDS_Number)#",
							"dataValueType": 1,
							"width": 259,
							"sticky": true
						},
						{
							"id": "870cdfc0-dc9a-8589-9a1f-f0a768e6e55f",
							"code": "PDS_Date",
							"caption": "#ResourceString(PDS_Date)#",
							"dataValueType": 7,
							"width": 178
						},
						{
							"id": "a14772af-a953-71b5-3db1-9eb0b2a62346",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"width": 232
						},
						{
							"id": "da9c11e5-677a-d2f0-a28f-5c8ffcedda2b",
							"code": "PDS_Contact",
							"caption": "#ResourceString(PDS_Contact)#",
							"dataValueType": 10,
							"width": 169
						},
						{
							"id": "0a482c76-c677-bfb4-9390-9452635f5aed",
							"code": "PDS_Owner",
							"caption": "#ResourceString(PDS_Owner)#",
							"dataValueType": 10,
							"width": 139
						},
						{
							"id": "c3c08e2a-44ac-1f28-3e3c-b882c78b5947",
							"code": "PDS_Amount",
							"caption": "#ResourceString(PDS_Amount)#",
							"dataValueType": 6,
							"width": 136
						},
						{
							"id": "ef7e1934-3f98-a995-4729-95e0da004ef9",
							"code": "PDS_CurrencySymbol",
							"caption": "#ResourceString(PDS_CurrencySymbol)#",
							"dataValueType": 27,
							"width": 159
						}
					]
				}
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
					"PDS_Status"
				]
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
					"Status"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});