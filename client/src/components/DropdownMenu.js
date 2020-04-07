import React from 'react'

const DropdownMenu =({links, navDisplay, activateNavDisplay})=>{

    return(    
        navDisplay && 
        <ul
          onClick={() => activateNavDisplay(!navDisplay)}
          className={`menu-dropdown-${navDisplay}`}>
                {links}  
        </ul> 
    )
}

export default DropdownMenu