
import { IoRainyOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiProgress3Line } from "react-icons/ri";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useContext, useState} from "react";
import { listContext } from "../contexts/ListContext";
import { NavLink } from "react-router-dom";
import { BsCollectionFill } from "react-icons/bs";
import { weatherContext } from "../contexts/WeatherContext";


const ListItem = ({ item }) => {
    // hooks
    const {dispatch,setPoint} = useContext(listContext)
    const {IsRain} = useContext(weatherContext)
    const [IsOpen, setIsOpen] = useState(false)
    const [IsDone, setIsDone] = useState(false)
    const [IsProgress, setIsProgress] = useState(false)
    // func
    const taskDone = () => {
        setIsDone(!IsDone)
        setIsProgress(false)
    }
    const makeStar = () => {
        const num = +item.difficulty
        const icon = "★"
        let numOfIcon = ''
        for (let i = 0; i < num; i++) {
            numOfIcon = numOfIcon + icon
        }
        return numOfIcon
    }
    const achieveAndGetPoint = () => {
        setPoint(p=>+item.difficulty+p)
        dispatch({type:"DELETE",payload:item})
    }


    return (
        <div className={`${IsRain&&item.checked?"text-red-500":''} glassBg my-2 rounded-2xl pb-2`}>
            <div className="flex justify-between">
                <div className={IsDone?"text-slate-400 p-4":"p-4"}>
                    <button onClick={taskDone} className={`text-lg hover:text-yellow-600 active:text-yellow-500 ${IsDone&&"text-green-500"}`} disabled={(IsRain&&item.checked)}><FaRegCheckSquare /></button>
                    <span className="text-3xl mx-3">{item.title}</span>
                    {IsDone&& <button className={IsDone?"text-blue-600":""} onClick={achieveAndGetPoint}><BsCollectionFill /></button>}
                    <div className="flex items-center"><p className="text-yellow-300">{makeStar()}</p></div>
                </div>
                <div className="flex gap-x-6 mx-3">
                    {item.checked && <button className={`text-2xl  ${IsDone&&"text-slate-400"}`} disabled><IoRainyOutline className={IsRain&&item.checked&&'text-4xl text-yellow-300'}/></button>}
                    <button className={`text-2xl  ${IsDone&&"text-slate-400"}`} ><NavLink to={IsDone?'/':item._id}><FaEdit className="hover:text-yellow-600 active:text-yellow-500"/></NavLink></button>
                    <button onClick={()=> setIsProgress(!IsProgress)} className={`text-2xl  ${IsProgress&&"text-red-500"||IsDone&&"text-slate-400"}`} disabled={IsDone}><RiProgress3Line className="hover:text-yellow-600 active:text-yellow-500" /></button>
                    <button className={`text-2xl  ${IsDone&&"text-slate-400"}`} onClick={()=>dispatch({type:"DELETE",payload:item})} disabled={IsDone}><RiDeleteBin6Line className="hover:text-yellow-600 active:text-yellow-500" /></button>
                    <button className={`text-2xl  ${IsDone&&"text-slate-400"}`} onClick={() => setIsOpen(!IsOpen)} disabled={IsDone}><FaAngleDown className="hover:text-yellow-600 active:text-yellow-500" /></button>
                </div>
            </div>
            {IsOpen ? <div className="mx-8 my-3"><p className='break-words'>{item.detail}</p><p className="text-sm text-right">{item.date}</p></div> : <div></div>}
        </div>
    )
}

export default ListItem