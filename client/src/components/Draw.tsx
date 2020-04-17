import React, {useState, useRef, useEffect} from 'react'
import Buttons from "./Buttons"
import Canvas from "./Canvas"


const Draw =()=>{
    const [color, setColor]= useState<string>("")
    const [markSize, setMarkSize] = useState<number>(2)

    const changeSlider = (e:any)=>{
        let value = e.currentTarget.value
        setMarkSize(value)
    }

    return (
        <div className="stories-page draw">
            <Buttons 
                color={color}
                setColor={setColor}
                changeSlider={changeSlider}
                markSize={markSize}
            />
            <Canvas
                color={color}
                markSize={markSize}
            />
        </div>
    )

}

export default Draw