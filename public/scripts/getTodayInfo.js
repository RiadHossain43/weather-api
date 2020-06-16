import { cloudset } from './clouds.js'
import {generateRain} from './generateRain.js'
import {rainspeed} from './rainspeed.js'
import {generateSnow} from './generateSnow.js'

let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
function israining(icon){
    if(icon==='09d'|| icon==='09n' || icon==='10d'|| icon==='10n') return true
    return false
}
function issnowing(icon){
    if(icon==='13d'|| icon==='13n') return true
    return false
}

let getTodayInfo = (latitude, longitude) => {
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const clouds = document.getElementsByClassName('bg-cloud-icon')
            const conatiner = document.querySelector('.container')
            const forrest = document.querySelector('.bg-forest')
            const place = document.querySelector('.place')
            const weather_icon = document.querySelector('.weather-icon')
            const temp = document.querySelector('.temparature')
            const w_des = document.querySelector('.w-des')
            const feels_like = document.querySelector('.feels-like')
            const hum = document.querySelector('.hum')
            const pres = document.querySelector('.pres')
            const vis = document.querySelector('.vis')
            const wsp = document.querySelector('.wsp')
            const pos_lat = document.querySelector('.pos_lat')
            const pos_lng = document.querySelector('.pos_lng')
            const sun_moon = document.querySelector('.sun-moon')

            let sun_moon_src = {
                n: 'moon.svg',
                d: 'sun.svg'
            }
            let forest = {
                n:'forrest_night.svg',
                d:'forrest_day.svg'
            }
            console.log(typeof data.visibility)
            set_style(conatiner, { background: `var(--bg-${data.weather[0].icon})` })
            for (let i = 0; i < clouds.length; i++) {
                clouds[i].src = cloudset[`imgset_${data.weather[0].icon[0]}${data.weather[0].icon[1]}`][i]
                // clouds[i].src = cloudset[`imgset_10`][i]
            }
            let visibility = (data.visibility / 1000).toFixed(1)
            sun_moon.src = `./weather_icons/others/${sun_moon_src[`${data.weather[0].icon[2]}`]}`
            forrest.src = `./weather_icons/others/${forest[`${data.weather[0].icon[2]}`]}`
            place.innerHTML = `${(data.name)}`
  
            weather_icon.src = `./weather_icons/animated/${data.weather[0].icon}.svg`
            temp.innerHTML = `${(data.main.temp - 273).toFixed(2)}<span>&#176;</span>C`
            w_des.innerHTML = `${data.weather[0].main}<br>(${data.weather[0].description})`
            feels_like.innerHTML = `Feels Like <span class="firgure-data">${(data.main.feels_like - 273).toFixed(2)}<span>&#176;</span>C</span>`
            hum.innerHTML = `Humidity <span class="firgure-data">${data.main.humidity}%</span>`
            pres.innerHTML = `Pressure <span class="firgure-data">${(data.main.pressure / 1013.25).toFixed(2)}Atm</span>`
            vis.innerHTML = `Visibility <span class="firgure-data">${visibility} Km</span>`
            wsp.innerHTML = `Wind Speed <span class="firgure-data">${(data.wind.speed).toFixed(1)} Km/hr</span> | <span class="firgure-data"> ${(data.wind.deg).toFixed(1)} deg</span>`
            pos_lat.innerHTML = `Latitude: ${data.coord.lat}<span>&#176;</span></span>`
            pos_lng.innerHTML = `Longitude: ${data.coord.lon}<span>&#176;</span></span>`

            
            if(israining(data.weather[0].icon)){
                setInterval(() => {
                    generateRain()
                }, rainspeed[`_${data.weather[0].icon}`]);
            }
            if(issnowing(data.weather[0].icon)){
                setInterval(() => {
                    generateSnow()
                }, rainspeed[`_${data.weather[0].icon}`]);
            }

        })

}

export {getTodayInfo}