import React from 'react'
import BeemaLogo from "../../assets/logo/logo_croped.png"
import "./navbar.css"


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="brand-container">
        <img src={BeemaLogo} className='logo-img-navbar' alt="" />
        <div className="logo-text-navbar">Beema</div>
      </div>
      <div className="accessibility-container">
        <button className='navbar-btn'>Get Started</button>
        <button className='login-btn'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
