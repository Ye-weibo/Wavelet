$(function(){
	$('#list-block').mouseover(function(){
		$('.select').css("display","block");
	});
	$('#list-block').mouseout(function(){
		$('.select').css("display","none");
	});
	//updown
	$('.updown').click(function(elem){
		mySwiper.slideNext();
		// console.log(mySwiper.translate);
	});
	// Seiper
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		direction:'vertical',//纵向滑动;
		paginationClickable :true, //设置为true时，点击分页器的指示点分页器会控制Swiper切换;
		paginationElement : 'li', //设定分页器指示器（小点）的HTML标签;
		simulateTouch : false, //静止鼠标拖动;
		speed : 800, //滚屏速度;
		runCallbacks : true, //滑动到下一个滑块;
		onSlideChangeStart: function(swiper){
		     if ( swiper.activeIndex > 0 ) {
		     	$('.goin').css('display','block');
		     }else{
		     	$('.goin').css('display','none');
		     }
		     if ( swiper.activeIndex == 6 ) {
		     	$('.updown').css('display','none');
		     }else{
		     	$('.updown').css('display','block');
		     }
		}
	})
});