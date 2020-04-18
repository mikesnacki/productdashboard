import React, { useState, SyntheticEvent } from 'react'
import Buttons from "./Buttons"
import Canvas from "./Canvas"

const Draw =()=>{
    const [color, setColor]= useState<string>("")
    const [markSize, setMarkSize] = useState<number>(10)
    const [tipStyle, setTipStyle] = useState<CanvasLineJoin>("round")

    const changeSlider = (e:any)=>{
        let value = e.currentTarget.value
        setMarkSize(value)
    }

    const changeTip =(e: any)=>{
        let value = e.currentTarget.value
        setTipStyle(value)
    }

    return (
        <div className="stories-page draw">
            <Buttons 
                color={color}
                setColor={setColor}
                changeSlider={changeSlider}
                markSize={markSize}
                changeTip={changeTip}
            />
            <Canvas
                color={color}
                markSize={markSize}
                tipStyle={tipStyle}
            />
        </div>
    )

}

export default Draw