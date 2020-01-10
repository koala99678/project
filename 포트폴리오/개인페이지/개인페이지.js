$(function(){
    $('.main-menu>span').hover(function(){
        $(this).children('div').animate({
          width:'100%'
        })
      }, function(){
        $(this).children('div').animate({
          width:'0%'
        },0)
      })
      $('.main-menu>span').hover(function(){
        $('.main-menu>span').children('div').css('background-color','transparent')
        $(this).children('div').css('background-color','#bcbcbc')
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
      $('.all-menu .fa-times').hover(function(){

      })
      $('.all-menu').on('scroll touchmove mousewheel', function(event) {
        console.log('sgdsg')
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
        return false;
      } );
      $(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });
    
      $('.maindown').hover(function(){
        const maindown =  document.querySelector('.maindown')
        maindown.classList.add('animated', 'bounce')
      })
      $('.maindown').click(function(){
        $('#section3').removeClass('display-none')
        $('.nav-item').removeClass('display-none')
        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 10,
        spaceBetween: 30,
        centeredSlides: true,
        parallax: true,
        speed: 300,
        mousewheel: {
          sensitivity:5000,
          // forceToAxis:true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      })
      $('.maindown').click( function() {
        $( 'html, body' ).animate( { scrollTop : 1721 }, 400 );
        return false;
      } );

     
})