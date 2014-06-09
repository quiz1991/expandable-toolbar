$(document).ready(function() {
	$(".toolbar").click(function(event) {
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

	$(".test").on("dragstart", function(event) {
		var e = event.originalEvent;
		// console.log(parseInt($(event.target).css("left"), 10));
    e.dataTransfer.setData("text/plain",
    (parseInt($(event.target).css("left"), 10) - e.clientX) + ',' + (parseInt($(event.target).css("top"),10) - e.clientY));
    // console.log(e.dataTransfer.getData("text/plain"));
	});

	$("body").on("drop", function(event) {
		alert("haha");
		var e = event.originalEvent;
		var offset = e.dataTransfer.getData("text/plain").split(',');
		console.log(offset);
    $(".test").css("left", (e.clientX + parseInt(offset[0],10)) + 'px');
    $(".test").css("top", (e.clientY + parseInt(offset[1],10)) + 'px');
    event.preventDefault();
	});

	$("body").on("dragover", function(event) {
		event.preventDefault();
	});

});