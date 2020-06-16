import {getTodayInfo} from './getTodayInfo.js'
import {getForcast} from './getForcast.js'


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

