/**
 * Created by WHUTYZY on 2017/4/11.
 */
var gameResult=localStorage.getItem("gameResult");
var deadman=JSON.parse(localStorage.getItem("deadman"));
var numKiller=0;
var objPersons=JSON.parse(localStorage.getItem("objPersons"));
objPersons.map(function (person) {
	if(person.identity==="killer"){
		numKiller++;
	}
});
var words=JSON.parse(localStorage.getItem("word"));
var numDays=Math.floor(deadman.length/2);
var deadCount=0;
var numNormal=objPersons.length-numKiller;
var domResultImg=$("#resultImg");
var domResultRemark=$("#resultRemark");
var domNumKiller=$("#numKiller");
var domNumNormal=$("#numNormal");
var domResetBtn=$("#resetBtn");
var domKillWord=$("#killWord");
var domNormalWord=$("#normalWord");
var domGameRecord=$("#gameRecord");
//变量定义结束

// 方法定义
function idTOChinese(word) {
	switch (word){
		case "killer":
			return "杀手";
		case "normal":
			return "平民";
	}
}

// 页面初始化
if(gameResult==="killer"){
	domResultImg.attr("src","../img/killer-win.png");
	domResultRemark.text("太棒了!你知道么？在捉鬼游戏中只有40%的杀手取得游戏最终的胜利哦！");
}
else{
	domResultImg.attr("src","../img/normal-win.png");
	domResultRemark.text("太棒了!你知道么？在捉鬼游戏中只有60%的平民取得游戏最终的胜利哦！");
}
domNumKiller.html("杀&emsp;手"+numKiller+"人");
domNumNormal.html("平&emsp;民"+numNormal+"人");
domNormalWord.text("水民词汇："+words[0]);
domKillWord.text("卧底词汇："+words[1]);
for(var i=0;i<numDays;i++){
	domGameRecord.append('<li class="record-item"><span class="span-day">第'+(i+1)+'天</span><span class="period fr">0小时07分</span><p class="p-daytime">晚上：'+(deadman[i*2].index+1)+'被杀手杀死，身份是'+idTOChinese(deadman[i*2].identity)+'</p><p class="p-night">白天：'+(deadman[i*2+1].index+1)+'号被全民投票投死，身份是'+idTOChinese(deadman[i*2+1].identity)+'</p></li>');
	
}
//事件注册
domResetBtn.on("click",function () {
	window.location.href="../../js-task02/js-task02.html";
});