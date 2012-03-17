
function mapSoundFile(soundfile) {
	
}

function play(soundfile) {
	$("#sound").html("<audio controls preload=\"auto\" src=\"" + soundfile + "\" autoplay=\"autoplay\" autobuffer></audio>");
	$("#sound").css("visibility", "hidden");
}

function load_images(page) {
	var numTiles = 4
	var stopAt = (page * numTiles);
	var startAt = stopAt - numTiles;
	var picIndex = 0;
	
	for(var i = startAt; i <= stopAt; i++) {
		var picImage = "#pic_image_" + picIndex;
		$(picImage).attr("src", '/images/animal_' + i + '.png');
		$(picImage).attr("data-sound", '/sounds/animal_' + i + '.wav');
		$(picImage).wiggle('start', {limit: 5})
		picIndex++;
	}	
}


function mouseOver(id) {
	$(id).css("cursor", "pointer");
	$(id).css("background-color", "#a20cd3");
	$(id).wiggle('start', {limit: 5})
}

function mouseOut(id) {
	$(id).css("background-color", "#ffffff");
	$(id).wiggle('stop')
}

$(document).ready(function() {
	
	var page = 1;
	load_images(page);
	
	$("#left_arrow").click(function() {
		page = page - 1;
		if(page < 1) {
			page = 4;
		}
		load_images(page)
	});
	
	$("#right_arrow").click(function() {
		page = page + 1;
		if(page > 4) {
			page = 1;
		}
		load_images(page)
	});
	
	
	$("#pic_image_1").click(function() {
		play($(this).attr("data-sound"));
	});
	
	$("#pic_image_2").click(function() {
		play($(this).attr("data-sound"));
	});
	
	$("#pic_image_3").click(function() {
		play($(this).attr("data-sound"));
	});
	
	$("#pic_image_4").click(function() {
		play($(this).attr("data-sound"));
	});
	
	$("#pic_1").mouseover(function() {
		mouseOver("#pic_1");
	});
	
	$("#pic_1").mouseout(function() {
		mouseOut("#pic_1")
	});

	$("#pic_2").mouseover(function() {
		mouseOver("#pic_2");
	});
	
	$("#pic_2").mouseout(function() {
		mouseOut("#pic_2");
	});

	$("#pic_3").mouseover(function() {
		mouseOver("#pic_3");
	});
	
	$("#pic_3").mouseout(function() {
		mouseOut("#pic_3");
	});

	$("#pic_4").mouseover(function() {
		mouseOver("#pic_4");
	});
	
	$("#pic_4").mouseout(function() {
		mouseOut("#pic_4");
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