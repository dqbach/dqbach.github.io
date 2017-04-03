$(document).ready(function(){

	$('.carousel').carousel({
	  interval: false
	})

    // $('.carousel1').carousel({
    //   interval: 2000
    // })


	$(".menu-button").click(function(){
        $(".main-menu-box").toggleClass("main-menu-box-move");
    });

    $(".contact-box-button").click(function(){
        $(".contact-box").toggleClass("contact-box-up");
    });
    
    $(".contact-box-button").click(function(){
        $(".contact-box-title").toggleClass("block");
    });





    $(".logged").click(function(){
        $(".logged-box").toggleClass("appear");
    });





    $(".sap-xep-title").click(function(){
        $(".sap-xep").toggleClass("height-auto");
    });
    $(".nhan-hieu-title").click(function(){
        $(".nhan-hieu").toggleClass("height-auto");
    });
    $(".gia-tien-title").click(function(){
        $(".gia-tien").toggleClass("height-auto");
    });
    $(".loai-dien-thoai-title").click(function(){
        $(".loai-dien-thoai").toggleClass("height-auto");
    });
    $(".man-hinh-title").click(function(){
        $(".man-hinh").toggleClass("height-auto");
    });
     $(".man-hinh-title").click(function(){
        $(".man-hinh").toggleClass("height-auto");
    });
     $(".chat-lieu-vo-title").click(function(){
        $(".chat-lieu-vo").toggleClass("height-auto");
    });


   


});