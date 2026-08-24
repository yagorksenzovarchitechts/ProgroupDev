define("PgrMsTeamsSetupPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#ResourceString(PageTitle_caption)#",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "RequeueQueueItemButton"
			},
			{
				"operation": "remove",
				"name": "PostponeQueueItemButton"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "PgrSetupGridContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(32px, max-content)",
					"gap": {
						"columnGap": "large",
						"rowGap": "large"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrConnectionStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(PgrConnectionStatusLabel)#",
					"labelPosition": "auto",
					"control": "$PgrConnectionStatus",
					"multiline": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PgrSetupGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrSetupButtonContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "small",
					"justifyContent": "start",
					"alignItems": "center",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true,
					"visible": true
				},
				"parentName": "PgrSetupGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PgrConnectServiceAccountButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PgrConnectServiceAccountButtonCaption)#",
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"disabled": "$PgrSetupInProgress",
					"clickMode": "default",
					"clicked": {
						"request": "pgr.ConnectMsGraphServiceAccount"
					}
				},
				"parentName": "PgrSetupButtonContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrCheckConnectionButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PgrCheckConnectionButtonCaption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "only-text",
					"disabled": "$PgrSetupInProgress",
					"clickMode": "default",
					"clicked": {
						"request": "pgr.CheckMsTeamsConnection"
					}
				},
				"parentName": "PgrSetupButtonContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": ["attributes"],
				"values": {
					"PgrConnectionStatus": { "value": null },
					"PgrSetupInProgress": { "value": false }
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					const result = await next?.handle(request);
					await request.$context.executeRequest({
						type: "pgr.CheckMsTeamsConnection",
						$context: request.$context,
						silent: true
					});
					return result;
				}
			},
			{
				request: "pgr.CheckMsTeamsConnection",
				handler: async (request, next) => {
					const context = request.$context;

					const showMessage = async (message) => {
						await context.executeRequest({
							type: "crt.ShowDialogRequest",
							$context: context,
							dialogConfig: {
								data: {
									message: message,
									actions: [
										{ key: "ok", config: { color: "primary", caption: "OK" } }
									]
								}
							}
						});
					};

					context.PgrSetupInProgress = true;
					try {
						const http = new sdk.HttpClientService();
						const response = await http.post(
							"rest/PgrMsTeamsMeetingService/GetDelegatedSignInStatus", {});
						const result = response && response.body;
						if (!result || result.success === false) {
							const reason = (result && result.errorInfo && result.errorInfo.message) ||
								("HTTP " + (response && response.status));
							context.PgrConnectionStatus = reason;
							if (!request.silent) {
								await showMessage(reason);
							}
							return;
						}
						if (result.isConnected) {
							context.PgrConnectionStatus =
								(await context.Resources.Strings.PgrStatusConnectedMessage) +
								" " + (result.signedInAs || "");
						} else {
							context.PgrConnectionStatus =
								(await context.Resources.Strings.PgrStatusNotConnectedMessage) +
								" " + (result.message || "");
						}
					} catch (e) {
						context.PgrConnectionStatus = e.message;
						if (!request.silent) {
							await showMessage(e.message);
						}
					} finally {
						context.PgrSetupInProgress = false;
					}
					return next?.handle(request);
				}
			},
			{
				request: "pgr.ConnectMsGraphServiceAccount",
				handler: async (request, next) => {
					const context = request.$context;

					const showMessage = async (message) => {
						await context.executeRequest({
							type: "crt.ShowDialogRequest",
							$context: context,
							dialogConfig: {
								data: {
									message: message,
									actions: [
										{ key: "ok", config: { color: "primary", caption: "OK" } }
									]
								}
							}
						});
					};

					context.PgrSetupInProgress = true;
					try {
						const http = new sdk.HttpClientService();
						const startResponse = await http.post(
							"rest/PgrMsTeamsMeetingService/StartDelegatedSignIn", {});
						const start = startResponse && startResponse.body;
						if (!start || start.success === false) {
							const reason = (start && start.errorInfo && start.errorInfo.message) ||
								("HTTP " + (startResponse && startResponse.status));
							await showMessage(
								await context.Resources.Strings.PgrConnectAccountFailedMessage +
								" " + reason);
							return;
						}

						try {
							window.open(start.verificationUrl, "_blank");
						} catch (e) {
						}

						const prompt = (await context.Resources.Strings.PgrConnectAccountPromptMessage)
							.replace("{0}", start.verificationUrl)
							.replace("{1}", start.userCode);
						await showMessage(prompt);

						const completeResponse = await http.post(
							"rest/PgrMsTeamsMeetingService/CompleteDelegatedSignIn", {
								handle: start.handle
							});
						const complete = completeResponse && completeResponse.body;
						if (!complete || complete.success === false) {
							const reason = (complete && complete.errorInfo &&
								complete.errorInfo.message) ||
								("HTTP " + (completeResponse && completeResponse.status));
							await showMessage(
								await context.Resources.Strings.PgrConnectAccountFailedMessage +
								" " + reason);
							return;
						}
						await showMessage(
							await context.Resources.Strings.PgrConnectAccountSuccessMessage +
							" " + (complete.signedInAs || ""));
					} catch (e) {
						await showMessage(
							await context.Resources.Strings.PgrConnectAccountFailedMessage +
							" " + e.message);
					} finally {
						context.PgrSetupInProgress = false;
					}
					await context.executeRequest({
						type: "pgr.CheckMsTeamsConnection",
						$context: context,
						silent: true
					});
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
