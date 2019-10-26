const docEl = document.documentElement;
const resize = 'orientationchange' in window ? 'orientationchange' : 'resize'
const setRem = function () {
    var screenWidth = docEl.clientWidth || window.screen.width || 360
    // 1080 PSD宽度(可变的)
    docEl.style.fontSize = (100 * screenWidth / 750) + 'px'
}
window.addEventListener(resize, setRem, false)
setRem()