import React, { useState } from 'react'
import Buttons from "./Buttons"
import Canvas from "./Canvas"
import ICanvas from "../Interfaces/ICanvas"
import PullOutMenu from './PulloutMenu'

const Draw =()=>{
    const [strokeStyle, setStrokeStyle]= useState<string>("")
    const [lineWidth, setMarkSize] = useState<number>(10)
    const [lineJoin, setlineJoin] = useState<CanvasLineJoin>("round")
    const [canvasArray, setCanvasArray] = useState<ICanvas[]>()
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const changeSlider = (e:any)=>{
        let value = e.currentTarget.value
        setMarkSize(value)
    }

    const changeLineJoin =(e: any)=>{
        let value = e.currentTarget.value
        console.log(typeof(e.currentTarget))
        setlineJoin(value)
    }

    const addStrokes =(newStroke: any)=>{
        setCanvasArray(canvasArray=>[...canvasArray || [], newStroke])
    }

    return (
        <div className="stories-page draw">
            <PullOutMenu
            showMenu={showMenu}
            setShowMenu={()=>setShowMenu(!showMenu)}
            />
            <Buttons
                showMenu={showMenu}
                strokeStyle={strokeStyle}
                setStrokeStyle={setStrokeStyle}
                changeSlider={changeSlider}
                lineWidth={lineWidth}
                changeLineJoin={changeLineJoin}
            />
            <Canvas
                strokeStyle={strokeStyle}
                lineWidth={lineWidth}
                lineJoin={lineJoin}
                addStrokes={addStrokes}
            />
        </div>
    )
}

export default Draw