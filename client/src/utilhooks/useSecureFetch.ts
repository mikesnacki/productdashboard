import {useState, useEffect} from 'react'
import { useAuth0 } from "./useAuth"
import {IProjects} from "../Interfaces/IProject"

export const useSecureFetch =(url:string)=>{
    const [response, setResponse] = useState<IProjects>({
        results: [], 
        loading: false,
        error: false
    })

    const { getTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchData = async ()=>{
            setResponse(prevState=> ({
                ...prevState,
                loading: true}
                )
            )
            try {
                const token = await getTokenSilently();
                await fetch(url, {
                    headers:{
                        Authorization: `Bearer ${token}`
                        }
                    }
                )
                .then(res=> res.json())
                .then(data=>(setResponse(prevState=> ({
                    ...prevState,
                    results: data,
                    loading: false})
                    ))
                )
            } catch(error) {
                setResponse(prevState=> ({
                    ...prevState,
                    error: true})
                )
            }
        }
        fetchData()
    }, [url]);
    return response 
}