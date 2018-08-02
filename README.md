# 手机京东首页实例

## 1  swiper.js

### 1.1  描述

​	**swiper**常用于移动网站的内容触摸滑动

### 1.2  在线地址

- [swiper(js)官方网站](https://www.swiper.com.cn/)

### 1.3  在该项目中的使用

> 首先加载插件，需要用到的文件有swiper.min.js和swiper.min.css文件。可下载Swiper文件或使用CDN。	

```html
<!DOCTYPE html>
<html>
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    ...
    <script src="path/to/swiper.min.js"></script>
</body>
</html>
```

> HTML内容

```html
<!-- 轮播图部分开始 -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="./uploads/l1.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l2.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l3.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l4.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l5.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l6.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l7.jpg" alt="">
    </div>
    <div class="swiper-slide">
      <img src="./uploads/l8.jpg" alt="">
    </div>

  </div>
  <div class="swiper-pagination"></div>
</div>
<!-- 轮播图部分结束 -->
```

> 你可能想要给Swiper定义一个大小，当然不要也行。

```css
.swiper-container {
    width: 600px;
    height: 300px;
}  
```

> 初始化Swiper：最好是挨着</body>标签

```css
<script>
  window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
            clickable: true,
      },
      autoplay: {
        /* 用户滑动轮播图之后，是否禁止自动轮播图 默认是 true 禁止 */
        disableOnInteraction: false,
      }, 
      effect: 'fade',

    });

    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    mySwiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    mySwiper.pagination.destroy()
    mySwiper.pagination.init()
    mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
  }
</script>
```

> 如果不能写在HTML内容的后面，则需要在页面加载完成后再初始化（不推荐）。

```js
<script type="text/javascript">
window.onload = function() {
  ...
}
</script>
```

> 或者这样（Jquery和Zepto）

```js
<script type="text/javascript">
$(document).ready(function () {
 ...
})
</script>
```

> 完成。恭喜你，现在你的Swiper应该已经能正常切换了。





#### 1.4  小结

- 用户滑动轮播图之后，是否禁止自动轮播图 默认是 true 禁止

```js
autoplay: {
  /* 用户滑动轮播图之后，是否禁止自动轮播图 默认是 true 禁止 */
  disableOnInteraction: false,
}, 
```



## 2  原生swiper插件

### 2.1、功能一实现自动轮播

#### 2.2.1  示例代码：

```js
function mySlider() {
    //获取存放所有图片的大ul
    imgBoxUl = document.querySelector(".imgBox");
    
    //设置轮播图的索引
    index = 1;

    //显示第一张图片
    imgBoxUl.style.transform = "translateX(-"+index+"0%)";

    //开启定时器
    var timeId = slideChange();
}

//封装定时器
function slideChange () {
    return setInterval(function(){
        index++;
        //添加过渡
        imgBoxUl.style.transition = "transform .5s";
        imgBoxUl.style.transform = "translateX(-"+index+"0%)";

    },5000);
}
```

#### 2.2.2  解决过渡结束事件的bug(重点)

```js
// 过渡结束事件 让它来助理瞬间切换
// 过渡结束事件 有bug????
/* 
当页面失去焦点的时候
定时器会一直执行 
index++  
transitionend不会被执行
但是 等待页面重新获得焦点的时候 重新被执行了  

正常情况 页面没有失去焦点 
页面失去焦点 (缩小 ) 
  1 定时器 还是一样会执行 index++++  100 200 
  2 过渡结束事件 不会被执行 
页面重新获得焦点
  1 定时器 继续执行
  2 过渡结束事件 会被执行 
  index==9 
  100 200 index>=9 
*/

slides_ul.addEventListener("transitionend", function () {
  // 自动轮播 index++
  if (index >= 9) {
    index = 1;
    slides_ul.style.transition = "none";
    // 显示第一张图片
    slides_ul.style.transform = "translateX(-" + index + "0%)";
  } else if (index <= 0) {
    index = 8;
    slides_ul.style.transition = "none";
    // 显示第一张图片
    slides_ul.style.transform = "translateX(-" + index + "0%)";
  }

// index 合法 正常... 
var liIndex=index-1;
activeLi(liIndex);
```

### 2.2  绑定滑动事件

```js
//绑定滑动事件
myTool(imgBoxUl).swipe(function (direction) {
  //滑动的时候先清除定时器
  clearInterval(timeId);
  if (direction == "left") {
    index++;
  } else if (direction == "right") {
    index--;
  }

  //改变轮播图的位置
  //添加过渡
  imgBoxUl.style.transition = "transform .5s";
  //显示第一张图片
  imgBoxUl.style.transform = "translateX(-" + index + "0%)";

  //重新开启定时器
  timeId = slideChange();
});
```

### 2.3  绑定索引器

```js
imgBoxUl.addEventListener("transitionend", function () {
  //自动轮播 index++
  if (index >= 9) {
    index = 1;
    //移除过渡
    imgBoxUl.style.transition = "none";
    //显示第一张图片
    imgBoxUl.style.transform = "translateX(-" + index + "0%)";
  } else if (index <= 0) {
    index = 8;
    //移除过渡
    imgBoxUl.style.transition = "none";
    //显示第一张图片
    imgBoxUl.style.transform = "translateX(-" + index + "0%)";
  }

  var liIndex = index-1;
  activeLi(liIndex);
});
```

排他

```js
//排他
function activeLi(tmpIndex) {
    // indexer_lis
    for (var i = 0; i < indexer_lis.length; i++) {
        var li = indexer_lis[i];
        li.classList.remove("active");
    }
    indexer_lis[tmpIndex].classList.add("active");
}
```



