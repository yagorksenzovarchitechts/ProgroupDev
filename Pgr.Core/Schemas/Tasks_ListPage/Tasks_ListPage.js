define("Tasks_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"caption": "#ResourceString(MenuItem_ImportFromExcel_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_Employee",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_CanceledTasks",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "QuickFilter_MyTasks",
				"values": {
					"config": {
						"caption": "#ResourceString(QuickFilter_MyTasks_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
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
							"code": "PDS_Title",
							"caption": "#ResourceString(PDS_Title)#",
							"dataValueType": 1,
							"width": 418
						},
						{
							"id": "eff5bc92-7274-950f-cccb-b9b3919cc191",
							"code": "PDS_ActivityCategory",
							"caption": "#ResourceString(PDS_ActivityCategory)#",
							"dataValueType": 10,
							"width": 217
						},
						{
							"id": "aea2799b-a772-561b-859b-da43cb66917c",
							"code": "PDS_Owner",
							"caption": "#ResourceString(PDS_Owner)#",
							"dataValueType": 10,
							"width": 199
						},
						{
							"id": "370392a6-520b-1fab-3b57-ce78fed6d3c7",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "eb0732b2-f37b-0860-1fad-f28e4078fc93",
							"code": "PDS_StartDate",
							"caption": "#ResourceString(PDS_StartDate)#",
							"dataValueType": 7
						},
						{
							"id": "cc4f048c-ecaa-a807-43f3-7e65a271b313",
							"code": "PDS_DueDate",
							"caption": "#ResourceString(PDS_DueDate)#",
							"dataValueType": 7,
							"width": 246
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
					"PDS_DurationInMnutesAndHours",
					"PDS_ShowInScheduler"
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
					"DurationInMnutesAndHours",
					"ShowInScheduler"
				]
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});