//页面标签全部加载完毕了再触发
onload = function () {
    leftScroll();
    rightScroll();

    function leftScroll() {
        var myScroll = new IScroll('.left');
        // console.log(myScroll);
        /* 左侧滚动条
        1  统统使用插件来实现，比较简洁，效果很好
        插件 iscroll.js
        tap点击事件，获取被点击的dom元素 */
        var left_ul = document.querySelector(".left ul");
        var lis = document.querySelectorAll(".left li");
        
        

        TapTool(left_ul).tap(function (e) {
            // 被点击的li标签
            var liDom = e.target;
            // console.log(myScroll1);
            // 让滚动到li标签的位置
            myScroll.scrollToElement(liDom);

            activeLi(liDom);
        });

        function activeLi(dom) {

            for (var i = 0; i < lis.length; i++) {
              var li = lis[i];
              li.classList.remove("active");
            }
      
            dom.classList.add("active");
          }
        }

        function rightScroll() {
            var myScroll2 = new IScroll('.right');
        }
    }

   

    
