import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Weather = ({city}) => {
    const [temp, setTemp] = useState('')
    const [gust, setGust] = useState('')
    const [icon, setIcon] = useState('')

    const getWeather = () => {
        axios.get(`https://api.apixu.com/v1/current.json?key=<APIKEY>&q=${city}`)
        .then((json) => {
            console.log(json.data.current)
            const data = json.data
            return setTemp(data.current.temp_c), setIcon(data.current.condition.icon), setGust(data.current.gust_kph)
        })
    }
    useEffect(getWeather, [])

        return(
        <div> 
            <h3>Weather in {city}</h3> 
            <img src={icon} />
            <p><strong>Temperature</strong> {temp}C</p>
            <p><strong>Wind is blowing at </strong> {gust} km/h</p> 
        </div>)

}
    

export default Weather