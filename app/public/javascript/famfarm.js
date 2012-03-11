
function load_images(startIndex) {
	//alert('in here');
	
}


$(document).ready(function() {
	
	var index = 0;
	load_images(index);
	
	$("#left_arrow").click(function() {
		index = index - 1;
		load_images(index)
	});
	
	$("#right_arrow").click(function() {
		index = index + 1;
		load_images(index)
	});
	
	$("#left_arrow").mouseover(function() {
		$("#left_arrow").css("cursor", "pointer");
		$("#left_arrow").css("background-image", "url('/images/left_arrow_over.png')");
	});
	
	$("#left_arrow").mouseout(function() {
		$("#left_arrow").css("background-image", "url('/images/left_arrow.png')");
	});
	
	$("#right_arrow").mouseover(function() {
		$("#right_arrow").css("cursor", "pointer");
		$("#right_arrow").css("background-image", "url('/images/right_arrow_over.png')");
	});
	
	$("#right_arrow").mouseout(function() {
		$("#right_arrow").css("background-image", "url('/images/right_arrow.png')");
	});
});