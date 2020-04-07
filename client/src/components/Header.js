import React, { useState } from 'react'
import useWindowSize from '../utilhooks/useWindowDim'
import useScrollDirection from '../utilhooks/useScrollDirection'
import { Link } from 'react-router-dom'
import { useAuth0 } from "../utilhooks/useAuth"
import DropdownMenu from "./DropdownMenu"

export default function Header(){
    const size = useWindowSize()
    const width = size.width
    const collapseWidth = 900
    const scrollDirection = useScrollDirection()
    const [navDisplay, activateNavDisplay] = useState(false)
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
      
    const links = [
      <Link key={1} className="nav-links" to="/">Home</Link>,
      isAuthenticated && <Link key={2} className="nav-links " to="/projects">Projects</Link>,
      isAuthenticated && <Link key={3} className="nav-links" to="/addproject">Add a Project</Link>,
      isAuthenticated && <Link key={4} className="nav-links" to="/profile">Profile</Link>,
      !isAuthenticated && <span key={5} className="nav-links" onClick={() => loginWithRedirect({})}>Login</span>,
      isAuthenticated && <span key={6} className="nav-links" onClick={() => logout()}>Logout</span>,
    ]

    return(    
        <div>
        {
        (scrollDirection.direction || scrollDirection.distance <= 1) && 
          <header className="header space-between flex-row-no-wrap">
            <h1 className="header-text">User Stories</h1>
            {
              width >= collapseWidth ? 
              <ul className="nav-links">{links}</ul>
              :
              <div
                className={`menu-bar menu-button`}
                onClick={() => activateNavDisplay(!navDisplay)}
              >
                <div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> 
              <DropdownMenu
                links={links}
                navDisplay={navDisplay}
                activateNavDisplay={activateNavDisplay}
              />  
              </div>    
            }
          </header>
        }
      </div>
    )
}