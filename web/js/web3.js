$(function(){
    $('.menu').hover(function(){
        $('.sub-menu').animate({
            height: '500px'
        })
    },function(){
         $('.sub-menu').animate({
            height: '0px'
        })
        $('.main-menu>div').removeClass('hover')
    })
    $('.sub-menu-in>div').hover(function(){
        var index = $(this).attr('data')
        $('.main-menu>div').removeClass('hover')
        $('.main-menu>div').eq(index).addClass('hover')
    })
})