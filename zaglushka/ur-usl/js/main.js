$(document).ready(function(){
	$(".fa-bars").on("click", function() {
		var target = $(".menu");
		$(target).toggleClass(" open");
	});
});