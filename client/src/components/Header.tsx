import React, { useState } from 'react'
import useWindowSize from '../utilhooks/useWindowDim'
import useScrollDirection from '../utilhooks/useScrollDirection'
import { Link } from 'react-router-dom'
import { useAuth0 } from "../utilhooks/useAuth"

const Header = ()=> {
    const size = useWindowSize()
    const width:number = size.width
    const collapseWidth:number  = 1200
    const scrollDirection = useScrollDirection()
    const [navDisplay, activateNavDisplay] = useState<boolean>(false)
    const { isAuthenticated, loginWithRedirect, logout} = useAuth0();
      
    const links: (JSX.Element | boolean)[] = [
      <Link key={1} className="nav-links" to="/">Home</Link>,
      <Link key={2} className="nav-links" to="/sketch">Sketch</Link>,
      isAuthenticated && <Link key={3} className="nav-links " to="/projects">Projects</Link>,
      isAuthenticated && <Link key={4} className="nav-links" to="/addproject">Add a Project</Link>,
      isAuthenticated && <Link key={5} className="nav-links" to="/profile">Profile</Link>,
      !isAuthenticated && <a key={6} className="nav-links" onClick={() => loginWithRedirect({})}>Login</a>,
      isAuthenticated && <a key={7} className="nav-links" onClick={() => logout()}>Logout</a>,
    ]

    return(    
        <>
        {
        (scrollDirection.direction || scrollDirection.distance <= 1) && 
          <header className="header space-between flex-row-no-wrap">
            <h1 className="header-text">User Stories</h1>
            {
              width >= collapseWidth ? 
              <ul >{links}</ul>
              :
              <div
                className={`menu-bar-${navDisplay}`}
                onClick={() => activateNavDisplay(!navDisplay)}
              >
                <div>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> 
                {navDisplay && 
                  <ul
                    className={`menu-dropdown-${navDisplay}`}>
                      {links}  
                  </ul> }  
              </div>  
            }
          </header>
        }
      </>
    )
}

export default Header