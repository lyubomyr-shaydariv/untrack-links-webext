import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('jdoqocy.com').PATHNAME('/click')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
