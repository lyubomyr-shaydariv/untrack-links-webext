import { AT, JUST, MAP, OP, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('embeds_referring_euri', 'feature', 'kw', 'si', 'source_ve_path'),
		AT.DOMAIN('youtube.com')
	),
	RULE.MUTATE_ENTRIES_AT(
		JUST.EXCLUDING('si'),
		AT.DOMAIN('youtu.be')
	),
	RULE.REDIRECT_AT(
		OP.PIPE(
			MAP.EXTRACT_SEARCH_PARAMS(),
			MAP.PROPERTY_AT('q'),
			MAP.TO_URL()
		),
		OP.AND(
			AT.DOMAIN('youtube.com'),
			AT.PATHNAME('/redirect')
		)
	)
];
