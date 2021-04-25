$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 300,
        cssEase: 'linear',
        prevArrow: '<span class="left_arrow"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="right_arrow"><i class="fas fa-arrow-right"></i></span>',
    });
  });

  // <img src="http://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/bgn-home-slider-01.jpg">

  //prevArrow- class = slick-prev
  //nextArrow- class= slick-next
  //dotsClass- class= slick-dots
  //dots_active- class = slick-active

  //ul (slick-dots class-ı buna verilir) => li (slick-active class-ı li-lərə tətbiq olunur) => button:: before (yumru qara nöqtələr buttonlardır. Daha dogrusu button:: before).
  //Qeyd: ul => button id = slick-slide-control00 (control01, control02 və s. bu şəkildə slayddakı obyekt sayına görə artır. Ancaq rəqəm 00-dan başlayır).



  /*
  Responsive slick slider:

  $('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
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
  */