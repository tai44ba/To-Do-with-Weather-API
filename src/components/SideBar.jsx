import { NavLink } from "react-router-dom"
import Weather from "./Weather"
import User from "./User"


const SideBar = () => {
    return (
        <div className='sticky top-0 flex flex-col justify-between max-h-screen w-3/12 p-4'>
            <nav>
                <User />
                <ul>
                    <NavLink to='/user'><li className="text-xl px-2 my-1 py-1 glassBg hover:glassBgH">User</li></NavLink>
                    <NavLink to='/'><li className=" text-xl px-2 my-1 py-1 glassBg hover:glassBgH">To-Do LIst</li></NavLink>
                    <NavLink to='/weather'><li className="text-xl px-2 my-1 py-1 glassBg hover:glassBgH ">Weather</li></NavLink>
                </ul>
                <div className='relative'>
                    <Weather />
                </div>
            </nav>
        </div>
    )
}

export default SideBar