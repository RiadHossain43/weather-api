
let getForcast = (latitude, longitude) => {
    fetch('/forecast', {
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
            let current_hour_index = 1
            // console.log(current_hour_index)
            let third_hr = document.getElementsByClassName('_3rd_hr')

            let hr_1 = data.list[current_hour_index+1].dt_txt
            let hr_2 = data.list[current_hour_index+2].dt_txt
            let hr_3 = data.list[current_hour_index+3].dt_txt
            let hr_4 = data.list[current_hour_index+4].dt_txt
            let hr_5 = data.list[current_hour_index+5].dt_txt
            let hr_6 = data.list[current_hour_index+6].dt_txt
            hr_1 = filterHr(hr_1)
            hr_2 = filterHr(hr_2)
            hr_3 = filterHr(hr_3)
            hr_4 = filterHr(hr_4)
            hr_5 = filterHr(hr_5)
            hr_6 = filterHr(hr_6)
            function filterHr(str){
                let final_index = str.search(':')
                let hr = `${str[final_index-2]}${str[final_index-1]}`
                if(hr==12) return hr = `${hr}pm`
                return hr = hr > 12 ? `${hr-12}pm` : `${hr}am`
            }
            third_hr[0].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+1].weather[0].icon}.svg" alt="">${hr_1}:${(data.list[current_hour_index+1].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+1].weather[0].main}`
            third_hr[1].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+2].weather[0].icon}.svg" alt="">${hr_2}:${(data.list[current_hour_index+2].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+2].weather[0].main}`
            third_hr[2].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+3].weather[0].icon}.svg" alt="">${hr_3}:${(data.list[current_hour_index+3].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+3].weather[0].main}`
            third_hr[3].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+4].weather[0].icon}.svg" alt="">${hr_4}:${(data.list[current_hour_index+4].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+4].weather[0].main}`
            third_hr[4].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+5].weather[0].icon}.svg" alt="">${hr_5}:${(data.list[current_hour_index+5].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+5].weather[0].main}`
            third_hr[5].innerHTML = `<img class="clock-icon" src="./weather_icons/animated/${data.list[current_hour_index+6].weather[0].icon}.svg" alt="">${hr_6}:${(data.list[current_hour_index+6].main.temp-273).toFixed(1)}<span>&#176;</span>C ${data.list[current_hour_index+6].weather[0].main}`
            
        })
}
export {getForcast}