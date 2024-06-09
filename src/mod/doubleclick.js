import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().HOSTNAME(/doubleclick(?:\.[a-z]{2,}){1,}/)
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('tag_for_child_directed_treatment').SUBSTRING(2).TO_URL()
		.DO().REDIRECT()
];