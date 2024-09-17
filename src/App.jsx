import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import SideBar from './components/SideBar'
import ToDoList from './components/ToDoList';
import AddList from './components/AddList';
import Edit from './components/Edit';
import WeatherLocation from './components/WeatherLocation';
import ChooseUser from './components/ChooseUser';
import { useContext } from 'react';
import { weatherContext } from './contexts/WeatherContext';

// bg-gradient-to-r from-violet-500 to-fuchsia-500
function App() {
  const {weatherBg} = useContext(weatherContext)
  return (
    <div className={`${weatherBg} text-zinc-700 box-border min-h-screen `}>
      <div className='flex'>
        <SideBar />
        <Routes className="w-10/12 min-h-screen">
          <Route path='/' element={<Home />}>
            <Route index element={<ChooseUser />} />
            <Route path='/to-do-list' element={<ToDoList />} />
            <Route path='/to-do-list/add' element={<AddList />} />
            <Route path='/to-do-list/:id' element={<Edit />} />
          </Route>
          <Route path='/weather' element={<WeatherLocation />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
