/**
 * Created by WHUTYZY on 2017/4/11.
 */
window.onload=function () {
	var domIdResults=$("#idResults");
	var deadman=JSON.parse(localStorage.getItem("deadman"));
	var boolKill=true;
	var domLinkBtn=$("#linkBtn");
	var objPersons=JSON.parse(localStorage.getItem("objPersons"));
	var numKiller=0;
	objPersons.map(function (person) {
		if(person.identity==="killer"){
			numKiller++;
		}
	});
	console.log(objPersons);
	var numDeadKiller=0;
	deadman.map(function (person) {
		if(person.identity==="killer"){
			numDeadKiller++;
		}
	});
	var numNormalAlive=objPersons.length-numKiller-(deadman.length-numDeadKiller);
	
	var engToChinese=function (word) {
		switch (word){
			case "killer":
				return "杀手";
			case "normal":
				return "平民";
		}
	};
	//页面初始化
	for(var i=0,length=deadman.length;i<length;i++){
		if(boolKill){
			domIdResults.append('<li>'+(deadman[i].index+1)+'号玩家被杀手杀死了，真实身份是'+engToChinese(deadman[i].identity) +'</li>');
			domLinkBtn.text("去投票");
			boolKill=false;
		}
		else{
			domIdResults.append('<li>'+(deadman[i].index+1)+'号玩家被玩家投死了，真实身份是'+engToChinese(deadman[i].identity) +'</li>');
			boolKill=true;
			domLinkBtn.text("天黑请闭眼");
		}
	}
	//事件绑定
	domLinkBtn.on("click",function () {
		window.location.href="../html/killer-kill.html";
	});
	if(numDeadKiller===numKiller){
		domLinkBtn.text("平民胜利");
		localStorage.setItem("gameResult","normal");
		domLinkBtn.on("click",function () {
			window.location.href="../html/result.html";
		});
	}else {
		if((numKiller-numDeadKiller)===numNormalAlive){
			domLinkBtn.text("杀手胜利");
			localStorage.setItem("gameResult","killer");
			domLinkBtn.on("click",function () {
				window.location.href="../html/result.html";
			})
		}
	}
	
};