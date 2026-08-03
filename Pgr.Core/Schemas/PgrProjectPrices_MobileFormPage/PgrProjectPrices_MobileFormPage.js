{
	"viewConfigDiff": [
		{
			"operation": "insert",
			"name": "PgrName",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.PgrName",
				"control": "$PgrName",
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
				"entitySchemaName": "PgrProjectPrice"
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
				"PgrName": {
					"modelConfig": {
						"path": "PDS.PgrName"
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
							"entitySchemaName": "PgrProjectPrice",
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