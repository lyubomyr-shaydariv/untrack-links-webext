addRule((function() {
	const filter = EXCLUDE("Campaign");
	return {
		redirect: function(url) {
			if ( false ) { // if parse.ly is only supposed to work at target sites, there is currently no way to detect it robustly
				cleanSearchAndHashPairs(url, filter);
			}
		}
	};
})());
