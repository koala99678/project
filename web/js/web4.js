$(function(){
   $('.menu').hover(function(){
       $('.sub-menu').animate({
           height: '202px'
       })
   },function(){
       $('.sub-menu').animate({
           height: '0px'
       })
       $('.main-menu>a').removeClass('hover')
   })
     $('.sub1>a').hover(function(){
         var index = $(this).attr('data-target')
         $('.main-menu>a').removeClass('hover')
         $('.main-menu>a').eq(index).addClass('hover')
    })
    $('.main-menu>a').hover(function(){
        $('.main-menu>a').removeClass('hover')
        $(this).addClass('hover')
    })
    setInterval(function(){
        $('.slid').first().animate({
            marginLeft:'-1000px'
        },function(){
            $('.slid').first().detach().appendTo('.slid-wiper').removeAttr('style')    
        })
    },1000)
})