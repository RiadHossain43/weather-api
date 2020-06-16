if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const weather_api_key = process.env.WEATHER_API_KEY



app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

app.post('/weather',(req,res)=>{
    const current_weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${weather_api_key}`
     console.log(req.body)

    axios({
        url:current_weather_api,
        responseType: 'json'
    }).then(data=>{
        console.log(data.data)
        res.json(data.data)
    })

})
app.post('/forecast',(req,res)=>{
    const forecast_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=${weather_api_key}`
    console.log(req.body)
    axios({
        url:forecast_api,
        responseType: 'json'
    }).then(data=>{
        console.log(data.data)
        res.json(data.data)
    })

})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

