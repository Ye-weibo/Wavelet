(function scale1(){
	var w = window.screen.width; //屏幕宽度
	var targetW = 750;
	var scale = w/targetW; //当前尺寸/目标尺寸  缩放比例
	var meta = document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=no,initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+""
	document.head.appendChild(meta); //添加标签
})();
(function scale2() {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 15 + 'px';
    }, false);
})();
// window.onresize=function(){
// 	scale1();
// 	scale2()
// }