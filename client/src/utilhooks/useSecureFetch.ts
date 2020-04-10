import {useState, useEffect} from 'react'
import { useAuth0 } from "./useAuth"

export const useSecureFetch =(url:string)=>{
    const [response, setResponse] = useState([])
    const [error, setError] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchData = async ()=>{
            setIsLoading(true)
            try {
                const token = await getTokenSilently();
                console.log(token)
                await fetch(url, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(res=> res.json())
                .then(data=>setResponse(data))
                setIsLoading(false)
            } catch(error) {
                setError(error)
            }
        }
        fetchData()
    },[url, getTokenSilently], );
    return { response, loading, error }
}