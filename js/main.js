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
        scrollingSpeed: 900,
        parallax:true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8' ],
    });

    $('.pop_up__slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
    });
    //adding the action to the button
    $(document).on('click', '#UPButton', function(){
        fullpage_api.moveTo('page1');
      });
$(document).on('click', '#Our_trip', function(){
    fullpage_api.moveTo('page3', 1);
  });
  $(document).on('click', '#FairyTail', function(){
    fullpage_api.moveTo('page2', 1);
  });
  $(document).on('click', '#Hotel', function(){
    fullpage_api.moveTo('page4', 1);
  });
  $(document).on('click', '#Attractions', function(){
    fullpage_api.moveTo('page5', 1);
  });
  $(document).on('click', '#Price', function(){
    fullpage_api.moveTo('page6', 1);
  });
  $(document).on('click', '#BookNow', function(){
    fullpage_api.moveTo('page7', 1);
  });
  $(document).on('click', '#Contacts', function(){
    fullpage_api.moveTo('page8', 1);
  });
 

});