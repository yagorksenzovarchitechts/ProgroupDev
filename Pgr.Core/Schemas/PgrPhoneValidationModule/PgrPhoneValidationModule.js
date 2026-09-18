define("PgrPhoneValidationModule", [], function() {

	const phonePattern = /^[0-9+\-]+$/;

	function isValidPhoneNumber(value) {
		if (!value) {
			return true;
		}
		return phonePattern.test(value);
	}

	function unwrapLookupValue(value) {
		return (value && typeof value === "object" && "value" in value) ? value.value : value;
	}

	return {

		isValidPhoneNumber: isValidPhoneNumber,

		getInvalidPhoneNumbers: async function(communicationOptionRows, phoneTypeIds) {
			const numbers = await Promise.all(communicationOptionRows.map(async function(row) {
				const typeId = unwrapLookupValue(await row.CommunicationOptionsDS_CommunicationType);
				const number = await row.CommunicationOptionsDS_Number;
				if (phoneTypeIds.indexOf(typeId) !== -1 && !isValidPhoneNumber(number)) {
					return number;
				}
				return null;
			}));
			return numbers.filter(function(number) {
				return number !== null;
			});
		}

	};
});
