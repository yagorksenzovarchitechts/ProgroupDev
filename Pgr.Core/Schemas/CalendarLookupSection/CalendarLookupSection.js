define("CalendarLookupSection", [], function () {
    return {
        entitySchemaName: "Calendar",
        attributes: {},
        diff: /**SCHEMA_DIFF*/ [] /**SCHEMA_DIFF*/,
        messages: {},
        methods: {
            onNewRecordSaved: this.Terrasoft.emptyFn,
        },
    };
});