define("PgrContactDuplicatesSearchModule", ["@creatio-devkit/common", "PgrClientConsts"], function(sdk, consts) {

	const duplicatesResultEventName = "pgr-contact-duplicates-result-event";
	const findDuplicatesServicePath = "rest/SearchDuplicatesService/FindContactDuplicates";
	const mergeDuplicatesServicePath = "rest/PgrContactDuplicatesMergeService/MergeContactDuplicates";
	const duplicatesPageSchemaName = "PgrContactDuplicatesFoundPage";
	const contactPageSchemaName = "Contacts_FormPage";

	function unwrapValue(value) {
		if (typeof value === "object" && value !== null && "value" in value) {
			return value.value;
		}
		return value;
	}

	async function readColumnValue(context, dataSource, columnName) {
		try {
			const attributeName = await context.getViewModelAttributePath(dataSource, columnName);
			if (!attributeName) {
				return null;
			}
			return unwrapValue(await context[attributeName]);
		} catch (error) {
			return null;
		}
	}

	async function buildFullName(context, dataSource) {
		const name = await readColumnValue(context, dataSource, "Name");
		if (name) {
			return name;
		}
		const givenName = await readColumnValue(context, dataSource, "GivenName");
		const middleName = await readColumnValue(context, dataSource, "MiddleName");
		const surname = await readColumnValue(context, dataSource, "Surname");
		return [givenName, middleName, surname].filter((part) => !!part).join(" ");
	}

	async function readRecordId(context, dataSource) {
		const columnId = await readColumnValue(context, dataSource, "Id");
		if (columnId) {
			return columnId;
		}
		try {
			return unwrapValue(await context.Id) || null;
		} catch (error) {
			return null;
		}
	}

	return {

		findDuplicates: async function(context) {
			const dataSource = await context.getPrimaryModelName();
			const name = await buildFullName(context, dataSource);
			if (!name) {
				return [];
			}
			const recordId = await readRecordId(context, dataSource);
			const email = await readColumnValue(context, dataSource, "Email");
			const serviceRequest = {
				Name: name,
				Communication: email ? [{
					Number: email,
					CommunicationTypeId: consts.CommunicationType.Email
				}] : []
			};
			if (recordId) {
				serviceRequest.Id = recordId;
			}
			let foundIds = [];
			try {
				const response = await new sdk.HttpClientService().post(findDuplicatesServicePath, {
					request: serviceRequest
				});
				foundIds = (response && response.body && response.body.FindContactDuplicatesResult) || [];
			} catch (error) {
				return [];
			}
			if (recordId) {
				foundIds = foundIds.filter((id) => String(id).toLowerCase() !== String(recordId).toLowerCase());
			}
			return foundIds;
		},

		getSaveRequestParams: function(request) {
			return {
				preventCardClose: request.preventCardClose,
				preventCardStateChange: request.preventCardStateChange,
				showSuccessMessage: request.showSuccessMessage,
				messageTextAfterCompletion: request.messageTextAfterCompletion,
				reloadSavedRecord: request.reloadSavedRecord,
				showErrorMessage: request.showErrorMessage
			};
		},

		openDuplicatesDialog: async function(context) {
			const duplicates = await context.PgrDuplicatesFoundData;
			await this.removeDialogListener(context);
			if (!duplicates || !duplicates.length) {
				return;
			}
			const dialogId = sdk.generateGuid();
			const listener = async (event) => {
				if (!event.detail || event.detail.dialogId !== dialogId) {
					return;
				}
				window.removeEventListener(duplicatesResultEventName, listener);
				context.PgrDuplicatesListener = null;
				context.PgrDuplicatesFoundData = null;
				const result = event.detail.result || {action: "cancel"};
				if (result.action === "cancel") {
					context.PgrOriginalSaveRequestParams = null;
					return;
				}
				const saveRequestParams = (await context.PgrOriginalSaveRequestParams) ?? {};
				context.PgrOriginalSaveRequestParams = null;
				if (result.action === "save") {
					context.executeRequest({
						type: "crt.SaveRecordRequest",
						$context: context,
						...saveRequestParams
					});
					return;
				}
				if (result.action === "merge") {
					await this.mergeSelectedDuplicates(context, saveRequestParams, result);
				}
			};
			context.PgrDuplicatesListener = listener;
			window.addEventListener(duplicatesResultEventName, listener);
			await sdk.HandlerChainService.instance.process({
				type: "crt.OpenPageRequest",
				schemaName: duplicatesPageSchemaName,
				parameters: {
					PgrDuplicatesData: duplicates,
					DialogId: dialogId
				}
			});
		},

		removeDialogListener: async function(context) {
			const listener = await context.PgrDuplicatesListener;
			if (listener) {
				window.removeEventListener(duplicatesResultEventName, listener);
			}
		},

		mergeSelectedDuplicates: async function(context, saveRequestParams, result) {
			const primaryId = result.primaryId;
			const otherIds = result.otherIds || [];
			if (!primaryId) {
				return;
			}

			await context.executeRequest({
				type: "crt.SaveRecordRequest",
				$context: context,
				...saveRequestParams
			});
			const dataSource = await context.getPrimaryModelName();
			const newRecordId = await readRecordId(context, dataSource);
			const duplicateContactIds = [newRecordId, ...otherIds].filter(Boolean);
			const merged = await this.mergeDuplicates(context, primaryId, duplicateContactIds);
			if (!merged) {
				return;
			}
			await sdk.HandlerChainService.instance.process({
				type: "crt.ClosePageRequest",
				$context: context
			});
			await sdk.HandlerChainService.instance.process({
				type: "crt.OpenPageRequest",
				schemaName: contactPageSchemaName,
				modelInitConfigs: [{recordId: primaryId, action: "edit"}],
				$context: context
			});
		},

		mergeDuplicates: async function(context, primaryContactId, duplicateContactIds) {
			try {
				const response = await new sdk.HttpClientService().post(mergeDuplicatesServicePath, {
					primaryContactId: primaryContactId,
					duplicateContactIds: duplicateContactIds
				});
				const result = response && response.body && response.body.MergeContactDuplicatesResult;
				if (result && result.success) {
					return true;
				}
				const errorMessage = (result && result.errorInfo && result.errorInfo.message) || "";
				await this.showMergeError(context, errorMessage);
				return false;
			} catch (error) {
				await this.showMergeError(context, (error && error.message) || "");
				return false;
			}
		},

		showMergeError: async function(context, errorMessage) {
			const prefix = await context.Resources.Strings.PgrMergeErrorMessage;
			const okCaption = await context.Resources.Strings.PgrMergeErrorOkButton;
			await context.executeRequest({
				type: "crt.ShowDialogRequest",
				$context: context,
				dialogConfig: {
					data: {
						message: errorMessage ? `${prefix} ${errorMessage}` : prefix,
						actions: [
							{key: "ok", config: {color: "primary", caption: okCaption}}
						]
					}
				}
			});
		}

	};
});
