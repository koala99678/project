$(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '#cont2 .swiper-button-next',
      prevEl: '#cont2 .swiper-button-prev',
    },
  });
  $('#cont2 .swiper-button-next').click(function(){
    $('#cont2 .swiper-button-next').addClass('display-none')
    $('#cont2 .swiper-button-prev').removeClass('display-none')
  })
  $('#cont2 .swiper-button-prev').click(function(){
    $('#cont2 .swiper-button-prev').addClass('display-none')
    $('#cont2 .swiper-button-next').removeClass('display-none')
  })
  $('.navigation1').click(function(){
    $('.navigation1').addClass('display-none')
    $('.navigation2').removeClass('display-none')
  })
  $('.navigation2').click(function(){
    $('.navigation2').addClass('display-none')
    $('.navigation1').removeClass('display-none')
   })
   var swiper = new Swiper('#cont3 .swiper-container', {
    navigation: {
      nextEl: '#cont3 .swiper-button-next',
      prevEl: '#cont3 .swiper-button-prev',
    },
    pagination: {
      el: '#cont3 .swiper-pagination',
      clickable: true
    },
  });
  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
    direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 30,
      mousewheel: true,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      pagination : { // 페이징 설정
        el : '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
      },
      navigation: {
      nextEl: '.cont5-navl .swiper-button-next',
      prevEl: '.cont5-navl .swiper-button-prev',
    },
        
    });
  var galleryTop2 = new Swiper('.gallery-top2', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.gallery-top2 .swiper-button-next',
      prevEl: '.gallery-top2 .swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs2
    }
  });
        // galleryTop2.controller.control = galleryThumbs2;
        // galleryThumbs2.controller.control = galleryTop2;

})