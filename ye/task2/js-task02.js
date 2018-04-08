/**
 * Created by WHUTYZY on 2017/3/29.
 */
$(function(){
	// 变量定义
	//滑动条
	var domInputNum=$("#inputNum");
	var domRange = $('#range');
	var domBtnMinus=$("#btnMinus");
	var domBtnAdd=$("#btnAdd");
	domInputNum.val(4);
	//身份分配
	var domBtnId=$("#idBtn");
	var domUlResult=$("#divResult");
	var domBtnStart=$("#btnStart");
	var domWord=$("#formWord input");
	var arrWord=[];
	var aIndex=[];
	var objPersons=[];
	var deadman=[];
	var person=null;
	// 传输的数据
	localStorage.clear();
	localStorage.setItem("deadman",JSON.stringify(deadman));
	//方法
	var createPerson=function (index,status,identity) {
		this.index=index;
		this.status=status;
		this.identity=identity;
	};
	function colorChange(n){
		domRange.css({
			'background-image':'-webkit-linear-gradient(left ,#fab344 0%,#fab344 '+n+'%,#fff '+n+'%, #fff 100%)'
		});
	}
	function shufflePick(n) {
		var aOrign=[];
		var aCache=[];
		for(var i=0;i<n;i++){
			aOrign[i]=i;
		}
		for(var i=n;i>0;){
			var rnd=Math.floor(Math.random()*i);
			aCache.push(aOrign[rnd]);
			aOrign[rnd]=aOrign[--i];
			
		}
		return aCache;
	}
	$.fn.stringify = function() {
		return JSON.stringify(this);
	}
	//事件注册
	// 滑动条相关事件
	domInputNum.on("keypress",function (event) {
		if(event.keyCode===13){
			var nInputValue=parseInt(domInputNum.val());
			if(nInputValue<4||nInputValue>18){
				alert("人数不能大于18或者小于4，请重新输入");
				domInputNum.val(4);
				domRange.val(4);
				colorChange(4);
				return false;
			}
			domRange.val(nInputValue);
			nInputValue=(nInputValue-4)/14*100;
			colorChange(nInputValue);
		}
	})
	domRange.on('mousedown',function(){
		var p = domRange.val();
		domRange.on('click',function(){
			p = domRange.val();
			domInputNum.val(p);
			p=(p-4)/14*100;
			colorChange(p);
		});
		domRange.on('mousemove',function(){
			p = domRange.val();
			domInputNum.val(p);
			console.log("move事件触发");
			p=(p-4)/14*100;
			colorChange(p);
		});
	});
	domRange.on('mouseup',function(){
		domRange.unbind("mousemove");
	});
	domBtnMinus.on("click",function () {
		var nInputValue=parseInt(domInputNum.val()) -1;
		domInputNum.val(nInputValue);
		domRange.val(nInputValue);
		nInputValue=(nInputValue-4)/14*100;
		colorChange(nInputValue);
	});
	domBtnAdd.on("click",function () {
		
		var nInputValue=parseInt(domInputNum.val()) +1;
		domInputNum.val(nInputValue);
		domRange.val(nInputValue);
		nInputValue=(nInputValue-4)/14*100;
		colorChange(nInputValue);
	});
	// 词组传递
	domBtnStart.on("click",function () {
		if(aIndex.length===0){
			alert("身份还未分配");
			return false;
		}
		arrWord.length=2;
		if($(domWord[0]).val().trim()===""||$(domWord[1]).val().trim()===""){
			$(domWord[0]).val("平民");
			$(domWord[1]).val("杀手")
		}
		arrWord[0]=domWord[0].value.toString();
		arrWord[1]=domWord[1].value.toString();
		localStorage.setItem("word",JSON.stringify(arrWord));
		window.location.href="../js-task03/single-id-page.html";
	});
	//移动端手指滑动
	domRange.on("touchmove",function () {
		var p = domRange.val();
		p = domRange.val();
		domInputNum.val(p);
		p=(p-4)/14*100;
		colorChange(p);
	});
	// 身份分配事件
	domBtnId.on("click",function () {
		domUlResult.empty();
		objPersons=[];
		var nPerson=parseInt(domInputNum.val());
		if(nPerson<4||nPerson>18){
			alert("人数不能大于18或者小于4，请重新输入");
			domInputNum.val(4);
			return false;
		}
		// 身份数据传递
		aIndex=shufflePick(nPerson);
		localStorage.setItem("id",JSON.stringify(aIndex));
		// 传递结束
		var stringDoms=[];
		for(var i=0;i<nPerson;i++){
			
			if((i+1)%4==0){
				stringDoms[i]="<li><i class='block bgc-yellow'></i>杀&emsp;手&ensp;1&ensp;人</li>";
				
			}
			else{
				stringDoms[i]="<li><i class='block bgc-blue'></i>平&emsp;民&ensp;1&ensp;人</li>";
				
			}
		}
		
		for(var i=0;i<nPerson;i++){
			var domPersonId=$(stringDoms[aIndex[i]]);
			domUlResult.append(domPersonId);
			if((aIndex[i]+1)%4===0){
				person=new createPerson(i,"alive","killer");
			}
			else{
				person=new createPerson(i,"alive","normal");
			}
			objPersons.push(person);
		}
		localStorage.setItem("objPersons",JSON.stringify(objPersons));
		console.log(objPersons);
	});
	
	//数据传递
	
	
});
