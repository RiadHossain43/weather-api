import {getTodayInfo} from './getTodayInfo.js'
import {getForcast} from './getForcast.js'

let crtEle = () => document.createElement('div')
let eleQS = cls => document.querySelector(cls)
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
 

window.addEventListener('load', () => {
    let latitude
    let longitude

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            latitude = pos.coords.latitude
            longitude = pos.coords.longitude

            getTodayInfo(latitude, longitude)
            getForcast(latitude, longitude)  
        })
    }
    
    
})


