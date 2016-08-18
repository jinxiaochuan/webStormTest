var sEvent=function(){
	addEvent:function(obj, type, fn){//添加事件兼容
		if (obj.addEventListener) {
			obj.addEventListener(type, fn,false);
		} else if (obj.attachEvent) {
			obj.attachEvent('on' + type, fn);
		}
	},

	removeEvent:function(obj, type, fn) { //移除事件兼容
				if (obj.removeEventListener) {
				obj.removeEventListener(type, fn,false);
				} else if (obj.detachEvent) {
				obj.detachEvent('on' + type, fn);
				}
	},
	getTarget:function(evt) { //得到事件目标
				if (evt.target) {
				return evt.target;
				} else if (window.event.srcElement) {
				return window.event.srcElement;
				}
	},
	getCode:function(){
				var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']
			    var str=''
				while(str.length<4){
					var iNum=parseInt(Math.random()*100)
					while(iNum>35){
						iNum=parseInt(Math.random()*100)
					}
					  str+=arr[iNum]						
				}					
					return str.toUpperCase();
	},
	getByClass:function(obj,sClass){
		if(obj.getElementsByClassName){			
			return obj.getElementsByClassName(sClass);			
		}
		else{						
			var aElem=obj.getElementsByTagName('*');//*所有
			var arr=[];
			var arr1=[];
			for(var i=0;i<aElem.length;i++){
				arr1=aElem[i].className.split(' ');
				for(var j=0;j<arr1.length;j++){
					if(arr1[j]==sClass){
						arr.push(aElem[i]);
					}
				}
			}
		return arr;
		}
	},

	setCookie:function(name,value,iDate){			//设置cookie	
			var oDate=new Date();		
			oDate.setDate(oDate.getDate()+iDate);				
			document.cookie=name+'='+value+';expires='+oDate;								
	},
	getCookie:function(name){				        //获取cookie
		var str=document.cookie;
		var arr=str.split('; ')
		for(var i=0;i<arr.length;i++){
			var arr1=arr[i].split('=');
			if(arr1[0]==name){
				return arr1[1];
			}					
		}				
		return '';								
	},
	removeCookie:function(name){						 //清除cookie							
				setCookie(name,'11111',-1)				
	}										




}
