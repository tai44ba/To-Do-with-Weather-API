
import { NavLink, Outlet } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

const Home = () => {
    return (
        <div className='border-indigo-600 w-9/12 p-6'>
            <nav className='flex justify-between'>
                <ul className='flex gap-x-8'>
                    <NavLink to='/' className='fixed z-10 bt-glassBg hover:bg-black/20 active:bg-black/25 rounded-2xl'><li className='flex px-5 py-3 rounded-2xl text-xl'><FaEye /><IoListOutline /></li></NavLink>
                    <NavLink to='/add' className=' z-10 right-10 fixed bt-glassBg hover:bg-black/20 active:bg-black/25 rounded-2xl'><li className='flex px-5 py-3 rounded-2xl text-xl'><IoMdAdd /><IoListOutline /></li></NavLink>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Home