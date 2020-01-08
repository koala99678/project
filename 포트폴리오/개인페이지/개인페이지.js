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
      })
      $('.all-menu .fa-times').click(function(){
        $('.all-menu').addClass('display-none')
        $('#element').off('scroll touchmove mousewheel');
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
})