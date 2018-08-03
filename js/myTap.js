function TapTool(dom) {
    var obj = {
        tap: function (callback) {
            var startTime;
            var startX, startY;
            dom.addEventListener("touchStart", function (e) {
                //1、判断手指的个数
                if (e.touches.length > 1) {
                    return;
                }
                //2、记录按下的时间
                startTime = Date.now;

                //3、获取开始的坐标
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            });

            dom.addEventListener("touchend", function (e) {
                //1、判断手指的个数
                if (e.changedTouches.length > 1) {
                    return;
                }
                var endTime = Date.now;
                //判断按下的时长
                if (endTime - startTime > 300) {
                    return;
                }

                //3、获取松开手的坐标
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;

                //4、判断滑动的距离 5px
                //要判断距离，一定要加上绝对值
                if (Math.abs(endX - startX) > 5 || Math.abs(endY - startY) > 5) {
                    return;
                }

                console.log("成功");
                //5、通过验证，此时可以触发tap的点击的逻辑
                callback && callback(e);
            });
        }
    }
    return obj;
}