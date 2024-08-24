import React from 'react'
import '../Styles/Nav.css'
import Profile from '../Images/profile.jpg'
const Nav = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="navbar-logo">
      <h2>CodeNerds</h2>
    </div>
    
    <div className="navbar-profile">
      <img src= {Profile} alt="Profile" className="profile-image"/>
    </div>
  </nav>
    </div>
  )
}

export default Nav
