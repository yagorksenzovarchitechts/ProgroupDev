define("Accounts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
    "name": "MainFilterContainer",
    "values": {
      "alignItems": "stretch"
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
        "entitySchemaName": null,
        "defaultValue": [],
        "recordsFilter": null
      },
      "_filterOptions": {
        "expose": [],
        "from": "LookupQuickFilterByTag_Value"
      }
    }
  },
  {
    "operation": "merge",
    "name": "TerritoryQuickFilter",
    "values": {
      "config": {
        "caption": "#ResourceString(TerritoryQuickFilter_config_caption)#",
        "hint": "",
        "icon": "webcheck-icon",
        "iconPosition": "left-icon",
        "defaultValue": [],
        "entitySchemaName": "Territory",
        "recordsFilter": null
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "TerritoryQuickFilter_Dashboards",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Dashboards",
                      "filterColumn": "Country.[PgrCountryTerritory:PgrCountry].PgrTerritory"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          },
          {
            "attribute": "TerritoryQuickFilter_DataGrid_0kcsg12",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "DataGrid_0kcsg12",
                      "filterColumn": "Country.[PgrCountryTerritory:PgrCountry].PgrTerritory"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          }
        ],
        "from": "TerritoryQuickFilter_Value"
      },
      "visible": true
    }
  },
  {
    "operation": "merge",
    "name": "SearchFilter",
    "values": {
      "_filterOptions": {
        "expose": [],
        "from": [
          "SearchFilter_SearchValue",
          "SearchFilter_FilteredColumnsGroups"
        ]
      }
    }
  },
  {
    "operation": "merge",
    "name": "FolderTree",
    "values": {
      "_filterOptions": {
        "expose": [],
        "from": [
          "FolderTree_items",
          "FolderTree_favoriteItems",
          "FolderTree_active_folder_id"
        ]
      }
    }
  },
  {
    "operation": "remove",
    "name": "DataTable"
  },
  {
    "operation": "remove",
    "name": "DataTable_AddTagsBulkAction"
  },
  {
    "operation": "remove",
    "name": "DataTable_RemoveTagsBulkAction"
  },
  {
    "operation": "remove",
    "name": "DataTable_ExportToExcelBulkAction"
  },
  {
    "operation": "remove",
    "name": "DataTable_MergeBulkAction"
  },
  {
    "operation": "remove",
    "name": "DataTable_AssignTerritoryBulkAction"
  },
  {
    "operation": "remove",
    "name": "DataTable_DeleteBulkAction"
  },
  {
    "operation": "merge",
    "name": "Dashboards",
    "values": {
      "_designOptions": {
        "entitySchemaName": "Account",
        "dependencies": [],
        "filters": [
          {
            "attribute": "TerritoryQuickFilter_Dashboards",
            "loadOnChange": true
          },
          {
            "attribute": "QuickFilter_5bm0ul6_Dashboards",
            "loadOnChange": true
          },
          {
            "attribute": "QuickFilter_0yd6qle_Dashboards",
            "loadOnChange": true
          },
          {
            "attribute": "QuickFilter_iihiiel_Dashboards",
            "loadOnChange": true
          }
        ]
      }
    }
  },
  {
    "operation": "insert",
    "name": "QuickFilter_0yd6qle",
    "values": {
      "type": "crt.QuickFilter",
      "config": {
        "caption": "#ResourceString(QuickFilter_0yd6qle_config_caption)#",
        "hint": "",
        "icon": "filter-funnel-icon",
        "iconPosition": "left-icon",
        "defaultValue": [
          {
            "value": "03a75490-53e6-df11-971b-001d60e938c6",
            "checkedState": true
          }
        ],
        "entitySchemaName": "AccountType",
        "recordsFilter": null
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "QuickFilter_0yd6qle_Dashboards",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Dashboards",
                      "filterColumn": "[PgrAccountTypesInAccount:PgrAccount].PgrAccountType"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          },
          {
            "attribute": "QuickFilter_0yd6qle_DataGrid_0kcsg12",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "DataGrid_0kcsg12",
                      "filterColumn": "[PgrAccountTypesInAccount:PgrAccount].PgrAccountType"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          }
        ],
        "from": "QuickFilter_0yd6qle_Value"
      },
      "filterType": "lookup",
      "visible": true
    },
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 2
  },
  {
    "operation": "insert",
    "name": "QuickFilter_5bm0ul6",
    "values": {
      "type": "crt.QuickFilter",
      "config": {
        "caption": "#ResourceString(QuickFilter_5bm0ul6_config_caption)#",
        "hint": "",
        "icon": "business-contact-icon",
        "iconPosition": "left-icon",
        "defaultValue": [],
        "entitySchemaName": "Contact",
        "recordsFilter": null
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "QuickFilter_5bm0ul6_Dashboards",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Dashboards",
                      "filterColumn": "PgrSalesDirector"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          },
          {
            "attribute": "QuickFilter_5bm0ul6_DataGrid_0kcsg12",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "DataGrid_0kcsg12",
                      "filterColumn": "PgrSalesDirector"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          }
        ],
        "from": "QuickFilter_5bm0ul6_Value"
      },
      "filterType": "lookup",
      "visible": true
    },
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 4
  },
  {
    "operation": "insert",
    "name": "QuickFilter_iihiiel",
    "values": {
      "type": "crt.QuickFilter",
      "config": {
        "caption": "#ResourceString(QuickFilter_iihiiel_config_caption)#",
        "hint": "",
        "icon": "consultation-icon",
        "iconPosition": "left-icon",
        "defaultValue": [
          {
            "value": "[#currentUserContact#]",
            "checkedState": true
          }
        ],
        "entitySchemaName": "Contact",
        "recordsFilter": null
      },
      "_filterOptions": {
        "expose": [
          {
            "attribute": "QuickFilter_iihiiel_Dashboards",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "Dashboards",
                      "filterColumn": "Owner"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          },
          {
            "attribute": "QuickFilter_iihiiel_DataGrid_0kcsg12",
            "converters": [
              {
                "converter": "crt.QuickFilterAttributeConverter",
                "args": [
                  {
                    "target": {
                      "viewAttributeName": "DataGrid_0kcsg12",
                      "filterColumn": "Owner"
                    },
                    "quickFilterType": "lookup"
                  }
                ]
              }
            ]
          }
        ],
        "from": "QuickFilter_iihiiel_Value"
      },
      "filterType": "lookup",
      "visible": true
    },
    "parentName": "LeftFilterContainerInner",
    "propertyName": "items",
    "index": 5
  },
  {
    "operation": "insert",
    "name": "DataGrid_0kcsg12",
    "values": {
      "type": "crt.DataGrid",
      "features": {
        "hierarchical": {
          "enable": true
        },
        "rows": {
          "selection": {
            "enable": true,
            "multiple": true
          }
        },
        "editable": {
          "enable": false,
          "itemsCreation": false,
          "floatingEditPanel": false
        }
      },
      "items": "$DataGrid_0kcsg12",
      "primaryColumnName": "DataGrid_0kcsg12DS_Id",
      "columns": [
        {
          "id": "f3185bb6-f436-b29b-262e-fd457f10df0c",
          "code": "DataGrid_0kcsg12DS_Name",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_Name)#",
          "dataValueType": 28,
          "sticky": true
        },
        {
          "id": "77fa6f35-d420-598e-e599-aba34e0b7e5c",
          "code": "DataGrid_0kcsg12DS_PgrWepaformName",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_PgrWepaformName)#",
          "dataValueType": 27,
          "width": 192
        },
        {
          "id": "e1038e58-791c-52ce-14ef-97afa6b53fa9",
          "code": "DataGrid_0kcsg12DS_Country",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_Country)#",
          "dataValueType": 10,
          "width": 148
        },
        {
          "id": "b71f5c24-64f3-c8e2-e651-46577c104740",
          "code": "DataGrid_0kcsg12DS_PgrAccountTypesText",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_PgrAccountTypesText)#",
          "dataValueType": 28,
          "width": 220
        },
        {
          "id": "b49ddccf-b083-bf8e-acb7-e7daed7467af",
          "code": "DataGrid_0kcsg12DS_PgrMainPlantLinked",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_PgrMainPlantLinked)#",
          "dataValueType": 10
        },
        {
          "id": "714fecd2-29c4-a45b-76e9-381c7dbd1e6c",
          "code": "DataGrid_0kcsg12DS_Owner",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_Owner)#",
          "dataValueType": 10,
          "width": 201
        },
        {
          "id": "40faed4b-7089-eabc-e810-548494be1bfa",
          "code": "DataGrid_0kcsg12DS_PgrSalesDirector",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_PgrSalesDirector)#",
          "dataValueType": 10,
          "width": 183
        },
        {
          "id": "57312ac4-2fa8-5d6d-0b93-f5b8ad5f470b",
          "code": "DataGrid_0kcsg12DS_PgrCustomerServiceName",
          "caption": "#ResourceString(DataGrid_0kcsg12DS_PgrCustomerServiceName)#",
          "dataValueType": 10
        }
      ],
      "placeholder": false,
      "visible": true,
      "fitContent": true
    },
    "parentName": "ListContainer",
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
      "DataGrid_0kcsg12": {
        "isCollection": true,
        "modelConfig": {
          "path": "DataGrid_0kcsg12DS",
          "filterAttributes": [
            {
              "name": "QuickFilter_0yd6qle_DataGrid_0kcsg12",
              "loadOnChange": true
            },
            {
              "name": "TerritoryQuickFilter_DataGrid_0kcsg12",
              "loadOnChange": true
            },
            {
              "name": "QuickFilter_5bm0ul6_DataGrid_0kcsg12",
              "loadOnChange": true
            },
            {
              "name": "QuickFilter_iihiiel_DataGrid_0kcsg12",
              "loadOnChange": true
            }
          ]
        },
        "viewModelConfig": {
          "attributes": {
            "DataGrid_0kcsg12DS_Name": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.Name"
              }
            },
            "DataGrid_0kcsg12DS_PgrWepaformName": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.PgrWepaformName"
              }
            },
            "DataGrid_0kcsg12DS_Country": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.Country"
              }
            },
            "DataGrid_0kcsg12DS_PgrAccountTypesText": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.PgrAccountTypesText"
              }
            },
            "DataGrid_0kcsg12DS_PgrMainPlantLinked": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.PgrMainPlantLinked"
              }
            },
            "DataGrid_0kcsg12DS_Owner": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.Owner"
              }
            },
            "DataGrid_0kcsg12DS_PgrSalesDirector": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.PgrSalesDirector"
              }
            },
            "DataGrid_0kcsg12DS_PgrCustomerServiceName": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.PgrCustomerServiceName"
              }
            },
            "DataGrid_0kcsg12DS_Id": {
              "modelConfig": {
                "path": "DataGrid_0kcsg12DS.Id"
              }
            }
          }
        }
      }
    }
  },
  {
    "operation": "remove",
    "path": [
      "attributes",
      "Items",
      "viewModelConfig",
      "attributes"
    ],
    "properties": [
      "PDS_PrimaryContact",
      "PDS_Type",
      "PDS_AccountCategory",
      "PDS_Industry",
      "PDS_Web",
      "PDS_CreatedOn",
      "PDS_Tier",
      "PDS_Territory",
      "PDS_Territory_InitialListActions"
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
      "PDS_PgrWepaformName": {
        "modelConfig": {
          "path": "PDS.PgrWepaformName"
        }
      },
      "PDS_PgrMainPlantLinked": {
        "modelConfig": {
          "path": "PDS.PgrMainPlantLinked"
        }
      },
      "PDS_Owner": {
        "modelConfig": {
          "path": "PDS.Owner"
        }
      },
      "PDS_PgrSalesDirector": {
        "modelConfig": {
          "path": "PDS.PgrSalesDirector"
        }
      },
      "PDS_PgrCustomerServiceName": {
        "modelConfig": {
          "path": "PDS.PgrCustomerServiceName"
        }
      },
      "PDS_Parent": {
        "modelConfig": {
          "path": "PDS.Parent"
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
      "filterAttributes": []
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
          "columnName": "Name"
        }
      ]
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "ItemsSorting"
    ],
    "values": {
      "modelConfig": {}
    }
  },
  {
    "operation": "merge",
    "path": [
      "attributes",
      "IsAssignTerritoryVisible"
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
      "DataGrid_0kcsg12DS": {
        "type": "crt.EntityDataSource",
        "scope": "viewElement",
        "config": {
          "entitySchemaName": "Account",
          "loadParameters": {
            "options": {
              "hierarchyConfig": {
                "type": "ClientSide",
                "hierarchicalColumnName": "Parent"
              }
            }
          },
          "attributes": {
            "Name": {
              "path": "Name"
            },
            "PgrWepaformName": {
              "path": "PgrWepaformName"
            },
            "Country": {
              "path": "Country"
            },
            "PgrAccountTypesText": {
              "path": "PgrAccountTypesText"
            },
            "PgrMainPlantLinked": {
              "path": "PgrMainPlantLinked"
            },
            "Owner": {
              "path": "Owner"
            },
            "PgrSalesDirector": {
              "path": "PgrSalesDirector"
            },
            "PgrCustomerServiceName": {
              "path": "PgrCustomerServiceName"
            }
          }
        }
      }
    }
  },
  {
    "operation": "remove",
    "path": [
      "dataSources",
      "PDS",
      "config",
      "attributes"
    ],
    "properties": [
      "PrimaryContact",
      "Type",
      "AccountCategory",
      "Industry",
      "Web",
      "CreatedOn",
      "Tier",
      "Territory"
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
      "PgrWepaformName": {
        "path": "PgrWepaformName"
      },
      "PgrMainPlantLinked": {
        "path": "PgrMainPlantLinked"
      },
      "Owner": {
        "path": "Owner"
      },
      "PgrSalesDirector": {
        "path": "PgrSalesDirector"
      },
      "PgrCustomerServiceName": {
        "path": "PgrCustomerServiceName"
      },
      "Parent": {
        "path": "Parent"
      }
    }
  }
]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{
			"usr.ToAccountTypeChips": function(value) {
				if (!value) {
					return [];
				}
				var colorMap = {
					"Customer": "#98CB00",
					"Subgroup": "#46BCEC",
					"Our company": "#7848EE",
					"Competitor": "#FF6534",
					"Group": "#F9307F"
				};
				return value.split(",").map(function(name) {
					var trimmed = name.trim();
					return {
						caption: trimmed,
						color: colorMap[trimmed] || "#B0B0B0"
					};
				}).filter(function(item) {
					return item.caption.length > 0;
				});
			}
		}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});