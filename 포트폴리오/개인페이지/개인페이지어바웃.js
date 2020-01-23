window.onload = function () {
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
    $('.aboutnavlink1').hover(function(){
        var linkbox2 =  document.querySelector('.aboutnavlink1')
        linkbox2.classList.add('animated', 'pulse','infinite')
      },function(){
        var linkbox2 =  document.querySelector('.aboutnavlink1')
        linkbox2.classList.remove('animated', 'pulse','infinite')
      })
      $('.aboutnavlink2').hover(function(){
        var linkbox2 =  document.querySelector('.aboutnavlink2')
        linkbox2.classList.add('animated', 'pulse','infinite')
      },function(){
        var linkbox2 =  document.querySelector('.aboutnavlink2')
        linkbox2.classList.remove('animated', 'pulse','infinite')
      })

      $(".aboutnavlink1").click(function(event){   
             event.preventDefault();         
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
            });
}