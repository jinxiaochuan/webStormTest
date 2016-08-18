//倒计时到特定的日期或时间
//设置一个有效的结束日期。
//计算剩余时间。
//将时间转换成可用的格式。
//输出时钟数据作为一个可重用的对象。
//在页面上显示时钟，并在它到达0时停止。

Class daojishi{
  constructor(id,endtime){
    this.id = id;
    this.endtime=endtime;
  }
  getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );

    //输出时钟数据作为一个可重用的对象
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }
 
  initializeClock(id, endtime){
    var clock=document.getElementById(id);
    clock.style.display = 'block';
    
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    updateClock(endtime){
      var t = getTimeRemaining(endtime);
      //.避免不断重建时钟 把每个数字嵌入到span标签内
        daysSpan.innerHTML = t.days+'天';
        hoursSpan.innerHTML = t.hours+'时';
        minutesSpan.innerHTML = t.minutes+'分';
        secondsSpan.innerHTML = t.seconds+'秒';// ('0' + t.seconds).slice(-2);添加前导零
      if(t<=0){
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
   
  }

}







//将剩余时间输出到div
function initializeClock(id, endtime){
  

    
	
}
 
  
}
//var deadline = '2015-12-31';
//initializeClock('clockdiv', deadline);
//html:
/*<div id="clockdiv">
    Days: <span class="days"></span><br>
    Hours: <span class="hours"></span><br>
    Minutes: <span class="minutes"></span><br>
    Seconds: <span class="seconds"></span>
</div>*/