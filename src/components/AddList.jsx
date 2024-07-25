import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { listContext } from '../contexts/ListContext';
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AddList = () => {
    // Hooks
    const { dispatch } = useContext(listContext)
    const [listItem, setListItem] = useState({
        title: '',
        checked: false,
        detail: '',
        date: '',
        difficulty: ''
    })
    const navigate = useNavigate()
    // func
    const inputHandler = (e) => {
        setListItem({ ...listItem, [e.target.name]: e.target.value })
    }
    const checkHandler = (e) => {
        if (e.target.checked) {
            setListItem({ ...listItem, checked: true })
        } else if (listItem.checked) {
            setListItem({ ...listItem, checked: false })
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (listItem.title&&listItem.date&&listItem.difficulty) {
            dispatch({ type: "ADD_TO_LIST", payload: { ...listItem, _id: uuidv4() } })
            navigate("/")
        } else {
            alert("Please fill out at least Title, Date, Difficulty")
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col mt-10 pt-10'>

                    <input type="text" name='title' placeholder='Task name' className='glassBg px-2 py-1 text-xl' onChange={inputHandler} />
                    <div className='my-2' >
                        <label htmlFor="check" className='text-lg'>If it is not possible to do it when it is rain</label>
                        <input type="checkbox" name="checked" checked={listItem.checked} className='mx-2' onChange={checkHandler} />
                    </div>
                    <label className='text-xl'>Detail :</label>
                    <textarea name="detail" id="" cols="20" rows="10" className='glassBg my-2 px-2 py-1' onChange={inputHandler}></textarea>
                    <div>
                        <input type="date" name="date" id="" className='glassBg my-2 p-2' onChange={inputHandler} />
                    </div>
                    <div>
                        <select name="difficulty" id="" className='glassBg my-2 p-2' onChange={inputHandler}>
                            <option value="">Choose difficulty</option>
                            <option value="1">Very easy</option>
                            <option value="2">Easy</option>
                            <option value="3">Normal</option>
                            <option value="4">Hard</option>
                            <option value="5">Super Hard</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className='flex p-3 my-2 rounded-2xl bt-glassBg hover:bg-black/30 active:bg-black/50'><IoMdAdd className='text-2xl' />Make New</button>
            </form>
        </div>
    )
}

export default AddList