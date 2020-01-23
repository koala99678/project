$(function(){
      $('#section2 .link-box a').hover(function(){
        var linkbox2 =  document.querySelector('#section2 .link-box a')
        linkbox2.classList.add('animated', 'pulse','infinite')
      },function(){
        var linkbox2 =  document.querySelector('#section2 .link-box a')
        linkbox2.classList.remove('animated', 'pulse','infinite')
      })
      $('[data-toggle="tooltip"]').tooltip();
      $(window).scroll(function (){
        if($( this ).scrollTop() > 920){
          var maindown =  document.querySelector('.maindown')
              maindown.classList.add('animated', 'bounce','infinite')
        }
        if($( this ).scrollTop() > 1048){
          var maindown =  document.querySelector('.maindown')
              maindown.classList.remove('animated', 'bounce','infinite')
              $('#section3').removeClass('display-none')
              $('.nav-last').removeClass('display-none')
              var swiper = new Swiper('.swiper-container', {
              slidesPerView: 'auto',
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
            // $( 'html, body' ).animate( { scrollTop : 1721 }, 400 );
            // return false;
          }
      })

      $('.maindown').click(function(){
        $('#section3').removeClass('display-none')
        $('.nav-last').removeClass('display-none')
        var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
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

      if($('.nav-link').hasClass('.active')){
        $(this).css('transform','scale(1.3)')
      }
      $( window ).scroll( function() {
        if ( $( this ).scrollTop() < 821 ) {
          $('#section3').addClass('display-none')
          $('.nav-last').addClass('display-none')
        }
      } );
      
})