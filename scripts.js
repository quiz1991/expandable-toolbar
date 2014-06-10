$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= 500)
			$(".toolbar").fadeIn(600);
		else
			$(".toolbar").fadeOut(600);
	});

	$(".toolbar").click(function(event) {
		var toolbarList = $(".toolbar-list");
		// toolbarList.animate({width:'toggle'},350);
		if(toolbarList.data("status") === "folded") {
			$(".toolbar-icon").hide();
			toolbarList.show().animate({width: "450px"}, {duration: 400});
			toolbarList.data("status", "expanded");
		}
		else {
			toolbarList.show().animate({width: "90px"}, {duration: 400, complete: function() { toolbarList.hide(); $(".toolbar-icon").show(); }});
			toolbarList.data("status", "folded");
		}
	});

	// $(".toolbar").on("dragstart", function(event) {
	// 	var e = event.originalEvent;
	//     e.dataTransfer.setData("text/plain",
	//     (parseInt($(event.target).css("right"), 10) + e.clientX) + ',' + (parseInt($(event.target).css("bottom"),10) + e.clientY));
	// });

	// $("body").on("dragover", function(event) {
	// 	event.preventDefault();  
	// });

	// $("body").on("drop", function(event) {
	// 	var e = event.originalEvent;
	// 	var offset = e.dataTransfer.getData("text/plain").split(',');
	//     $(".toolbar").css("right", '0px');
	//     $(".toolbar").css("bottom", (parseInt(offset[1],10) - e.clientY) + 'px');
	// 	event.preventDefault();  
	// });

});