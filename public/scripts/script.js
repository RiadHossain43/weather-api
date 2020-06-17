import {getTodayInfo} from './getTodayInfo.js'
import {getForcast} from './getForcast.js'


window.addEventListener('load', () => {
    let latitude
    let longitude

    if('geolocation' in navigator){
        console.log('geolocation available')
    }else alert('geolocation not available')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            latitude = pos.coords.latitude
            longitude = pos.coords.longitude

            getTodayInfo(latitude, longitude)
            getForcast(latitude, longitude)  
        })
    }else{
        alert('Error loading data.Sorry geolocation has been blocked on this device. PLease refresh and allow access')
    }
    
    
})

