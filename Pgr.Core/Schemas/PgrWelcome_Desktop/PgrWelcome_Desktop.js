define("PgrWelcome_Desktop", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Label_Greeting",
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 0,
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Greeting_caption)#)#",
					"labelType": "large-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FFFFFF",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "h1",
					"layoutConfig": { "column": 1, "row": 1, "colSpan": 8, "rowSpan": 1 }
				}
			},
			{
				"operation": "insert",
				"name": "Label_WelcomeMessage",
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 1,
				"values": {
					"type": "crt.Label",
					"caption": "$Resources.Strings.Label_WelcomeMessage_caption",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FFFFFF",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"layoutConfig": { "column": 1, "row": 2, "colSpan": 6, "rowSpan": 2 }
				}
			},
			{
				"operation": "insert",
				"name": "Label_WelcomeHint",
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 2,
				"values": {
					"type": "crt.Label",
					"caption": "$Resources.Strings.Label_WelcomeHint_caption",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#FFFFFF",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"layoutConfig": { "column": 1, "row": 4, "colSpan": 6, "rowSpan": 1 }
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
