import React, { useState } from 'react'
import useWindowSize from '../utilhooks/useWindowDim'
import useScrollDirection from '../utilhooks/useScrollDirection'
import { Link } from 'react-router-dom'

export default function Header(){
    const size = useWindowSize()
    const width = size.width
    const collapseWidth = 900
    const direction = useScrollDirection()
    const [navDisplay, activateNavDisplay] = useState(false)
      
    const links = [
      <Link key={1} className="header-text nav-links" to="/">Projects</Link>,
      <Link key={2} className="header-text nav-links" to="/addproject">Add a Project</Link>,
      // <Link key={3} className="header-text nav-links" to="/login">Login</Link>,
    ]

    return(
        <div>
        {direction && <header className="header space-between">
          <h1 className="header-text">User Story Dashboard</h1>
          {width >= collapseWidth
            ? <ul className="nav-links">{links}</ul >
            :
            <button
              className={`menu-bar menu-button`}
              onClick={() => activateNavDisplay(!navDisplay)}
            >
              <div className='flex-row'>
                <div className="flex-col center-vertically">
                  Menu
                </div>
                <div className="flex-col">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
             </div> 

            </button>
          }
        </header>}
        <ul
          onMouseLeave={() => activateNavDisplay(!navDisplay)}
          onClick={() => activateNavDisplay(!navDisplay)}
          className={`menu-dropdown-${navDisplay}`}>
          {navDisplay && width < collapseWidth && direction &&
          <div>
            <button 
                  onClick={() => activateNavDisplay(!navDisplay)}
                  className="menu-button-close">
                    &times;
            </button> 
            <div>
              {links}
            </div>      
          </div>
          }
        </ul>
      </div >
    )
}