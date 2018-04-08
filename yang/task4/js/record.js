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
$(".footer__decide").click(function(){
    $(window).attr("location","game.html");
});
