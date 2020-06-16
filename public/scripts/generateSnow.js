let crtEle = () => document.createElement('span')
let eleQS = cls => document.querySelector(cls)
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
 
function generateSnow() {

    let raindrop = crtEle();
    raindrop.classList.add('snow-drop')
    let container = eleQS('.container')
    
    let init = {
        PosX: Math.floor(Math.random() * (window.innerWidth - raindrop.offsetWidth)), 
        PosY: 0
    }
    let dest = {
        PosX: Math.floor(Math.random() * (window.innerWidth - raindrop.offsetWidth)), 
    }
    container.prepend(raindrop)
    set_style(raindrop, { left: `${init.PosX}px`, top: `${init.PosY}px` });

    function drop() {
        let XDIF = dest.PosX - raindrop.offsetLeft;
        let YDIF = container.offsetHeight - raindrop.offsetTop;
        set_style(raindrop, { left: `${raindrop.offsetTop + XDIF}px`, top: `${raindrop.offsetTop + YDIF}px` });
    }

    function checkFloor() {
        if (raindrop.offsetTop >= window.innerHeight) {
            raindrop.remove();
            clearInterval(collup);
        }
    }
    let collup = setInterval(() => {
        drop();
        checkFloor();
    }, 1);

}
export{generateSnow}