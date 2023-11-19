import * as registry from '/registry.js';
import * as __ from '/rules.js';

{
	const at = __.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME("/url/")
	);
	const pipeline = __.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_SEARCH_PARAMS(),
		__.MAP_PROPERTY_AT("q"),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return pipeline(url);
			}
		}
	});
}
{
	const ampPrefix = "/amp/s/";
	const at = __.AND(
		__.AT_DOMAIN("google.com"),
		__.AT_PATHNAME_BY_STARTS_WITH(ampPrefix)
	);
	const pipeline = __.PIPE(
		{
			onError: __.REDIRECT_CONFIRMATION_URL
		},
		__.MAP_EXTRACT_PATHNAME(),
		__.MAP_SUBSTRING(ampPrefix.length),
		__.MAP_TO_URL()
	);
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				return pipeline(url);
			}
		}
	});
}
{
	const at = __.AT_HOSTNAME_BY_REGEXP(/^(?:[^.]+\.)?google\.[^.]+$/);
	const filter = __.EXCLUDE("ei", "gs_gbg", "gs_lcp", "gs_mss", "gs_rn", "gws_rd", "sei", "ved");
	registry.addRule({
		redirect: (url) => {
			if ( at(url) ) {
				__.FILTER_ENTRIES(url, filter);
			}
		}
	});
}
{
	const filter = __.AND(
		__.EXCLUDE("_ga", "dclid", "gclid", "gclsrc", "gs_l"),
		__.EXCLUDE_BY_STARTS_WITH("ga_")
	);
	registry.addRule({
		redirect: (url) => {
			__.FILTER_ENTRIES(url, filter);
		}
	});
}
