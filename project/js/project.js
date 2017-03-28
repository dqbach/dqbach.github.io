$(document).ready(function(){

	$('.carousel').carousel({
	  interval: false
	})

    $('.carousel1').carousel({
      interval: 3000
    })


	$(".menu-button").click(function(){
        $(".main-menu-box").toggleClass("main-menu-box-move");
    });

    $(".contact-box-button").click(function(){
        $(".contact-box").toggleClass("contact-box-up");
    });
    
    $(".contact-box-button").click(function(){
        $(".contact-box-title").toggleClass("block");
    });



});