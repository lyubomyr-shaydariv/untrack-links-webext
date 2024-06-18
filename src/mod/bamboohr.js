import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('bamboohr.com').PATHNAME(/^\/careers\//)
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('source')
];