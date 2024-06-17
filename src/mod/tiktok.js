import { RULE } from '/rules.js';

export default [
	RULE()
		.AT().DOMAIN('tiktok.com')
		.FROM().QUERY_ENTRIES()
		.DO().REMOVE('_d', 'checksum', 'embed_source', 'is_copy_url', 'is_from_webapp', 'language', 'preview_pb', 'refer', 'referer_url', 'referer_video_id', 'sec_user_id', 'sender_device', 'sender_web_id', 'share_app_id', 'share_app_name', 'share_iid', 'share_link_id', 'share_item_id', 'source', 'timestamp', 'tt_from', 'u_code', 'user_id'),
	RULE()
		.AT().DOMAIN('tiktok.com').PATHNAME('/link/v2')
		.FROM().QUERY_ENTRIES()
		.APPLY().GET_PROPERTY('target').TO_URL()
		.DO().REDIRECT()
];
