window.onload=function(){
	// 导航栏目滑动效果
	var aLi = document.getElementsByClassName('aline');
	var aWrap = [$('.wrap-one'),$('.wrap-two'),$('.wrap-three'),$('.wrap-four')];
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].addEventListener('touchstart',function(ev){
			ev.preventDefault();// 阻止浏览器默认事件
			$('.line').css({left:0.26+(this.index)*1.74+'rem'}); //导航条效果
			$('.line').css({transition:'0.5s'});

			// 页面切换
			var aLeft = ['0rem','7.5rem','15rem','22.5rem','-7.5rem','-15rem','-22.5rem'];
			var Arr1 = [0,1,2,3];
			var Arr2 = [4,0,1,2];
			var Arr3 = [5,4,0,1];
			var Arr4 = [6,5,4,0];
			var Arr = [Arr1,Arr2,Arr3,Arr4];
			for(var j=0;j<aWrap.length;j++){
					aWrap[j].css({marginLeft:aLeft[Arr[this.index][j]]});
					aWrap[j].css({transition:'0.5s'});
			}
		});
	}
	// var oW1 = document.querySelector('.wrap-one');
	// var oW2 = document.querySelector('.wrap-two');
	// var oW3 = document.querySelector('.wrap-three');
	// var oW4 = document.querySelector('.wrap-four');
	// var oW = [oW1,oW2,oW3,oW4];
	// for (var i = 0; i < oW.length; i++) {
	// 	oW[i].addEventListener('touchmove',function(ev){
	// 		// alert(aWidth);
	// 		ev.preventDefault();// 阻止浏览器默认事件
	// 		oW[0].style.marginLeft = -7.5+'rem';
	// 		oW[0].style.transition = '1s';
	// 	})
	// }
	
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationElement : 'li',
		autoplay : 3000,
		autoplayDisableOnInteraction : false,
		loop : true,
	})
}