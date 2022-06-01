
  (function($) {
    "use strict";



    //Sticky Menu
    $(window).scroll(function() {
      var Width = $(document).width();

      if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
          if (Width > 767) {
              $(".header-wapper").addClass("sticky");
          }
      } else {
          $(".header-wapper").removeClass("sticky");
      }
    });



      // slick
  $('.slider-man-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-testimonials'
  });
  $('.slider-testimonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-man-image',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
})(jQuery); // End jQuery
