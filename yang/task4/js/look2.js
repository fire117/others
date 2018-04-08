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
function b() {
    window.location.href = "game.html";
}
var startGame = document.getElementsByClassName("footer__decide")[0];
startGame.addEventListener("click",b,false);


