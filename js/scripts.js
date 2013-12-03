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
	
	$(".darkspawn").on("click", function() {
		window.location = "http://d-spawn.com";
	});
	
	$(".sickbass").on("click", function() {
		window.location = "http://sickbassists.com";
	});
	
	$(".CUimportant").on("click", function() {
		window.location = "http://codeumbra.eu/why-you-should-use-important-as-a-last-resort";
	});
	
	$(".CUcascade").on("click", function() {
		window.location = "http://codeumbra.eu/the-cascade-part-of-css";
	});
	
	$(".CUpureclick").on("click", function() {
		window.location = "http://codeumbra.eu/pure-css-click-dropdown";
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
