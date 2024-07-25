
import { useContext } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { listContext } from "../contexts/ListContext";
import { weatherContext } from "../contexts/WeatherContext";


const User = () => {
  const {point} = useContext(listContext)
  const {weatherState} = useContext(weatherContext)
  return (
    <div className="px-2 py-3 my-2">
        <p className="text-5xl"><FaUserAstronaut /></p>
        <span className="text-lg px-2">Lv. 1</span>
        <p className="text-2xl py-3">{(weatherState.username||localStorage.getItem("lastUserName"))?(weatherState.username||localStorage.getItem("lastUserName")):'Guest'}</p>
        <p className="text-lg px-1">EXP: {point?point:localStorage.getItem('point')}</p>
    </div>
  )
}

export default User