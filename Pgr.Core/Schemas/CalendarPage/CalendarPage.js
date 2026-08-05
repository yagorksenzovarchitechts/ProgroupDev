define("CalendarPage", ["RightUtilities"], function (RightUtilities) {
    return {
        entitySchemaName: "Calendar",
        attributes: {},
        details: /**SCHEMA_DETAILS*/ {
            WorkingWeek: {
                schemaName: "WorkingWeekDetail",
                entitySchemaName: "DayInCalendar",
                captionName: "WorkingWeekDetailCaption",
                filter: {
                    masterColumn: "Id",
                    detailColumn: "Calendar",
                },
            },
            DayOffs: {
                schemaName: "DayOffsDetail",
                entitySchemaName: "DayOff",
                captionName: "DayOffsDetailCaption",
                filter: {
                    masterColumn: "Id",
                    detailColumn: "Calendar",
                },
            },
            Countries: {
                schemaName: "PgrCountryInCalendarDetail",
                entitySchemaName: "Country",
                captionName: "CountriesDetailCaption",
                filter: {
                    masterColumn: "Id",
                    detailColumn: "PgrCalendar",
                },
            },
        },
        methods: {},
        diff: /**SCHEMA_DIFF*/ [
            {
                operation: "insert",
                name: "CountriesTab",
                values: {
                    caption: {
                        bindTo: "Resources.Strings.CountriesTabCaption",
                    },
                    items: [],
                },
                parentName: "Tabs",
                propertyName: "tabs",
                index: 2,
            },
            {
                operation: "insert",
                name: "Countries",
                values: {
                    itemType: this.Terrasoft.ViewItemType.DETAIL,
                },
                parentName: "CountriesTab",
                propertyName: "items",
                index: 0,
            },
        ] /**SCHEMA_DIFF*/,
        rules: {},
        userCode: {},
    };
});
