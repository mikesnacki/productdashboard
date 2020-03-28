import {useState, useEffect, useCallback} from 'react'

export default function useWindowSize() {
    const isClient = typeof window === 'object';

    const getSizeCallBack = useCallback(
        function getSize(){
            return {
                width: isClient ? window.innerWidth : undefined,
                height: isClient ? window.innerHeight : undefined,
            };
    },  [isClient])

    const [windowSize, setWindowSize] = useState(getSizeCallBack);

    useEffect(()=>{
        if (!isClient){
            return false
        }

        function handleResize (){
            setWindowSize(getSizeCallBack())
        }

        window.addEventListener('resize', handleResize)
        return ()=>window.removeEventListener('resize', handleResize)
    }, [isClient, getSizeCallBack])

    return windowSize
}