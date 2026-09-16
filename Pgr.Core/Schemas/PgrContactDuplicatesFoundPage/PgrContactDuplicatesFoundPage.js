define("PgrContactDuplicatesFoundPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "PgrContactDuplicatesFoundPageStyles"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk, stylesModule)/**SCHEMA_ARGS*/ {

	async function loadContactRows(ids) {
		const loadedRows = await Promise.all(ids.map(async (id) => {
			const contactModel = await sdk.Model.create("Contact");
			const filters = new sdk.FilterGroup();
			filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", id);
			const items = await contactModel.load({
				attributes: ["Name", "CreatedOn"],
				parameters: [{type: sdk.ModelParameterType.Filter, value: filters}]
			});
			return (items && items[0]) ? {Id: id, Name: items[0].Name, CreatedOn: items[0].CreatedOn} : null;
		}));
		return loadedRows.filter((row) => row !== null);
	}

	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#ResourceString(PgrPageTitle_caption)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"caption": "#ResourceString(PgrCancelButtonCaption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "usr.PgrCloseDialog"
					},
					"color": "warn",
					"caption": "#ResourceString(PgrSaveAnywayButtonCaption)#"
				}
			},
			{
				"operation": "move",
				"name": "SaveButton",
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrDuplicatesCounterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "large",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "flex-end",
					"justifyContent": "end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PgrDuplicatesHint",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(PgrDuplicatesHintCaption)#",
					"labelType": "caption",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PgrFoundRecords_Caption",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(PgrFoundRecordsCaption)#",
					"labelType": "caption",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "PgrDuplicatesCounterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrFoundRecords_Value",
				"values": {
					"type": "crt.Label",
					"caption": "$PgrDuplicatesCount",
					"labelType": "caption-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#0B8500",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "PgrDuplicatesCounterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PgrDuplicatesDataGrid",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"headerToolbarItems": [],
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						},
						"columns": {
							"sorting": true,
							"dragAndDrop": false,
							"adding": false,
							"toolbar": false
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true,
								"selectAll": true
							},
							"toolbar": true
						}
					},
					"columns": [
						{
							"id": "0c8777e9-0f6a-e5b4-c1eb-c6ffc4eb0b66",
							"code": "PgrDuplicatesRowsDS_Name",
							"caption": "#ResourceString(PgrDuplicatesRowsDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "7a9b15c9-74e9-bfd7-cd78-460b0525a5b7",
							"code": "PgrDuplicatesRowsDS_Email",
							"caption": "#ResourceString(PgrDuplicatesRowsDS_Email)#",
							"dataValueType": 45
						},
						{
							"id": "e6bad094-2547-b096-b5ee-6a9f9e90f454",
							"code": "PgrDuplicatesRowsDS_CreatedOn",
							"caption": "#ResourceString(PgrDuplicatesRowsDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"items": "$PgrDuplicatesRows",
					"primaryColumnName": "PgrDuplicatesRowsDS_Id",
					"selectionState": "$PgrDuplicatesRows_SelectionState",
					"visible": true,
					"fitContent": true,
					"bulkActions": [],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(PgrSetAsMainButtonCaption)#",
							"icon": "star-icon",
							"visible": true,
							"clicked": {
								"request": "usr.PgrSetAsMainRow",
								"params": {
									"itemsAttributeName": "PgrDuplicatesRows",
									"recordId": "$PgrDuplicatesRows.PgrDuplicatesRowsDS_Id"
								}
							}
						}
					]
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MergeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PgrMergeButtonCaption)#",
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default",
					"visible": true,
					"disabled": "$PgrMergeDisabled",
					"clicked": {
						"request": "usr.PgrMergeSelected"
					}
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PgrDuplicatesData": {
						"modelConfig": {
							"path": "PageParameters.PgrDuplicatesData"
						},
						"change": {
							"request": "usr.PgrFillDuplicatesTable"
						}
					},
					"DialogId": {
						"modelConfig": {
							"path": "PageParameters.DialogId"
						}
					},
					"PgrDuplicatesRows": {
						"isCollection": true,
						"modelConfig": {
							"path": "PgrDuplicatesRowsDS",
							"filterAttributes": [
								{
									"name": "PgrDuplicatesRows_Filter",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"PgrDuplicatesRowsDS_Name": {
									"modelConfig": {
										"path": "PgrDuplicatesRowsDS.Name"
									}
								},
								"PgrDuplicatesRowsDS_Email": {
									"modelConfig": {
										"path": "PgrDuplicatesRowsDS.Email"
									}
								},
								"PgrDuplicatesRowsDS_CreatedOn": {
									"modelConfig": {
										"path": "PgrDuplicatesRowsDS.CreatedOn"
									}
								},
								"PgrDuplicatesRowsDS_Id": {
									"modelConfig": {
										"path": "PgrDuplicatesRowsDS.Id"
									}
								}
							}
						}
					},
					"PgrDuplicatesRows_Filter": {
						"value": null
					},
					"PgrManualPrimaryId": {
						"value": null
					},
					"PgrEffectivePrimaryId": {
						"value": null
					},
					"PgrDuplicatesRows_SelectionState": {
						"value": null,
						"change": {
							"request": "usr.PgrUpdateMergeButtonState"
						},
						"modelConfig": {}
					},
					"PgrMergeDisabled": {
						"value": true
					},
					"PgrDuplicatesCount": {
						"value": 0
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PgrDuplicatesRowsDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Contact",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"Email": {
										"path": "Email"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					stylesModule.ensureInjected();
					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrUpdateMergeButtonState",
				handler: async (request, next) => {
					const selectionState = await request.$context.PgrDuplicatesRows_SelectionState;
					const selectedIds = (selectionState && selectionState.selected) || [];
					request.$context.PgrMergeDisabled = selectedIds.length === 0;
					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrSetAsMainRow",
				handler: async (request, next) => {
					const context = request.$context;
					const recordId = request.recordId;
					if (recordId) {
						context.PgrManualPrimaryId = recordId;
						context.PgrEffectivePrimaryId = recordId;
						stylesModule.setHighlightedRowId(recordId);

						const successMessage = await context.Resources.Strings.PgrSetAsMainConfirmationMessagePrefix;
						const okCaption = await context.Resources.Strings.PgrSetAsMainOkButtonCaption;
						await context.executeRequest({
							type: "crt.ShowDialogRequest",
							$context: context,
							dialogConfig: {
								data: {
									message: successMessage,
									actions: [
										{key: "ok", config: {color: "primary", caption: okCaption}}
									]
								}
							}
						});
					}
					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrFillDuplicatesTable",
				handler: async (request, next) => {
					const context = request.$context;
					const ids = (await context.PgrDuplicatesData) || [];
					context.PgrDuplicatesCount = ids.length;
					const filter = new sdk.FilterGroup();
					filter.addPrimarySchemaColumnInFilter(ids);
					context.PgrDuplicatesRows_Filter = filter;

					context.PgrManualPrimaryId = null;

					const rows = ids.length ? await loadContactRows(ids) : [];
					let defaultPrimaryId = null;
					if (rows.length) {
						const sortedRows = [...rows].sort((a, b) =>
							new Date(a.CreatedOn).getTime() - new Date(b.CreatedOn).getTime());
						defaultPrimaryId = sortedRows[0].Id;
					}
					context.PgrEffectivePrimaryId = defaultPrimaryId;
					stylesModule.setHighlightedRowId(defaultPrimaryId);

					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrCloseDialog",
				handler: async (request, next) => {
					await sdk.HandlerChainService.instance.process({
						type: "crt.ClosePageRequest",
						result: {action: "save"},
						$context: request.$context,
						scopes: request.scopes
					});
					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrMergeSelected",
				handler: async (request, next) => {
					const context = request.$context;
					const selectionState = await context.PgrDuplicatesRows_SelectionState;
					const selectedIds = (selectionState && selectionState.selected) || [];
					if (!selectedIds.length) {
						return await next?.handle(request);
					}

					const rows = await loadContactRows(selectedIds);
					if (!rows.length) {
						return await next?.handle(request);
					}
					const manualPrimaryId = await context.PgrManualPrimaryId;
					let primary;
					let others;
					if (manualPrimaryId && rows.some((row) => row.Id === manualPrimaryId)) {
						primary = rows.find((row) => row.Id === manualPrimaryId);
						others = rows.filter((row) => row.Id !== manualPrimaryId);
					} else {
						const sortedRows = [...rows].sort((a, b) =>
							new Date(a.CreatedOn).getTime() - new Date(b.CreatedOn).getTime());
						primary = sortedRows[0];
						others = sortedRows.slice(1);
					}

					const formatRow = (row) => {
						const createdOnLabel = row.CreatedOn ? new Date(row.CreatedOn).toLocaleString() : "";
						return createdOnLabel ? `${row.Name} (${createdOnLabel})` : row.Name;
					};
					const prefix = await context.Resources.Strings.PgrMergeConfirmMessagePrefix;
					const suffix = await context.Resources.Strings.PgrMergeConfirmMessageSuffix;
					const newRecordLabel = await context.Resources.Strings.PgrMergeNewRecordLabel;
					const confirmCaption = await context.Resources.Strings.PgrMergeConfirmButton;
					const cancelCaption = await context.Resources.Strings.PgrMergeConfirmCancelButton;
					const removedLabels = others.map(formatRow);
					removedLabels.push(newRecordLabel);
					const message = `${prefix}${formatRow(primary)}${suffix}${removedLabels.join("; ")}`;

					const actionKey = await context.executeRequest({
						type: "crt.ShowDialogRequest",
						$context: context,
						dialogConfig: {
							data: {
								message: message,
								actions: [
									{key: "confirm", config: {color: "primary", caption: confirmCaption}},
									{key: "cancel", config: {caption: cancelCaption}}
								]
							}
						}
					});
					if (actionKey !== "confirm") {
						return await next?.handle(request);
					}

					await sdk.HandlerChainService.instance.process({
						type: "crt.ClosePageRequest",
						result: {action: "merge", primaryId: primary.Id, otherIds: others.map((row) => row.Id)},
						$context: context,
						scopes: request.scopes
					});
					return await next?.handle(request);
				}
			},
			{
				request: "usr.PgrReturnResult",
				handler: async (request, next) => {
					const event = new CustomEvent("pgr-contact-duplicates-result-event", {
						detail: {
							dialogId: await request.$context.DialogId,
							result: request.result
						}
					});
					window.dispatchEvent(event);
				}
			},
			{
				request: "crt.ClosePageRequest",
				handler: async (request, next) => {
					await sdk.HandlerChainService.instance.process({
						type: "usr.PgrReturnResult",
						result: request.result || {action: "cancel"},
						$context: request.$context,
						scopes: request.scopes
					});
					return await next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});