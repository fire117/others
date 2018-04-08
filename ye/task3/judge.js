/**
 * Created by WHUTYZY on 2017/4/6.
 */
// 变量定义
var domPersonBox=$("#personBox");
var arrPersonIndex=JSON.parse(localStorage.getItem("id"));
var nPersonNum=arrPersonIndex.length;
console.log(nPersonNum);
// 身份容器生成
for(var i=0;i<nPersonNum;i++){
domPersonBox.append('<div class="person"> <div class="identity"> <span>水民</span> </div> <div class="index"> <span>1号</span> </div> </div>');}
var domSpans=$(".person .identity span");
var domSpanIndex=$(".person .index span");
for(var i=0;i<nPersonNum;i++){
	domSpanIndex[i].innerText=(i+1)+"号";
	if((arrPersonIndex[i]+1)%4==0){
		domSpans[i].innerText="杀手";
	}
}