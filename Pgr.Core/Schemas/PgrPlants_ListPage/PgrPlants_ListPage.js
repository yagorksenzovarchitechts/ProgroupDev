define("PgrPlants_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PgrPlant"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "PgrPlant"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_PgrName",
							"caption": "#ResourceString(PDS_PgrName)#",
							"dataValueType": 1,
							"width": 150
						},
						{
							"id": "b6b069c8-1717-ce0b-5754-4c82b3500596",
							"code": "PDS_PgrCountry",
							"caption": "#ResourceString(PDS_PgrCountry)#",
							"dataValueType": 10
						},
						{
							"id": "f3d2373f-9500-446a-4602-65eb40e30aa0",
							"code": "PDS_PgrCity",
							"caption": "#ResourceString(PDS_PgrCity)#",
							"dataValueType": 28
						},
						{
							"id": "5a6fd1fa-7e1b-1744-7b1f-e4adb2bb7aa2",
							"code": "PDS_PgrWorkingWidth",
							"caption": "#ResourceString(PDS_PgrWorkingWidth)#",
							"dataValueType": 27,
							"width": 160
						},
						{
							"id": "c949a569-d54c-d67c-ca94-2ebba558876d",
							"code": "PDS_PgrFlute",
							"caption": "#ResourceString(PDS_PgrFlute)#",
							"dataValueType": 27,
							"width": 178
						},
						{
							"id": "e2fcf40d-7cde-f7fa-a15c-4f7278824f60",
							"code": "PDS_PgrHighRack",
							"caption": "#ResourceString(PDS_PgrHighRack)#",
							"dataValueType": 12,
							"width": 171
						},
						{
							"id": "9b6db7a7-9d85-744b-e61c-29a525b4daf8",
							"code": "PDS_PgrWorkShiftModel",
							"caption": "#ResourceString(PDS_PgrWorkShiftModel)#",
							"dataValueType": 10,
							"width": 170
						},
						{
							"id": "567cf183-5cfa-47c1-80a7-26d8015a7a5c",
							"code": "PDS_PgrNrOfWalls",
							"caption": "#ResourceString(PDS_PgrNrOfWalls)#",
							"dataValueType": 10,
							"width": 161
						},
						{
							"id": "8d787e1b-8010-c3d5-64d4-e1f5e5c3e210",
							"code": "PDS_PgrPackagingParkCustomer1",
							"caption": "#ResourceString(PDS_PgrPackagingParkCustomer1)#",
							"dataValueType": 10,
							"width": 238
						},
						{
							"id": "65078fad-aaa3-d8a5-3da3-061e0ec67961",
							"code": "PDS_PgrPackagingParkCustomer2",
							"caption": "#ResourceString(PDS_PgrPackagingParkCustomer2)#",
							"dataValueType": 10,
							"width": 242
						},
						{
							"id": "c797903c-42c2-dbab-9ed0-b0166cb50559",
							"code": "PDS_PgrYear",
							"caption": "#ResourceString(PDS_PgrYear)#",
							"dataValueType": 10,
							"width": 208
						},
						{
							"id": "c555d521-a8b7-73df-5b01-2cc5b4d35326",
							"code": "PDS_PgrPlantNumber",
							"caption": "#ResourceString(PDS_PgrPlantNumber)#",
							"dataValueType": 4,
							"width": 153
						}
					]
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "PgrPlant",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_PgrName": {
						"modelConfig": {
							"path": "PDS.PgrName"
						}
					},
					"PDS_PgrCountry": {
						"modelConfig": {
							"path": "PDS.PgrCountry"
						}
					},
					"PDS_PgrCity": {
						"modelConfig": {
							"path": "PDS.PgrCity"
						}
					},
					"PDS_PgrWorkingWidth": {
						"modelConfig": {
							"path": "PDS.PgrWorkingWidth"
						}
					},
					"PDS_PgrFlute": {
						"modelConfig": {
							"path": "PDS.PgrFlute"
						}
					},
					"PDS_PgrHighRack": {
						"modelConfig": {
							"path": "PDS.PgrHighRack"
						}
					},
					"PDS_PgrWorkShiftModel": {
						"modelConfig": {
							"path": "PDS.PgrWorkShiftModel"
						}
					},
					"PDS_PgrNrOfWalls": {
						"modelConfig": {
							"path": "PDS.PgrNrOfWalls"
						}
					},
					"PDS_PgrPackagingParkCustomer1": {
						"modelConfig": {
							"path": "PDS.PgrPackagingParkCustomer1"
						}
					},
					"PDS_PgrPackagingParkCustomer2": {
						"modelConfig": {
							"path": "PDS.PgrPackagingParkCustomer2"
						}
					},
					"PDS_PgrYear": {
						"modelConfig": {
							"path": "PDS.PgrYear"
						}
					},
					"PDS_PgrPlantNumber": {
						"modelConfig": {
							"path": "PDS.PgrPlantNumber"
						}
					}
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
							"columnName": "PgrName"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "PgrPlant",
					"attributes": {
						"PgrName": {
							"path": "PgrName"
						},
						"PgrCountry": {
							"path": "PgrCountry"
						},
						"PgrCity": {
							"path": "PgrCity"
						},
						"PgrWorkingWidth": {
							"path": "PgrWorkingWidth"
						},
						"PgrFlute": {
							"path": "PgrFlute"
						},
						"PgrHighRack": {
							"path": "PgrHighRack"
						},
						"PgrWorkShiftModel": {
							"path": "PgrWorkShiftModel"
						},
						"PgrNrOfWalls": {
							"path": "PgrNrOfWalls"
						},
						"PgrPackagingParkCustomer1": {
							"path": "PgrPackagingParkCustomer1"
						},
						"PgrPackagingParkCustomer2": {
							"path": "PgrPackagingParkCustomer2"
						},
						"PgrYear": {
							"path": "PgrYear"
						},
						"PgrPlantNumber": {
							"path": "PgrPlantNumber"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});