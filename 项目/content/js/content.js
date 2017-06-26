window.onload=function(){
	var oTop = document.getElementById('top_photo');
	var oCover = document.getElementById('cover');
	var num = 0;
	oTop.onmouseover=function () {
		oCover.style.visibility = "visible";
	}
	oTop.onmouseout=function () {
		oCover.style.visibility = "hidden";
	}
}