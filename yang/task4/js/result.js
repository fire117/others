var pageString = window.sessionStorage.result;
var pageArray = pageString.split(",");
pageArray.splice(pageArray.length-1,1);
var pa = Number(sessionStorage.getItem("personAlive"));
var ka = Number(sessionStorage.getItem("killerAlive"));

var killed = sessionStorage.getItem("killedPerson").split(",");
var d = Number(sessionStorage.getItem("day"));
// killed[2d-2]
var info = $(".content-result__info");
if(pa === ka){
    var img = $("<img src=\"../images/result-img-killwin.png\" alt=\"\" class=\"result-img-victory\">");
    var text =$("<p class=\"content-result__congratulations\">\n" +
        "                太棒了!你知道么？在杀人游戏中只有20%的杀手取得游戏最终的胜利哦！\n" +
        "            </p>");
    info.append(img).append(text);
} else {
    var img = $("<img src=\"../images/result-icon-personwin.png\" alt=\"\" class=\"result-img-victory\">");
    var text =$("<p class=\"content-result__congratulations\">\n" +
        "                太棒了!平民取得游戏最终的胜利哦！\n" +
        "            </p>");
    info.append(img).append(text);
}
var killNum =$("<p class='content-result__summary'>本次游戏共计用时0小时25分钟<br>\n" + "杀&nbsp&nbsp&nbsp手&nbsp&nbsp&nbsp剩余"+ka+"人&nbsp&nbsp&nbsp&nbsp平&nbsp&nbsp民&nbsp&nbsp&nbsp剩余"+pa+"人<br></p>");
info.append(killNum);

// var a1 = killed[2*(d-1)-2];
// var a2;
// if(pageArray.indexOf(Number(a1)-1) !== -1){
//     a2 = "杀手";
// } else if(a1 === "-1") {
//     a2 = "什么也没有发生";
// } else {
//     a2 = "卧底";
// }
// var b1 = killed[2*(d-1)-1];
// var b2;
// if(pageArray.indexOf(Number(b1)-1) !== -1){
//     a2 = "杀手"
// } else {
//     a2 = "平民"
// }


var N = ["一","二","三","四","五","六","七","八","九"];
for(var i=0; i<d-1; i++){
    var a1 = killed[2*(i+1)-2];
    var a2;
    if(pageArray.indexOf(String(Number(a1)-1)) !== -1){
        a2 = "杀手";
    } else {
        a2 = "平民";
    }
    var b1 = killed[2*(i+1)-1];
    var b2;
    if(pageArray.indexOf(String(Number(b1)-1)) !== -1){
        b2 = "杀手"
    } else {
        b2 = "平民"
    }
    var a = $(".content-result__menu");
    var item = $("<div class='content-result__item'></div>");
    var date = $("<div class='item__date'></div>");
    var day = $("<span class='item__day'>第"+N[i]+"天</span>");
    var time = $("<span class='item__time'>0小时07分</span>")
    var night = $("<p class='item__night'>晚上："+a1+"号被杀手杀死，"+a1+"号是"+a2+"</p>");
    var daytime =$("<p class='item__daytime'>白天："+b1+"号被全民投票投死，"+b1+"号是"+b2+"</p>");
    if(killed[2*(i+1)-2] === "-1"){
        night = $("<p class='item__night'>晚上：今天晚上什么没有发生</p>");
    }
    date.append(day).append(time);
    item.append(date).append(night).append(daytime);
    a.append(item);
}