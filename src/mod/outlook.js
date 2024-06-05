import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().HOSTNAME('safelinks.protection.outlook.com')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('url').TO_URL()
		.DO().REDIRECT()
];
