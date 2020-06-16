
let crtEle = () => document.createElement('span')
let eleQS = cls => document.querySelector(cls)
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
 

function generateThunder() {

    let thunder = crtEle();
    thunder.classList.add('thunder')
    let container = eleQS('.container')
    
    let init = {
        PosX: Math.floor(Math.random() * (window.innerWidth - thunder.offsetWidth)), 
        PosY: 0
    }
    container.prepend(thunder)
    set_style(thunder, { left: `${init.PosX}px`, top: `${init.PosY}px` });

    function drop() {
        let YDIF = container.offsetHeight - (thunder.offsetTop+thunder.offsetHeight);
        set_style(thunder, {height: `${thunder.offsetHeight+10000}px` });
    }

    function checkFloor() {
        if (thunder.offsetHeight >= window.innerHeight) {
            thunder.remove();
            clearInterval(collup);
        }
    }
    let collup = setInterval(() => {
        drop();
        checkFloor();
    }, 10);

}
export{generateThunder}