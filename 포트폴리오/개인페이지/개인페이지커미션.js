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
  
})