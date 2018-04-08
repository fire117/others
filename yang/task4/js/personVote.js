



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
//获得天数
var d = Number(sessionStorage.getItem("day"));
$(document).ready(function(){
    $(".vote-item__role").bind("click",function(event){
        if(killedPerson.indexOf($(this).children(".vote-item__number").text()) !== -1) {
            alert("死的不能再死了");
        } else {
            var e = $(event.currentTarget);
            $(".vote-item__role").css("border","2px solid white");
            e.css("border","2px solid red");
            c = e.children(".vote-item__number").text();
            // sessionStorage.setItem("vote","true");

        }
    });
});
var pa = Number(sessionStorage.getItem("personAlive"));
var ka = Number(sessionStorage.getItem("killerAlive"));
function b() {
    console.log(c);
    if(c === undefined){
        alert("得票个人，才能走");
    } else {
        if(pageArray.indexOf(String(c-1)) === -1){
            sessionStorage.setItem("personAlive",pa-1)
        } else if(pageArray.indexOf(String(c-1)) !== -1) {
            sessionStorage.setItem("killerAlive",ka-1)
        }
        indexArray.push(sessionStorage.getItem("killedPerson"));
        indexArray.push(Number(c));
        sessionStorage.setItem("killedPerson",indexArray);
        var t1 = JSON.parse(sessionStorage.getItem("t"));
        t1[4*d-1] = 1;
        sessionStorage.setItem("t",JSON.stringify(t1));
    }
}
function h(){
    pa = Number(sessionStorage.getItem("personAlive"));
    ka = Number(sessionStorage.getItem("killerAlive"));
    if(ka === 0 || pa === ka){
        window.location.href = "result.html";
    } else {
        window.location.href = "game.html";
    }
}
var startGame = document.getElementsByClassName("footer__decide")[0];
startGame.addEventListener("click",b,false);
startGame.addEventListener("click",h,false);
sessionStorage.setItem("day",Number(sessionStorage.getItem("day"))+1);
sessionStorage.setItem("flow",Number(sessionStorage.getItem("flow"))+1);
