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


});