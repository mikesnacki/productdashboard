import React, { useState } from 'react'
import useWindowSize from '../utilhooks/useWindowDim'
import useScrollDirection from '../utilhooks/useScrollDirection'
import { Link } from 'react-router-dom'
import { useAuth0 } from "../utilhooks/useAuth"

export default function Header(){
    const size = useWindowSize()
    const width = size.width
    const collapseWidth = 960
    const scrollDirection = useScrollDirection()
    const [navDisplay, activateNavDisplay] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
      
    const links = [
      <Link key={1} className="header-text nav-links" to="/">Home</Link>,
      isAuthenticated && <Link key={2} className="header-text nav-links flex-row-no-wrap" to="/projects">Projects</Link>,
      isAuthenticated && <Link key={3} className="header-text nav-links flex-row-no-wrap" to="/addproject">Add a Project</Link>,
      isAuthenticated && <Link key={4} className="header-text nav-links flex-row-no-wrap" to="/profile">Profile</Link>,
      !isAuthenticated && <span key={5} className="header-text nav-links flex-row-no-wrap" onClick={() => loginWithRedirect({})}>Login</span>,
      isAuthenticated && <span key={6} className="header-text nav-links flex-row-no-wrap" onClick={() => logout()}>Logout</span>,
    ]

    return(    
        <div>
        {(scrollDirection.direction || scrollDirection.distance <= 1) && !navDisplay && <header className="header space-between">
          <h1 className="header-text">User Stories</h1>
          {width >= collapseWidth
            ? <ul className="nav-links">{links}</ul >
            :
            <button
              className={`menu-bar menu-button`}
              onClick={() => activateNavDisplay(!navDisplay)}
            >
              <div className='flex-row'>
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
            { navDisplay && width < collapseWidth && 
              <>
              <button 
                onClick={() => activateNavDisplay(!navDisplay)}
                className="flex-row menu-button-close">
                &times;
              </button> 
                {links}  
              </>
            } 
        </ul>
      </div>
    )
}