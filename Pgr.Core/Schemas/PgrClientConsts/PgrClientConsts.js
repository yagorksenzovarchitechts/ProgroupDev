define("PgrClientConsts", [], function() {
	return {
		ActivityCategory: {
			/* "Measure" - 3-6-9 corrective-action task marker (Activity.ActivityCategory). */
			Measure: "bee620f7-f3f7-47e4-81a3-5b2a9a030413",
			/* "369" - 3-6-9 order-intake deviation alert task marker (Activity.ActivityCategory). */
			Category369: "8038a396-7825-e011-8165-00155d043204"
		},
		CommunicationType: {
			Email: "ee1c85c3-cfcb-df11-9b2a-001d60e938c6",
			BusinessPhone: "3dddb3cc-53ee-49c4-a71f-e9e257f59e49",
			MobilePhone: "d4a2dc80-30ca-df11-9b2a-001d60e938c6"
		}
	};
});