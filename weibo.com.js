


function hideWeiboAds() {
	// hide all right side AD
	var right_side_ads = $("[id^=v6_pl_rightmod_ads]"); //such as v6_pl_rightmod_ads36, v6_pl_rightmod_ads35
	right_side_ads.each(function () {
		$(this).hide();
		console.log("=======================remove weibo ad: " + $(this));
	});

	var ad2 = $("#v6_trustPagelet_recom_member");
	ad2.hide();

	var recom_member_div = $("#v6_trustPagelet_recom_member");
	recom_member_div.hide();
}

hideWeiboAds();
for (var i = 0; i < 10; i ++) {
	setTimeout(hideWeiboAds, i * 1000);
}