import React from 'react'
import { css } from 'emotion'

type ButtonProps ={
    color: string;
    setColor: (color: string) => void,
    changeSlider:any,
    markSize: number,
}

const Buttons = (Props: ButtonProps) =>{
    const buttons: string[] = [
                                "black",
                                "#2b580c",
                                "#639a67", 
                                "#d8ebb5",
                                "#d9bf77", 
                                "#856c8b",
                                "#30475e",
                                "white"
                                ]

    return (
        <div>
            <div className="flex-row">
            <h2>Select a color</h2>
                {buttons.map((button, key)=>
                    <button
                        key={key}
                        className={css`
                        border-radius: 50%;
                        margin: auto;
                        height: 40px;
                        width: 40px;
                        border: transparent;
                        background-color: ${button};
                        box-shadow: 1px 2px 4px 1px hsla(0, 0%,0%, 0.2);
                        &:hover {
                            opacity: 80%;
                            background-color: ${button};
                        }
                        `}
                        onClick={()=>Props.setColor(button)}
                        />
                )}
            </div>
            <div className="flex-row">
            <h2 className="flex-col">Select thickness</h2>
            <input type="range" min="1" max="20" value={Props.markSize} className="slider center-vertically" onChange={Props.changeSlider}/>
            </div>
           
        </div>
    )
}

export default Buttons