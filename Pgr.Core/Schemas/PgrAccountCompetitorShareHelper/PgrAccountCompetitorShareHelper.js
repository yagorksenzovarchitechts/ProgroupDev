define("PgrAccountCompetitorShareHelper", ["@creatio-devkit/common"], function(sdk) {

	const REQUIRED_TOTAL = 100;

	const POTENTIAL_METRIC_TYPE_ID = "e8e73e14-91cb-4653-b354-55e3fb2b429b";

	const GRIDS = {
		CompetitorsGrid: {
			itemsAttr: "CompetitorsGrid",
			selectionAttr: "CompetitorsGrid_SelectionState",
			shareColumn: "CompetitorsGridDS_PgrShare",
			volumeColumn: "CompetitorsGridDS_PgrShareValue",
			manageColumn: "CompetitorsGridDS_PgrManageInVolume",
			accountAttr: "Id",
			idColumn: "CompetitorsGridDS_Id",
			validFromColumn: "CompetitorsGridDS_PgrValidFrom",
			competitorColumn: "CompetitorsGridDS_PgrCompetitor",
			dataSourceName: "CompetitorsGridDS"
		},
		// CMVP-338: the Share of wallet grid on the Account page (edits arrive as "GridDetail").
		GridDetail: {
			itemsAttr: "GridDetail",
			selectionAttr: "GridDetail_SelectionState",
			shareColumn: "GridDetailDS_PgrShare",
			volumeColumn: "GridDetailDS_PgrShareValue",
			manageColumn: "GridDetailDS_PgrManageInVolume",
			accountAttr: "Id",
			idColumn: "GridDetailDS_Id",
			validFromColumn: "GridDetailDS_PgrValidFrom",
			competitorColumn: "GridDetailDS_PgrCompetitor",
			dataSourceName: "GridDetailDS"
		},
		// CMVP-338: the Share of wallet grid on the Visit report page.
		GridDetail_lcbts36: {
			itemsAttr: "GridDetail_lcbts36",
			selectionAttr: "GridDetail_lcbts36_SelectionState",
			shareColumn: "GridDetail_lcbts36DS_PgrShare",
			volumeColumn: "GridDetail_lcbts36DS_PgrShareValue",
			manageColumn: "GridDetail_lcbts36DS_PgrManageInVolume",
			accountAttr: "PDS_PgrAccount_ap9rlrb",
			idColumn: "GridDetail_lcbts36DS_Id",
			validFromColumn: "GridDetail_lcbts36DS_PgrValidFrom",
			competitorColumn: "GridDetail_lcbts36DS_PgrCompetitor",
			dataSourceName: "GridDetail_lcbts36DS"
		}
	};

	function unwrap(value) {
		return (value && typeof value === "object" && "__zone_symbol__value" in value)
			? value.__zone_symbol__value
			: value;
	}

	function norm(value) {
		const unwrapped = unwrap(value);
		return (unwrapped === null || unwrapped === undefined)
			? ""
			: String(unwrapped).toLowerCase();
	}

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

	function toDateOnly(value) {
		const unwrapped = unwrap(value);
		if (!unwrapped) {
			return null;
		}
		const date = unwrapped instanceof Date ? unwrapped : new Date(unwrapped);
		return isNaN(date.getTime()) ? null : date;
	}

	function getValidFromKey(row, grid) {
		const date = toDateOnly(row && row[grid.validFromColumn]);
		if (!date) {
			return "";
		}
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${date.getFullYear()}-${month}-${day}`;
	}

	function getValidFromLabel(row, grid) {
		const date = toDateOnly(row && row[grid.validFromColumn]);
		return date ? date.toLocaleDateString() : "no valid from date";
	}

	function getCompetitorKey(row, grid) {
		const value = unwrap(row && row[grid.competitorColumn]);
		if (value && typeof value === "object") {
			return String(value.value !== undefined ? value.value : (value.id !== undefined ? value.id : JSON.stringify(value)));
		}
		return String(value);
	}

	function buildTimelines(rows, grid) {
		const timelines = new Map();
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				const dateKey = getValidFromKey(row, grid);
				if (!dateKey) {
					return;
				}
				const competitorKey = getCompetitorKey(row, grid);
				if (!timelines.has(competitorKey)) {
					timelines.set(competitorKey, new Map());
				}
				const timeline = timelines.get(competitorKey);
				const share = Number(unwrap(row[grid.shareColumn])) || 0;
				timeline.set(dateKey, (timeline.get(dateKey) || 0) + share);
			});
		}
		const result = [];
		timelines.forEach(function(timeline) {
			const entries = Array.from(timeline.entries())
				.map(function(entry) { return { dateKey: entry[0], share: entry[1] }; })
				.sort(function(a, b) { return a.dateKey < b.dateKey ? -1 : (a.dateKey > b.dateKey ? 1 : 0); });
			result.push(entries);
		});
		return result;
	}

	function getCheckpoints(rows, grid) {
		const checkpoints = new Map();
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				const key = getValidFromKey(row, grid);
				if (key && !checkpoints.has(key)) {
					checkpoints.set(key, getValidFromLabel(row, grid));
				}
			});
		}
		return Array.from(checkpoints.entries())
			.map(function(entry) { return { key: entry[0], label: entry[1] }; })
			.sort(function(a, b) { return a.key < b.key ? -1 : (a.key > b.key ? 1 : 0); });
	}

	function getActiveShare(timeline, checkpointKey) {
		if (!timeline.length || checkpointKey < timeline[0].dateKey) {
			return null;
		}
		let active = timeline[0].share;
		for (let i = 0; i < timeline.length; i++) {
			if (timeline[i].dateKey <= checkpointKey) {
				active = timeline[i].share;
			} else {
				break;
			}
		}
		return active;
	}

	function partitionRows(rows, grid) {
		const dated = [];
		let undatedTotal = 0;
		let rowCount = 0;
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				rowCount++;
				if (getValidFromKey(row, grid)) {
					dated.push(row);
				} else {
					undatedTotal += Number(unwrap(row[grid.shareColumn])) || 0;
				}
			});
		}
		return { dated: dated, undatedTotal: undatedTotal, rowCount: rowCount };
	}

	function toNumber(value) {
		const number = Number(unwrap(value));
		return isNaN(number) ? 0 : number;
	}

	function toTime(value) {
		const time = value ? new Date(value).getTime() : NaN;
		return isNaN(time) ? 0 : time;
	}

	function getAccountId(context, grid) {
		return Promise.resolve(context[grid.accountAttr]).then(function(value) {
			const unwrapped = unwrap(value);
			return unwrapped && typeof unwrapped === "object" ? unwrapped.value : unwrapped;
		});
	}

	// CMVP-382: loads the latest Potential (tsqm) and the delivery share (%) of the account.
	async function loadAccountContext(context, grid) {
		const result = { potential: 0, deliveryShare: 0 };
		try {
			const accountId = await getAccountId(context, grid);
			if (!accountId) {
				return result;
			}
			const potentialModel = await sdk.Model.create("PgrAccountMetricValue");
			const potentialFilters = new sdk.FilterGroup();
			await potentialFilters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "PgrAccountId", accountId);
			await potentialFilters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "PgrMetricTypeId", POTENTIAL_METRIC_TYPE_ID);
			const potentialRows = await potentialModel.load({
				attributes: ["PgrValue", "PgrDate", "PgrReceivedOn"],
				parameters: [{ type: sdk.ModelParameterType.Filter, value: potentialFilters }]
			});
			let latestDate = null;
			let latestReceivedOn = null;
			for (const row of potentialRows || []) {
				const date = toTime(row.PgrDate);
				const receivedOn = toTime(row.PgrReceivedOn);
				const isNewer = latestDate === null || date > latestDate ||
					(date === latestDate && receivedOn > latestReceivedOn);
				if (isNewer) {
					latestDate = date;
					latestReceivedOn = receivedOn;
					result.potential = toNumber(row.PgrValue);
				}
			}
			const accountModel = await sdk.Model.create("Account");
			const accountFilters = new sdk.FilterGroup();
			await accountFilters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "Id", accountId);
			const accountRows = await accountModel.load({
				attributes: ["PgrDeliveryShare"],
				parameters: [{ type: sdk.ModelParameterType.Filter, value: accountFilters }]
			});
			if (accountRows && accountRows.length) {
				result.deliveryShare = toNumber(accountRows[0].PgrDeliveryShare);
			}
		} catch (e) {
			console.warn("Competitor share: could not load Potential / delivery share.", e);
		}
		return result;
	}

	function roundTo(value, decimals) {
		const factor = Math.pow(10, decimals);
		return Math.round(value * factor) / factor;
	}

	// CMVP-382: the grid only shows the latest entry per competitor, so validate the current picture:
	// per competitor take the newest Valid from (undated counts as oldest). The managed field (percent or volume)
	// is the anchor, the other one is derived from the Potential. Percent total (with the delivery share) must not
	// exceed 100 and volume total (with the delivery share volume) must not exceed the Potential.
	function getInvalidCheckpoints(rows, grid, accountContext) {
		const potential = (accountContext && accountContext.potential) || 0;
		const deliveryShare = (accountContext && accountContext.deliveryShare) || 0;
		const latest = new Map();
		let rowCount = 0;
		if (rows && typeof rows.forEach === "function") {
			rows.forEach(function(row) {
				rowCount++;
				const competitorKey = getCompetitorKey(row, grid);
				const dateKey = getValidFromKey(row, grid);
				const manageInVolume = !!unwrap(row[grid.manageColumn]);
				const percent = toNumber(row[grid.shareColumn]);
				const volume = toNumber(row[grid.volumeColumn]);
				let rowPercent = percent;
				let rowVolume = potential > 0 ? potential * percent / 100 : 0;
				if (manageInVolume) {
					rowVolume = volume;
					rowPercent = potential > 0 ? volume / potential * 100 : 0;
				}
				const current = latest.get(competitorKey);
				if (!current || dateKey > current.dateKey) {
					latest.set(competitorKey, { dateKey: dateKey, percent: rowPercent, volume: rowVolume });
				} else if (dateKey === current.dateKey) {
					current.percent += rowPercent;
					current.volume += rowVolume;
				}
			});
		}
		if (!rowCount) {
			return [];
		}
		let percentTotal = deliveryShare;
		let volumeTotal = potential * deliveryShare / 100;
		latest.forEach(function(entry) {
			percentTotal += entry.percent;
			volumeTotal += entry.volume;
		});
		const invalid = [];
		if (roundTo(percentTotal, 2) > REQUIRED_TOTAL) {
			invalid.push({ text: "The total of all share values cannot exceed 100%. Current total: " + roundTo(percentTotal, 2) + "%" });
		}
		if (potential > 0 && roundTo(volumeTotal, 0) > potential) {
			invalid.push({ text: "The total volume of the competitors cannot exceed the Potential (" + potential + " tsqm). Current total: " + roundTo(volumeTotal, 0) + " tsqm" });
		}
		return invalid;
	}

	async function showGroupedTotalError(request, invalidGroups) {
		const message = invalidGroups.map(function(group) { return group.text; }).join("\n");
		await request.$context.executeRequest({
			type: "crt.ShowDialogRequest",
			$context: request.$context,
			dialogConfig: {
				data: {
					message: message,
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
		getGridByItemsAttr: getGridByItemsAttr,
		getGridByDataSource: getGridByDataSource,
		resolveGridForDelete: resolveGridForDelete,
		getDeletedIds: getDeletedIds,
		getRemainingRows: getRemainingRows,
		loadAccountContext: loadAccountContext,
		getInvalidCheckpoints: getInvalidCheckpoints,
		showGroupedTotalError: showGroupedTotalError
	};
});
