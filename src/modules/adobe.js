registerModule(function() {
	function isSafeKeyPair(k, v) {
		return k !== "sc_cid" && k !== "mkt_tok" && k != "s_cid";
	};
	return {
		redirect: function(url) {
			url.search = removeSearchPair(url.search, isSafeKeyPair);
			url.hash = removeHashPair(url.hash, isSafeKeyPair);
		}
	};
});