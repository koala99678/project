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
    cssMode: true,
    navigation: {
      nextEl: '#cont3 .swiper-button-next',
      prevEl: '#cont3 .swiper-button-prev',
    },
    pagination: {
      el: '#cont3 .swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });
  var swiper = new Swiper('#cont5 .swiper-container', {
    pagination: {
      el: '#cont5 .swiper-pagination',
      clickable: true,
    },
  });
})