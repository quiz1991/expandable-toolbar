$(document).ready(function() {
	$(".toolbar-button").click(function() {
		var toolbarList = $(".toolbar-list");
		// toolbarList.animate({width:'toggle'},350);

		if(toolbarList.data("direction") === "left") {
			toolbarList.show().animate({width: "495px"}, {duration: 400});
			toolbarList.data("direction", "right");
		}
		else {
			toolbarList.show().animate({width: "90px"}, {duration: 400});
			toolbarList.data("direction", "left");
		}
			
	});
});