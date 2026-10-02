define("PgrChartSeriesSyncModule", [], function() {
	const debounceTimers = {};
	const debounceDelayMs = 300;

	function getKeyValue(item, seriesAttributeName, keyColumn) {
		const value = item.attributes[`${seriesAttributeName}DS_${keyColumn}`];
		return value !== null && typeof value === "object" ? value.value : value;
	}

	async function runSync(context, primarySeriesAttributeName, secondarySeriesAttributeName, keyColumn) {
		const primarySeries = await context[primarySeriesAttributeName];
		const secondarySeries = await context[secondarySeriesAttributeName];
		if (!primarySeries || !secondarySeries || !primarySeries.length || !secondarySeries.length) {
			return;
		}
		const primaryValues = [];
		for (let i = 0; i < primarySeries.length; i++) {
			const value = getKeyValue(primarySeries[i], primarySeriesAttributeName, keyColumn);
			if (value !== undefined) {
				primaryValues.push(value);
			}
		}
		if (!primaryValues.length) {
			return;
		}
		const toRemove = [];
		for (let i = 0; i < secondarySeries.length; i++) {
			const item = secondarySeries[i];
			const value = getKeyValue(item, secondarySeriesAttributeName, keyColumn);
			if (value !== undefined && !primaryValues.includes(value)) {
				toRemove.push(item);
			}
		}
		toRemove.forEach((item) => secondarySeries.remove(item));
	}

	return {
		// Debounced: both series reload independently and asynchronously on filter
		// changes, so comparing them the instant either one changes can catch the
		// other mid-reload with stale data from the previous filter. Waiting a beat
		// after the last relevant change lets both settle before comparing.
		syncSecondarySeriesToPrimarySelection: function(context, primarySeriesAttributeName, secondarySeriesAttributeName, keyColumnName) {
			const keyColumn = keyColumnName || "PgrAccountPgrWepaformName";
			const timerKey = `${primarySeriesAttributeName}|${secondarySeriesAttributeName}`;
			if (debounceTimers[timerKey]) {
				clearTimeout(debounceTimers[timerKey]);
			}
			debounceTimers[timerKey] = setTimeout(() => {
				delete debounceTimers[timerKey];
				runSync(context, primarySeriesAttributeName, secondarySeriesAttributeName, keyColumn);
			}, debounceDelayMs);
			return Promise.resolve();
		}
	};
});
