  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    $('body').scrollspy({
      target: '#navbarmain',
      offset: 100
    });

    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on('click', function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 100
      }, 1000);
      e.preventDefault();
    });


    $('.testimonial-wrap').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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




    $('.book-preview').each(function () {
      $(this).find('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });


    /* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 10) {
        $('.site-header').addClass('header-white');
      } else {
        $('.site-header').removeClass('header-white');
      }

    });



    // Smooth scrolling using jQuery easing
    // jQuery for page scrolling feature - requires jQuery Easing plugin


    // Closes responsive menu when a scroll trigger link is clicked
    $('.smoth-scroll').on('click', function (event) {
      $('.navbar-collapse').collapse('hide');
    });


  })(jQuery);