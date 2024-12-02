import axios from "axios"
import { useEffect, useState } from "react"
const apiUrl = "https://dummyjson.com/recipes"

export const useGetList = (query) => {
    const [data, setData] = useState([])

    const fetchData = async() => {
        const res = await axios.get(apiUrl+ query)
        console.log(res.data)
        setData(res.data)

    }

    useEffect(()=> {
        fetchData()
    }, [query])
    return [data];
}