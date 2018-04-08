/**
 * Created by WHUTYZY on 2017/4/11.
 */
window.onload=function () {
	// 变量定义
	var domPersonBox=$("#personBox");
	var domGameTitle=$("#gameTitle");
	var domGameTips=$("#gameTips");
	var domKillBtn=$("#killBtn");
	
	var deadman=JSON.parse(localStorage.getItem("deadman"));
	deadman||(deadman=[]);
	// console.log(deadman);
	var gameState=localStorage.getItem("gameState");
	var objPersons=JSON.parse(localStorage.getItem("objPersons"));
	objPersons||(objPersons=[]);
	console.log(objPersons);
	var arrPersonIndex=JSON.parse(localStorage.getItem("id"));
	var nPersonNum=arrPersonIndex.length;
	
	var chooseMan=null;
	
	//变量定义结束
    
	// 函数定义
	
	// 函数定义结束
	
	// 页面初始化
	for(var i=0;i<nPersonNum;i++){
		domPersonBox.append('<div class="person"> <div class="identity"> <span>水民</span> </div> <div class="index"> <span>1号</span> </div> </div>');
		var domSpans=$(".person .identity span");
		var domSpanIndex=$(".person .index span");
		var domPersons=domPersonBox.find(".person");
		$(domPersons[i]).attr("index",i);
		$(domPersons[i]).attr("status","alive");
		$(domPersons[i]).attr("identity","normal");
		domSpanIndex[i].innerText=(i+1)+"号";
		if((arrPersonIndex[i]+1)%4==0){
			domSpans[i].innerText="杀手";
			$(domPersons[i]).attr("identity","killer");
		}
		if(objPersons[i].status==="dead"){
			$(domPersons[i]).find(".identity").css("background-color","#c9c9c9");
		}
		
	}
	// console.log(objPersons);
	switch (gameState){
		case "kill":
			domGameTitle.text("杀手杀人");
			domGameTips.text("杀手请选择要杀死的玩家");
			domKillBtn.text("杀死");
			break;
		case "vote":
			domGameTitle.text("玩家投票");
			domGameTips.text("玩家请选择要杀死的玩家");
			domKillBtn.text("投死");
	}
	//页面初始化结束
	
	//
	
	// console.log(domPersons);
	domPersons.on("click", function () {
		$(domPersons).css("border","0.04rem solid #fff");
		$(this).css("border","0.04rem solid red");
		chooseMan=$(this);
	});
	
	domKillBtn.on("click",function () {
		if(!chooseMan){
			alert("先杀人呀");
			return false;
		}
		if(objPersons[chooseMan.attr("index")].status==="dead") {
			alert("大佬，都死了，别再杀我了");
			return false;
		}
		if(gameState==="kill"){
			if(chooseMan.attr("identity")==="killer") {
				alert("都是杀手，有话好好说");
				return false;
			}
		}
		objPersons[chooseMan.attr("index")].status="dead";
		deadman.push(objPersons[chooseMan.attr("index")]);
		localStorage.setItem("deadman",JSON.stringify(deadman));
		localStorage.setItem("objPersons",JSON.stringify(objPersons) );
		if(gameState==="kill"){
			gameState="vote";
		}
		else{
			gameState="kill";
		}
		localStorage.setItem("gameState",gameState);
		window.location.href="../html/dark-discuss.html";
	});
};