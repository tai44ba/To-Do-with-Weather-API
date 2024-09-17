import { useContext, useEffect, useState } from 'react'
import ListItem from './ListItem'
import { listContext } from '../contexts/ListContext'
import { IoMdAdd } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ToDoList = () => {
    const {listState} = useContext(listContext)
    const [curDate, setCurDate] = useState()
    useEffect(()=>{
        setCurDate(new Date().toISOString().slice(0,10))
    },[])
  return (
    <div className='p-3'>
      <h2 className='text-center text-5xl'>Your lists</h2>
      <nav className='flex justify-between'>
         <ul className='flex gap-x-8'>
            <NavLink to='/to-do-list/add' className='z-10 fixed top-10 right-20 bt-glassBg hover:bg-black/20 active:bg-black/25 rounded-2xl'><li className='flex px-5 py-3 rounded-2xl text-xl'><IoMdAdd /><IoListOutline /></li></NavLink>
         </ul>
      </nav>
        {listState?.filter((item)=>item.date===curDate)&&<p className='text-3xl py-2'>Today</p>}
        {listState?.filter((item)=>item.date===curDate).map((item)=><ListItem item={item} key={item._id}/>)}
        {listState?.filter((item)=>item.date!==curDate)&&<p className='text-3xl py-2'>Tomorrow and After</p>}
        {listState?.filter((item)=>item.date!==curDate).sort((a,b)=>Date.parse(a.date) - Date.parse(b.date)).map((item)=><ListItem item={item} key={item._id}/>)}
    </div>
  )
}

export default ToDoList