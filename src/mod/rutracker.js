import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('rutracker.org').PATHNAME('/forum/out.php')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
