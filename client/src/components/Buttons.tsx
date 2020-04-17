import React from 'react'
import { css } from 'emotion'

type ButtonProps ={
    color: string;
    setColor: (color: string) => void;
    changeSlider:(event: any) => void;
    markSize: number;
    changeTip: (event: any) => void;
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
        <div                        
        className={css`
        width: 90%;
        margin: auto;
        max-width: 900px;
        }
        `}>
            <div className="flex-row space-around">
                {buttons.map((button, key)=>
                    <button
                        key={key}
                        className={css`
                        border-radius: 50%;
                        margin: auto;
                        height: 3vh;
                        width: 3vh;
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
            <div className="flex-row space-evenly">
                <input type="range" min="1" max="20" value={Props.markSize} className="slider center-vertically" onChange={Props.changeSlider}/>
                <select className="dropdown-select" onChange={Props.changeTip}>
                    <option value="round">Round Tip</option>
                    <option value="bevel">Bevel Tip</option>
                </select>
            </div>     
        </div>
    )
}

export default Buttons