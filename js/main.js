$(document).ready(function() {
    $('.Slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,

    });


    new fullpage('#fullPage', {
        scrollingSpeed: 500,
    });

    $('.pop_up__slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
    });

});