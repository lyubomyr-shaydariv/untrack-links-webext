import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('mkt_tok', 'sc_cid', 's_cid')
];
