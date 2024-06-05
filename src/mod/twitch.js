import { RULE } from '/rule.js';

export default [
	RULE()
		.AT().ANYWHERE()
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('tt_content', 'tt_medium')
];
