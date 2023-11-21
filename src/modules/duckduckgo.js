import * as __ from '/rules.js';

export default [
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{
				onError: __.BLOCK.CONFIRM
			},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("uddg"),
			__.MAP.TO_URL()
		),
		__.OP.AND(
			__.AT.HOSTNAME("duckduckgo.com"),
			__.AT.PATHNAME("/l/")
		)
	)
];
