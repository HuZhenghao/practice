(function(){
	//点击按钮出现滑动栏
	addEvent(get("page"),"click",function(){
		get("slider").style.left = 0;
		get("slider").className += " " + "slider-shadow";
		get("body").style.transform = "translate(80%,0)";
		get("header").style.transform = "translate(80%,0)";
		get("footer").style.transform = "translate(80%,0)";
		get("shadowBox").style.left = "80%";
		get("shadowBox").style.display = "block";
	});
	//点击侧边滑动回去
	addEvent(get("shadowBox"),"click",function(){
		get("slider").style.left = "-80%";
		get("slider").className = "slider";
		get("body").style.transform = "translate(0,0)";
		get("header").style.transform = "translate(0,0)";
		get("footer").style.transform = "translate(0,0)";
		get("shadowBox").style.display = "none";
	})

	//给消息提醒按钮添加动画
	addEvent(get("sliderButton"),"click",function(){
		var classname = get("sliderButton").className;
		if(classname == "slider-button") {
			var buttonSelected = function() {
				get("sliderButton").className = "slider-button-on";
			}
			setTimeout(buttonSelected,500);
			get("sliderButtonCircle").className = "slider-button-circle-on";
		}
		else{
			get("sliderButton").className = "slider-button";
			get("sliderButtonCircle").className = "slider-button-circle";
		}
	});
})();