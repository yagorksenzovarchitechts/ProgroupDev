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
        },
        methods: {},
        diff: [],
        rules: {},
        userCode: {},
    };
});