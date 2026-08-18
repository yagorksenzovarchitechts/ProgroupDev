define("Contacts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "PgrTeamsMeetingTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(PgrTeamsMeetingTabCaption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "PgrTeamsMeetingGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "large"
					}
				},
				"parentName": "PgrTeamsMeetingTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrMeetingSubject",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(PgrMeetingSubjectLabel)#",
					"labelPosition": "auto",
					"control": "$PgrMeetingSubject",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrMeetingStart",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "#ResourceString(PgrMeetingStartLabel)#",
					"labelPosition": "auto",
					"pickerType": "datetime",
					"control": "$PgrMeetingStart",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PgrMeetingEnd",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "#ResourceString(PgrMeetingEndLabel)#",
					"labelPosition": "auto",
					"pickerType": "datetime",
					"control": "$PgrMeetingEnd",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PgrTeamsMeetingButtonContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"fitContent": true
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PgrCreateTeamsMeetingButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PgrCreateTeamsMeetingButtonCaption)#",
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"disabled": "$PgrMeetingInProgress",
					"clickMode": "default",
					"clicked": {
						"request": "pgr.CreateTeamsMeeting"
					}
				},
				"parentName": "PgrTeamsMeetingButtonContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PgrCreateTeamsMeetingDelegatedButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PgrCreateTeamsMeetingDelegatedButtonCaption)#",
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"disabled": "$PgrMeetingInProgress",
					"clickMode": "default",
					"clicked": {
						"request": "pgr.CreateTeamsMeetingDelegated"
					}
				},
				"parentName": "PgrTeamsMeetingButtonContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PgrMeetingJoinUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(PgrMeetingJoinUrlLabel)#",
					"labelPosition": "auto",
					"control": "$PgrMeetingJoinUrl",
					"readonly": true,
					"visible": "$PgrMeetingJoinUrlVisible",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PgrConnectServiceAccountButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(PgrConnectServiceAccountButtonCaption)#",
					"color": "default",
					"size": "medium",
					"iconPosition": "only-text",
					"disabled": "$PgrMeetingInProgress",
					"clickMode": "default",
					"clicked": {
						"request": "pgr.ConnectMsGraphServiceAccount"
					}
				},
				"parentName": "PgrTeamsMeetingGridContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": ["attributes"],
				"values": {
					"PgrMeetingSubject": { "value": null },
					"PgrMeetingStart": { "value": null },
					"PgrMeetingEnd": { "value": null },
					"PgrMeetingJoinUrl": { "value": null },
					"PgrMeetingJoinUrlVisible": { "value": false },
					"PgrMeetingInProgress": { "value": false }
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "pgr.CreateTeamsMeeting",
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

					// Graph pairs a literal date/time with a time zone name, so the slot travels
					// as wall-clock text; converting to UTC here would shift the meeting.
					const toWallClock = (value) => {
						const pad = (part) => String(part).padStart(2, "0");
						const date = new Date(value);
						return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" +
							pad(date.getDate()) + "T" + pad(date.getHours()) + ":" +
							pad(date.getMinutes()) + ":00";
					};

					const subject = await context.PgrMeetingSubject;
					const start = await context.PgrMeetingStart;
					const end = await context.PgrMeetingEnd;

					if (!subject || !start || !end) {
						await showMessage(await context.Resources.Strings.PgrMeetingFillFieldsMessage);
						return;
					}

					context.PgrMeetingInProgress = true;
					try {
						const http = new sdk.HttpClientService();
						const response = await http.post("rest/PgrMsTeamsMeetingService/CreateMeeting", {
							contactId: await context.Id,
							subject: subject,
							startDateTime: toWallClock(start),
							endDateTime: toWallClock(end)
						});
						const result = response && response.body;
						if (!result || result.success === false) {
							const reason = (result && result.errorInfo && result.errorInfo.message) ||
								("HTTP " + (response && response.status));
							await showMessage(
								await context.Resources.Strings.PgrMeetingFailedMessage + " " + reason);
							return;
						}
						context.PgrMeetingJoinUrl = result.joinUrl;
						context.PgrMeetingJoinUrlVisible = true;
						await showMessage(await context.Resources.Strings.PgrMeetingCreatedMessage);
					} catch (e) {
						await showMessage(
							await context.Resources.Strings.PgrMeetingFailedMessage + " " + e.message);
					} finally {
						context.PgrMeetingInProgress = false;
					}
					return next?.handle(request);
				}
			},
			{
				request: "pgr.CreateTeamsMeetingDelegated",
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

					const toWallClock = (value) => {
						const pad = (part) => String(part).padStart(2, "0");
						const date = new Date(value);
						return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" +
							pad(date.getDate()) + "T" + pad(date.getHours()) + ":" +
							pad(date.getMinutes()) + ":00";
					};

					const subject = await context.PgrMeetingSubject;
					const start = await context.PgrMeetingStart;
					const end = await context.PgrMeetingEnd;

					if (!subject || !start || !end) {
						await showMessage(await context.Resources.Strings.PgrMeetingFillFieldsMessage);
						return;
					}

					context.PgrMeetingInProgress = true;
					try {
						const http = new sdk.HttpClientService();
						const response = await http.post(
							"rest/PgrMsTeamsMeetingService/CreateMeetingDelegated", {
								contactId: await context.Id,
								subject: subject,
								startDateTime: toWallClock(start),
								endDateTime: toWallClock(end)
							});
						const result = response && response.body;
						if (!result || result.success === false) {
							const reason = (result && result.errorInfo && result.errorInfo.message) ||
								("HTTP " + (response && response.status));
							await showMessage(
								await context.Resources.Strings.PgrMeetingFailedMessage + " " + reason);
							return;
						}
						context.PgrMeetingJoinUrl = result.joinUrl;
						context.PgrMeetingJoinUrlVisible = true;
						await showMessage(await context.Resources.Strings.PgrMeetingCreatedMessage);
					} catch (e) {
						await showMessage(
							await context.Resources.Strings.PgrMeetingFailedMessage + " " + e.message);
					} finally {
						context.PgrMeetingInProgress = false;
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

					context.PgrMeetingInProgress = true;
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
						context.PgrMeetingInProgress = false;
					}
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
