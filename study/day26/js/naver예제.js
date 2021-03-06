$(function(){
	//setInterval(함수, 시간 ):일정시간마다 함수를 동작시키는 함수
	setInterval(function(){
		var height = '-18px'
		ani('.real-search-container',500)
	},1000)
		
	$('.keyboard').click(function(){
		$('.keyboard-icon').toggleClass('active');
	})
	$('.auto').click(function(){
		$('.auto-icon').toggleClass('active');
		$('.auto-box').toggle();
	})
	$('.r2-btn').click(function(){
		//다음페이지로 가야할지 이전페이지로 가야할지를 결정하는 변수
		//1이면 다음페이지, -1이면 이전페이지
		var addNum = 0;
		//현재 페이지 번호 가져옴
		var currentPage = $('.page-current').text();
		//가져온 페이지 번호는 문자열이어서 정수로 바꿈
		currentPage = parseInt(currentPage);
		//전체 페이지 번호 가져옴
		var totalPage = $('.page-total').text();
		//가져온 전체 페이지 번호는 문자열이어서 정수로 바꿈
		totalPage = parseInt(totalPage);
		//클릭한 버튼이 이전버튼이면
		if($(this).hasClass('prev')){
			addNum = -1;
		}
		//클릭한 버튼이 다음버튼이면
		else{
			addNum = 1;
		}
		currentPage += addNum;
		//현재 페이지가 1페이지에서 total페이지 사이가 아닌 경우
		if(currentPage == 0){
			currentPage = totalPage;
		}else if(currentPage>totalPage){
			currentPage = 1;
		}
		$('.page-current').text(currentPage);
	})
	$('.l3-item').hover(function(){
		$(this).find('.l3-item-hover').toggle();
	})

	$('.more').click(function(){
		//더보기 메뉴를 접기로, 접기 메뉴를 더보기로 바꿈
		$(this).toggleClass('fold');
		//흰박스와 반투명 박스를 열었다 접었다
		$('.more-box').toggle();
		//서비스 전체복, 메뉴설정을 보여줌
		$('.white-menu-sub1').removeClass('display-none');
		//초기화 확인 취소를 가려줌
		$('.white-menu-sub2').addClass('display-none');
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		/*접어야 하는 경우, 설정된 메뉴에 맞춰 검은색 메뉴를
		출력하도록 함
		 - 메뉴 설정 버튼 클릭 후 접었을 때 빈 박스들이 사라지면서
			 이전 메뉴들이 출력해야하는 경우
		*/
		if(!$(this).hasClass('fold')){
			initBlackMenu();
		}
	})
	
	//x버튼 클릭
	$('.white-menu-close').click(function(){
		//$('.more').toggleClass('fold');//접기->더보기로
		//$('.more-box').toggle();//박스 접는 역할
		//위 코드와 more버튼 클릭한 코드가 같기 때문에 
		//more버튼을 클릭한 이벤트를 실행
		$('.more').click();
		$('.white-menu-cancle').click();
	})
	//메뉴설정 버튼 클릭
	$('.white-menu-setting').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		//체크박스 관련 부분
		$('.check-img').removeClass('display-none');
		//검은 메뉴 처리 부분
		selMenuTmp = selMenu.slice(0);
		drawMenu(selMenuTmp);
		
	})
	//취소 버튼 클릭
	$('.white-menu-cancle').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		//체크박스 관련 부분
		$('.check-img').addClass('display-none');
		//메뉴 설정에서 선택된 메뉴들을 적용하지 않게다
		selMenuTmp = [];
		setInputCheckbox(selMenu);
		initBlackMenu();
	})
	//메뉴설정에서 체크박스를 선택했을 때
	$('.check-box').click(function(){
		/*
		체크를 해제하는 상황은 신경 쓸 필요가 없다.
		체크를 해야하는 상황은 신경써야한다. 최대 갯수가 지정 : 5
		*/
		/*
		흰 체크박스를 클릭했을 때
		=> 개인설정 메뉴에 추가될수 있는 상황
		*/
		if(!$(this).find('.check-img').hasClass('checked-img')){
			//이미 5개가 체크되어 더 추가될수 없으면
			if($('.checked-img').length == 5){
				alert('최대 5개까지 선택 가능합니다.');
				return ;
			}
		}
		/* 
		선택된 메뉴의 클래스명을 가져옴
		== input태그에 지정된 value값을 가져옴
		 */
		var value=$(this).find('.checkbox-input').val();
		//흰체크박스로 만들거나 녹색체크박스로 만듬		
		$(this).find('.check-img').toggleClass('checked-img');
		
		//녹색체크박스가 됐으면
		if($(this).find('.check-img').hasClass('checked-img')){
			$(this).find('.checkbox-input').prop('checked',true);
		}
		//흰색체크가 됐으면
		else{
			$(this).find('.checkbox-input').prop('checked',false);
		}
		/* 
		선택된 메뉴를 selMenuTmp에 추가할지 삭제할지를 결정
		 */
		/*
		selMenuTmp에 선택된 메뉴가 있는지 없는지 체크하는 부분으로
		indexOf는 있으면 0보다 크거나 같은 값을 알려주고,
		없으면 -1을 알려준다.
		*/
		var pos = selMenuTmp.indexOf(value);
		//선택한 메뉴가 체크 된 경우
		if(pos == -1){
			selMenuTmp.push(value);
		}
		//선택된 메뉴가 체크 해제된 경우
		else{
			selMenuTmp.splice(pos,1);
		}
		//selMenuTmp에 있는 배열에 맞춰 배치하기
		drawMenu(selMenuTmp);
	})
	//확인 버튼이 클릭되면
	$('.white-menu-ok').click(function(){
		/*
		selMenuTmp = [ 'dic', 'news'];
		selMenuTmp = []
		selMenu = [ 'dic', 'news']
		*/
		selMenu = selMenuTmp.splice(0);
		if(selMenu.length == 0){
			alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.')
		}
		//white박스랑 black박스 닫고
		$('.more').click();
		//메뉴 적용
		initBlackMenu();
	})
	$('.white-menu-init').click(function(){
		alert('초기설정으로 돌아갑니다.');
		selMenu = [];
		initBlackMenu();
		$('.more').click();
		setInputCheckbox(selMenu);
	})
})
var oriMenu = ["dic","news","stock","deal","map"
			,"movie",	"music","book","comic"];
var selMenu = [];//확인 버튼을 눌러 확정된 메뉴들
var selMenuTmp = [];//메뉴설정에서 선택된 메뉴들

/* 메뉴 설정 클릭 후 확인 버튼을 눌렀을 때,
	 메뉴 설정 클릭 후 초기화 버튼을 눌렀을 때,
	 메뉴 설정 클릭 후 취소 버튼을 눌렀을 때,
	 X버튼을 눌렀을 때,
	 접기 버튼을 눌렀을 때,
   검은색 메뉴를 화면에 출력하는 함수 */
function initBlackMenu(){
	var i = 0;
	//메뉴설정에서 1개이상 메뉴를 선택한 경우
	if(selMenu.length != 0){
		$('.black-container>a').each(function(){
			//class=""
			$(this).prop('class','');
			/*i가 선택된 메뉴 갯수보다 작으면
				class="black-box bg3 메뉴클래스명"
				아니면 
				class="display-none"
			*/
			if(i<selMenu.length){
				$(this).addClass('black-box bg3 '+selMenu[i]);
			}else{
				$(this).addClass('display-none');
			}
			/* 메뉴 설정시 빈박스가 필요하기 때문에 앞에 5개에는
			box-menu 클래스가 추가되어야 한다.
			앞에 메뉴 5개는 
			class="black-box bg3 메뉴클래스명 box-menu"이거나
			class="display-none box-menu"이 된다
			*/
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
	/*기본 설정 메뉴인 경우
	  (초기화를 했거나, 메뉴를 0개 선택한 경우)
	*/
	else{
		$('.black-container>a').each(function(){
			//요소의 모든 클래스 제거
			$(this).prop('class','');
			$(this).addClass('black-box bg3 ' + oriMenu[i]);
			if(i<5){
				$(this).addClass('box-menu');
			}
			i++;
		})
	}
}

/*
	메뉴 설정을 눌렀을 때, 
	arr를 기준으로 선택된 검은색 메뉴와 빈 박스를 출력하는 함수
*/
function drawMenu(arr){
	//잘못된 배열이 왔을 때를 위한 예외처리
	if(arr.length > 5){
		return;
	}
	var i = 0;
	$('.black-container>a').each(function(){
		//요소의 모든 클래스 제거
		$(this).prop('class','');
		if(i < arr.length){
			$(this).addClass('black-box bg3 '+arr[i]);
		}
		$(this).addClass('box-menu');
		if(i>4){
			$(this).addClass('display-none');
		}
		i++;
	})
	//녹색박스
	$('.box-menu').eq(arr.length).addClass('select');
}

/*
	메뉴 설정을 눌렀을 때, 
	초기설정이 아닌 검은색 메뉴들과 체크박스를 일치시키는 함수
	호출되는 상황
	 - 메뉴 설정 버튼을 눌렀을 때
*/
function setInputCheckbox(arr){
	$('.checkbox-input').each(function(){
		/* 체크 박스의 value를 가져옴 */
		var value = $(this).val();
		/* value가 arr에 있는지 확인 */
		var pos = arr.indexOf(value);
		/* 있으면 체크박스를 체크하고 */
		if(pos != -1){
			$(this).prop('checked', true);
			$(this).prev().addClass('checked-img')
		}
		/* 없으면 체크박스를 해제한다 */
		else{
			$(this).prop('checked', false);
			$(this).prev().removeClass('checked-img')
		}
	})
}
function ani(selector,playTime){
	var height = $(selextor +' li').css('height')
	height= '-'+height
	//.real-search-item의 순번 (eq) 0부터 위로 움직임
	$(selector + ' li').eq(0).animate({
		'margin-top':height}
		,800,function(){
			/*
			$(붙일곳).append(붙일것)
			$(붙일것).appendTo(붙일곳)
			*/
			$(selector+' li').eq(0).detach()
			.appendTo(selector+' ul').removeAttr('style')
		})
}
		//애니메이트에서 설정한 애니메이션을  다 실행한후 실행하는 함수
		
