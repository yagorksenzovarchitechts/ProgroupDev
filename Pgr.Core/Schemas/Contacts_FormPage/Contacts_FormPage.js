define("Contacts_FormPage", /**SCHEMA_DEPS*/ [] /**SCHEMA_DEPS*/, function () /**SCHEMA_ARGS*/ /**SCHEMA_ARGS*/ {
    return {
        viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/ [
            {
                operation: "insert",
                name: "PowerBiTab",
                values: {
                    type: "crt.TabContainer",
                    items: [],
                    caption: "#ResourceString(TabContainer_5a5r2yt_caption)#",
                },
                parentName: "Tabs",
                propertyName: "items",
                index: 1,
            },
            {
                operation: "insert",
                name: "PowerBiIFrame",
                values: {
                    type: "crt.IFrame",
                    sandbox:
                        "allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-modals",
                    visible: true,
                    urlContent: "$PowerBiUrl",
                    width: "100%",
                    height: "100%",
                    styles: {
                        border: "none",
                        minHeight: "500px",
                    },
                },
                parentName: "PowerBiTab",
                propertyName: "items",
                index: 1,
            },
        ] /**SCHEMA_VIEW_CONFIG_DIFF*/,
        viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/ [
            {
                operation: "merge",
                path: ["attributes"],
                values: {
                    PowerBiUrl: {
                        value: "https://app.powerbi.com/reportEmbed?reportId=49073e44-c76d-46d6-8a04-97cbef63a841&autoAuth=true",
                    },
                },
            },
        ] /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
        modelConfigDiff:
            /**SCHEMA_MODEL_CONFIG_DIFF*/ [] /**SCHEMA_MODEL_CONFIG_DIFF*/,
        handlers: /**SCHEMA_HANDLERS*/ [] /**SCHEMA_HANDLERS*/,
        converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
        validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/,
    };
});
