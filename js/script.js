
$(document).ready(function() {
	console.log("farts");

	$('svg').css({
        "-moz-animation-name":"rotatecircle",
        "-moz-animation-duration":"1s",
        "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"forwards",

        "-webkit-animation-name":"rotatecircle",
        "-webkit-animation-duration":"1s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",
	});
	
	$('svg').animate({opacity:"1"}, 1000)
	
	// $(".about-title").find(".char1").css({"color":"green"})	

	function leaveHome() {
		$('svg').css({
			"-moz-animation-name":"leavehome",
		    "-moz-animation-duration":"1s",
		    "-moz-animation-iteration-count":"1",
		    "-moz-animation-fill-mode":"forwards",
		
		    "-webkit-animation-name":"leavehome",
		    "-webkit-animation-duration":"1s",
		    "-webkit-animation-iteration-count":"1",
		    "-webkit-animation-fill-mode" : "forwards",
		})
		$('svg').animate({opacity:"0"}, 900)
	}
	
	
	$('#about').click(function(){
		setTimeout(function() {
            window.location = "about.html";
        }, 1000);
        leaveHome()
        return false;
	})
	
	$('#contact').click(function(){
		setTimeout(function() {
            window.location = "contact.html";
        }, 1000);
        leaveHome()
        return false;
	})

	$('#work').click(function(){
		setTimeout(function() {
            window.location = "portfolio.html";
        }, 1000);
        leaveHome()
        return false;
	})
	
	//WORK TITLE ANIMATIONS
	
	$("#work").on("mouseenter",function() {
		$(".work-container").css({
			"-webkit-animation-name":"rotatework",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"rotatework",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		});
		$(".work-container").stop().animate({"opacity":"1"},500)
	});
	$('#work').on("mouseleave", function(){
		$(".work-container").css({
			"-webkit-animation-name":"unrotatework",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"unrotatework",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		})
		$(".work-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
	
	//CONTACT TITLE ANIMATIONS
	
	$("#contact").on("mouseenter",function() {
		$(".contact-container").css({
			"-webkit-animation-name":"rotatecontact",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"rotatecontact",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		});
		$(".contact-container").stop().animate({"opacity":"1"},500)
	});
	$('#contact').on("mouseleave", function(){
		$(".contact-container").css({
			"-webkit-animation-name":"unrotatecontact",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"unrotatecontact",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		})
		$(".contact-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
	
	//ABOUT TITLE ANIMATIONS
	
	$("#about").on("mouseenter",function() {
		$(".about-container").css({
			"-webkit-animation-name":"rotateabout",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"rotateabout",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		});
		$(".about-container").stop().animate({"opacity":"1"},500)
	});
	$('#about').on("mouseleave", function(){
		$(".about-container").css({
			"-webkit-animation-name":"unrotateabout",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
        	
        	"-moz-animation-name":"unrotateabout",
        	"-moz-animation-duration":"0.5s",
        	"-moz-animation-iteration-count":"1",
        	"-moz-animation-fill-mode" : "forwards",
		})
		$(".about-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
});

$(function(){
	$("h3").lettering();
})

$(".nav").on('click', function(){
	$(".nav-open").toggle();
})

