$(document).ready(function () {
    var elm = ".box";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
                
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 400, complete: function () {
                }
            });
        });
    });
    $( '.aboutnavlink1' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 629 }, 400 );
      } );
      $( '.aboutnavlink2' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 1258 }, 400 );
      } );

      $(window).scroll(function(){
          if($(this).scrollTop()==629){
            $('.about2black').animate({
                opacity: '1'
            })
          }else if($(this).scrollTop()==0){
            $('.about2black').animate({
                opacity: '0'
            })
          }
          else if($(this).scrollTop()==1258){
            $('.about2black').animate({
                opacity: '0'
            })
          }
      })
    // 현재 스크롤 위치
    //   $(window).scroll(function () { var scrollValue = $(document).scrollTop(); console.log(scrollValue); });
      //현재 배우고 있는 단위명 앱프로그래밍
})