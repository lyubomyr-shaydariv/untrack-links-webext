import * as registry from '/registry.js';
import * as rules from '/rules.js';

{
	const at = rules.AT_DOMAIN("linkedin.com");
	const filter = rules.EXCLUDE("eBP", "lgCta", "lgTemp", "lipi", "midSig", "midToken", "recommendedFlavor", "refId", "trackingId", "trk", "trkEmail");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				rules.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const at = rules.AND(
		rules.AT_DOMAIN("linkedin.com"),
		rules.AT_PATHNAME("/safety/go")
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return rules.REDIRECT_FROM_SEARCH_PARAMS(url, "url");
			}
		}
	});
}
