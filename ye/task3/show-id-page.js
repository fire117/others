/**
 * Created by WHUTYZY on 2017/4/1.
 */
$(function ()  {
	// 变量声明
	var domBtnIdControl=$("#btnIdControl");
	var domShowId=$("#showId");
	var domInforDetail=$("#inforDetail");
	var domIdNum=$("#idNum");
	var nCount=0;
	var nPersonIndex=1;
	// 传递过来的数据
	var arrWord=localStorage.getItem("word");
	console.log(arrWord);
	arrWord=JSON.parse(arrWord);
	var arrId=localStorage.getItem("id");
	arrId=JSON.parse(arrId);
	var nPersonLength=arrId.length;
	// 词组传递赋值
	var domRole=$("#role");
	var domWord=$("#word");
	// 变量声明结束
	
	// 函数声明
	function showId() {
		
		if(nCount===0){
			domShowId.hide();
			domInforDetail.show();
			nCount=1;
			changeId();
			if(nPersonIndex<(nPersonLength+1)){
				domBtnIdControl.text("隐藏并传递给"+nPersonIndex+"号");
			}
			else{
				domBtnIdControl.text("法官查看");
			}
		}
		else{
			domIdNum.text(nPersonIndex);
			if(nPersonIndex==(nPersonLength+1)){
				window.location.href="judge.html";
				return false;
			}
			domShowId.show();
			domInforDetail.hide();
			nCount=0;
			domBtnIdControl.text("查看"+nPersonIndex+"号身份");
		}
	}
	
	function changeId() {
		var personNum=arrId[nPersonIndex-1];
		nPersonIndex++;
		if((personNum+1)%4==0){
			domRole.text("角色：杀手");
			domWord.text("词组："+arrWord[1])
		}
		else{
			domRole.text("角色：水民");
			domWord.text("词组："+arrWord[0]);
		}
		
	}
	// 函数声明结束
	
	// 事件注册开始
	domBtnIdControl.on("click",showId);
	
	
	// demo
	
	
})



