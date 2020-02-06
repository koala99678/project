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
        var swiper = new Swiper('.commission-typeselect-swiper', {
          effect: 'flip',
          grabCursor: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        $('[data-toggle="tooltip"]').tooltip();
        
        $('.commission-typemenu a').hover(function(){
          // var linkbox3 =  document.querySelector('.commission-typemenu a')
          // linkbox3.classList.add('animated', 'pulse','infinite')
          // 자바 스크립트 코드로 변환하면 아래와 같음
          $(this).addClass('animated pulse infinite')

        },function(){
          // var linkbox3 =  document.querySelector('.commission-typemenu a')
          // linkbox3.classList.remove('animated', 'pulse','infinite')
          // 자바 스크립트 코드로 변환하면 아래와 같음
          $(this).removeClass('animated pulse infinite')
        })
        $('.commission-typemenu>a').click(function(){
          if($(this).hasclass('a1')){
            $('.atype').animate({
              marginLeft: '500px'
            })
          }
        })
})