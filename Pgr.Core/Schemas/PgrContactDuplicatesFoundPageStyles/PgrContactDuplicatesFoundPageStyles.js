define("PgrContactDuplicatesFoundPageStyles", [], function() {

	const styleElementId = "pgr-contact-duplicates-found-page-styles";
	const guidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	const baseRule = [
		".cdk-overlay-pane:has(pgrcontactduplicatesfoundpage) {",
		"    max-width: 800px !important;",
		"}"
	].join("\n");

	function getStyleElement() {
		let style = document.getElementById(styleElementId);
		if (!style) {
			style = document.createElement("style");
			style.id = styleElementId;
			style.textContent = baseRule;
			document.head.appendChild(style);
		}
		return style;
	}

	return {

		ensureInjected: function() {
			getStyleElement();
		},

		setHighlightedRowId: function(id) {
			const style = getStyleElement();
			if (!id || !guidPattern.test(id)) {
				style.textContent = baseRule;
				return;
			}
			style.textContent = [
				baseRule,
				`pgrcontactduplicatesfoundpage [row-id="${id}" i],`,
				`pgrcontactduplicatesfoundpage [row-id="${id}" i] .mat-mdc-cell {`,
				"    background-color: #E8F5E9 !important;",
				"}"
			].join("\n");
		}

	};
});
