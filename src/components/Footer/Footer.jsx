import React from 'react'
import "./footer.css"
import Logo from '../logo'
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
  return (
    <div className='footer-container'>
      <span style={{display:"flex", height:"5em"}}></span>
      <Logo width="4.5em" height="4.5em" marginRight="0" fontSize="20px"></Logo>
      <span style={{display:"flex", height:"1em"}}></span>
      <h1 className="motivational-text-footer">Just say the magical word <br/> and we will do the rest</h1>
      <span style={{display:"flex", height:"1em"}}></span>
      <Button>Start your Project</Button>
      <span style={{display:"flex", height:"5em"}}></span>
      <div className="accessibility-container-footer">
        <div className="privacy-container">
            <a href='"' className='footer-link'>Privacy Policy</a>
            <a href='"' className='footer-link'>Term of Service</a>
            <a href='"' className='footer-link'>Contact Us</a>
        </div>
        <div className="social-container">
            <div className="social-icon right-icon">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </div>
            <div className="social-icon">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </div>
        </div>
      </div>
      <div className="rights-reserved">&copy 2024 Beema All Rights Reserved</div>
    </div>
  )
}

export default Footer
