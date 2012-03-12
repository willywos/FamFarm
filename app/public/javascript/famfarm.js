
function load_images(page) {
	//alert('in here');
	//alert(page)
	
	//1 * 4 = 4 + 1 = 5
	//2 * 4 = 8 + 2 = 10
	//3 * 4 = 12 + 3 = 15
	//4 * 4 = 16 + 4 = 20
	
	// 5 - 4 = 1
	// 10 - 4 = 6
	
	var numTiles = 4
	var stopAt = (page * numTiles) + page;
	var startAt = stopAt - numTiles;
	var picIndex = 1;
	for(var i = startAt; i <= stopAt; i++) {
		var picImage = "#pic_image_" + picIndex;
			
		$(picImage).attr("src", '/images/animal_' + i + '.png')
		
		if(picIndex <= 5) {
		//	alert('i:' + i)
		//	alert('picIndex' + picIndex)
		}
		picIndex++;
	}
	
}


$(document).ready(function() {
	
	var page = 1;
	load_images(page);
	
	$("#left_arrow").click(function() {
		page = page - 1;
		load_images(page)
	});
	
	$("#right_arrow").click(function() {
		page = page + 1;
		load_images(page)
	});
	
	$("#pic_1").mouseover(function() {
		$("#pic_1").css("cursor", "pointer");
		$("#pic_1").css("background-color", "#a20cd3");
	});
	
	$("#pic_1").mouseout(function() {
		$("#pic_1").css("background-color", "#ffffff");
	});

	$("#pic_2").mouseover(function() {
		$("#pic_2").css("cursor", "pointer");
		$("#pic_2").css("background-color", "#a20cd3");
	});
	
	$("#pic_2").mouseout(function() {
		$("#pic_2").css("background-color", "#ffffff");
	});

	$("#pic_3").mouseover(function() {
		$("#pic_3").css("cursor", "pointer");
		$("#pic_3").css("background-color", "#a20cd3");
	});
	
	$("#pic_3").mouseout(function() {
		$("#pic_3").css("background-color", "#ffffff");
	});

	$("#pic_4").mouseover(function() {
		$("#pic_4").css("cursor", "pointer");
		$("#pic_4").css("background-color", "#a20cd3");
	});
	
	$("#pic_4").mouseout(function() {
		$("#pic_4").css("background-color", "#ffffff");
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