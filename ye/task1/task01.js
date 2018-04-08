/**
 * Created by WHUTYZY on 2017/3/25.
 */
window.onload=function () {
	var domBtnStart=$("btn_start");
	var domBtnStop=$("btn_stop");
	var domBoxs=document.getElementsByClassName("box");
	var timer=null;
	var sColor=null;
	var domLights=null;
	var numIndex=[0,1,2,3,4,5,6,7,8];
	function $(id) {
		return document.getElementById(id);
	}
	function getArray(arr,length) {
		if (length>arr.length){
			length=arr.length;
		}
		var aOrign=arr.slice();
		var cacheArray=[];
		for(var i=0;i<length;i++){
			var nIndex=Math.floor(Math.random()*aOrign.length);
			cacheArray.push(aOrign[nIndex]);
			aOrign.splice(nIndex,1);
		}
		console.log(arr);
		console.log(cacheArray);
		return cacheArray;
	}
	function fnStartLight() {
		clearInterval(timer);
		timer=setInterval(function () {
			domLights=getArray(numIndex,3);
			for(var i=0;i<9;i++){
				domBoxs[i].style.backgroundColor="#e78326";
			}
			for(var i=0;i<3;i++){
				sColor="#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
				domBoxs[domLights[i]].style.backgroundColor=sColor;
			}
		},1000);
	}
	function fnStopLight() {
		for(var i=0;i<9;i++){
			domBoxs[i].style.backgroundColor="#e78326";
		}
		clearInterval(timer);
	}
	domBtnStart.addEventListener("click",fnStartLight,false);
	domBtnStop.addEventListener("click",fnStopLight,false);
	
	
}

 