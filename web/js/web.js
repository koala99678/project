$(document).ready(function(){
		$('.menu').hover(function(){
				$('.menu-main ul').slideToggle(500);
		})
		$('.menu-main').hover(function(){
				/* 메인 메뉴가 하이라이트 되는 부분*/
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
		},function(){
				$(this).removeClass('active');
		})
		$('.menu-sub').hover(function(){
				$('.menu-sub').removeClass('active');
				$(this).addClass('active');
		},function(){
				$(this).removeClass('active');
		})
		setInterval(function(){
				/*
				$(A).append(B) : A안에 마지막 자식에 B를 넣어라
				$(A).appendTo(B) : B안에 A를 마지막 자식에 넣어라
				*/
				//오른쪽에서 왼쪽으로 슬라이드 순서 1->2->3->1
				/*
				$('.img-slide').first().animate({'margin-left':'-1200px'},function(){
						$(this).detach().appendTo('.img-slide-wrap').removeAttr('style');
				})
				*/
				/*왼쪽에서 오른쪽으로 */
				/*
				$('.img-slide').first().animate({'margin-right':'-1200px'},function(){
						$(this).detach().appendTo('.img-slide-wrap').removeAttr('style');
				});
				*/
				/*위에서 아래로*/
				/*
				$('.img-slide').first().animate({'margin-top':'300px'},function(){
						$(this).removeAttr('style');
						$('.img-slide').last().detach().prependTo('.img-slide-wrap');
//                    $(지금 선택된 것의).마지막().잘라서().맨앞에 가져다 붙여라('클래스의')
				});
				*/
				/*아래에서 위로*/
				$('.img-slide').first().animate({'margin-top':'-300px'},function(){
						$(this).detach().appendTo('.img-slide-wrap').removeAttr('style');
//                    $(지금 선택된 것을).잘라서().안에있는 요소들 뒤에 붙여라('클래스').지금생긴것을 지워라('스타일');
				})
		},1000);
		$('.tab>div').click(function(){
				$(this).addClass('active').siblings().removeClass('active');
				if($(this).hasClass('tab1')){
						$('.tab-contents').removeClass('active').first().addClass('active');
				}else{
						$('.tab-contents').removeClass('active').last().addClass('active');
				}
		})
		$('.notice-title').click(function(){
            var title = $(this).text();
            var contents = $(this).siblings().text();
            $('.popup-title').html(title);
            $('.popup-contents').html(contents);
            $('.popup').addClass('display-block');
		})
    $('.notice-close').click(function(){
        ('.popup').removeClass('display-block')})
})