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

