$(function(){
  $('.navigation1').click(function(){
    $('.navigation2').removeClass('display-none')
    $('.navigation1').addClass('display-none')
   })
   $('.navigation2').click(function(){
    $('.navigation1').removeClass('display-none')
    $('.navigation2').addClass('display-none')
   })
   $('#body-cont1>img:first-of-type').click(function(){
    $('.navigation2').removeClass('display-none')
    $('.navigation1').addClass('display-none')
   })
   var swiper = new Swiper('#body-cont2 .swiper-container', {
      slidesPerView: 'auto',
      navigation: {
        nextEl: '#body-cont2 .swiper-button-next',
        prevEl: '#body-cont2 .swiper-button-prev',
      },
    });
    $('#body-cont2 .swiper-button-next').click(function(){
      $('#body-cont2 .swiper-button-next').addClass('display-none')
      $('#body-cont2 .swiper-button-prev').removeClass('display-none')
    })
    $('#body-cont2 .swiper-button-prev').click(function(){
      $('#body-cont2 .swiper-button-prev').addClass('display-none')
      $('#body-cont2 .swiper-button-next').removeClass('display-none')
    })
    var swiper = new Swiper('#body-cont3 .swiper-container', {
        cssMode: true,
        navigation: {
          nextEl: '#body-cont3 .swiper-button-next',
          prevEl: '#body-cont3 .swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
      });
      var swiper = new Swiper('#body-cont5 .swiper-container', {
        pagination: {
          el: '#body-cont5 .swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      });
      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
})