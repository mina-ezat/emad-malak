 $('.single-item').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
        arrows: false,
      adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 4000
    });
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 1500,
      slidesToScroll: 3, 
       nextArrow: '.next',
      prevArrow: '.prev',
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.multiple-item').slick({
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 1500,
      slidesToScroll: 3, 
       nextArrow: '.next-2',
      prevArrow: '.prev-2',
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $(document).ready(function(){
      $(".selsct-blood-type").on("change",function(){
       $(".blood-type").val($(".selsct-blood-type").val());
      })
      $(".selsct-your-city").on("change",function(){
        $(".your-city").val($(".selsct-your-city").val());
       })
       $(".scroll-top").click(function () {
        $(window).scrollTop(0);
    })
    new WOW().init();
     $(window).ready(function () {
     $(".loading").fadeOut(1500);
    })
    $('html').niceScroll();
  });