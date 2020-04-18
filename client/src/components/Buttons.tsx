import React from 'react'
import { css } from 'emotion'

type ButtonProps ={
    strokeStyle: string;
    setStrokeStyle: (strokeStyle: string) => void;
    changeSlider:(event: React.ChangeEvent<HTMLInputElement>) => void;
    lineWidth: number;
    changeLineJoin: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
            <div className="flex-row align-space-between sketch">
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
                        onClick={()=>Props.setStrokeStyle(button)}
                        />
                )}
                <input type="range" min="1" max="20" value={Props.lineWidth} className="slider center-vertically" onChange={Props.changeSlider}/>
                <select className="dropdown-select" onChange={Props.changeLineJoin}>
                    <option value="round">Round Tip</option>
                    <option value="bevel">Bevel Tip</option>
                </select>
            </div>     
        </div>
    )
}

export default Buttons