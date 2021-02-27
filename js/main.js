$(document).ready(function() {
    $('.Slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,

    });
    //bURGER MENU
    $('.header__burger , .header__list li a').on('click', function() {
        $('.header__list').slideToggle();
        $('.header__burger').removeClass("Action");
    });
    $('.header__burger').on('click', function() {
        $('.header__burger').toggleClass("Action");

    });

    //Sliders_in_PopUps
    $('.pop_up__slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
    });

    //ScrollPAge
    new fullpage('#fullPage', {
        scrollingSpeed: 1500,
        parallax: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    });
    //adding the action to ScrollPAge
    $(document).on('click', '#UPButton', function() {
        fullpage_api.moveTo('page1');
    });
    $(document).on('click', '#Our_trip', function() {
        fullpage_api.moveTo('page3', 1);
    });
    $(document).on('click', '#FairyTail', function() {
        fullpage_api.moveTo('page2', 1);
    });
    $(document).on('click', '#Hotel', function() {
        fullpage_api.moveTo('page4', 1);
    });
    $(document).on('click', '#Attractions', function() {
        fullpage_api.moveTo('page5', 1);
    });
    $(document).on('click', '#Price', function() {
        fullpage_api.moveTo('page6', 1);
    });
    $(document).on('click', '#BookNow', function() {
        fullpage_api.moveTo('page7', 1);
    });
    $(document).on('click', '#Contacts', function() {
        fullpage_api.moveTo('page8', 1);
    });


});