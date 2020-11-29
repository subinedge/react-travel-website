import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false) // hamburger menu click
  const [button, setButton] = useState(true) // signUP button

  const handleHamClick = () => {
    return setClick(!click)
  }

  const showSignUpButton = () => {
    if (window.innerWidth > 960) {
      setButton(true)
    } else {
      setButton(false)
    }
  }

  window.addEventListener('resize', showSignUpButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO */}

          <Link to="/" className="navbar-logo">
            <i className="fas fa-route"></i> TRAVELLER
          </Link>

          {/* HAMBURGER ICON */}

          <div className="navbar-ham-menu">
            <i
              className={click ? 'fas fa-times' : 'fas fa-bars'}
              onClick={handleHamClick}
            ></i>
          </div>

          {/* MENU ITEMS */}

          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/about" className="navbar-link">
                About
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/destinations" className="navbar-link">
                Destinations
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/signup" className="navbar-link btn-primary">
                <button>SIGN UP</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
