jQuery('.lv-event-title').each(function(i, e) {
	var eid = e.classList[2].split('-')[1]
	var set_text = eid_to_text(eid, 'list')
	var eid_div = jQuery(e).parent().find('.rti-eid');
	if (eid_div.length !== 0)
		$(eid_div).remove();
	jQuery(e).parent().append(set_text);
});

var data_elem = jQuery('[data-eid]');
if (data_elem.length !== 0) {
	var eid = data_elem.attr('data-eid');
	var set_text = eid_to_text(eid, 'detail');
	eid_div = data_elem.parent().find('.rti-eid');
	if (eid_div.length !== 0)
		$(eid_div).remove();
	data_elem.parent().prepend(set_text);
}

function eid_to_text(eid, page_type) {
	var id = atob(eid)
	var eid = id.split(' ')[0]
	var cal_id = id.split(' ')[1]
	if (page_type === 'list')
		var set_text = '<div style="font-weight: 700; margin: 10px 0 10px 0;" class="rti-eid">EID: <span style="color:#16a085;">' + eid + 
		'</span><br>CID <span style="color:#e67e22">' + cal_id + '</span></div>';
	else
		var set_text = '<div style="font-weight: 700; margin-left: 30px;" class="rti-eid"><p>EID: <span style="color:#16a085;">' + eid + 
		'</span>&nbsp;&nbsp;CID <span style="color:#e67e22">' + cal_id + '</span></p></div>';
	return set_text
}

jQuery('.rti-eid').css({
	'-moz-user-select': 'text',
	'-khtml-user-select': 'text',
	'-webkit-user-select': 'text',
	'-ms-user-select': 'text',
	'user-select': 'text'
});
