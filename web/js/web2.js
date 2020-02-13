$(function(){
    $('.menu').hover(function(){
        $('.sub-menu').animate({
            width: '300px'
        })
    },function(){
        $('.sub-menu').animate({
            width: '0px'
        })
    })
    $('.main-menu>div').hover(function(){
        var index = $(this).attr('data')
        $('.sub-menu-in').addClass('display-none')
        $('.sub-menu-in').eq(index).removeClass('display-none')
    })
})