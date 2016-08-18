import "./js.js";
var $  = require("./jquery.min.js");
var jQuery = require("./jquery.min.js");

module.exports=function($){
	addEvent(window,'load',function(){
	
		addEvent(oPwd,'blur',pwdTest)			
		addEvent(oPhone,'blur',phoneTest);	
		oGetcode.value=getCode();
		
	addEvent(oCode,'blur',codeTest);
	
	addEvent(oMust,'click',mustTest)
	
})

function nameTest(){
	var oUser=document.getElementById('username')
	var oAlert1=document.getElementById('alert1')			
		if(oUser.value==''){
			oAlert1.style.visibility='visible';
			
			oAlert1.className='alt'
			oUser.style.borderColor='red'
			return false;
		}else{
			oUser.style.borderColor=''
			oAlert1.style.visibility='hidden';
			return true;
		}
	}
	
function pwdTest(){	
	var a=0,b=0,c=0;
		var re1=/^(\w|\s){6,16}$/
		var re2=/\s+/    
		var re3=/^[0-9]{0,9}$/  
		var that=document.getElementById('pwd')
		var oTip=document.getElementById('tip')	
		var aP=oTip.getElementsByTagName('p')
		oTip.style.visibility='visible';
		if(re1.test(that.value)){
			aP[0].className='green'
			
			a=0;//return true;
		}else{
			aP[0].className='red'
			
			a=1; //return false;
		}
		if(re2.test(that.value)){
			aP[1].className='red'
			
			b=1;
		}else{
			aP[1].className='green'
			
			b=0;
		}
		
		if(re3.test(that.value)){
			aP[2].className='red'
			c=1;
		}else{
			aP[2].className='green';
			
			c=0;
		}
		
		if(!a&&!b&&!c){			
			that.style.borderColor=''

			return true;
		}else{
			that.style.borderColor='red'
			return false;
			
		}

}

function pwdTest2(){
	var oPwd=document.getElementById('pwd')
	var oPwd2=document.getElementById('pwd2')
	var oAlert2=document.getElementById('alert2')
		if(oPwd2.value==oPwd.value){
			oAlert2.style.visibility='hidden';
			return true;
		}else {
			
			oAlert2.style.visibility='visible';
			
			oAlert2.className='alt'
			oPwd2.style.borderColor='red'
			return false;			
		}
		
	}
function codeTest(){
	var that=document.getElementById('code')
	var oGetcode=document.getElementById('getcode')
	
	if(that.value.toLowerCase()==oGetcode.value.toLowerCase()){
		that.style.borderColor=''
		
		return true;
	}else {
		that.style.borderColor='red'
		return false;
		
	}
}
function phoneTest(){
	
	var that=document.getElementById('phone');
	var re=/^1[3|5|8|7][0-9]{9}$/;
	
	if(re.test(that.value)){
		that.style.borderColor=''
		return true;
		
	}else {
		that.style.borderColor='red'
		return false;
		
	}
		
}
function mustTest(){
		var that=document.getElementById('must');
		if(that.checked){
			return true;
			
		}else{
			return false;
		}
}


function infoTest(){
		var oPwd=document.getElementById('pwd')
		var oUser=document.getElementById('username')
		
	if(nameTest()&&phoneTest()&&pwdTest2()&&pwdTest()&&codeTest()&&mustTest()){
		
		setCookie('userName',oUser.value,14);
		
		
		setCookie('pwd',oPwd.value,14);
		return true;
		
	}else{
		
		return false;
	}
	
}
}



