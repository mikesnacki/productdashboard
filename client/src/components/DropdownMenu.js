import React from 'react'

const DropdownMenu =({links, navDisplay, activateNavDisplay})=>{

    return(    
        navDisplay && 
        <ul
          onClick={() => activateNavDisplay(!navDisplay)}
          className={`menu-dropdown-${navDisplay}`}>
            <button 
            onClick={() => activateNavDisplay(!navDisplay)}
            className="flex-row menu-button-close"
            >
                &times;
            </button> 
                {links}  
        </ul> 
    )
}

export default DropdownMenu