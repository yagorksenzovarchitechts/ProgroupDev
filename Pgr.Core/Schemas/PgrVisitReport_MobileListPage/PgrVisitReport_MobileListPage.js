 {
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"rootSchemaName": "PgrVisitReport"
			}
		},
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"caption": "Folders"
			}
		},
		{
			"operation": "merge",
			"name": "ListItem",
			"values": {
				"title": "$PDS_PgrNumber",
				"body": [
					{
						"value": "$PDS_CreatedOn"
					},
					{
						"value": "$PDS_CreatedBy"
					}
				]
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": ["attributes", "Items", "viewModelConfig", "attributes"],
			"values": {
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"PDS_PgrNumber": {
					"modelConfig": {
						"path": "PDS.PgrNumber"
					}
				},
				"PDS_CreatedOn": {
					"modelConfig": {
						"path": "PDS.CreatedOn"
					}
				},
				"PDS_CreatedBy": {
					"modelConfig": {
						"path": "PDS.CreatedBy"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": ["dataSources", "PDS", "config"],
			"values": {
				"entitySchemaName": "PgrVisitReport"
			}
		}
	]
}
 