import React from 'react'
import "./logo.css"
import BeemaLogo from "../../assets/logo/logo_croped.png"

const Logo = (props) => {
  const {width, height, marginRight , fontSize} = props
  return (
    <div className='logo-container'>
      <img src={BeemaLogo} className='logo-img' alt="" style={{width: width, height: height, marginRight:marginRight}} />
      <div className="logo-text" style={{fontSize: fontSize}}>Beema</div>
    </div>
  )
}

export default Logo
