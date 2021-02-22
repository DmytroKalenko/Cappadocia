$(document).ready(function() {
    $('.Slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    new fullpage('#fullPage', {
        scrollingSpeed: 500,
    });

    $('.pop_up__slider').slick({

        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

});