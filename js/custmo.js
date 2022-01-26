$(function(){
    $('.autoplay').slick({
        slidesToShow: 3,
        dots:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span><i class="fas fa-arrow-left pre"></i></span>',
        nextArrow: '<span><i class="fas fa-arrow-right next"></i></span>'
      });
          
})