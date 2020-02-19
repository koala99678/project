$(function(){
    $('.menu').hover(function(){
        $('.sub-menu').stop().animate({
            height: '400px'
        })
    },function(){
        $('.sub-menu').stop().animate({
            height: '0px'
        })
    })
    $('.sub-menu-in>a').hover(function(){
        var index = $(this).attr('data-target')
        $('.main-menu>a').removeClass('hover')
        $('.main-menu>a').eq(index).addClass('hover')
    },function(){
        $('.main-menu>a').removeClass('hover')
    })
    $('.main-menu>a').hover(function(){
        $(this).addClass('hover')
    },function(){
        $('.main-menu>a').removeClass('hover')
    })
    setInterval(function(){
        $('.img-slide').first().animate({'margin-top':'350px'},function(){
						$(this).removeAttr('style')
                        $('.img-slide').last().detach().prependTo('.img-waiper')
        })
    },1000)
})