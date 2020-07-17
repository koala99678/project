$(document).ready(function(){
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
          var index = $(this).attr('data')
          var margin = -670 * parseInt(index);
          $('.commission-bodyin-r>div:nth-of-type(2)>div').animate({
            'margin-left':margin+'px'
          })
        })
        $( window ).scroll( function() {
          if ( $( this ).scrollTop() > 200 ) {
            $( '.talk' ).fadeIn();
          } else {
            $( '.talk' ).fadeOut();
          }
        } );
        $('.commission-notice-menu>.commission-notice-tittl').hover(function(){
          $('.commission-notice-menu>.commission-notice-tittl').removeClass('commission-notice-menuslect')
          $(this).addClass('commission-notice-menuslect')
        },function(){
          $('.commission-notice-menu>.commission-notice-tittl').removeClass('commission-notice-menuslect')
        })
        $('.commission-notice-menu>.commission-notice-tittl').click(function(){
          $('.commission-notice-menu>.commission-notice-tittl').removeClass('commission-notice-menuslect2')
          $(this).addClass('commission-notice-menuslect2')
          var index2 = $(this).attr('data-target')
          var margin2 = -300 * parseInt(index2);
          $('.commission-notice-sub>div').animate({
            'margin-top':margin2+'px'
          })
          return false;
          // return ture일때 링크로 넘어감, 링크로 넘어가지 않게 하기 위해 return false;로 막음
        })
        $('.popper-btn').click(function(){
          $('.popper-folder').removeClass('display-none')
        })
  
        $('.popper-btn').click( function() {
            $( 'html, body' ).animate( { scrollTop : 2150 }, 400 );
            return false;
          } );
      
})