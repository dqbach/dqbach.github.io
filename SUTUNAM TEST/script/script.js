jQuery(document).ready(function(){
    

    $(".menu-btn").click(function(){
        $(".book-btn").toggleClass("book-btn-active");
        $(".menu-btn__hamburger").toggleClass("active");
        $(".menu").toggleClass("menu-container-active");
        $(".menu-container").toggleClass("menu-container-active");
    });

    $(".totop").click(function(){
        $('html , body').animate({scrollTop:0},500);
    });

    $(window).ready(function() {
        if ($(window).width() < 576){
            $(".menu-content__items__list , .menu-content__items__slide , .menu-content__items__about").slideUp() ;
            $(".menu-content__items__title").click(function(){
                $(this).siblings(".menu-content__items__list").slideToggle() ;
                $(this).siblings(".menu-content__items__about").slideToggle() ;
                $(this).siblings(".menu-content__items__slide").slideToggle() ;
                $(this).parent().toggleClass("menu-content__items-active");
            })
            $(".plus img").attr("src", "img/copie2.svg");
        }
      });

    
    var card = $(".card");

    $(document).on("mousemove",function(e) {  
    var ax = -($(window).innerWidth()/2- e.pageX)/40;
    var ay = ($(window).innerHeight()/2- e.pageY)/20;
    card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    });


// SLIDE
    $('.slide1').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:2,
                nav:true
            },

        }
    })
    $('.slide2').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:2,
                nav:true
            },

        }
    })
    $('.slide3').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:4,
                nav:true
            },

        }
    })

  
});