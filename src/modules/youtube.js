import * as __ from '/rules.js';

export default [
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("feature", "kw", "si"),
		__.AT.DOMAIN("youtube.com")
	),
	__.RULE.MUTATE_ENTRIES_AT(
		__.JUST.EXCLUDING("si"),
		__.AT.DOMAIN("youtu.be")
	),
	__.RULE.REDIRECT_AT(
		__.OP.PIPE(
			{
				onError: __.BLOCK.CONFIRM
			},
			__.MAP.EXTRACT_SEARCH_PARAMS(),
			__.MAP.PROPERTY_AT("q"),
			__.MAP.TO_URL()
		),
		__.OP.AND(
			__.AT.DOMAIN("youtube.com"),
			__.AT.PATHNAME("/redirect")
		)
	)
];
