var get = function(id){
	return document.getElementById(id);
};
function addEvent(ele,event,func) {
	if(ele.addEventListener) {
		ele.addEventListener(event,func,false);
	}
	else if(ele.attachEvent) {
		ele.attachEvent('on' + event,func);
	}
	else{
		ele['on' + event] = func;
	}
};
function removeEvent(ele,event,func) {
	if(ele.removeEventListener) {
		ele.removeEventListener(event, func, false);
	}
	else if(ele.detachEvent) {
		ele,detachEvent("on" + event,func);
	}
	else{
		ele["on" + event] = null;
	}
};
//存储硬币和亲密度
localStorage.coin = 0;
localStorage.intimate = 0;
var update = function(){
	get("sliderCoin").innerHTML = localStorage.coin;
	get("sliderIntimate").innerHTML = localStorage.intimate;
}
update();
//存储每天的操作次数
var op1Times = 0;
var op2Times = 0;
var op3Times = 0;
var op4Times = 0;
var point = 5;//计算是否游戏结束的分
var d1Dialog = get("d1Dialog");
var d2Dialog = get("d2Dialog");
var d3Dialog = get("d3Dialog");
var d4Dialog = get("d4Dialog");
var d5Dialog = get("d5Dialog");
var d6Dialog = get("d6Dialog");
var d7Dialog = get("d7Dialog");
var d8Dialog = get("d8Dialog");
var d1Li = d1Dialog.getElementsByTagName("li");
for(var i = 0; i < d1Li.length; i ++) {
	d1Li[i].style.display = "none";
}
var d2Li = d2Dialog.getElementsByTagName("li");
for(var i = 0; i < d2Li.length; i ++) {
	d2Li[i].style.display = "none";
}
var d3Li = d3Dialog.getElementsByTagName("li");
for(var i = 0; i < d3Li.length; i ++) {
	d3Li[i].style.display = "none";
}
var d4Li = d4Dialog.getElementsByTagName("li");
for(var i = 0; i < d4Li.length; i ++) {
	d4Li[i].style.display = "none";
}
var d5Li = d5Dialog.getElementsByTagName("li");
for(var i = 0; i < d5Li.length; i ++) {
	d5Li[i].style.display = "none";
}
var d6Li = d6Dialog.getElementsByTagName("li");
for(var i = 0; i < d6Li.length; i ++) {
	d6Li[i].style.display = "none";
}
var d7Li = d7Dialog.getElementsByTagName("li");
for(var i = 0; i < d7Li.length; i ++) {
	d7Li[i].style.display = "none";
}
var d8Li = d8Dialog.getElementsByTagName("li");
for(var i = 0; i < d8Li.length; i ++) {
	d8Li[i].style.display = "none";
}
//游戏结束
var gameover = function() {
	get("gameover").style.visibility = "visible";
	get("gameover").style.transform = 'translate(-50%,-50%) scale(1,1)';
	get("body").className = "blur";
	get("mask").style.display = "block";
}
addEvent(get("gameoverBottom"),"click",function(){
	get("gameover").style.visibility = "hidden";
	get("gameover").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
	location.reload();
});
addEvent(get("gameoverClose"),"click",function(){
	get("gameover").style.visibility = "hidden";
	get("gameover").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
	location.reload();
});
//游戏完成
var finish = function() {
	get("finish").style.visibility = "visible";
	get("finish").style.transform = 'translate(-50%,-50%) scale(1,1)';
	get("body").className = "blur";
	get("mask").style.display = "block";
}
//计数还原
var countInit = function() {
	op1Times = 0;
	op2Times = 0;
	op3Times = 0;
	op4Times = 0;
	point = 5;
}
//day1
for(var i = 0; i < 3; i ++) {
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
function d1Choice1() {
	get("d1Choice2").className += " " + "unselect";
	var d1Result1 = function(){
		get("d1Result12").style.display = "block";
		get("d1Result12").firstChild.innerHTML = "嗯给我一些时间，你造我还是很喜欢你的味道的";
	};
	setTimeout(d1Result1,1000);
	removeEvent(get("d1Choice2"),"click",d1Choice2);
}
function d1Choice2() {
	get("d1Choice1").className += " " + "unselect";
	var d1Result2 = function(){
		get("d1Result12").style.display = "block";
		get("d1Result12").firstChild.innerHTML = "我不要抱！我刚到陌生的环境，跟你不熟也不喜欢被你抱";
	}
	setTimeout(d1Result2,1000);
	removeEvent(get("d1Choice1"),"click",d1Choice1);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d1Choice3() {
	get("d1Choice4").className += " " + "unselect";
	var d1Result3 = function(){
		get("d1Result34").style.display = "block";
		get("d1Result34").firstChild.innerHTML = "哇～你好乖哦～赏你一个给本大人梳毛的机会吧！";
		scroll(0,99999);
	};
	setTimeout(d1Result3,1000);
	removeEvent(get("d1Choice4"),"click",d1Choice4);
}
function d1Choice4() {
	get("d1Choice3").className += " " + "unselect";
	var d1Result4 = function(){
		get("d1Result34").style.display = "block";
		get("d1Result34").firstChild.innerHTML = "嘤嘤嘤 这个人好可怕！";
		scroll(0,99999);
	};
	setTimeout(d1Result4,1000);
	removeEvent(get("d1Choice3"),"click",d1Choice3);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d1Choice5() {
	get("d1Choice6").className += " " + "unselect";
	var d1Result5 = function(){
		get("d1Result56").style.display = "block";
		get("d1Result56").firstChild.innerHTML = "口亨 本喵不和你一般计较";
		scroll(0,99999);
	};
	setTimeout(d1Result5,1000);
	removeEvent(get("d1Choice6"),"click",d1Choice6);
}
function d1Choice6() {
	get("d1Choice5").className += " " + "unselect";
	var d1Result6 = function(){
		get("d1Result56").style.display = "block";
		get("d1Result56").firstChild.innerHTML = "嘿嘿，我看好你当铲屎官！";
		scroll(0,99999);
	};
	setTimeout(d1Result6,1000);
	removeEvent(get("d1Choice5"),"click",d1Choice5);
}
function d1Choice7() {
	get("d1Choice8").className += " " + "unselect";
	var d1Result7 = function(){
		get("d1Result78").style.display = "block";
		get("d1Result78").firstChild.innerHTML = "那本王就不开心挠沙发呗？你还要我怎样？";
		scroll(0,99999);
	};
	setTimeout(d1Result7,1000);
	removeEvent(get("d1Choice8"),"click",d1Choice8);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d1Choice8() {
	get("d1Choice7").className += " " + "unselect";
	var d1Result8 = function(){
		get("d1Result78").style.display = "block";
		get("d1Result78").firstChild.innerHTML = "对嘛!年轻人也没必要火气那么旺不是？";
		scroll(0,99999);
	};
	setTimeout(d1Result8,1000);
	removeEvent(get("d1Choice7"),"click",d1Choice7);
}
function d1Choice9() {
	get("d1Choice10").className += " " + "unselect";
	var d1Result9 = function(){
		get("d1Result910").style.display = "block";
		get("d1Result910").firstChild.innerHTML = "噗噗噗，这是什么东西？我不吃";
		scroll(0,99999);
	};
	setTimeout(d1Result9,1000);
	removeEvent(get("d1Choice10"),"click",d1Choice10);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d1Choice10() {
	get("d1Choice9").className += " " + "unselect";
	var d1Result10 = function(){
		get("d1Result910").style.display = "block";
		get("d1Result910").firstChild.innerHTML = "喵喵真好吃~谢谢你两脚兽";
		scroll(0,99999);
	};
	setTimeout(d1Result10,1000);
	removeEvent(get("d1Choice9"),"click",d1Choice9);
}
function d1Choice11() {
	get("d1Choice12").className += " " + "unselect";
	var d1Result11 = function(){
		get("d1Result1112").style.display = "block";
		get("d1Result1112").firstChild.innerHTML = "爱您";
		scroll(0,99999);
	};
	setTimeout(d1Result11,1000);
	removeEvent(get("d1Choice12"),"click",d1Choice12);
}
function d1Choice12() {
	get("d1Choice11").className += " " + "unselect";
	var d1Result12 = function(){
		get("d1Result1112").style.display = "block";
		get("d1Result1112").firstChild.innerHTML = "臭的是你，奴才你爱铲不铲吧…";
		scroll(0,99999);
	};
	setTimeout(d1Result12,1000);
	removeEvent(get("d1Choice11"),"click",d1Choice11);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
addEvent(get("d1Choice1"),"click",d1Choice1);
addEvent(get("d1Choice2"),"click",d1Choice2);
addEvent(d1Li[2],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[5].style.display = 'block';scroll(0,99999);",3000);

});
addEvent(get("d1Choice3"),"click",d1Choice3);
addEvent(get("d1Choice4"),"click",d1Choice4);
addEvent(d1Li[5],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[8].style.display = 'block';scroll(0,99999);",3000);

});
addEvent(get("d1Choice5"),"click",d1Choice5);
addEvent(get("d1Choice6"),"click",d1Choice6);
addEvent(d1Li[8],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[12].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d1Choice7"),"click",d1Choice7);
addEvent(get("d1Choice8"),"click",d1Choice8);
addEvent(d1Li[12],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[14].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[15].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[16].style.display = 'block';scroll(0,99999);",4000);
});	
addEvent(get("d1Choice9"),"click",d1Choice9);
addEvent(get("d1Choice10"),"click",d1Choice10);
addEvent(d1Li[16],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[18].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[19].style.display = 'block';scroll(0,99999);",3000);
});	
addEvent(get("d1Choice11"),"click",d1Choice11);
addEvent(get("d1Choice12"),"click",d1Choice12);
addEvent(d1Li[19],"click",function(){
	setTimeout("var li = d1Dialog.getElementsByTagName('li');li[21].style.display = 'block';scroll(0,99999);",2000);
});
addEvent(get("d1next"),"click",function(){
	d1Dialog.style.display = "none";
	d2Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 2; i ++) {
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});	

//day2
function d2Choice1() {
	get("d2Choice2").className += " " + "unselect";
	var d2Result1 = function(){
		get("d2Result12").style.display = "block";
		get("d2Result12").firstChild.innerHTML = "哼 这才一天你就烦啦？喜新厌旧的家伙";
	};
	setTimeout(d2Result1,1000);
	removeEvent(get("d2Choice2"),"click",d2Choice2);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d2Choice2() {
	get("d2Choice1").className += " " + "unselect";
	var d2Result2 = function(){
		get("d2Result12").style.display = "block";
		get("d2Result12").firstChild.innerHTML = "不错不错，装猫窝的纸盒子甚合朕意";
	}
	setTimeout(d2Result2,1000);
	removeEvent(get("d2Choice1"),"click",d2Choice1);

}
function d2Choice3() {
	get("d2Choice4").className += " " + "unselect";
	var d2Result3 = function(){
		get("d2Result34").style.display = "block";
		get("d2Result34").firstChild.innerHTML = "恩态度不错~";
		scroll(0,99999);
	};
	setTimeout(d2Result3,1000);
	removeEvent(get("d2Choice4"),"click",d2Choice4);
}
function d2Choice4() {
	get("d2Choice3").className += " " + "unselect";
	var d2Result4 = function(){
		get("d2Result34").style.display = "block";
		get("d2Result34").firstChild.innerHTML = "哼，愚蠢的两脚兽";
		scroll(0,99999);
	};
	setTimeout(d2Result4,1000);
	removeEvent(get("d2Choice3"),"click",d2Choice3);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d2Choice5() {
	get("d2Choice6").className += " " + "unselect";
	var d2Result5 = function(){
		get("d2Result56").style.display = "block";
		get("d2Result56").firstChild.innerHTML = "如此朕就放心了~";
		scroll(0,99999);
	};
	setTimeout(d2Result5,1000);
	removeEvent(get("d2Choice6"),"click",d2Choice6);
}
function d2Choice6() {
	get("d2Choice5").className += " " + "unselect";
	var d2Result6 = function(){
		get("d2Result56").style.display = "block";
		get("d2Result56").firstChild.innerHTML = "再见了两足兽，我要当孤独的云游侠去了，你不值得我的爱！（猫翻出窗台）";
		scroll(0,99999);
	};
	setTimeout(d2Result6,1000);
	removeEvent(get("d2Choice5"),"click",d2Choice5);
	setTimeout(gameover,2000);
}
function d2Choice7() {
	get("d2Choice8").className += " " + "unselect";
	removeEvent(get("d2Choice8"),"click",d2Choice8);
}
function d2Choice8() {
	get("d2Choice7").className += " " + "unselect";
	removeEvent(get("d2Choice7"),"click",d2Choice7);
}
function d2Choice9() {
	get("d2Choice10").className += " " + "unselect";
	var d2Result9 = function(){
		get("d2Result910").style.display = "block";
		get("d2Result910").firstChild.innerHTML = "没事原谅你";
		scroll(0,99999);
	};
	setTimeout(d2Result9,1000);
	removeEvent(get("d2Choice10"),"click",d2Choice10);
}
function d2Choice10() {
	get("d2Choice9").className += " " + "unselect";
	var d2Result10 = function(){
		get("d2Result910").style.display = "block";
		get("d2Result910").firstChild.innerHTML = "大兄弟你心不诚啊";
		scroll(0,99999);
	};
	setTimeout(d2Result10,1000);
	removeEvent(get("d2Choice9"),"click",d2Choice9);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d2Choice11() {
	get("d2Choice12").className += " " + "unselect";
	var d2Result11 = function(){
		get("d2Result1112").style.display = "block";
		get("d2Result1112").firstChild.innerHTML = "哎这蠢孩子";
		scroll(0,99999);
	};
	setTimeout(d2Result11,1000);
	removeEvent(get("d2Choice12"),"click",d2Choice12);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d2Choice12() {
	get("d2Choice11").className += " " + "unselect";
	var d2Result12 = function(){
		get("d2Result1112").style.display = "block";
		get("d2Result1112").firstChild.innerHTML = "真有心！";
		scroll(0,99999);
	};
	setTimeout(d2Result12,1000);
	removeEvent(get("d2Choice11"),"click",d2Choice11);
}
function d2Choice13() {
	get("d2Choice14").className += " " + "unselect";
	var d2Result13 = function(){
		get("d2Result1314").style.display = "block";
		get("d2Result1314").firstChild.innerHTML = "呜~我害怕暴力！我不要跟你生活！（猫离家出走）";
		scroll(0,99999);
	};
	setTimeout(d2Result13,1000);
	removeEvent(get("d2Choice14"),"click",d2Choice14);
	setTimeout(gameover,2000);
}
function d2Choice14() {
	get("d2Choice13").className += " " + "unselect";
	var d2Result14 = function(){
		get("d2Result1314").style.display = "block";
		get("d2Result1314").firstChild.innerHTML = "我没事，对不起，以后我会小心的！（虽然只是说说…";
		scroll(0,99999);
	};
	setTimeout(d2Result14,1000);
	removeEvent(get("d2Choice13"),"click",d2Choice13);
}

addEvent(get("d2Choice1"),"click",d2Choice1);
addEvent(get("d2Choice2"),"click",d2Choice2);
addEvent(d2Li[1],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[3].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[5].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d2Choice3"),"click",d2Choice3);
addEvent(get("d2Choice4"),"click",d2Choice4);
addEvent(d2Li[5],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[8].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d2Choice5"),"click",d2Choice5);
addEvent(get("d2Choice6"),"click",d2Choice6);
addEvent(d2Li[8],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d2Choice7"),"click",d2Choice7);
addEvent(get("d2Choice8"),"click",d2Choice8);
addEvent(d2Li[11],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[12].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[13].style.display = 'block';scroll(0,99999);",3000);
});	
addEvent(get("d2Choice9"),"click",d2Choice9);
addEvent(get("d2Choice10"),"click",d2Choice10);
addEvent(d2Li[13],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[15].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[16].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[17].style.display = 'block';scroll(0,99999);",4000);
});	
addEvent(get("d2Choice11"),"click",d2Choice11);
addEvent(get("d2Choice12"),"click",d2Choice12);
addEvent(d2Li[17],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[19].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[20].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d2Choice13"),"click",d2Choice13);
addEvent(get("d2Choice14"),"click",d2Choice14);
addEvent(d2Li[20],"click",function(){
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[22].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d2Dialog.getElementsByTagName('li');li[23].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d2next"),"click",function(){
	d2Dialog.style.display = "none";
	d3Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 2; i ++) {
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});	
//day3
function d3Choice1() {
	get("d3Choice2").className += " " + "unselect";
	var d3Result1 = function(){
		get("d3Result12").style.display = "block";
		get("d3Result12").firstChild.innerHTML = "你竟然不信我！";
	};
	setTimeout(d3Result1,1000);
	removeEvent(get("d3Choice2"),"click",d3Choice2);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d3Choice2() {
	get("d3Choice1").className += " " + "unselect";
	var d3Result2 = function(){
		get("d3Result12").style.display = "block";
		get("d3Result12").firstChild.innerHTML = "还好本王机灵口亨！";
	}
	setTimeout(d3Result2,1000);
	removeEvent(get("d3Choice1"),"click",d3Choice1);

}
function d3Choice3() {
	get("d3Choice4").className += " " + "unselect";
	var d3Result3 = function(){
		get("d3Result34").style.display = "block";
		get("d3Result34").firstChild.innerHTML = "就是！";
		scroll(0,99999);
	};
	setTimeout(d3Result3,1000);
	removeEvent(get("d3Choice4"),"click",d3Choice4);
}
function d3Choice4() {
	get("d3Choice3").className += " " + "unselect";
	var d3Result4 = function(){
		get("d3Result34").style.display = "block";
		get("d3Result34").firstChild.innerHTML = "铲屎的，我…好像中毒了（猫毒发身亡）";
		scroll(0,99999);
	};
	setTimeout(d3Result4,1000);
	removeEvent(get("d3Choice3"),"click",d3Choice3);
	setTimeout(gameover,2000);
}
function d3Choice5() {
	get("d3Choice6").className += " " + "unselect";
	var d3Result5 = function(){
		get("d3Result56").style.display = "block";
		get("d3Result56").firstChild.innerHTML = "朕吃洋葱会死的好吗！（你家的猫气绝身亡）";
		scroll(0,99999);
	};
	setTimeout(d3Result5,1000);
	removeEvent(get("d3Choice6"),"click",d3Choice6);
	setTimeout(gameover,2000);
}
function d3Choice6() {
	get("d3Choice5").className += " " + "unselect";
	var d3Result6 = function(){
		get("d3Result56").style.display = "block";
		get("d3Result56").firstChild.innerHTML = "一定注意哦！";
		scroll(0,99999);
	};
	setTimeout(d3Result6,1000);
	removeEvent(get("d3Choice5"),"click",d3Choice5);
}
addEvent(get("d3Choice1"),"click",d3Choice1);
addEvent(get("d3Choice2"),"click",d3Choice2);
addEvent(d3Li[1],"click",function(){
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[3].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d3Choice3"),"click",d3Choice3);
addEvent(get("d3Choice4"),"click",d3Choice4);
addEvent(d3Li[4],"click",function(){
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[6].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d3Choice5"),"click",d3Choice5);
addEvent(get("d3Choice6"),"click",d3Choice6);
addEvent(d3Li[7],"click",function(){
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[9].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d3Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d3next"),"click",function(){
	d3Dialog.style.display = "none";
	d4Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 2; i ++) {
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});	
//day4
function d4Choice1() {
	get("d4Choice2").className += " " + "unselect";
	var d4Result1 = function(){
		get("d4Result12").style.display = "block";
		get("d4Result12").firstChild.innerHTML = "口亨，本王下次半夜3点叫你";
	};
	setTimeout(d4Result1,1000);
	removeEvent(get("d4Choice2"),"click",d4Choice2);
}
function d4Choice2() {
	get("d4Choice1").className += " " + "unselect";
	var d4Result2 = function(){
		get("d4Result12").style.display = "block";
		get("d4Result12").firstChild.innerHTML = "切，不要拿本王跟那些娘娘腔比";
	}
	setTimeout(d4Result2,1000);
	removeEvent(get("d4Choice1"),"click",d4Choice1);

}
function d4Choice3() {
	get("d4Choice4").className += " " + "unselect";
	var d4Result3 = function(){
		get("d4Result34").style.display = "block";
		get("d4Result34").firstChild.innerHTML = "切，本王才不稀罕你养，我今天就要做桌面清洁大师";
		scroll(0,99999);
	};
	setTimeout(d4Result3,1000);
	removeEvent(get("d4Choice4"),"click",d4Choice4);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice4() {
	get("d4Choice3").className += " " + "unselect";
	var d4Result4 = function(){
		get("d4Result34").style.display = "block";
		get("d4Result34").firstChild.innerHTML = "本王今天乏了，就只摔个瓶子吧";
		scroll(0,99999);
	};
	setTimeout(d4Result4,1000);
	removeEvent(get("d4Choice3"),"click",d4Choice3);

}
function d4Choice5() {
	get("d4Choice6").className += " " + "unselect";
	var d4Result5 = function(){
		get("d4Result56").style.display = "block";
		get("d4Result56").firstChild.innerHTML = "不要，绝对不要！";
		scroll(0,99999);
	};
	setTimeout(d4Result5,1000);
	removeEvent(get("d4Choice6"),"click",d4Choice6);
}
function d4Choice6() {
	get("d4Choice5").className += " " + "unselect";
	var d4Result6 = function(){
		get("d4Result56").style.display = "block";
		get("d4Result56").firstChild.innerHTML = "反正我是不会洗澡的~";
		scroll(0,99999);
	};
	setTimeout(d4Result6,1000);
	removeEvent(get("d4Choice5"),"click",d4Choice5);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice7() {
	get("d4Choice8").className += " " + "unselect";
	var d4Result7 = function(){
		get("d4Result78").style.display = "block";
		get("d4Result78").firstChild.innerHTML = "不要啊！你看我都哀嚎了";
		scroll(0,99999);
	};
	setTimeout(d4Result7,1000);
	removeEvent(get("d4Choice8"),"click",d4Choice8);
}
function d4Choice8() {
	get("d4Choice7").className += " " + "unselect";
	var d4Result8 = function(){
		get("d4Result78").style.display = "block";
		get("d4Result78").firstChild.innerHTML = "本王不会为五斗米折腰的……吧";
		scroll(0,99999);
	};
	setTimeout(d4Result8,1000);
	removeEvent(get("d4Choice7"),"click",d4Choice7);
}
function d4Choice9() {
	get("d4Choice10").className += " " + "unselect";
	var d4Result9 = function(){
		get("d4Result910").style.display = "block";
		get("d4Result910").firstChild.innerHTML = "还！不！快！去！";
		scroll(0,99999);
	};
	setTimeout(d4Result9,1000);
	removeEvent(get("d4Choice10"),"click",d4Choice10);
}
function d4Choice10() {
	get("d4Choice9").className += " " + "unselect";
	var d4Result10 = function(){
		get("d4Result910").style.display = "block";
		get("d4Result910").firstChild.innerHTML = "风干个头，你要谋杀朕吗？我会生病的！赶快把我吹干";
		scroll(0,99999);
	};
	setTimeout(d4Result10,1000);
	removeEvent(get("d4Choice9"),"click",d4Choice9);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice11() {
	get("d4Choice12").className += " " + "unselect";
	var d4Result11 = function(){
		get("d4Result1112").style.display = "block";
		get("d4Result1112").firstChild.innerHTML = "我不要！";
		scroll(0,99999);
	};
	setTimeout(d4Result11,1000);
	removeEvent(get("d4Choice12"),"click",d4Choice12);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice12() {
	get("d4Choice11").className += " " + "unselect";
	var d4Result12 = function(){
		get("d4Result1112").style.display = "block";
		get("d4Result1112").firstChild.innerHTML = "快帮我看看";
		scroll(0,99999);
	};
	setTimeout(d4Result12,1000);
	removeEvent(get("d4Choice11"),"click",d4Choice11);
}
function d4Choice13() {
	get("d4Choice14").className += " " + "unselect";
	var d4Result13 = function(){
		get("d4Result1314").style.display = "block";
		get("d4Result1314").firstChild.innerHTML = "这什么东西，味道好大要熏死我，脖子痒痒的好难受，我不要";
		scroll(0,99999);
	};
	setTimeout(d4Result13,1000);
	removeEvent(get("d4Choice14"),"click",d4Choice14);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice14() {
	get("d4Choice13").className += " " + "unselect";
	var d4Result14 = function(){
		get("d4Result1314").style.display = "block";
		get("d4Result1314").firstChild.innerHTML = "嗯，好多了，两脚兽你还挺靠谱的";
		scroll(0,99999);
	};
	setTimeout(d4Result14,1000);
	removeEvent(get("d4Choice13"),"click",d4Choice13);
}
function d4Choice15() {
	get("d4Choice16").className += " " + "unselect";
	var d4Result15 = function(){
		get("d4Result1516").style.display = "block";
		get("d4Result1516").firstChild.innerHTML = "哼，这都不知道，你自己谷歌去吧";
		scroll(0,99999);
	};
	setTimeout(d4Result15,1000);
	removeEvent(get("d4Choice16"),"click",d4Choice16);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d4Choice16() {
	get("d4Choice15").className += " " + "unselect";
	var d4Result16 = function(){
		get("d4Result1516").style.display = "block";
		get("d4Result1516").firstChild.innerHTML = "喂一点点就可以咯";
		scroll(0,99999);
	};
	setTimeout(d4Result16,1000);
	removeEvent(get("d4Choice15"),"click",d4Choice15);
}
function d4Choice17() {
	get("d4Choice18").className += " " + "unselect";
	var d4Result17 = function(){
		get("d4Result1718").style.display = "block";
		get("d4Result1718").firstChild.innerHTML = "什么叫大概？！你果然不爱我";
		scroll(0,99999);
	};
	setTimeout(d4Result17,1000);
	removeEvent(get("d4Choice18"),"click",d4Choice18);
}
function d4Choice18() {
	get("d4Choice17").className += " " + "unselect";
	var d4Result18 = function(){
		get("d4Result1718").style.display = "block";
		get("d4Result1718").firstChild.innerHTML = "嗯~这位同志对待工作很认真嘛，不错不错";
		scroll(0,99999);
	};
	setTimeout(d4Result18,1000);
	removeEvent(get("d4Choice17"),"click",d4Choice17);
}
addEvent(get("d4Choice1"),"click",d4Choice1);
addEvent(get("d4Choice2"),"click",d4Choice2);
addEvent(d4Li[1],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[3].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice3"),"click",d4Choice3);
addEvent(get("d4Choice4"),"click",d4Choice4);
addEvent(d4Li[4],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[6].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice5"),"click",d4Choice5);
addEvent(get("d4Choice6"),"click",d4Choice6);
addEvent(d4Li[7],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[9].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d4Choice7"),"click",d4Choice7);
addEvent(get("d4Choice8"),"click",d4Choice8);
addEvent(d4Li[11],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[13].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[14].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice9"),"click",d4Choice9);
addEvent(get("d4Choice10"),"click",d4Choice10);
addEvent(d4Li[14],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[16].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[17].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[18].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d4Choice11"),"click",d4Choice11);
addEvent(get("d4Choice12"),"click",d4Choice12);
addEvent(d4Li[18],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[20].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[21].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice13"),"click",d4Choice13);
addEvent(get("d4Choice14"),"click",d4Choice14);
addEvent(d4Li[21],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[23].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[24].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice15"),"click",d4Choice15);
addEvent(get("d4Choice16"),"click",d4Choice16);
addEvent(d4Li[24],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[26].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[27].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4Choice17"),"click",d4Choice17);
addEvent(get("d4Choice18"),"click",d4Choice18);
addEvent(d4Li[27],"click",function(){
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[29].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d4Dialog.getElementsByTagName('li');li[30].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d4next"),"click",function(){
	d4Dialog.style.display = "none";
	d5Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 2; i ++) {
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});
//day5
function d5Choice1() {
	get("d5Choice2").className += " " + "unselect";
	var d5Result1 = function(){
		get("d5Result12").style.display = "block";
		get("d5Result12").firstChild.innerHTML = "恩不错不错~我已经是个成熟稳重的大猫啦";
	};
	setTimeout(d5Result1,1000);
	removeEvent(get("d5Choice2"),"click",d5Choice2);
}
function d5Choice2() {
	get("d5Choice1").className += " " + "unselect";
	var d5Result2 = function(){
		get("d5Result12").style.display = "block";
		get("d5Result12").firstChild.innerHTML = "居然不记得本王的生日，你该当何罪？";
	}
	setTimeout(d5Result2,1000);
	removeEvent(get("d5Choice1"),"click",d5Choice1);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}

}
function d5Choice3() {
	get("d5Choice4").className += " " + "unselect";
	var d5Result3 = function(){
		get("d5Result34").style.display = "block";
		get("d5Result34").firstChild.innerHTML = "巧克力蛋糕真好吃，可是朕好像不能吃巧克力……（猫中毒去世）";
		scroll(0,99999);
	};
	setTimeout(d5Result3,1000);
	removeEvent(get("d5Choice4"),"click",d5Choice4);
	setTimeout(gameover,2000);

}
function d5Choice4() {
	get("d5Choice3").className += " " + "unselect";
	var d5Result4 = function(){
		get("d5Result34").style.display = "block";
		get("d5Result34").firstChild.innerHTML = "哇~一口猫薄荷，快乐似神仙";
		scroll(0,99999);
	};
	setTimeout(d5Result4,1000);
	removeEvent(get("d5Choice3"),"click",d5Choice3);

}
function d5Choice5() {
	get("d5Choice6").className += " " + "unselect";
	var d5Result5 = function(){
		get("d5Result56").style.display = "block";
		get("d5Result56").firstChild.innerHTML = "笨！这都要我提醒你，我要去打疫苗啦！";
		scroll(0,99999);
	};
	setTimeout(d5Result5,1000);
	removeEvent(get("d5Choice6"),"click",d5Choice6);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d5Choice6() {
	get("d5Choice5").className += " " + "unselect";
	var d5Result6 = function(){
		get("d5Result56").style.display = "block";
		get("d5Result56").firstChild.innerHTML = "如果你喂我点零食的话我也许配合你一下";
		scroll(0,99999);
	};
	setTimeout(d5Result6,1000);
	removeEvent(get("d5Choice5"),"click",d5Choice5);
}
function d5Choice7() {
	get("d5Choice8").className += " " + "unselect";
	var d5Result7 = function(){
		get("d5Result78").style.display = "block";
		get("d5Result78").firstChild.innerHTML = "嗯，不错不错";
		scroll(0,99999);
	};
	setTimeout(d5Result7,1000);
	removeEvent(get("d5Choice8"),"click",d5Choice8);
}
function d5Choice8() {
	get("d5Choice7").className += " " + "unselect";
	var d5Result8 = function(){
		get("d5Result78").style.display = "block";
		get("d5Result78").firstChild.innerHTML = "铲屎的你已经失去我了";
		scroll(0,99999);
	};
	setTimeout(d5Result8,1000);
	removeEvent(get("d5Choice7"),"click",d5Choice7);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d5Choice9() {
	get("d5Choice10").className += " " + "unselect";
	var d5Result9 = function(){
		get("d5Result910").style.display = "block";
		get("d5Result910").firstChild.innerHTML = "谅你也不敢给我洗澡";
		scroll(0,99999);
	};
	setTimeout(d5Result9,1000);
	removeEvent(get("d5Choice10"),"click",d5Choice10);
}
function d5Choice10() {
	get("d5Choice9").className += " " + "unselect";
	var d5Result10 = function(){
		get("d5Result910").style.display = "block";
		get("d5Result910").firstChild.innerHTML = "挠你，把不能洗澡抄100遍";
		scroll(0,99999);
	};
	setTimeout(d5Result10,1000);
	removeEvent(get("d5Choice9"),"click",d5Choice9);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d5Choice11() {
	get("d5Choice12").className += " " + "unselect";
	var d5Result11 = function(){
		get("d5Result1112").style.display = "block";
		get("d5Result1112").firstChild.innerHTML = "朕也懒得出去";
		scroll(0,99999);
	};
	setTimeout(d5Result11,1000);
	removeEvent(get("d5Choice12"),"click",d5Choice12);
}
function d5Choice12() {
	get("d5Choice11").className += " " + "unselect";
	var d5Result12 = function(){
		get("d5Result1112").style.display = "block";
		get("d5Result1112").firstChild.innerHTML = "咬你！把“不能出门”抄100遍";
		scroll(0,99999);
	};
	setTimeout(d5Result12,1000);
	removeEvent(get("d5Choice11"),"click",d5Choice11);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d5Choice13() {
	get("d5Choice14").className += " " + "unselect";
	var d5Result13 = function(){
		get("d5Result1314").style.display = "block";
		get("d5Result1314").firstChild.innerHTML = "虽然我很不喜欢医院，但是那个时候只有医生能救我";
		scroll(0,99999);
	};
	setTimeout(d5Result13,1000);
	removeEvent(get("d5Choice14"),"click",d5Choice14);
}
function d5Choice14() {
	get("d5Choice13").className += " " + "unselect";
	var d5Result14 = function(){
		get("d5Result1314").style.display = "block";
		get("d5Result1314").firstChild.innerHTML = "呜呜挠你，还喂你的药，看来你是不想要我了（猫离家出走）";
		scroll(0,99999);
	};
	setTimeout(d5Result14,1000);
	removeEvent(get("d5Choice13"),"click",d5Choice13);
	setTimeout(gameover,2000);
}
function d5Choice15() {
	get("d5Choice16").className += " " + "unselect";
	var d5Result15 = function(){
		get("d5Result1516").style.display = "block";
		get("d5Result1516").firstChild.innerHTML = "那还不跪安";
		scroll(0,99999);
	};
	setTimeout(d5Result15,1000);
	removeEvent(get("d5Choice16"),"click",d5Choice16);
}
function d5Choice16() {
	get("d5Choice15").className += " " + "unselect";
	var d5Result16 = function(){
		get("d5Result1516").style.display = "block";
		get("d5Result1516").firstChild.innerHTML = "管你懂不懂，这几天别找我玩，朕休息去了";
		scroll(0,99999);
	};
	setTimeout(d5Result16,1000);
	removeEvent(get("d5Choice15"),"click",d5Choice15);
}
addEvent(get("d5Choice1"),"click",d5Choice1);
addEvent(get("d5Choice2"),"click",d5Choice2);
addEvent(d5Li[1],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[3].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d5Choice3"),"click",d5Choice3);
addEvent(get("d5Choice4"),"click",d5Choice4);
addEvent(d5Li[4],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[6].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d5Choice5"),"click",d5Choice5);
addEvent(get("d5Choice6"),"click",d5Choice6);
addEvent(d5Li[7],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[9].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",4000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[12].style.display = 'block';scroll(0,99999);",5000);
});
addEvent(get("d5Choice7"),"click",d5Choice7);
addEvent(get("d5Choice8"),"click",d5Choice8);
addEvent(d5Li[12],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[14].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[15].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[16].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d5Choice9"),"click",d5Choice9);
addEvent(get("d5Choice10"),"click",d5Choice10);
addEvent(d5Li[16],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[18].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[19].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d5Choice11"),"click",d5Choice11);
addEvent(get("d5Choice12"),"click",d5Choice12);
addEvent(d5Li[19],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[21].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[22].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d5Choice13"),"click",d5Choice13);
addEvent(get("d5Choice14"),"click",d5Choice14);
addEvent(d5Li[22],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[24].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[25].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d5Choice15"),"click",d5Choice15);
addEvent(get("d5Choice16"),"click",d5Choice16);
addEvent(d5Li[25],"click",function(){
	setTimeout("var li = d5Dialog.getElementsByTagName('li');li[27].style.display = 'block';scroll(0,99999);",2000);
});
addEvent(get("d5next"),"click",function(){
	d5Dialog.style.display = "none";
	d6Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 2; i ++) {
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});
//day6
function d6Choice1() {
	get("d6Choice2").className += " " + "unselect";
	var d6Result1 = function(){
		get("d6Result12").style.display = "block";
		get("d6Result12").firstChild.innerHTML = "铲屎的你敢踢我？朕以后见你一次挠你一次";
	};
	setTimeout(d6Result1,1000);
	removeEvent(get("d6Choice2"),"click",d6Choice2);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d6Choice2() {
	get("d6Choice1").className += " " + "unselect";
	var d6Result2 = function(){
		get("d6Result12").style.display = "block";
		get("d6Result12").firstChild.innerHTML = "哼~我才没有你这么蠢的奴才   朕大发慈悲允许你和我一起躺着吧";
	}
	setTimeout(d6Result2,1000);
	removeEvent(get("d6Choice1"),"click",d6Choice1);
}
function d6Choice3() {
	get("d6Choice4").className += " " + "unselect";
	var d6Result3 = function(){
		get("d6Result34").style.display = "block";
		get("d6Result34").firstChild.innerHTML = "我一口咬住你的咸猪手";
		scroll(0,99999);
	};
	setTimeout(d6Result3,1000);
	removeEvent(get("d6Choice4"),"click",d6Choice4);
}
function d6Choice4() {
	get("d6Choice3").className += " " + "unselect";
	var d6Result4 = function(){
		get("d6Result34").style.display = "block";
		get("d6Result34").firstChild.innerHTML = "哼哼，就知道你垂涎我的美貌很久了";
		scroll(0,99999);
	};
	setTimeout(d6Result4,1000);
	removeEvent(get("d6Choice3"),"click",d6Choice3);

}
function d6Choice5() {
	get("d6Choice6").className += " " + "unselect";
	var d6Result5 = function(){
		get("d6Result56").style.display = "block";
		get("d6Result56").firstChild.innerHTML = "什么鬼东西，本王才不玩这么愚蠢的东西，那个纸盒子好有趣，本王要去征服它";
		scroll(0,99999);
	};
	setTimeout(d6Result5,1000);
	removeEvent(get("d6Choice6"),"click",d6Choice6);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d6Choice6() {
	get("d6Choice5").className += " " + "unselect";
	var d6Result6 = function(){
		get("d6Result56").style.display = "block";
		get("d6Result56").firstChild.innerHTML = "这个绿色的小点是什么，看本王捉住它，喵呜~";
		scroll(0,99999);
	};
	setTimeout(d6Result6,1000);
	removeEvent(get("d6Choice5"),"click",d6Choice5);
}
function d6Choice7() {
	get("d6Choice8").className += " " + "unselect";
	var d6Result7 = function(){
		get("d6Result78").style.display = "block";
		get("d6Result78").firstChild.innerHTML = "居然敢打我？本王不跟家暴的人住在一起（猫离家出走）";
		scroll(0,99999);
	};
	setTimeout(d6Result7,1000);
	removeEvent(get("d6Choice8"),"click",d6Choice8);
	setTimeout(gameover,2000);
}
function d6Choice8() {
	get("d6Choice7").className += " " + "unselect";
	var d6Result8 = function(){
		get("d6Result78").style.display = "block";
		get("d6Result78").firstChild.innerHTML = "嗯~你最近表现很不错嘛~舔舔你的手以资鼓励";
		scroll(0,99999);
	};
	setTimeout(d6Result8,1000);
	removeEvent(get("d6Choice7"),"click",d6Choice7);
}
function d6Choice9() {
	get("d6Choice10").className += " " + "unselect";
	var d6Result9 = function(){
		get("d6Result910").style.display = "block";
		get("d6Result910").firstChild.innerHTML = "哼，那我偏要说，我把屎拉在厕所外面了……但是我把猫砂弄出来把屎埋上了（夸我）";
		scroll(0,99999);
	};
	setTimeout(d6Result9,1000);
	removeEvent(get("d6Choice10"),"click",d6Choice10);
}
function d6Choice10() {
	get("d6Choice9").className += " " + "unselect";
	var d6Result10 = function(){
		get("d6Result910").style.display = "block";
		get("d6Result910").firstChild.innerHTML = "本王把屎拉在厕所外面并且把猫砂全弄到地上了  没错，我就是故意的~";
		scroll(0,99999);
	};
	setTimeout(d6Result10,1000);
	removeEvent(get("d6Choice9"),"click",d6Choice9);
}
function d6Choice11() {
	get("d6Choice12").className += " " + "unselect";
	var d6Result11 = function(){
		get("d6Result1112").style.display = "block";
		get("d6Result1112").firstChild.innerHTML = "哼，反正臭的不是我，本王总有一天要离开这个脏兮兮的地方";
		scroll(0,99999);
	};
	setTimeout(d6Result11,1000);
	removeEvent(get("d6Choice12"),"click",d6Choice12);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d6Choice12() {
	get("d6Choice11").className += " " + "unselect";
	var d6Result12 = function(){
		get("d6Result1112").style.display = "block";
		get("d6Result1112").firstChild.innerHTML = "恩~干的不错嘛~给你一个优质铲屎官的称号吧~";
		scroll(0,99999);
	};
	setTimeout(d6Result12,1000);
	removeEvent(get("d6Choice11"),"click",d6Choice11);
}
function d6Choice13() {
	get("d6Choice14").className += " " + "unselect";
	var d6Result13 = function(){
		get("d6Result1314").style.display = "block";
		get("d6Result1314").firstChild.innerHTML = "你不给我吃，我知道零食放在哪儿，我自己去找，哼，打翻东西不能怪我哦";
		scroll(0,99999);
	};
	setTimeout(d6Result13,1000);
	removeEvent(get("d6Choice14"),"click",d6Choice14);
}
function d6Choice14() {
	get("d6Choice13").className += " " + "unselect";
	var d6Result14 = function(){
		get("d6Result1314").style.display = "block";
		get("d6Result1314").firstChild.innerHTML = "好吧好吧，反正我撒撒娇你一定会都给我的嘿嘿";
		scroll(0,99999);
	};
	setTimeout(d6Result14,1000);
	removeEvent(get("d6Choice13"),"click",d6Choice13);
}
function d6Choice15() {
	get("d6Choice16").className += " " + "unselect";
	var d6Result15 = function(){
		get("d6Result1516").style.display = "block";
		get("d6Result1516").firstChild.innerHTML = "挠死你喵呜";
		scroll(0,99999);
	};
	setTimeout(d6Result15,1000);
	removeEvent(get("d6Choice16"),"click",d6Choice16);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d6Choice16() {
	get("d6Choice15").className += " " + "unselect";
	var d6Result16 = function(){
		get("d6Result1516").style.display = "block";
		get("d6Result1516").firstChild.innerHTML = "本王知道了，睡醒了再宠幸你~";
		scroll(0,99999);
	};
	setTimeout(d6Result16,1000);
	removeEvent(get("d6Choice15"),"click",d6Choice15);
}
addEvent(get("d6Choice1"),"click",d6Choice1);
addEvent(get("d6Choice2"),"click",d6Choice2);
addEvent(d6Li[1],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[3].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice3"),"click",d6Choice3);
addEvent(get("d6Choice4"),"click",d6Choice4);
addEvent(d6Li[4],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[6].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[7].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice5"),"click",d6Choice5);
addEvent(get("d6Choice6"),"click",d6Choice6);
addEvent(d6Li[7],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[9].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[10].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice7"),"click",d6Choice7);
addEvent(get("d6Choice8"),"click",d6Choice8);
addEvent(d6Li[10],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[12].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[13].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice9"),"click",d6Choice9);
addEvent(get("d6Choice10"),"click",d6Choice10);
addEvent(d6Li[13],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[15].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[16].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice11"),"click",d6Choice11);
addEvent(get("d6Choice12"),"click",d6Choice12);
addEvent(d6Li[16],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[18].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[19].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice13"),"click",d6Choice13);
addEvent(get("d6Choice14"),"click",d6Choice14);
addEvent(d6Li[19],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[21].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[22].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d6Choice15"),"click",d6Choice15);
addEvent(get("d6Choice16"),"click",d6Choice16);
addEvent(d6Li[22],"click",function(){
	setTimeout("var li = d6Dialog.getElementsByTagName('li');li[24].style.display = 'block';scroll(0,99999);",2000);
});
addEvent(get("d6next"),"click",function(){
	d6Dialog.style.display = "none";
	d7Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 3; i ++) {
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
}
});
//day7
function d7Choice1() {
	get("d7Choice2").className += " " + "unselect";
	var d7Result1 = function(){
		get("d7Result12").style.display = "block";
		get("d7Result12").firstChild.innerHTML = "滚粗 本大人忙着发情没空理你ヾ(=°･°=)ﾉ喵♪";
	};
	setTimeout(d7Result1,1000);
	removeEvent(get("d7Choice2"),"click",d7Choice2);
}
function d7Choice2() {
	get("d7Choice1").className += " " + "unselect";
	var d7Result2 = function(){
		get("d7Result12").style.display = "block";
		get("d7Result12").firstChild.innerHTML = "哼天啦噜可怕 你不造本性这种东西是克制不了的吗？再也不喜欢你了";
	}
	setTimeout(d7Result2,1000);
	removeEvent(get("d7Choice1"),"click",d6Choice1);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d7Choice3() {
	get("d7Choice4").className += " " + "unselect";
	var d7Result3 = function(){
		get("d7Result34").style.display = "block";
		get("d7Result34").firstChild.innerHTML = "口亨！没想到发情期不能做绝育手术对吧？笨死你了";
		scroll(0,99999);
	};
	setTimeout(d7Result3,1000);
	removeEvent(get("d7Choice4"),"click",d6Choice4);
}
function d7Choice4() {
	get("d7Choice3").className += " " + "unselect";
	var d7Result4 = function(){
		get("d7Result34").style.display = "block";
		get("d7Result34").firstChild.innerHTML = "爸爸还能怎样？爸爸只能把你原谅喽";
		scroll(0,99999);
	};
	setTimeout(d7Result4,1000);
	removeEvent(get("d7Choice3"),"click",d7Choice3);

}
function d7Choice5() {
	get("d7Choice6").className += " " + "unselect";
	var d7Result5 = function(){
		get("d7Result56").style.display = "block";
		get("d7Result56").firstChild.innerHTML = "你这个人…怎么没有一点耐心呢？";
		scroll(0,99999);
	};
	setTimeout(d7Result5,1000);
	removeEvent(get("d7Choice6"),"click",d7Choice6);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d7Choice6() {
	get("d7Choice5").className += " " + "unselect";
	var d7Result6 = function(){
		get("d7Result56").style.display = "block";
		get("d7Result56").firstChild.innerHTML = "这还差不多嘛~";
		scroll(0,99999);
	};
	setTimeout(d7Result6,1000);
	removeEvent(get("d7Choice5"),"click",d7Choice5);
}
function d7Choice7() {
	get("d7Choice8").className += " " + "unselect";
	var d7Result7 = function(){
		get("d7Result78").style.display = "block";
		get("d7Result78").firstChild.innerHTML = "诶呦不错嘛(￣ิ∀ ￣ิ๑)恭喜你通过了考验";
		scroll(0,99999);
	};
	setTimeout(d7Result7,1000);
	removeEvent(get("d7Choice8"),"click",d7Choice8);
}
function d7Choice8() {
	get("d7Choice7").className += " " + "unselect";
	var d7Result8 = function(){
		get("d7Result78").style.display = "block";
		get("d7Result78").firstChild.innerHTML = "什么？？说好的科学养猫呢？你知不知道猫猫不做绝育会有多容易患病啊！生气！";
		scroll(0,99999);
	};
	setTimeout(d7Result8,1000);
	removeEvent(get("d7Choice7"),"click",d7Choice7);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d7Choice9() {
	get("d7Choice10").className += " " + "unselect";
	var d7Result9 = function(){
		get("d7Result910").style.display = "block";
		get("d7Result910").firstChild.innerHTML = "ヽ(=^･ω･^=)丿满分！爱你呦";
		scroll(0,99999);
	};
	setTimeout(d7Result9,1000);
	removeEvent(get("d7Choice10"),"click",d7Choice10);
}
function d7Choice10() {
	get("d7Choice9").className += " " + "unselect";
	var d7Result10 = function(){
		get("d7Result910").style.display = "block";
		get("d7Result910").firstChild.innerHTML = "哎你这个懒散的样子让本大人很心塞啊";
		scroll(0,99999);
	};
	setTimeout(d7Result10,1000);
	removeEvent(get("d7Choice9"),"click",d7Choice9);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d7Choice11() {
	get("d7Choice12").className += " " + "unselect";
	var d7Result11 = function(){
		get("d7Result1112").style.display = "block";
		get("d7Result1112").firstChild.innerHTML = "救救我啊 真是心塞塞";
		scroll(0,99999);
	};
	setTimeout(d7Result11,1000);
	removeEvent(get("d7Choice12"),"click",d7Choice12);
	point--;
	if(point == 0){
		setTimeout(gameover,2000);
	}
}
function d7Choice12() {
	get("d7Choice11").className += " " + "unselect";
	var d7Result12 = function(){
		get("d7Result1112").style.display = "block";
		get("d7Result1112").firstChild.innerHTML = "有种被看穿的感觉◉‿◉";
		scroll(0,99999);
	};
	setTimeout(d7Result12,1000);
	removeEvent(get("d7Choice11"),"click",d7Choice11);
}
addEvent(get("d7Choice1"),"click",d7Choice1);
addEvent(get("d7Choice2"),"click",d7Choice2);
addEvent(d7Li[2],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[4].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[5].style.display = 'block';scroll(0,99999);",3000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[6].style.display = 'block';scroll(0,99999);",4000);
});
addEvent(get("d7Choice3"),"click",d7Choice3);
addEvent(get("d7Choice4"),"click",d7Choice4);
addEvent(d7Li[6],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[8].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[9].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d7Choice5"),"click",d7Choice5);
addEvent(get("d7Choice6"),"click",d7Choice6);
addEvent(d7Li[9],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[11].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[12].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d7Choice7"),"click",d7Choice7);
addEvent(get("d7Choice8"),"click",d7Choice8);
addEvent(d7Li[12],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[14].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[15].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d7Choice9"),"click",d7Choice9);
addEvent(get("d7Choice10"),"click",d7Choice10);
addEvent(d7Li[15],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[17].style.display = 'block';scroll(0,99999);",2000);
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[18].style.display = 'block';scroll(0,99999);",3000);
});
addEvent(get("d7Choice11"),"click",d7Choice11);
addEvent(get("d7Choice12"),"click",d7Choice12);
addEvent(d7Li[18],"click",function(){
	setTimeout("var li = d7Dialog.getElementsByTagName('li');li[20].style.display = 'block';scroll(0,99999);",2000);
});
addEvent(get("d7next"),"click",function(){
	d7Dialog.style.display = "none";
	d8Dialog.style.display = "block";
	var temp = Number(localStorage.coin) + 1;
	localStorage.coin = temp;
	update();
	countInit();
	for(var i = 0; i < 11; i ++) {
		setTimeout("var li = d8Dialog.getElementsByTagName('li');li["+i+"].style.display = 'block';",(i+1)*1000);
	}
	setTimeout(finish,12000);
});
addEvent(get("finishBottom"),"click",function(){
	get("finish").style.visibility = "hidden";
	get("finish").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
	location.reload();
});
addEvent(get("finishClose"),"click",function(){
	get("finish").style.visibility = "hidden";
	get("finish").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
	location.reload();
});















//底部按钮
get("layer").style.transform = 'translate(-50%,-50%) scale(0,0)';
addEvent(get("op1"),"click",function(){
	if(op1Times < 2){
		get("layer").style.visibility = "visible";
		get("layer").style.transform = 'translate(-50%,-50%) scale(1,1)';
		get("body").className = "blur";
		get("layerText1").innerHTML = "喂食日常完成！好感度+1";
		get("layerText2").innerHTML = "铲屎官不错嘛~继续保持哦~";
		get("layerBottom").innerHTML = "你这样讲人家会害羞啦";
		get("mask").style.display = "block";
		var temp = Number(localStorage.intimate) + 1;
		localStorage.intimate = temp;
		update();
		op1Times ++;
	}
});
addEvent(get("layerBottom"),"click",function(){
	get("layer").style.visibility = "hidden";
	get("layer").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
});
addEvent(get("layerClose"),"click",function(){
	get("layer").style.visibility = "hidden";
	get("layer").style.transform = 'translate(-50%,-50%) scale(0,0)';
	get("body").className = "";
	get("mask").style.display = "none";
});
	addEvent(get("op2"),"click",function(){
	if(op2Times < 2) {
		get("layer").style.visibility = "visible";
		get("layer").style.transform = 'translate(-50%,-50%) scale(1,1)';
		get("body").className = "blur";
		get("layerText1").innerHTML = "铲屎日常完成！好感度+1";
		get("layerText2").innerHTML = "铲屎官...真是名副其实！";
		get("layerBottom").innerHTML = "你这样讲人家会害羞啦";
		get("mask").style.display = "block";
		var temp = Number(localStorage.intimate) + 1;
		localStorage.intimate = temp;
		update();
		op2Times ++;
	}
});
addEvent(get("op3"),"click",function(){
	if(op3Times < 2) {
		get("layer").style.visibility = "visible";
		get("layer").style.transform = 'translate(-50%,-50%) scale(1,1)';
		get("body").className = "blur";
		get("layerText1").innerHTML = "玩耍日常完成！好感度+1";
		get("layerText2").innerHTML = "今天又更喜欢你一点点呢~";
		get("layerBottom").innerHTML = "我最爱你了主子！";
		get("mask").style.display = "block";
		var temp = Number(localStorage.intimate) + 1;
		localStorage.intimate = temp;
		update();
		op3Times ++;
	}
});

addEvent(get("op4"),"click",function(){
	if(op4Times < 2) {
		get("layer").style.visibility = "visible";
		get("layer").style.transform = 'translate(-50%,-50%) scale(1,1)';
		get("body").className = "blur";
		get("layerText1").innerHTML = "洗澡日常完成！好感度+1";
		get("layerText2").innerHTML = "跟你讲，喵星人就是最讲究卫生的啦";
		get("layerBottom").innerHTML = "主子真是棒棒哒！";
		get("mask").style.display = "block";
		var temp = Number(localStorage.intimate) + 1;
		localStorage.intimate = temp;
		update();
		op4Times ++;
	}
});
