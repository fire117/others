    var number_value = document.getElementsByClassName("personNumber__select")[0];
    var number_show = document.getElementsByClassName("personNumber__input")[0];
    var number_add = document.getElementsByClassName("personNumber__add")[0];
    var number_reduce = document.getElementsByClassName("personNumber__reduce")[0];
    var distribution_btn = document.getElementsByClassName("distribution--btn")[0];
    var submit = document.getElementsByClassName("licensing--btn")[0];
    function changeSlide2() {
        var ra = (Number(number_value.value)-6)/(18-6);
        var atru = window.getComputedStyle(number_value,null);
        var aWidth = atru.width;
        var num = ra*parseInt(aWidth)+"px";
        number_value.style.backgroundSize = num+" 100%";
    }
    function warn(){
        if(number_show.value < 6){
            alert("请输入6-18");
            number_show.value = 6;
        } else if(number_show.value > 18) {
            alert("请输入6-18");
            number_show.value = 18;
        }
    }

    function changeText() {
        number_show.value = number_value.value;
    }
    function changeSlide() {
        if(number_show.value.length == 0){
            number_value.value = 6;
        } else {
            number_value.value = number_show.value;
        }
    }
    function addPerson() {
        if(Number(number_value.value) == 18) {
            alert("大不了");
        }else {
            number_value.value++;
            number_show.value = number_value.value;
        }
    }

    function reducePerson() {
        if(Number(number_value.value) == 6) {
            alert("小不了");
        }else {
            number_value.value--;
            number_show.value = number_value.value;
        }
    }
    function removeElement(_element) {
        var _parentElement = _element.parentNode;
        if (_parentElement) {
            _parentElement.removeChild(_element);
        }
    }
    var list = document.getElementsByClassName("distribution__list")[0];
    var temp_li = list.getElementsByTagName("li");
    function warn2() {
        if(Number(number_value.value) != temp_li.length ){
            alert("请先设置");
        }
    }
    function createList() {
        while(temp_li.length > 0){
            removeElement(temp_li[0]);
        }
        if (number_value.value <= 7){
            for(var i=0; i<number_value.value; i++) {
                var li = document.createElement("li");
                var li_text = document.createTextNode("水民");
                li.setAttribute("class","distribution__item");
                li.appendChild(li_text);
                list.appendChild(li);
            }
            var li_special = document.createElement("li");
            var li_textspecical = document.createTextNode("卧底");
            li_special.setAttribute("class","distribution__item--special distribution__item");
            li_special.appendChild(li_textspecical);
            list.replaceChild(li_special,list.childNodes[shuffle(Number(number_value.value),1)[0]]);
        } else if(number_value.value > 7 && number_value.value <= 12) {
            for(var k=0; k<number_value.value; k++) {
                var li = document.createElement("li");
                var li_text = document.createTextNode("水民");
                li.setAttribute("class","distribution__item");
                li.appendChild(li_text);
                list.appendChild(li);
            }
            var special2 = shuffle(Number(number_value.value),2);
            for(var j=0; j<2; j++) {
                var li_special = document.createElement("li");
                var li_textspecical = document.createTextNode("卧底");
                li_special.setAttribute("class","distribution__item--special distribution__item");
                li_special.appendChild(li_textspecical);
                list.replaceChild(li_special,list.childNodes[special2[j]]);
            }
        } else {
            for(var n=0; n<number_value.value; n++) {
                var li = document.createElement("li");
                var li_text = document.createTextNode("水民");
                li.setAttribute("class","distribution__item");
                li.appendChild(li_text);
                list.appendChild(li);
            }
            var special3 = shuffle(Number(number_value.value),3);
            for(var m=0; m<3; m++) {
                var li_special = document.createElement("li");
                var li_textspecical = document.createTextNode("卧底");
                li_special.setAttribute("class","distribution__item--special distribution__item");
                li_special.appendChild(li_textspecical);
                list.replaceChild(li_special,list.childNodes[special3[m]]);
            }
        }
    }
    function shuffle(nub,j) {
        var temp_nub = new Array();
        for(var n = 0; n<nub; n++) {
            temp_nub[n] = n;
        }
        var return_nub = new Array();
        for(var i= 0; i<j; i++){
            var special_index = Math.floor(Math.random()*temp_nub.length);
            return_nub[i] = temp_nub[special_index];
            temp_nub.splice(special_index,1);
        }
        return return_nub;
    }
    function fa() {
        if(temp_li.length < 1) {
            alert("请设置");
        }
        if(number_show.value < 6 || number_show.value > 18){
            alert("请输入6-18");
        }
    }
    var EventUtill = {
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        getEvent: function(event){
            return event ? event : window.event;
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        removeHandler: function(element, type, handler){
            if (element.removeEventListener){
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent){
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        getCharCode: function(event){
            if (typeof event.charCode == "number"){
                return event.charCode;
            } else {
                return event.keyCode;
            }
        }
    };
    EventUtill.addHandler(number_show, "keypress", function(event){
        event = EventUtill.getEvent(event);
        var target = EventUtill.getTarget(event);
        var charCode = EventUtill.getCharCode(event);
        if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey){
            EventUtill.preventDefault(event);
        }
    });
    // function order(obj) {
    //     var temp_array = new Array();
    //     for(var i=0; i<temp_li.length;i++){
    //         temp_array[i]=temp_li[i]
    //     }
    //     temp_array.sort(function(a,b){
    //         return Math.random()>0.5?-1:1;
    //     });
    //     return temp_array;
    // }

    number_value.addEventListener("input",changeSlide2,false);
    number_value.addEventListener("change",changeSlide2,false);

    number_value.addEventListener("input",changeText,false);
    number_value.addEventListener("change",changeText,false);
    number_show.addEventListener("input",changeSlide,false);
    number_show.addEventListener("change",changeSlide,false);
    number_add.addEventListener("click",addPerson,false);
    number_reduce.addEventListener("click",reducePerson,false);
    distribution_btn.addEventListener("click",createList,false);
    number_add.addEventListener("click",changeSlide2,false);
    number_reduce.addEventListener("click",changeSlide2,false);
    submit.addEventListener("click",fa,false);
    number_show.addEventListener("input",changeSlide2,false);
    number_show.addEventListener("change",changeSlide2,false);
    number_show.addEventListener("blur",warn,false);
    submit.addEventListener("click",warn2,false);
