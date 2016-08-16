
$(document).ready(function() {
	console.log("farts");

	$('svg').css({

        //for firefox
        
        "-moz-animation-name":"rotatebox",
        "-moz-animation-duration":"1s",
        "-moz-animation-iteration-count":"1",
            "-moz-animation-fill-mode":"forwards",

        //for safari & chrome
        "-webkit-animation-name":"rotatebox",
        "-webkit-animation-duration":"1s",
        "-webkit-animation-iteration-count":"1",
        "-webkit-animation-fill-mode" : "forwards",
	});
	
	$(".about-title").find(".char1").css({"color":"green"
	// "-webkit-animation-name":"aboutChar1",
 //       "-webkit-animation-duration":"1s",
 //       "-webkit-animation-iteration-count":"1",
 //       "-webkit-animation-fill-mode" : "forwards",
	})	


	$('svg').animate({opacity:"1"}, 1000)

	$('.arc').click(function(){
		console.log("toots")
	})

	$('#about').click(function(){
		console.log("about")
	})
	

	$('#contact').click(function(){
		console.log("contact")
	})

	$('#work').click(function(){
		console.log("work")
	})
	
	//WORK TITLE ANIMATIONS
	
	$("#work").on("mouseover",function() {
		$(".work-container").css({
			"-webkit-animation-name":"rotatework",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		});
		$(".work-container").stop().animate({"opacity":"1"},500)
	});
	$('#work').on("mouseout", function(){
		$(".work-container").css({
			"-webkit-animation-name":"unrotatework",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		})
		$(".work-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
	
	//CONTACT TITLE ANIMATIONS
	
	$("#contact").on("mouseover",function() {
		$(".contact-container").css({
			"-webkit-animation-name":"rotatecontact",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		});
		$(".contact-container").stop().animate({"opacity":"1"},500)
	});
	$('#contact').on("mouseout", function(){
		$(".contact-container").css({
			"-webkit-animation-name":"unrotatecontact",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		})
		$(".contact-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
	
	//ABOUT TITLE ANIMATIONS
	
	$("#about").on("mouseover",function() {
		$(".about-container").css({
			"-webkit-animation-name":"rotateabout",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		});
		$(".about-container").stop().animate({"opacity":"1"},500)
	});
	$('#about').on("mouseout", function(){
		$(".about-container").css({
			"-webkit-animation-name":"unrotateabout",
        	"-webkit-animation-duration":"0.5s",
        	"-webkit-animation-iteration-count":"1",
        	"-webkit-animation-fill-mode" : "forwards",
		})
		$(".about-container").stop().animate({
			"opacity":"0"
		}, 500)
	})
});

$(function(){
	$("h3").lettering();
})



