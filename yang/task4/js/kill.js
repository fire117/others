var pageString = window.sessionStorage.result;
var pageArray = pageString.split(",");
var total= Number(pageArray.slice(pageArray.length-1));
pageArray.splice(pageArray.length-1,1);
var content = document.getElementsByClassName("content__vote")[0];
for(var i = 0; i<total; i++){
    var wrap = document.createElement("div");
    wrap.setAttribute("class","content__vote-wrap");
    content.appendChild(wrap);
    var item = document.createElement("div");
    item.setAttribute("class","content__vote-item");
    wrap.appendChild(item);
    var role = document.createElement("div");
    role.setAttribute("class","vote-item__role");
    item.appendChild(role);
    if(pageArray.indexOf(String(i)) !== -1){
        var title = document.createElement("p");
        title.setAttribute("class","vote-item__title");
        title.innerHTML = "杀手";
        role.appendChild(title);
        var number = document.createElement("p");
        number.setAttribute("class","vote-item__number");
        number.innerHTML = String(i+1);
        role.appendChild(number);
    } else {
        var title = document.createElement("p");
        title.setAttribute("class","vote-item__title");
        title.innerHTML = "平民";
        role.appendChild(title);
        var number = document.createElement("p");
        number.setAttribute("class","vote-item__number");
        number.innerHTML = String(i+1);
        role.appendChild(number);
    }
}

var d = Number(sessionStorage.getItem("day"));

if(sessionStorage.getItem("killedPerson") !== null){
    var killedPerson = sessionStorage.getItem("killedPerson").split(",");
    $(document).ready(function(){
        $.each($(".vote-item__title"), function(i,val){
            if(killedPerson.indexOf(String(i+1)) !== -1){
               $(this).css("background-color","rgba(131, 176, 154, 1)");
            }
        });
    });
}

var indexArray = new Array();
var c;
$(document).ready(function(){
    $(".vote-item__role").bind("click",function(event){
        if($(this).children(".vote-item__title").text() == "杀手"){
            alert("你是杀手不能杀死本职业，请选择其他玩家杀死");
        }
        else if(sessionStorage.getItem("killedPerson") !== null) {
            if(killedPerson.indexOf($(this).children(".vote-item__number").text()) !== -1) {
                alert("放下屠刀，回头是岸");
            } else {
                var e = $(event.currentTarget);
                $(".vote-item__role").css("border","2px solid white");
                e.css("border","2px solid red");
                c = e.children(".vote-item__number").text();
            }
        } else {
            var e = $(event.currentTarget);
            $(".vote-item__role").css("border","2px solid white");
            e.css("border","2px solid red");
            c = e.children(".vote-item__number").text();
        }
    });
});
//获得天数
// var getDay = sessionStorage.getItem("day");
// var turnObject = JSON.parse(sessionStorage.getItem("dayObject"));  //对象形式的dayObject
// turnObject[1].isClicked = "1";   //改变对象形式的dayObject的值
// console.log(sessionStorage);
// console.log(sessionStorage.getItem("dayObject"));





var pa = Number(sessionStorage.getItem("personAlive"));
var ka = Number(sessionStorage.getItem("killerAlive"));
function b() {
    if (sessionStorage.getItem("killedPerson") !== null){
        indexArray.push(sessionStorage.getItem("killedPerson"));
    }
    if(c == null){
        indexArray.push(-1);
    } else {
        indexArray.push(Number(c));
        sessionStorage.setItem("personAlive",pa-1)
    }
    sessionStorage.setItem("killedPerson",indexArray);
    console.log(typeof Number(c));
    console.log(indexArray);
    var t1 = JSON.parse(sessionStorage.getItem("t"));
    t1[4*d-4] = 1;
    sessionStorage.setItem("t",JSON.stringify(t1));
    window.location.href = "game.html";
}
var startGame = document.getElementsByClassName("footer__decide")[0];
startGame.addEventListener("click",b,false);
sessionStorage.setItem("flow",Number(sessionStorage.getItem("flow"))+1);

