define("PgrWelcome_HomePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "WelcomeIsland",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "medium"
					},
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "large",
						"bottom": "large",
						"left": "large",
						"right": "large"
					},
					"items": [],
					"visible": true,
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 8,
						"rowSpan": 5
					},
					"alignItems": "stretch"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WelcomeHeading",
				"values": {
					"type": "crt.Label",
					"caption": "$Resources.Strings.WelcomeHeading_caption",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "h1",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "WelcomeIsland",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WelcomeMessage",
				"values": {
					"type": "crt.Label",
					"caption": "$Resources.Strings.WelcomeMessage_caption",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "WelcomeIsland",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WelcomeHint",
				"values": {
					"type": "crt.Label",
					"caption": "$Resources.Strings.WelcomeHint_caption",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "WelcomeIsland",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});