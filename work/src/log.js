// js/es6-module.js   bebel-loader  babel-polyfill
//css
require("../css/PC-reset.css");
require("../css/common.css");

import "babel-polyfill";
import $ from "./jquery.min.js";
import "./js.js";
//import "./login";
addEvent(window,'load',function(){			
			var sTel=document.getElementById("mytel")				
			var sCode=document.getElementById("mycode")
			sTel.value=getCookie("userTel")
		})
function check(elem){
	var oPwd=document.getElementById('mycode')
	var oUser=document.getElementById('mytel')
	if($(elem).prop("checked")){
		///setCookie('userName',oUser.value,14);		
		//setCookie('pwd',oPwd.value,14);
		//
		var sTel=document.getElementById("mytel")				
		var sCode=document.getElementById("mycode")
		sTel.value=getCookie("userTel");
		sCode.value=getCookie("userCode");
	}
}