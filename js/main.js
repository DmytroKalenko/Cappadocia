$(document).ready(function () {
    
   //Sliders
    $('.Main_Slider').slick({
        autoplay: true,
        infinite: true,
        speed: 100,
        fade: true,
        cssEase: 'linear',
        dots: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });

    $('.FairyTail__Slider').slick({
        autoplay: false,
        infinite: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        dots: false,
       
       
    });
    $('.OurTrip_Slider').slick({
        autoplay: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: false,
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });
    $('.Attractions__Slider').slick({
        autoplay: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });

    $('.Pop_up__slider').slick({
        arrows: true,
        dots: true,
    });

    
    //bURGER MENU
    $('.header__burger, .header__list ul li').on('click', function () {
        $('.header__burger, .header__list').toggleClass("Action");

    });

    //Pup-ups in Hotel Slide 
    //first   
    $('.blok.first').on('click', function () {
        $('.Pop_up.First').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up').on('click', function () {
        $('.Pop_up.First').removeClass("Active");
        $('body').removeClass("NOScroll");
    });
    //Second
    $('.blok.second').on('click', function () {
        $('.Pop_up.Second').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up.Second').on('click', function () {
        $('.Pop_up.Second').removeClass("Active");
        $('body').removeClass("NOScroll");
    });
  
    //Threeth
    $('.blok.threeth').on('click', function () {
        $('.Pop_up.Threeth').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up.Threeth').on('click', function () {
        $('.Pop_up.Threeth').removeClass("Active");
        $('body').removeClass("NOScroll");
    });

    //Fourth
    $('.blok.fourth').on('click', function () {
        $('.Pop_up.Fourth').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up.Fourth').on('click', function () {
        $('.Pop_up.Fourth').removeClass("Active");
        $('body').removeClass("NOScroll");
    });

    //Fifth
    $('.blok.fifth').on('click', function () {
        $('.Pop_up.Fifth').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up.Fifth').on('click', function () {
        $('.Pop_up.Fifth').removeClass("Active");
        $('body').removeClass("NOScroll");
    });
    
    //Sixth
    $('.blok.sixth').on('click', function () {
        $('.Pop_up.Sixth').toggleClass("Active");
        $('body').toggleClass("NOScroll");
        $('.Pop_up__slider').slick('setPosition');
    });

    $('.ClosePop-up.Sixth').on('click', function () {
        $('.Pop_up.Sixth').removeClass("Active");
        $('body').removeClass("NOScroll");
    });

    //Book now
    $('.OpenPop_upBtn').on('click', function () {
        $('.Pop_up.Book').toggleClass("Active");
        $('body').toggleClass("NOScroll");
    
    });

    $('.ClosePop-up.Sixth').on('click', function () {
        $('.Pop_up.Book').removeClass("Active");
        $('body').removeClass("NOScroll");
    });
    //lazyLoad
    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
      });

});