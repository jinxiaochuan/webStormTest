//css
require("../css/PC-reset.css");
require("../css/common.css");

import "babel-polyfill";
import $ from "./jquery.min.js";
//require("./register");
import "./register";
//
$(".comReg").click(function(){
		$(".personReg").hide();
		$(".companyReg").show();
})
$(".perReg").click(function(){
	$(".personReg").show();
	$(".companyReg").hide();
})
