window.onload=function(){
	var mySwiper = new Swiper('.swiper-container',{
		mousewheelControl:true, //鼠标滚动
		direction:'vertical',
	})
	//鼠标移入/移出 dropdown事件
	var languageAinimate = new TimelineMax();

	$(".language").bind("mouseenter",function(){
		languageAinimate.clear();
		languageAinimate.to(".dropdown",0.5,{opacity:1,"display":"block"});
	});

	$(".language").bind("mouseleave",function(){
		languageAinimate.clear();
		languageAinimate.to(".dropdown",0.5,{opacity:0,"display":"none"});
	});

	var t = new TimelineMax();
	t.to(".menu",0.6,{
		left:22,
	})
	t.to(".nav",0.6,{
		opacity:1,
	})
	t.to(".scene1_logo",0.6,{
		opacity:1,
	})
	t.to(".img1",0.3,{
		opacity:1,
	})
	t.to(".img2",0.3,{
		opacity:1,
	})
	t.to(".img3",0.3,{
		opacity:1,
	})
	var light = [".light_left",".light_right"]
	t.to(light,0.3,{
		rotation:(1, 0, 0, 1, 0, 0),
	})
	t.to(".next",0.3,{
		opacity:1,
		bottom:20,
	})

	// 页面2轮播图效果
	$(function(){	
		function Choices(){
			$(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {  
						$(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));  
						$(".Choices_banner ul").css('marginLeft','0px');  
					});  
					$(".Choicestel ul").css('marginLeft','-1184px');  
					$(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));  
					$(".Choicestel ul").css({marginLeft:"0px"},600);
			}
	// setInterval("Choices()","3000");
	// var tabChange = setInterval(Choices,3000);
	// 	//鼠标悬停暂停切换
	// 	$('.Choicesnext').mouseover(function(){
	// 		clearInterval(tabChange);
	// 	});
	// 	$('.Choicesnext').mouseout(function(){
	// 		tabChange = setInterval(Choices,3000);
	// 	});
	});
	
	// 页面3轮播图效果
	$(function () {  
		$('.Choicesnext').click(function () {  
			$(".Choices_banner ul").animate({marginLeft:"-1184px"},600, function () {  
				$(".Choices_banner ul>li").eq(0).appendTo($(".Choices_banner ul"));  
				$(".Choices_banner ul").css('marginLeft','0px');  
			});  
			$(".Choicestel ul").css('marginLeft','-1184px');  
			$(".Choicestel ul>li").eq(0).appendTo($(".Choicestel ul"));  
			$(".Choicestel ul").css({marginLeft:"0px"},600);
		})  
		/*$('.Choicesprev').click(function () {  
			$(".Choices_banner ul").css('marginLeft','-1184px');  
			$(".Choices_banner ul>li").eq(3).prependTo($(".Choices_banner ul"));  
			$(".Choices_banner ul").animate({marginLeft:"0px"},600);  
			$(".Choicestel ul").css('marginLeft','-1184px');  
			$(".Choicestel ul>li").eq(3).prependTo($(".Choicestel ul"));  
			$(".Choicestel ul").css({marginLeft:"0px"},600);  
		})  */
	})
}