jQuery(document).ready(function(){
    
// 3D 
    var card = $(".card");
    $(document).on("mousemove",function(e) {  
        var ax = -($(window).innerWidth()/2- e.pageX)/40;
        var ay = ($(window).innerHeight()/2- e.pageY)/20;
        card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    });


// MENU BTN CLICK    
    $(".menu-btn").click(function(){
        $(".book-btn").toggleClass("book-btn-active");
        $(".menu-btn__hamburger").toggleClass("active");
        $(".menu").toggleClass("menu-container-active");
        $(".menu-container").toggleClass("menu-container-active");
    });


// MENU ON RESPONSIVE
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

// TO TOP BTN CLICK   
    $(".totop").click(function(){
        $('html , body').animate({scrollTop:0},500);
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

// FANCY BOX
    $(".img-insta-box a[data-fancybox='insta']").fancybox();



//OPENING
    new TimelineMax()
    .to($('.hero-img'),0.5,{x:0,opacity:1})
    .staggerTo($('.welcome-container__title *'),0.5,{x:0,opacity:1},0.2);

    new TimelineMax()
    .to($('.card img'),0.5,{scale:1,opacity:1})
    .to($('.card h2'),0.3,{x:-50+'%',opacity:1})
    .to($('.card .enter-btn'),0.5,{y:-50+'%',opacity:1});

    TweenMax.to($('.card ul'),0.5,{x:-50+'%',opacity:1});



// WHEN SCROLL
$(window).on('load , scroll ',(function() {
    var position = $(window).scrollTop();
    if(position <  $('.about-container').offset().top){
        $('header').css('background','rgba(0, 0, 0, 0)');
        $('.book-btn').css('top','40px');
        $('.book-btn a').css('background','rgba(0, 0, 0, 0)');
        $('.book-btn-active a').css('background','rgba(0, 0, 0, 0)');
        
    }
    if(position >=  $('.about-container').offset().top-2){
        $('header').css('background','rgba(0, 0, 0, 0.1)')
        $('.book-btn').css('top','20px');
        $('.book-btn a').css('background','#e6e6e6');
        $('.book-btn-active a').css('background','rgba(0, 0, 0, 0)');

        TweenMax.to($('.about-container .title-1'),0.5,{y:0,opacity:1});
        TweenMax.to($('.about-container .title-2'),0.5,{x:0,opacity:1});
        TweenMax.to($('.about-container .black-line'),0.3,{width:100+'%', opacity:1});
        new TimelineMax().staggerTo($('.brand img'),0.3,{scale:1,opacity:1},0.2);
    } ;
    if(position >= 1697-600 ){
        TweenMax.to($('.about-col p'),0.5,{x:0,opacity:1});
        TweenMax.to($('.featured-col p'),0.5,{x:0,opacity:1});
    }
    if(position >= $('.hotels-container').offset().top-2){
        TweenMax.to($('.hotels-container__slide'),0.5,{y:0,opacity:1});
        TweenMax.to($('.hotels-container .discover-btn'),0.5,{x:0,opacity:0.2});
        TweenMax.to($('.g-talk-container .left-col'),0.5,{x:0,opacity:1});
    }
    if(position >= $('.g-talk-container').offset().top-2){
        TweenMax.to($('.g-talk-container .intro-box'),0.5,{x:0,opacity:1});  
        TweenMax.to($('.g-talk-container .slide-box'),0.5,{y:0,opacity:1});   
    }
    if(position >= $('.insta-container').offset().top-2){
        new TimelineMax() .staggerTo($('.insta-container a[data-fancybox="insta"]'),0.5,{y:0,opacity:1},0.1);
        TweenMax.to($('.insta-container .plus'),0.5,{x:0,opacity:1});   
    }
    return false
}));

$.scrollify({
    section : ".scrollify",
    setHeights: false,
  });
  

    





});

