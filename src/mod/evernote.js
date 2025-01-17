import {RULE} from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('evernote.com').PATHNAME('/OutboundRedirect.action')
		.FROM().QUERY_ENTRY_KEYS()
		.APPLY().GET_PROPERTY('dest').TO_URL()
		.DO().REDIRECT()
];
