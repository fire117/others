let userNum = document.getElementById('num');//输入框
let btnStart = document.getElementById('start');//开始按钮
let add = document.getElementById('btnAdd');//加号按钮
let sub = document.getElementById('btnSub');//减号按钮
let range = document.getElementById('range');//滑动条
let set = document.getElementById('set');//设置按钮
let show = document.getElementById('show');//列表
let all = [];//存放所有玩家的空数组


//拖动滑动条的时候让滑动条的值与输入框的值同步
range.oninput = function () {
    userNum.value = range.value;
};

//不同条件下的提示信息
//输入框失焦后让输入框的值与滑动条的值同步
userNum.onblur = function () {
    if (userNum.value < 6) {
        alert('大于6人才能开始游戏哟');
        userNum.value = 6;
        range.value = userNum.value;
    } else if (userNum.value > 18) {
        alert('少于18人才能开始游戏哟');
        userNum.value = 18;
        range.value = userNum.value;
    } else {
        range.value = userNum.value;
    }
    if (isNaN(userNum.value)) {
        alert('请输入6-18之间的数字哟');
        userNum.value = 6;
        range.value = userNum.value;
    }
};

add.onclick = function () {
    userNum.value++;
    if (userNum.value > 18) {
        alert('少于18人才能开始游戏哟');
        userNum.value = 18;
    } else {
        range.value = userNum.value;
    }
};

//
sub.onclick = function () {
    userNum.value--;
    if (userNum.value < 6) {
        alert('大于6才能开始游戏哟');
        userNum.value = 6;
    } else {
        range.value = userNum.value;
    }
};

//动态设置玩家数量的显示区域
set.onclick = function () {
    let person = [];//空的平民数组
    let killer = [];//空的杀手数组
    if (userNum.value >= 6 && userNum.value <= 8) {
        killer.length = 1;
    } else if (userNum.value >= 9 && userNum.value <= 11) {
        killer.length = 2;
    } else if (userNum.value >= 12 && userNum.value <= 15) {
        killer.length = 3;
    } else if (userNum.value >= 16 && userNum.value <= 18) {
        killer.length = 4;
    }
    for (let i = 0; i < killer.length; i++) {
        killer[i] = '杀手'//输出杀手
    }
    for (let j = 0; j < userNum.value - killer.length; j++) {
        person[j] = '平民'//输出平民
    }
    all = person.concat(killer);//将杀手和平民两个数组合并存放在all中
    all.shuffle();//打乱数组顺序
    console.log(all);
    //将all输出在页面里
    let list = "";
    for (let k = 0; k < all.length; k++) {
        if (all[k] === '杀手') {
            list += "<li><span class='killer'></span>" + (k + 1) + "号" + all[k] + "</li>";
        } else {
            list += "<li><span class='person'></span>" + (k + 1) + "号" + all[k] + "</li>";
        }
    }
    show.innerHTML = list;
    let a = JSON.stringify(all);//将all数组转为字符串 赋值给a
    // sessionStorage.all = a;
    sessionStorage.setItem('all',a);// key-value形式  all是键名 a是字符串数据

};

//洗牌函数
Array.prototype.shuffle = function () {
    let input = this;
    for (let i = input.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
};

//跳转到show
btnStart.onclick = function () {
    location.href='show.html';
};






