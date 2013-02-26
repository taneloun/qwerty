function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerHeight != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	var style = window.getComputedStyle(popUpDiv);
	var halfHeight = style.getPropertyValue('height');
	halfHeight = parseInt(halfHeight)/2;
	popUpDiv_height=viewportheight/2-halfHeight;//200 is half popup's height
	if (popUpDiv_height <= 0) {
		popUpDiv_height = 0;
	}
	popUpDiv.style.top = popUpDiv_height + 'px';
	
}
function window_pos(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportwidth = window.innerWidth;
	} else {
		viewportwidth = document.documentElement.clientWidth;
	}
	if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
		window_width = viewportwidth;
	} else {
		if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
			window_width = document.body.parentNode.clientWidth;
		} else {
			window_width = document.body.parentNode.scrollWidth;
		}
	}
	var popUpDiv = document.getElementById(popUpDivVar);
	var style = window.getComputedStyle(popUpDiv);
	var halfWidth = style.getPropertyValue('width');
	halfWidth = parseInt(halfWidth)/2;
	window_width=window_width/2-halfWidth;
	if (window_width <= 0) {
		window_width = 0;
	}	
	popUpDiv.style.left = window_width + 'px';
}
function popup(windowname) {	
	blanket_size(windowname);
	window_pos(windowname);
	toggle('blanket');
	toggle(windowname);		
}