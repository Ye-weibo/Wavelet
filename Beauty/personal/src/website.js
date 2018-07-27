window.onload=function(){
	$(document).ready(function(){
		$('#particles').particleground({
		    dotColor: '#5cbdaa',
		    lineColor: '#5cbdaa'
		});
		$('.intro').css({'margin-top': -($('.intro').height() / 2)});
		$('.into').css({'opacity':'1','transition':'.5s'});
		$('.About_one').css({'opacity':'1','transition':'1s'});
		$('.About_two').css({'opacity':'1','transition':'1.5s'});

		// 点击进入个人简历
		// $('.About_two').click(function(){
		// 	$('.into').css({'opacity':'0'});
		// 	$('.content').css({'opacity':'1','transition':'1.5s'});
		// 	// 返回主页
		// 	$('.return').click(function(){
		// 		$('.content').css({'opacity':'0','transition':'.5s'});
		// 		$('.into').css({'opacity':'1','transition':'1.5s'});
		// 	})
		// })
		$('.About_two').click(function(){
			window.location.href="../beauty.html";
		})
	})
}