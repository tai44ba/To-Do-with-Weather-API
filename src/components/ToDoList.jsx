import { useContext, useEffect, useState } from 'react'
import ListItem from './ListItem'
import { listContext } from '../contexts/ListContext'

const ToDoList = () => {
    const {listState} = useContext(listContext)
    const [curDate, setCurDate] = useState()
    useEffect(()=>{
        setCurDate(new Date().toISOString().slice(0,10))
    },[])
  return (
    <div className='p-3 mt-10'>
        {listState?.filter((item)=>item.date===curDate)&&<p className='text-4xl py-2'>Today</p>}
        {listState?.filter((item)=>item.date===curDate).map((item)=><ListItem item={item} key={item._id}/>)}
        {listState?.filter((item)=>item.date!==curDate)&&<p className='text-4xl py-2'>Tomorrow and After</p>}
        {listState?.filter((item)=>item.date!==curDate).sort((a,b)=>Date.parse(a.date) - Date.parse(b.date)).map((item)=><ListItem item={item} key={item._id}/>)}
    </div>
  )
}

export default ToDoList