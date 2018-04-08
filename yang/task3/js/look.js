var remindImg = document.getElementsByClassName("look-img-remind")[0];
var number = document.getElementsByClassName("look__number")[0];
var wowImg = document.getElementsByClassName("look-img-wow")[0];
var identity = document.getElementsByClassName("look__identity")[0];
var identitySpecial = document.getElementsByClassName("look__identity--special")[0];
var phrase = document.getElementsByClassName("look__phrase")[0];
var tips = document.getElementsByClassName("look__tips")[0];
var lookBtn = document.getElementsByClassName("look--btn")[0];
var lookBtnSpecial = document.getElementsByClassName("look--btn--special")[0];
var pageString = window.sessionStorage.result;
var pageArray = pageString.split(",");
var total= Number(pageArray.slice(pageArray.length-1));
pageArray.splice(pageArray.length-1,1);

var i = 1, j = 1, n = 2, m = 1;
console.log(total);
lookBtn.addEventListener("click",show,false);
function show() {
    if(i < total*2){
        if(i % 2 !== 0) {
            number.innerHTML = m;
            lookBtn.value = "隐藏并传递给"+n+"号";
            remindImg.style.display = "none";
            wowImg.style.display = "block";
            identity.style.display = "block";
            phrase.style.display = "block";
            tips.style.display = "block";
            identitySpecial.style.display = "none";
            if(m === total){
                lookBtn.style.display = "none";
                lookBtnSpecial.style.display = "block";
            }
            if(pageArray.indexOf(String(m-1)) !== -1){
                identity.style.display = "none";
                identitySpecial.style.display = "block";
            }
            j++;
            n++;
            m++;
        } else {
            number.innerHTML = j;
            lookBtn.value = "查看看"+j+"号身份";
            remindImg.style.display = "block";
            wowImg.style.display = "none";
            identity.style.display = "none";
            phrase.style.display = "none";
            tips.style.display = "none";
            identitySpecial.style.display = "none";
        }
        i++;
    }
    console.log(i);
}
function a() {
    if(lookBtnSpecial.style.display === "block"){
        window.location.href = "look2.html"
    }
}
lookBtnSpecial.addEventListener("click",a,false);