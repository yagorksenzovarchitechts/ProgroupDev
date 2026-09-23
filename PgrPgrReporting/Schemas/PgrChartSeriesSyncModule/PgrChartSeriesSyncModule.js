define("PgrChartSeriesSyncModule", [], function() {
	const debounceTimers = {};
	const debounceDelayMs = 300;

	async function runSync(context, primarySeriesAttributeName, secondarySeriesAttributeName, keyColumn) {
		const primarySeries = await context[primarySeriesAttributeName];
		const secondarySeries = await context[secondarySeriesAttributeName];
		if (!primarySeries || !secondarySeries || !primarySeries.length || !secondarySeries.length) {
			return;
		}
		const primaryKeyAttribute = `${primarySeriesAttributeName}DS_${keyColumn}`;
		const secondaryKeyAttribute = `${secondarySeriesAttributeName}DS_${keyColumn}`;
		const primaryValues = [];
		for (let i = 0; i < primarySeries.length; i++) {
			primaryValues.push(primarySeries[i].attributes[primaryKeyAttribute].value);
		}
		const toRemove = [];
		for (let i = 0; i < secondarySeries.length; i++) {
			const item = secondarySeries[i];
			const value = item.attributes[secondaryKeyAttribute].value;
			if (!primaryValues.includes(value)) {
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
			const keyColumn = keyColumnName || "PgrAccount";
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
