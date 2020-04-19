import React from 'react'
import { css } from 'emotion'
import useWindowSize from '../utilhooks/useWindowDim'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faPencilAlt)

interface IMenuProps {
    showMenu: boolean;
    setShowMenu:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const PullOutMenu = (Props: IMenuProps)=>{
    return(
        <button
        className={css`
            position: absolute;
            z-index: 10;
            left: 0px;
            top: 110px;
            padding: 8px 10px;
            transform: rotate(-90deg);
            border: transparent;
            background-color: #204051;
            color: white;
            border-radius: 0 0 5px 5px;
            font-weight: 800px;
            font-size: 18px;
        `}
        onClick={Props.setShowMenu}
        >
            <FontAwesomeIcon 
                size="2x"
                icon={"pencil-alt"}
            />
        </button>
    )
}

export default PullOutMenu