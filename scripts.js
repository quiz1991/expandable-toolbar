$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= 500)
			$(".toolbar").fadeIn(600);
		else
			$(".toolbar").fadeOut(600);
	});

	$(".toolbar-icon").click(function() {
		$(".toolbar-icon").hide();
		$(".toolbar-list").show().animate({width: "230px"}, {duration: 400});
	});

	$(".fold-icon").click(function() {
		$(".toolbar-list").show().animate({width: "50px"}, {duration: 400, complete: function() { $(".toolbar-list").hide(); $(".toolbar-icon").show(); }});
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