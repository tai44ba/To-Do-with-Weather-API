import { useReducer, createContext, useState, useEffect } from "react"

export const listContext = createContext(null)

const listReducer = (state, action) => {
    // const copyOfState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "ADD_TO_LIST":
            return [...state, action.payload]
        case "DELETE":
            return state.filter((item) => item._id !== action.payload._id)
        case "UPDATE_LIST_ITEM":
            return state.map(item => {
                if (item._id === action.payload._id) {
                    return action.payload
                } else {
                    return item
                }
            })
        default:
            return state
    }
}

// func from chatGpt
const loadFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : defaultValue;
}
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const ListProvider = ({ children }) => {
    // hooks
    const [listState, dispatch] = useReducer(listReducer, [], () => loadFromLocalStorage("listState", []))
    const [point, setPoint] = useState(() => loadFromLocalStorage('point', 0));
    useEffect(() => {
        saveToLocalStorage("listState", listState)
    }, [listState])
    useEffect(() => {
        saveToLocalStorage('point', point);
    }, [point]);

    return (
        <listContext.Provider value={{ listState, dispatch, point, setPoint }}>
            {children}
        </listContext.Provider>
    )
}

export default ListProvider