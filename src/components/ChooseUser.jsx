import { useContext, useState } from "react"
import { weatherContext } from "../contexts/WeatherContext"
import { useNavigate } from "react-router-dom"


const ChooseUser = () => {
  const { dispatch } = useContext(weatherContext)
  const [userInfo, setUserInfo] = useState({
    username: '',
    location: "berlin"
  })
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (userInfo.location && userInfo.username) {
      localStorage.setItem('point', 0)
      dispatch({ type: 'CHOOSE_USER', payload: userInfo })
      navigate('/')
    } else {
      alert("Please fill all inputs")
    }
  }
  return (
    <div className="flex flex-col justify-around w-9/12">
      <form onSubmit={submitHandler} className="glassBgUser mx-10">
        <div className="flex flex-col items-center my-3">
          <label className="text-xl">Where are you at ??</label>
          <input type="text" className="text-xl px-2 py-1 glassBgH" placeholder="Enter your city..." onChange={(e) => {
            setUserInfo({ ...userInfo, location: e.target.value });
            localStorage.setItem("lastLocation",e.target.value)}} />
        </div>
        <div className="flex flex-col items-center my-3">
          <label className="text-xl">What is your name ??</label>
          <input type="text" className="text-xl px-2 py-1 glassBgH" placeholder="Enter your name..." onChange={(e) => {
            setUserInfo({ ...userInfo, username: e.target.value });
            localStorage.setItem("lastUserName",e.target.value)}} />
        </div>
        <div className="flex flex-col items-center my-3">
          <button type="submit" className='flex p-3 my-2 rounded-2xl bt-glassBg hover:bg-black/30 active:bg-black/50'>submit</button>
        </div>
      </form>
    </div>
  )
}

export default ChooseUser