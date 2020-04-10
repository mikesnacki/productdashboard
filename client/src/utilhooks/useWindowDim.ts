import {useState, useEffect, useCallback} from 'react'

export default function useWindowSize() {
    const getSizeCallBack = useCallback(
        function getSize(){
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
    },  [])

    const [windowSize, setWindowSize] = useState(getSizeCallBack);

    useEffect(()=>{
        function handleResize (){
            setWindowSize(getSizeCallBack())
        }

        window.addEventListener('resize', handleResize)
        return ()=>window.removeEventListener('resize', handleResize)
    }, [getSizeCallBack])

    return windowSize
}