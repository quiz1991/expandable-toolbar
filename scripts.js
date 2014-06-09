$(document).ready(function() {
	$(".toolbar").click(function(event) {
		var toolbarList = $(".toolbar-list");
		// toolbarList.animate({width:'toggle'},350);
		if(toolbarList.data("status") === "folded") {
			// alert(toolbarList.data("status"));
			toolbarList.show().animate({width: "495px"}, {duration: 400});
			toolbarList.data("status", "expanded");
		}
		else {
			toolbarList.show().animate({width: "90px"}, {duration: 400, complete: function() {toolbarList.hide();}});
			// alert(toolbarList.data("status"));
			toolbarList.data("status", "folded");
		}
	});

	$(".toolbar").on("dragstart", function(event) {
		var e = event.originalEvent;
		// console.log(event.target.attr("class"));
	    e.dataTransfer.setData("text/plain",
	    (parseInt($(event.target).css("right"), 10) + e.clientX) + ',' + (parseInt($(event.target).css("bottom"),10) + e.clientY));
	    console.log(e.dataTransfer.getData("text/plain"));
	});

	$("body").on("dragover", function(event) {
		event.preventDefault();  
	});

	$("body").on("drop", function(event) {
		var e = event.originalEvent;
		var offset = e.dataTransfer.getData("text/plain").split(',');
		console.log(offset);
		console.log(e.clientX + " " + e.clientY);
	    // $(".toolbar").css("right", (parseInt(offset[0],10) - e.clientX) + 'px');
	    $(".toolbar").css("right", '0px');
	    $(".toolbar").css("bottom", (parseInt(offset[1],10) - e.clientY) + 'px');
		event.preventDefault();  
	});

});