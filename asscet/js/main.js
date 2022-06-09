
  (function($) {
    "use strict";

    setTimeout(function() {
      $('#ctn-preloader').addClass('loaded');
      // Una vez haya terminado el preloader aparezca el scroll
      $('body').removeClass('no-scroll-y');
  
      if ($('#ctn-preloader').hasClass('loaded')) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);

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
    autoplay: true,
    autoplaySpeed:3000,
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
      autoplay: true,
      autoplaySpeed:3000,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
})(jQuery); // End jQuery


const navBar_button = document.getElementById('nav_bar');
const time_button = document.getElementById('nav-mob');
const overly = document.getElementById('overly');

navBar_button.addEventListener('click', () => {
  overly.classList.add('active');
});

time_button.addEventListener('click', () => {
  overly.classList.remove('active');
});