
import { NavLink, Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <div className='border-indigo-600 w-9/12 p-6'>
            <Outlet />
        </div>
    )
}

export default Home