define("PgrAccountCompetitorShareHelper", [], function() {

	const REQUIRED_TOTAL = 100;

	const GRIDS = {
		CompetitorsGrid: {
			itemsAttr: "CompetitorsGrid",
			selectionAttr: "CompetitorsGrid_SelectionState",
			shareColumn: "CompetitorsGridDS_PgrShare",
			idColumn: "CompetitorsGridDS_Id",
			validFromColumn: "CompetitorsGridDS_PgrValidFrom",
			competitorColumn: "CompetitorsGridDS_PgrCompetitor",
			dataSourceName: "CompetitorsGridDS"
		},
		GridDetail: {
			itemsAttr: "GridDetail",
			selectionAttr: "GridDetail_SelectionState",
			shareColumn: "GridDetailDS_PgrShare",
			idColumn: "GridDetailDS_Id",
			validFromColumn: "GridDetailDS_PgrValidFrom",
			competitorColumn: "GridDetailDS_PgrCompetitor",
			dataSourceName: "GridDetailDS"
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

	function getInvalidCheckpoints(rows, grid) {
		const partitioned = partitionRows(rows, grid);
		const timelines = buildTimelines(partitioned.dated, grid);
		const checkpoints = getCheckpoints(partitioned.dated, grid);
		const invalid = [];

		if (!checkpoints.length) {
			if (partitioned.rowCount && partitioned.undatedTotal !== REQUIRED_TOTAL) {
				invalid.push({ label: "no valid from date", total: partitioned.undatedTotal });
			}
			return invalid;
		}

		checkpoints.forEach(function(checkpoint) {
			let total = partitioned.undatedTotal;
			timelines.forEach(function(timeline) {
				const share = getActiveShare(timeline, checkpoint.key);
				if (share !== null) {
					total += share;
				}
			});
			if (total !== REQUIRED_TOTAL) {
				invalid.push({ label: checkpoint.label, total: total });
			}
		});
		return invalid;
	}

	async function showGroupedTotalError(request, invalidGroups) {
		const baseMsg = await request.$context.Resources.Strings.ShareTotalErrorString;
		const details = invalidGroups
			.map(function(group) { return `${group.label}: ${group.total}%`; })
			.join("; ");
		await request.$context.executeRequest({
			type: "crt.ShowDialogRequest",
			$context: request.$context,
			dialogConfig: {
				data: {
					message: `${baseMsg} ${details}`,
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
		getInvalidCheckpoints: getInvalidCheckpoints,
		showGroupedTotalError: showGroupedTotalError
	};
});
