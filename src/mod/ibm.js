import { JUST, RULE } from '/rules.js';

export default [
	RULE.MUTATE_ENTRIES(
		JUST.EXCLUDING("spJobID", "spMailingID", "spReportId", "spUserID")
	)
];