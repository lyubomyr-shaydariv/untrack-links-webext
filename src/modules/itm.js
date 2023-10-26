addRule((function() {
	const filter = createFilterByConstantKeys("itm_campaign", "itm_medium", "itm_source", "itm_content", "itm_term");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
