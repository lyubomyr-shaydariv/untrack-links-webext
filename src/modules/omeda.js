addRule((function() {
	const filter = createFilterByConstantKeys("oly_anon_id", "oly_enc_id");
	return {
		redirect: function(url) {
			cleanSearchAndHashPairs(url, filter);
		}
	};
})());
