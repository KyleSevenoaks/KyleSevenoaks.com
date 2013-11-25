$(function(){
	$("#mobile-menu").on("click", function() {
		$("nav").toggleClass("active");
	});

	$("#the-header").on("click", function() {
		window.location = "index.html";
	});
	
	$(".css3slider").on("click", function() {
		window.location = "Css3Slider/index.html";
	});
	
	$(".resolicious").on("click", function() {
		window.location = "http://kyle_sevenoaks.bitbucket.org";
	});



	setTimeout(function () {
    	$(".animate-right").removeClass('animate-right');
	}, 500);
	
	setTimeout(function () {
    	$(".animate-left").removeClass('animate-left');
	}, 500);
	
	setTimeout(function () {
    	$(".animate-o").removeClass('animate-o');
	}, 500);
});
