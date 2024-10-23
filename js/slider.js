// when document is fully loaded
$(document).ready(function () {
    $('.library-slider , .car-slider , .special-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 700,
      infinite: true,
      touchThreshold: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('.testimonials-slider').slick({
      dots: true,
      autoplay: false,
      speed: 700,
      infinite: true,
      touchThreshold: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });    
  $('.team-slider').slick({
    dots: false,
    speed: 700,
    infinite: true,
    centerPadding: "30px",
    spaceBetween: 30,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev-team'),
    nextArrow: $('.next-team'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
    

    
    
    