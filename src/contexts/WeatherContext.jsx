import { useReducer, createContext, useState } from "react"

export const weatherContext = createContext(null)

const weatherReducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE_LO':
            return action.payload
        case 'CHOOSE_USER':
            return action.payload
        default:
            return state
    }
}
const initialState = {
    username:'',
    location:""
}
// 
const WeatherProvider = ({children}) => {
    // hooks
    const [weatherState,dispatch] = useReducer(weatherReducer,initialState)
    const [IsRain,setIsRain] = useState(false)
    const [wData, setWData] = useState({})
    const [weatherBg,setWeatherBg] = useState('')
  return (
    <weatherContext.Provider value={{weatherState,dispatch,IsRain,setIsRain,wData,setWData,weatherBg,setWeatherBg}}>
        {children}
    </weatherContext.Provider>
  )
}

export default WeatherProvider