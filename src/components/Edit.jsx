import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { listContext } from "../contexts/ListContext"
import { MdSaveAlt } from "react-icons/md";

const Edit = () => {
    // hooks
    const { listState, dispatch } = useContext(listContext)
    const [choseListItem, setChoseListItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setChoseListItem(listState.find(item => item._id === id))
    },[])
    const navigate = useNavigate()

    // func
    const inputHandler = (e) => {
        setChoseListItem({ ...choseListItem, [e.target.name]: e.target.value })
    }
    const checkHandler = (e) => {
        if (e.target.checked) {
            setChoseListItem({ ...choseListItem, checked: true })
        } else if (choseListItem.checked) {
            setChoseListItem({ ...choseListItem, checked: false })
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type:"UPDATE_LIST_ITEM",payload:choseListItem})
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col mt-10 pt-10'>
                    <input type="text" name='title' placeholder='Task name' className='glassBg px-2 py-1 text-xl' onChange={inputHandler} value={choseListItem.title} />
                    <div className='my-2' >
                        <label htmlFor="check" className="text-lg">If it is not possible to do it when it is rain : </label>
                        <input type="checkbox" name="checked" checked={choseListItem.checked} className='mx-2' onChange={checkHandler} />
                    </div>
                    <label className="text-xl">Detail :</label>
                    <textarea name="detail" id="" cols="20" rows="10" className='glassBg my-2 px-2 py-1' onChange={inputHandler} value={choseListItem.detail}></textarea>
                    <div>
                    <input type="date" name="date" id="" className='glassBg my-2 p-2' onChange={inputHandler} value={choseListItem.date} />
                    </div>
                    <div>
                        <select name="difficulty" id="" className='glassBg my-2 p-2' onChange={inputHandler} value={choseListItem.difficulty}>
                            <option value="">Choose difficulty</option>
                            <option value="1">Very easy</option>
                            <option value="2">Easy</option>
                            <option value="3">Normal</option>
                            <option value="4">Hard</option>
                            <option value="5">Super Hard</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className='flex p-3 rounded-2xl bg-black/15 hover:bg-black/20 active:bg-black/25'><MdSaveAlt className='text-2xl' />Save</button>
            </form>
        </div>
    )
}

export default Edit