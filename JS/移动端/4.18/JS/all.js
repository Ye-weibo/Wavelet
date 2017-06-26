window.onload=function(){
	// var oIcon=document.getElementById('icon-display');//点击显示密码
	// var oPassword=document.getElementById('Password');//密码ID
	// var onOff=true;
	// //点击显示密码//
	// oIcon.addEventListener('touchstart',oIcon1);
	// for (var i = 0; i < oIcon.length; i++) {
	// 	oIcon[i].index=i;
	// 	function oIcon1(){
	// 		if(onOff){
	// 			oPassword[this.index].type='text';
	// 			onOff=false;
	// 		}else{
	// 			oPassword[this.index].type='password';
	// 			onOff=true;
	// 		}
	// 	}
	// }
	// 各界面切换 //
	var oWrap=document.getElementById('wrap');//登录界面
	var oWrap1=document.getElementById('wrap-one');//注册界面
	var oWrap2=document.getElementById('wrap-two');//找回密码界面
	var oWrap3=document.getElementById('wrap-three');//首页界面
	var oDenglu=document.getElementById('denglu');//登录按钮
	var oReg=document.getElementById('registered'); //registered:注册按钮
	var oForget=document.getElementById('forget-password'); //忘记密码
	var oReturn=document.getElementById('return');//从注册界面返回登录界面
	var oReturn2=document.getElementById('return-one');//从找回密码界面返回登录界面
	
	// var Denglu = document.querySelector(".Denglu");
	oDenglu.addEventListener("touchstart", function(){
     	oDenglu.style.background = "#ff9a14";
     	oWrap3.style.display='block';
     	oWrap.style.display='none';
	});
	// oReg.addEventListener('touchstart',obj);
	// 	function obj(){
	// 		// console.log('按下');
	// 		oWrap1.style.display='block'; //进入注册界面	
	// 	}
	// oReturn.addEventListener('touchstart',obj1);
	// 	function obj1(){
	// 		// console.log('按下');
	// 		oWrap.style.display='block'; //注册界面返回登录界面
	// 	 	oWrap1.style.display='none'; //注册界面隐藏
	// 	}
	// oForget.addEventListener('touchstart',obj2);
	// 	function obj2(){
	// 		oWrap.style.display='none'; //登录界面隐藏
	// 		oWrap1.style.display='none'; //注册界面隐藏
	// 		oWrap2.style.display='block'; //忘记密码界面进入找回密码界面显示
	// 	}
	// oReturn2.addEventListener('touchstart',obj3);
	// 	function obj3(){
	// 		// console.log('按下');
	// 		oWrap.style.display='block'; //找回界面返回登录界面
	// 		oWrap1.style.display='none'; //注册界面隐藏
	// 		oWrap2.style.display='none'; //找回密码界面隐藏
	// 	}
	// oDenglu.addEventListener('touchstart',obj4);
	// 	function obj4(){
	// 		oWrap.style.display='none'; //登录界面隐藏
	// 		oWrap1.style.display='none'; //注册界面隐藏
	// 		oWrap2.style.display='none'; //找回密码界面隐藏
	// 		oWrap3.style.display='block'; //登录界面进入首页界面	
	// 	}
		
    // 首页无缝轮播 //
    var title = document.querySelector('.title'),
		list = document.querySelector('.list'),
		a = document.querySelectorAll('a'),
		disX = 0,//按下的坐标
		listL = 0,//当前按下list的left值
		w = Animation.clientWidth,//一张图片的宽度
		len = 0,
		n = 0; //默认第一个小点为白色
	
	
	list.innerHTML += list.innerHTML;
	
	len = list.children.length;
	
	list.style.width = w * len + 'px';
	
	list.addEventListener('touchstart',start);
	list.addEventListener('touchmove',move);
	list.addEventListener('touchend',end);
	function start(ev){
		var e = ev.changedTouches[0];
		disX = e.pageX;
		list.style.transition = 'none';
		
		/*
			在按下的时候，要知道当前点击的是第几张图片
			如果是第一张快速拉到第5张的位置上。
			
			
		*/
		
		var num = Math.round(list.offsetLeft / w);
		if(num == 0){
			num = a.length;
			list.style.left = -num * w + 'px';
		}
		
		if(-num == len-1){
			num = a.length-1;
			list.style.left = -num * w + 'px';
		}
		
		listL = this.offsetLeft;
	}
	function move(ev){
		var e = ev.changedTouches[0];
		list.style.left = (e.pageX - disX) + listL + 'px';
	}
	function end(){
		var num = Math.round(list.offsetLeft / w);
		
		// console.log(num)
		// console.log(list.offsetLeft)

		list.style.transition = '.5s';
		list.style.left = num * w + 'px';
		
		a[n].className = '';
		a[-num%a.length].className = 'list-style';
		n = -num%a.length;
	}
}
