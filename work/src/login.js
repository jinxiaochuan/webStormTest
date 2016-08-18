module.exports = function(){
	function text(){
		var loginname = $("#mytel").val();
		var password = $("#mycode").val();
		$.ajax({
			url:"http://localhost:8080/Proxy/user/json/login.do",
			data:{
				"loginname":loginname,
				"password":password
			},
			async:true,
			success:function(str){
				console.log(str)

				var oData1=JSON.parse(str);				
				if(oData1.ecode==200){
					window.open("shuju.html","_self")
				}
				else if(oData1.ecode==500){
					$(".prompt").css("visibility","visible")
					$(".prompt").css("color","red")
					$(".prompt").html("用户名或密码错误")
				}
			}


		})
	}

}