define("PgrAccountCompetitorShareHelper", [], function() {

	// Shared logic for the "delivery share + competitor shares must total 100%" rule on the
	// Account form. Kept in a standalone module (not inside the page handlers) so the same
	// primitives are reused by both the Save and Delete handlers of Accounts_FormPage.
	//
	// All functions are pure with respect to the page: they take the request and read everything
	// from request.$context. Attribute/column codes below belong to the Accounts_FormPage
	// competitors grid (attribute "CompetitorsGrid", datasource "CompetitorsGridDS").

	const REQUIRED_TOTAL = 100;

	// Grid cells are Zone.js-wrapped: the actual value lives under __zone_symbol__value.
	function unwrap(value) {
		return (value && typeof value === "object" && "__zone_symbol__value" in value)
			? value.__zone_symbol__value
			: value;
	}

	// Sum of PgrShare across the given competitor grid rows (array or grid collection).
	function sumShares(rows) {
		let sum = 0;
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				sum += Number(unwrap(row && row.CompetitorsGridDS_PgrShare)) || 0;
			});
		}
		return sum;
	}

	// ProGroup's own delivery share stored on the account.
	async function getDeliveryShare(request) {
		return Number(unwrap(await request.$context.PDS_PgrDeliveryShare_8wr4r2b)) || 0;
	}

	// Total = delivery share + all competitor shares currently in the grid, including
	// brand-new, not-yet-saved rows (read straight from the in-memory grid collection).
	async function getAccountShareTotal(request) {
		const deliveryShare = await getDeliveryShare(request);
		const competitors = await request.$context.CompetitorsGrid;
		return deliveryShare + sumShares(competitors);
	}

	// Blocking dialog shown when the share total is not exactly 100%.
	async function showTotalError(request, total) {
		const baseMsg = await request.$context.Resources.Strings.ShareTotalErrorString;
		await request.$context.executeRequest({
			type: "crt.ShowDialogRequest",
			$context: request.$context,
			dialogConfig: {
				data: {
					message: `${baseMsg} ${total}%`,
					actions: [
						{ key: "ok", config: { color: "primary", caption: "OK" } }
					]
				}
			}
		});
	}

	return {
		REQUIRED_TOTAL: REQUIRED_TOTAL,
		unwrap: unwrap,
		sumShares: sumShares,
		getDeliveryShare: getDeliveryShare,
		getAccountShareTotal: getAccountShareTotal,
		showTotalError: showTotalError
	};
});
