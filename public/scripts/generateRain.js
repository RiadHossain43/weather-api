let crtEle = () => document.createElement('div')
let eleQS = cls => document.querySelector(cls)
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
 

function generateRain() {

    let raindrop = crtEle();
    raindrop.classList.add('rain-drop')
    let container = eleQS('.container')
    
    let init = {
        PosX: Math.floor(Math.random() * (window.innerWidth - raindrop.offsetWidth)), 
        PosY: 0
    }
    container.prepend(raindrop)
    set_style(raindrop, { left: `${init.PosX}px`, top: `${init.PosY}px` });

    function drop() {
        let YDIF = container.offsetHeight - raindrop.offsetTop;
        set_style(raindrop, { left: `${init.PosX}px`, top: `${raindrop.offsetTop + YDIF}px` });
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
export{generateRain}