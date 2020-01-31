$(function(){
  $('.main-menu>span').hover(function(){
    if(!$(this).children('div').hasClass('selected')){
      $(this).children('div').animate({
        width:'100%'
      })
    }
    $('.selectpage').children('div').animate({
      width:'100%'
    })
  }, function(){
    $('.selectpage').children('div').animate({
      width:'100%'
    })
    if(!$(this).children('div').hasClass('selected')){
      $(this).children('div').animate({
        width:'0%'
      },0)
    }
  })
      $('.main-menu>span').hover(function(){
        $('.main-menu>span').children('div').css('background-color','transparent')
        $(this).children('div').css('background-color','#bcbcbc')
        $('.selectpage').children('div').css('background-color','#bcbcbc')
      })
      $('.all-menu-btn').click(function(){
        $('.all-menu').removeClass('display-none')
        const allmenu1 =  document.querySelector('.all-menu')
        allmenu1.classList.add('animated', 'jackInTheBox')
        allmenu1.addEventListener('animationend', function() {  
          allmenu1.classList.remove('animated', 'jackInTheBox')
          $('.all-menu').removeClass('display-none') 
        })
      })
      $('.all-menu .fa-times').click(function(){
        const allmenu2 =  document.querySelector('.all-menu')
          allmenu2.classList.add('animated', 'bounceOut')
          allmenu2.addEventListener('animationend', function() {  
            $('.all-menu').addClass('display-none')
            allmenu2.classList.remove('animated', 'bounceOut')
        })
        
        $('#element').off('scroll touchmove mousewheel');
      })
      $('.all-menu').on('scroll touchmove mousewheel', function(event) {
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
        $('.main-about').hover(function(){
        $('.main-about-bg').animate({
          width:'100%'
        })
      }, function(){
        $('.main-about-bg').animate({
          width:'0%'
        },0)
      })

      $('.main-about').hover(function(){
        $('.main-about-tast').css('transform','scale(1.5)')
      },function(){
        $('.main-about-tast').css('transform','scale(1.0)')
      })
     
      
      $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 200 ) {
          $( '.top' ).fadeIn();
        } else {
          $( '.top' ).fadeOut();
        }
      } );
      $( '.top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        $('#section3').addClass('display-none')
        $('.nav-last').addClass('display-none')
        return false;
      } );

      // 현재 스크롤 위치
      // $(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });
})

