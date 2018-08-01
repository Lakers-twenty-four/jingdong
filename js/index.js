aboutTime();
headerEvent();

function aboutTime() {
    //预订总的时间
    time = 1 * 60 * 60; //坑

    //获取时间显示的标签
    spans = document.querySelectorAll(".timer>span");

    //设置当前时间
    setTime();

    var timeId = setInterval(function () {
        if (time == 0) {
            clearInterval(timeId);
            return;
        }

        time--;
        setTime();

    }, 1000);
}

function setTime() {
    //时
    var hour = parseInt(time / 60 / 60);
    //分
    var min = parseInt(time / 60 - hour * 60);
    //秒
    var sec = parseInt(time - hour * 60 * 60 - min * 60);

    // console.log(hour,min,sec);

    hour0 = parseInt(hour / 10);
    hour1 = parseInt(hour % 10);

    min0 = parseInt(min / 10);
    min1 = parseInt(min % 10);

    sec0 = parseInt(sec / 10);
    sec1 = parseInt(sec % 10);

    //赋值
    spans[0].innerText = hour0;
    spans[1].innerText = hour1;
    spans[3].innerText = min0;
    spans[4].innerText = min1;
    spans[6].innerText = sec0;
    spans[7].innerText = sec1;
}


function headerEvent() {
    /* 1  给header加rgba=>完全透明
    2  滚动条事件
    3
        a  还没有滚动的时候，透明度  a=0
        b  滚动到某一个值的时候，轮播图的高度  a=>0.9
        c  获取页面被卷去的高度  scrollTop */

    //获取头部标签
    var header = document.querySelector(".header");
    //获取轮播图的高度
    var height = document.querySelector(".swiper-container img").offsetHeight;

    window.onscroll = function () {
        // scrollTop 存在兼容 window.pageYOffset
        //document.body.scrollTop
        //document.documentElement.scrollTop

        // scrollTop 兼容写法
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || this.document.body.scrollTop;
        
        //透明度
        //  0 / x = 0
        //  scrollTop/height = 1
        //  scrollTop + 100 /height >1    1.9  2  5
        var temp = scrollTop/height;

        if (temp > 0.9) {
            temp = 0.9;
        }else {
            temp = 0;
        }

        //赋值
        header.style.backgroundColor = "rgba(201,21,35,"+temp+")";
    }
}

  
       