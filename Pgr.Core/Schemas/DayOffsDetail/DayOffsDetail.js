define("DayOffsDetail", ["DayOffsDetailResources"], function (resources) {
    return {
        mixins: {},
        attributes: {},
        methods: {},
        rules: {},
        diff: /**SCHEMA_DIFF*/ [
            {
                operation: "merge",
                name: "DataGrid",
                values: {
                    columnsConfig: [
                        {
                            cols: 4,
                            key: [
                                {
                                    name: {
                                        bindTo: "Date",
                                    },
                                },
                            ],
                        },
                        {
                            cols: 4,
                            key: [
                                {
                                    name: {
                                        bindTo: "DayType",
                                    },
                                },
                            ],
                        },
                        {
                            cols: 6,
                            key: [
                                {
                                    name: {
                                        bindTo: "WorkingIntervals",
                                    },
                                },
                            ],
                        },
                        {
                            cols: 10,
                            key: [
                                {
                                    name: {
                                        bindTo: "PgrDescription",
                                    },
                                },
                            ],
                        },
                    ],
                },
            },
            {
                /**
                 * Captions are child items of the grid, so "merge" refuses to replace the whole
                 * captionsConfig collection - the widths are patched item by item instead and
                 * the new caption is appended to it. The item name is the caption text itself.
                 */
                operation: "merge",
                name: resources.localizableStrings.WorkingIntervalsCaption,
                parentName: "DataGrid",
                propertyName: "captionsConfig",
                values: {
                    cols: 6,
                },
            },
            {
                operation: "insert",
                name: resources.localizableStrings.PgrDescriptionCaption,
                parentName: "DataGrid",
                propertyName: "captionsConfig",
                values: {
                    cols: 10,
                },
            },
        ] /**SCHEMA_DIFF*/,
    };
});
