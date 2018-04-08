console.log(sessionStorage);
var pageString = window.sessionStorage.result;
var pageArray = pageString.split(",");
var pa = Number(pageArray[pageArray.length-1]-pageArray.length+1);
pageArray.splice(pageArray.length-1,1);
var ka = pageArray.length;

var t = [];
//检测天数，并且给他初始值1
if(sessionStorage.getItem("day") === null){
    sessionStorage.setItem("day",1);
    sessionStorage.setItem("flow",1);
    sessionStorage.setItem("t",JSON.stringify(t));
    sessionStorage.setItem("personAlive",pa);
    sessionStorage.setItem("killerAlive",ka);

}


//获得天数
var d = Number(sessionStorage.getItem("day"));
var flow = Number(sessionStorage.getItem("flow"));

//数字1变成中文一
var N = ["零","一","二","三","四","五","六","七","八","九"];


for(var i=1; i<=d; i++){
    var $p = $("<div class=\"game\">\n" +
        "        <p class=\"game__date game__date"+i+"\">第"+N[i]+"天</p>\n" +
        "        <div class=\"game__flow\">\n" +
        "            <div class=\"game__menu\">\n" +
        "                <img src=\"../images/game-moon.png\" alt=\"\" class=\"img-moon icon--separator\">\n" +
        "                <p class=\"game__item game__kill"+i+"\">\n" +
        "                    杀手杀人\n" +
        "                    <span class=\"game__icon icon__kill"+i+"\"></span>\n" +
        "                </p>\n" +
        "\n" +
        "            </div>\n" +
        "            <!--<p class=\"game__kiilInfo\">-->\n" +
        "                    <!--2号被杀手杀死，真实身份是平民-->\n" +
        "            <!--</p>-->\n" +
        "            <div class=\"game__menu\">\n" +
        "                <img src=\"../images/game-sun.png\" alt=\"\" class=\"img-sun icon--separator\">\n" +
        "                <p class=\"game__item game__dead"+i+"\">\n" +
        "                    亡灵发表遗言\n" +
        "                    <span class=\"game__icon icon__dead"+i+"\"></span>\n" +
        "                </p>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"game__menu\">\n" +
        "                <span class=\"icon--separator\"></span>\n" +
        "                <p class=\"game__item game__talk"+i+"\">\n" +
        "                    玩家依次发言\n" +
        "                    <span class=\"game__icon icon__talk"+i+"\"></span>\n" +
        "                </p>\n" +
        "\n" +
        "            </div>\n" +
        "            <div class=\"game__menu\">\n" +
        "                <span class=\"icon--separator\"></span>\n" +
        "                <p class=\"game__item game__vote"+i+"\">\n" +
        "                    全民投票\n" +
        "                    <span class=\"game__icon icon__vote"+i+"\"></span>\n" +
        "                </p>\n" +
        "\n" +
        "            </div>\n" +
        "            <!--<p class=\"game__voteInfo\">-->\n" +
        "                <!--6号被投票投死了，真实身份是平民-->\n" +
        "            <!--</p>-->\n" +
        "        </div>\n" +
        "    </div>");
    $("main").append($p);
}
// 杀人判断杀的是平民还是卧底
if (sessionStorage.getItem("killedPerson") !== null){
    var w = pageArray;
    var k =sessionStorage.getItem("killedPerson").split(",");
    for(var m=1; m<d; m++){
        var a1 = Number(k[m*2 - 2]);
        var a2;
        if(w.indexOf(String(a1-1)) !== -1){
            a2 = "杀手";
        } else {
            a2 = "平民";
        }
        if(a1 !== -1){
            var $killInfo = $("<p>"+a1+"号被杀死，真实身份是"+a2+"</p>");
            $killInfo.addClass("game__kiilInfo");
            $killInfo.insertAfter($(".game__kill"+m).parent());
        } else {
            $killInfo = $("<p>没有进行任何操作</p>");
            $killInfo.addClass("game__kiilInfo");
            $killInfo.insertAfter($(".game__kill"+m).parent());
        }

    }
    if(JSON.parse(sessionStorage.getItem("t"))[(d-1)*4-1] == "1"){
        for(var l=1; l<d; l++){
            var b1 = Number(k[l*2 - 1]);
            var b2;
            console.log(l);
            console.log(d);
            console.log(b1);
            if(w.indexOf(String(b1-1)) !== -1){
                b2 = "杀手";
            } else {
                b2 = "平民";
            }
            var $killInfoB = $("<p>"+b1+"号被投票投死了，真实身份是"+b2+"</p>");
            $killInfoB.addClass("game__voteInfo");
            $killInfoB.insertAfter($(".game__vote"+l).parent());
        }
    }
}
//-------------------------------------------------------------------------------------------------



// 杀人判断杀的是平民还是卧底
    if(JSON.parse(sessionStorage.getItem("t"))[d*4-4] == "1"){
        var a1 = Number(k[d*2 - 2]);
        var a2;
        if(w.indexOf(String(a1-1)) !== -1){
            a2 = "卧底";
        } else {
            a2 = "平民";
        }
        if(a1 !== -1){
            var $killInfo = $("<p>"+a1+"号被杀死，真实身份是"+a2+"</p>");
            $killInfo.addClass("game__kiilInfo");
            $killInfo.insertAfter($(".game__kill"+d).parent());
        } else {
            $killInfo = $("<p>没有进行任何操作</p>");
            $killInfo.addClass("game__kiilInfo");
            $killInfo.insertAfter($(".game__kill"+d).parent());
        }
    }




//投票判断投的是平民还是卧底
// if(JSON.parse(sessionStorage.getItem("t"))[d*4-1] == "1"){
//     var b1 = Number(k[d*2 - 1]);
//     var b2;
//     if(w.indexOf(String(b1-1)) !== -1){
//         b2 = "卧底";
//     } else {
//         b2 = "平民";
//     }
//     console.log(b1);
//     console.log(b2);
//     var $killInfoB = $("<p>"+b1+"号被投票投死了，真实身份是"+b2+"</p>");
//     $killInfoB.addClass("game__voteInfo");
//     $killInfoB.insertAfter($(".game__vote"+d).parent());
// }






$(".game__date").click(function(){
    $(this).next().toggle();
});
    $(".game__date").not(".game__date"+d).next().hide();



    $(".game__item").not(".game__kill"+d).not(".game__dead"+d).not(".game__talk"+d).not(".game__vote"+d).css("background-color", "rgba(131, 176, 154, 1)")
        .click(function(){
          alert("请按顺序来");
        });
    $(".game__icon").not(".icon__kill"+d).not(".icon__dead"+d).not(".icon__talk"+d).not(".icon__vote"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
// if($(".game__kill"+d)){
//     $(".game__dead"+d).css("background-color", "rgba(131, 176, 154, 1)");
//     $(".game__dead"+d).append("<style>.game__dead"+d+"::before{border-right: 12px solid rgba(131, 176, 154, 1) !important;}</style>");
// }
//杀手杀人按钮逻辑
if(JSON.parse(sessionStorage.getItem("t"))[d*4-4] == "1"){
    $(".game__kill"+d).click(function(){
        alert("请按顺序来");
    });
    $(".game__kill"+d).css("background-color","rgba(131, 176, 154, 1)");
    $(".icon__kill"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
} else {
    $(".game__kill"+d).click(function(){
        $(window).attr("location","kill.html");
    });
}



//亡灵发表遗言按钮逻辑
$(".game__dead"+d).click(function(){
    if(JSON.parse(sessionStorage.getItem("t"))[d*4-4] == "1") {
        if (JSON.parse(sessionStorage.getItem("t"))[d*4-3] == undefined) {
                $(".game__dead"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".icon__dead"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
                var t = JSON.parse(sessionStorage.getItem("t"));
                t[4*d-3] = 1;
                sessionStorage.setItem("t",JSON.stringify(t));
                // sessionStorage.setItem("dead","true");
                alert("请死者亮明身份并且发表遗言");
        } else {
            $(".game__dead"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".icon__dead"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
            alert("请按顺序进行");
        }
    } else {
        alert("人还没死");
    }
});
if(JSON.parse(sessionStorage.getItem("t"))[d*4-3] == "1"){
    $(".game__dead"+d).css("background-color", "rgba(131, 176, 154, 1)");
    $(".icon__dead"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");}


//玩家依次发言按钮逻辑
$(".game__talk"+d).click(function(){
    if(JSON.parse(sessionStorage.getItem("t"))[d*4-3] == "1") {
        if (JSON.parse(sessionStorage.getItem("t"))[d*4-2] == undefined) {
            $(".game__talk"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".icon__talk"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
            var t = JSON.parse(sessionStorage.getItem("t"));
            t[4*d-2] = 1;
            sessionStorage.setItem("t",JSON.stringify(t));
            // sessionStorage.setItem("talk","true");
            alert("请玩家依次发言");
        } else {
            $(".game__talk"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".game__talk"+d).append("<style>.game__talk"+d+"::before{border-right: 12px solid rgba(131, 176, 154, 1) !important;}</style>");
            alert("请按顺序进行");
        }
    } else {
        alert("亡灵还没发言");
    }
});
if(JSON.parse(sessionStorage.getItem("t"))[d*4-2] == "1"){
    $(".game__talk"+d).css("background-color", "rgba(131, 176, 154, 1)");
    $(".icon__talk"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");}


//全民投票按钮逻辑
$(".game__vote"+d).click(function(){
    if(JSON.parse(sessionStorage.getItem("t"))[d*4-2] == "1") {
        if (JSON.parse(sessionStorage.getItem("t"))[d*4-1] == undefined) {
            $(".game__vote"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".icon__vote"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
            $(window).attr("location","personVote.html");
        } else {
            $(".game__vote"+d).css("background-color", "rgba(131, 176, 154, 1)");
            $(".icon__vote"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
            alert("请按顺序进行");
        }
    } else {
        alert("玩家还没有发言");
    }
});
if(JSON.parse(sessionStorage.getItem("t"))[d*4-1] == "1"){
    $(".game__vote"+d).css("background-color", "rgba(131, 176, 154, 1)");
    $(".icon__vote"+d).css("border-right", "12px solid rgba(131, 176, 154, 1)");
}


//法官记录
$(".footer__record").click(function(){
    $(window).attr("location","record.html");

});


//结束按钮
$(".footer__end").click(function(){
   $(window).attr("location","index.html");
});
sessionStorage.setItem("flow",Number(sessionStorage.getItem("flow"))+1);
