import { useContext, useState } from "react"
import { GrFormLocation } from "react-icons/gr";
import { weatherContext } from "../contexts/WeatherContext";

const WeatherLocation = () => {
    // hooks
    const {dispatch,wData,weatherState} = useContext(weatherContext)
    const [locationInfo,setLocationInfo] = useState(weatherState)
    // func
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type:'CHANGE_LO',payload:locationInfo})
    }
    console.log(location)
    console.log(wData);
    return (
        <div className="flex flex-col justify-around w-9/12 p-3">
            <h2 className='text-center text-5xl'>Choose the location</h2>
            <div className="flex flex-col items-center">
                <form onSubmit={submitHandler}>
                    <input type="text" className="text-xl px-2 py-1 glassBgH" placeholder="Enter your city..." onChange={(e) => {
                        setLocationInfo({...weatherState,location:e.target.value});
                        localStorage.setItem("lastLocation",e.target.value)
                        }}/>
                </form>
            </div>
            {wData.location ? (<div className="flex flex-col items-center">
                <p>Today</p>
                <p className="text-center my-1 text-2xl flex">{wData.location.region}<GrFormLocation /></p>
                <p className="text-center my-1 text-5xl">{wData.current.temp_c}<span className="text-base">°C</span></p>
                <div className="flex justify-center"><img src={wData.current.condition.icon} alt="icon" /></div>
                <p className="text-center my-1">{wData.current.condition.text}</p>
                <p className="text-center my-1">{wData.current.temp_c}/{wData.current.dewpoint_c}°C</p>
            </div>) : (<p>Loading...</p>)}
            <div className="flex justify-around glassBg p-2 mx-2 overflow-hidden">
                {wData.forecast?.forecastday.map((day, i) => <div key={i} className="flex flex-col items-center min-w-28">
                    <p className="text-sm">{day.date.slice(5, 10)}</p>
                    <img src={day.day.condition.icon} alt="" />
                    <p className="text-center my-1 text-sm">{day.day.maxtemp_c}/{day.day.mintemp_c}°C</p>
                    <p className="text-center text-sm">{day.day.condition.text}</p>
                </div>)}
            </div>
        </div>
    )
}

export default WeatherLocation