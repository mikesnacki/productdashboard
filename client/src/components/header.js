import React, {useState, useRef} from 'react'
import useWindowDim from '../utilhooks/useWindowDim'
import useScrollDirection from '../utilhooks/useScrollDirection'
import useOnClickOutside from '../utilhooks/useOnClickOutside'
import { Link } from 'react-router-dom'

export default function Header(){
    const size = useWindowDim()
    const width = size.width
    const collapseWidth = 900
    const direction = useScrollDirection()
    const [navDisplay, activateNavDisplay] = useState(false)
    
    const headerRef = useRef();
    useOnClickOutside(headerRef, () => activateNavDisplay(false))
    
    const links = [
      <Link key={1} className="header-text nav-links" to="/">Home</Link>,
      <Link key={2} className="header-text nav-links" to="/properties">User Stories</Link>,
      <Link key={3} className="header-text nav-links" to="/login">Backlog</Link>,
      <Link key={4} className="header-text nav-links" to="/login">Feature Graveyard</Link>,
    ]

    console.log(direction)
    return(
        <div ref={headerRef}>
        <header className={`header-${direction} space-between`}>
          <h1 className="header-text">Product Management</h1>
          {width >= collapseWidth && direction
            ? <ul className="nav-links">{links}</ul >
            :
            <button
              className={`menu-bar-${navDisplay}`}
              onMouseLeave={() => activateNavDisplay(!navDisplay)}
              onClick={() => activateNavDisplay(!navDisplay)}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          }
        </header>
        <ul
          onMouseLeave={() => activateNavDisplay(!navDisplay)}
          onClick={() => activateNavDisplay(!navDisplay)}
          className={`menu-dropdown-${navDisplay && width < collapseWidth}`}>
          {navDisplay === true && width < collapseWidth && links}
        </ul>
      </div >
    )
}