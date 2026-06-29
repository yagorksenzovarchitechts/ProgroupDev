{
	"viewConfigDiff": [
		{
			"operation": "insert",
			"name": "PgrNumber",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.PgrNumber",
				"control": "$PgrNumber",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "above"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "merge",
			"name": "Feed",
			"values": {
				"dataSourceName": "PDS",
				"entitySchemaName": "PgrVisitReport"
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"PgrNumber": {
					"modelConfig": {
						"path": "PDS.PgrNumber"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "PgrVisitReport",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				},
				"primaryDataSourceName": "PDS"
			}
		}
	]
}