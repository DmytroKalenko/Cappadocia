$(document).ready(function () {
    $('.Main_Slider').slick({
        autoplay: true,
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

    $('.FairyTail__Slider').slick({
        autoplay: true,
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
        arrows: false,
        dots: true,
    });

    
    //bURGER MENU


    $('.header__burger, .header__list ul li').on('click', function () {
        $('.header__burger, .header__list').toggleClass("Action");

    });

    $('.blok.first').on('click', function () {
        $('.Pop_up').toggleClass("Active");
        $('body').toggleClass("NOScroll");
    });

    $('.ClosePop-up').on('click', function () {
        $('.Pop_up').removeClass("Active");
        $('body').removeClass("NOScroll");
    });
  


});