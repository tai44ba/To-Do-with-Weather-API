import { useContext, useEffect} from "react"
import { weatherContext } from "../contexts/WeatherContext"
import weatherBgTheme from '../bg-image.js'

const Weather = () => {
    // hooks
    const {setIsRain,wData,setWData,weatherState,setWeatherBg,weatherBg} = useContext(weatherContext)
    useEffect(() => {
        getWeatherData()
    }, [weatherState])
    // func
    const getWeatherData = async () => {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=158a9b605e53400d804162759241206&q=${(weatherState.location[0] || localStorage.getItem('lastLocation'))?.toUpperCase()+weatherState.location.slice(1)}&days=7&aqi=yes`)
            const data = await res.json()
            setWData(data)
            if (data.current.condition.text.toLowerCase().includes('rain')) {
                setIsRain(true)
                setWeatherBg(weatherBgTheme.rain)
            } else if (data.current.condition.text.toLowerCase().includes('cloudy')) {
                setWeatherBg(weatherBgTheme.cloudy)
            } else if (data.current.condition.text.toLowerCase().includes('sunny')) {
                setWeatherBg(weatherBgTheme.sunny)
            } else if (data.current.condition.text.toLowerCase().includes('clear')) {
                setWeatherBg(weatherBgTheme.clear)
            } else if (data.current.condition.text.toLowerCase().includes('drizzle')) {
                setWeatherBg(weatherBgTheme.lightDrizzle)
            } else if (data.current.condition.text.toLowerCase().includes('overcast')) {
                setWeatherBg(weatherBgTheme.cloudy)
            }
            return data
        } catch (error) {
            alert(error.message)
            return error.message
        }
    }
    console.log(wData);
    console.log(weatherBgTheme)
    return (
        <div className="mt-12">
            {wData.location? (<div className={`${weatherBg} flex flex-col rounded-2xl`}>
                <p className="text-center my-1 text-2xl">{wData.location.region}</p>
                <p className="text-center my-1 text-5xl">{wData.current.temp_c}<span className="text-base">°C</span></p>
                <div className="flex justify-center"><img src={wData.current.condition.icon} alt="icon" /></div>
                <p className="text-center my-1">{wData.current.temp_c}/{wData.current.dewpoint_c}°C</p>
                <p className="text-center my-1">{wData.location.localtime.slice(0, 10)}</p>
            </div>):(<p>Loading...</p>)}
        </div>
    )
}

export default Weather