const docEl = document.documentElement;
const resize = 'orientationchange' in window ? 'orientationchange' : 'resize';
const setRem = () => {
    const screenWidth = docEl.clientWidth || window.screen.width || 360;
    const fontSize = 100 * screenWidth / 750
    if(fontSize <= 70) {
        docEl.style.fontSize = fontSize + 'px';
    } else {
        docEl.style.fontSize = '80px';
    }
}
window.addEventListener(resize, setRem, false);
setRem();