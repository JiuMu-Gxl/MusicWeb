function remSize() {
    // 获取设备宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    // 获取设备高度
    var deviceHeight = document.documentElement.clientHeight || window.innerHeight;
    // 限制最大宽度和最小宽度 最大750 最小320
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + "px";
    // 设置字体大小
    document.querySelector('body').style.fontSize = 0.3 + "rem";
}
remSize();

// window.onresize直接给window的onresize属性绑定事件，只能有一个，后面的会覆盖前面
// 当窗口发生变化 自动调用进行适配
window.onresize = function () {
    remSize();
}