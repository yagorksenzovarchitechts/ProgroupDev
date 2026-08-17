define("PgrAccountCompetitorShareHelper", [], function() {

	// Shared logic for the "delivery share + competitor shares must total 100%" rule on the
	// Account form. Kept in a standalone module (not inside the page handlers) so the same
	// primitives are reused by the Save and Delete handlers of Accounts_FormPage.
	//
	// The Account form shows competitor shares in TWO controls over the same AccountCompetitor
	// object, so the validation must cover both:
	//   * "Account competitors" - editable crt.DataGrid, items attribute "CompetitorsGrid",
	//     datasource "CompetitorsGridDS";
	//   * "Share of wallet"      - classic crt.GridDetail, items attribute "GridDetail",
	//     datasource "GridDetailDS".
	// Every function takes the grid binding (see GRIDS) so the two paths stay in sync.

	const REQUIRED_TOTAL = 100;

	// Per-grid binding: the in-memory items attribute, its selection-state attribute, and the
	// row column codes for share / id. Keyed by the grid's items-attribute name.
	const GRIDS = {
		// "Account competitors" editable DataGrid.
		CompetitorsGrid: {
			itemsAttr: "CompetitorsGrid",
			selectionAttr: "CompetitorsGrid_SelectionState",
			shareColumn: "CompetitorsGridDS_PgrShare",
			idColumn: "CompetitorsGridDS_Id",
			dataSourceName: "CompetitorsGridDS"
		},
		// "Share of wallet" classic detail.
		GridDetail: {
			itemsAttr: "GridDetail",
			selectionAttr: "GridDetail_SelectionState",
			shareColumn: "GridDetailDS_PgrShare",
			idColumn: "GridDetailDS_Id",
			dataSourceName: "GridDetailDS"
		}
	};

	// Grid cells are Zone.js-wrapped: the actual value lives under __zone_symbol__value.
	function unwrap(value) {
		return (value && typeof value === "object" && "__zone_symbol__value" in value)
			? value.__zone_symbol__value
			: value;
	}

	// Ids arrive in different letter cases depending on the source (selection state, filters,
	// grid rows), so everything is compared as a lowercased string.
	function norm(value) {
		const unwrapped = unwrap(value);
		return (unwrapped === null || unwrapped === undefined)
			? ""
			: String(unwrapped).toLowerCase();
	}

	// Grid binding lookups used by the two handlers to decide whether a request is ours.
	function getGridByItemsAttr(itemsAttributeName) {
		return GRIDS[itemsAttributeName] || null;
	}
	function getGridByDataSource(dataSourceName) {
		for (const key in GRIDS) {
			if (GRIDS[key].dataSourceName === dataSourceName) {
				return GRIDS[key];
			}
		}
		return null;
	}

	// Which competitor grid a delete request targets. dataSourceName alone is unreliable:
	// on a bulk delete the request bubbles up to the page and arrives with
	// dataSourceName === "PDS" (the page data source) instead of the grid's own datasource.
	// So fall back to whichever grid currently has an active selection.
	async function resolveGridForDelete(request) {
		const direct = getGridByDataSource(request.dataSourceName);
		if (direct) {
			return direct;
		}
		for (const key in GRIDS) {
			const grid = GRIDS[key];
			const selection = await request.$context[grid.selectionAttr];
			if (selection && (selection.type === "all" ||
				(selection.selected && selection.selected.length))) {
				return grid;
			}
		}
		return null;
	}

	// Ids listed in an "Id in (...)" delete filter. On a bulk delete request.recordIds is not
	// set, and the ids are only carried by request.filters and the grid selection state.
	function getIdsFromFilters(filters) {
		const ids = [];
		const items = (filters && filters.items) || {};
		for (const key in items) {
			const item = items[key];
			const columnPath = item && item.leftExpression && item.leftExpression.columnPath;
			if (columnPath !== "Id") {
				continue;
			}
			const expressions = item.rightExpressions ||
				(item.rightExpression ? [item.rightExpression] : []);
			expressions.forEach(function(expression) {
				const value = expression && expression.parameter && expression.parameter.value;
				if (value) {
					ids.push(norm(value));
				}
			});
		}
		return ids;
	}

	// Ids of the rows a delete request targets, from whichever source actually carries them:
	// recordIds (single row menu), the grid selection, or the request filters (bulk delete).
	function getDeletedIds(request, selection) {
		const fromRecordIds = (request.recordIds || []).map(norm);
		if (fromRecordIds.length) {
			return fromRecordIds;
		}
		const fromSelection = ((selection && selection.selected) || []).map(norm);
		if (fromSelection.length) {
			return fromSelection;
		}
		return getIdsFromFilters(request.filters);
	}

	// Rows that would be left in the grid once the pending deletion goes through.
	// Returns null when the deletion cannot be reasoned about - no ids were resolved, or none
	// of them matched a grid row. The caller must then let the delete through rather than
	// block it on a total it failed to compute.
	async function getRemainingRows(request, grid, deletedIds) {
		if (!deletedIds.length) {
			return null;
		}
		const rows = [];
		const collection = await request.$context[grid.itemsAttr];
		if (collection && typeof collection.forEach === "function") {
			collection.forEach(function(row) {
				rows.push(row);
			});
		}
		const remaining = rows.filter(function(row) {
			return deletedIds.indexOf(norm(row && row[grid.idColumn])) === -1;
		});
		if (remaining.length === rows.length) {
			console.warn("Competitor delete: none of the deleted ids matched a grid row.");
			return null;
		}
		return remaining;
	}

	// Sum of the share column across the given competitor grid rows (array or grid collection).
	function sumShares(rows, shareColumn) {
		let sum = 0;
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				sum += Number(unwrap(row && row[shareColumn])) || 0;
			});
		}
		return sum;
	}

	// ProGroup's own delivery share stored on the account.
	async function getDeliveryShare(request) {
		return Number(unwrap(await request.$context.PDS_PgrDeliveryShare_8wr4r2b)) || 0;
	}

	// Total = delivery share + all competitor shares currently in the given grid, including
	// brand-new, not-yet-saved rows (read straight from the in-memory grid collection).
	async function getAccountShareTotal(request, grid) {
		const deliveryShare = await getDeliveryShare(request);
		const rows = await request.$context[grid.itemsAttr];
		return deliveryShare + sumShares(rows, grid.shareColumn);
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
		norm: norm,
		sumShares: sumShares,
		getGridByItemsAttr: getGridByItemsAttr,
		getGridByDataSource: getGridByDataSource,
		resolveGridForDelete: resolveGridForDelete,
		getDeletedIds: getDeletedIds,
		getRemainingRows: getRemainingRows,
		getDeliveryShare: getDeliveryShare,
		getAccountShareTotal: getAccountShareTotal,
		showTotalError: showTotalError
	};
});
