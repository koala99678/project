$(document).ready(function(){
      $('.commission-body-menu .fa-times').click(function(){
        const allmenu2 =  document.querySelector('.commission-body-menu')
          allmenu2.classList.add('animated', 'bounceOut')
          allmenu2.addEventListener('animationend', function() {  
            $('.commission-body-menu').addClass('display-none')
            allmenu2.classList.remove('animated', 'bounceOut')
        })
        
        $('#element').off('scroll touchmove mousewheel');
      })
      $('.commission-body-menu').on('scroll touchmove mousewheel', function(event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
        var swiper = new Swiper('.swiper-container', {
          effect: 'flip',
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
})