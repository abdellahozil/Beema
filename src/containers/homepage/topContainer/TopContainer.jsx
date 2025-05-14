import React from 'react'
import "./TopContainer.css"
import Button from '../../../components/button/Button'
import DownArrow from '../../../components/downArrow/DownArrow'
import Navbar from '../../../components/navbar/Navbar'
import { Element, scroller } from 'react-scroll'
import BeemaLogo from "../../../assets/logo/logo_croped.png"


const TopContainer = () => {
  const scrollToNextSection = () => {
    scroller.scrollTo("services", {smooth:true, duration: 1500})
  }
  return (
    <Element name='topSection'>
    <div className='top-container' >
      <div className='background-filter'>
        <Navbar/>
        <span className='vertical-span'></span>
        <div className='logo-container-top'>
          <img src={BeemaLogo} className='logo-img-top' alt=""/>
          <div className="logo-text-top" >Beema</div>
        </div>
        <span className='vertical-span2'></span>
        <h1 className="motivational-text">Software Developement</h1>
        <h1 className="motivational-text">From the best in the Industry</h1>
        <span className='vertical-span3'></span>
        <Button>Start your Project</Button>
        <div className="down-arrow-container" onClick={scrollToNextSection}>
            <DownArrow></DownArrow>
        </div>
      </div>
    </div>
    </Element>
  )
}

export default TopContainer
