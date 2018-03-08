jQuery("[data-eventid]").each(function(i, e) {
	var eid = jQuery(e).data("eventid");
	var set_text = eid_to_text(eid);
	var eid_div = jQuery(e).parent().find(".rti-eid");
	if (eid_div.length !== 0) $(eid_div).remove();
	jQuery(e).parent().append(set_text);
});

function eid_to_text(eid) {
	var id = atob(eid);
	var eid = id.split(" ")[0];
	var cal_id = id.split(" ")[1];
	if (cal_id.endsWith("@g")) cal_id += "roup.calendar.google.com";
	var set_text =
		'<div style="font-weight: 700; margin: 10px 0 10px 0;" class="rti-eid flexy">' +
		'EID: <span style="color:#16a085;">' +
		eid +
		"</span>" +
		"<br>" +
		'CID <span style="color:#e67e22">' +
		cal_id +
		"</span>" +
		"</div>";
	return set_text;
}

jQuery(".rti-eid").css({
	"-moz-user-select": "text",
	"-khtml-user-select": "text",
	"-webkit-user-select": "text",
	"-ms-user-select": "text",
	"user-select": "text"
});

jQuery(".flexy").css({
	order: 3,
	width: "600px"
});
