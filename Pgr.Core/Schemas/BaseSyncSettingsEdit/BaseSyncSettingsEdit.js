 define("BaseSyncSettingsEdit", ["ExchangeNUIConstants"], function(ExchangeNUIConstants) {
	return {
		attributes: {},
		diff: /**SCHEMA_DIFF*/ [] /**SCHEMA_DIFF*/,
		messages: {},
		methods: {
			setFiltersToServerListEsq: function(esq) {
				this.callParent(arguments);
				if (Terrasoft.Features.getIsEnabled("PgrOnlyOffice365MailServer")) {
					var filter = esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
						"Id", ExchangeNUIConstants.MailServer.Office365);
					esq.filters.add("PgrOnlyOffice365Filter", filter);
				}
			}
		}
	};
});
