//let g = JSON.parse(sessionStorage.all);//简写形式
let user = JSON.parse(sessionStorage.getItem('all')); // 读取key值
console.log(user);


let clickNum = 1;
let playNum = 2;

$(document).ready(function () {
    $('#btn').click(function () {
        if (clickNum > 2 * user.length - 1) {
            window.location.href = 'judge.html';
        } else if (clickNum % 2 === 0) { //点击次数为偶数的情况下
            $('.imgShow').toggle();
            $('.imgHide').toggle();
            // $('.imgShow').removeClass('imgHide');
            $('#tips').toggle();
            $('#playerNum').text(playNum);
            $('#btn').text('查看' + playNum + '号身份');
            playNum++;
        } else { //点击次数为奇数的情况下
            $('.imgShow').toggle();
            $('.imgHide').toggle();
            // $('.imgShow').addClass('imgHide');
            $('#tips').toggle().text('角色：' + user[playNum - 2]);
            if (playNum < user.length + 1) {
                $('#btn').text('隐藏并传递给' + playNum + '号');
            } else {
                $('#btn').text('查看法官台本');
            }
        }
        clickNum++;
    });
});