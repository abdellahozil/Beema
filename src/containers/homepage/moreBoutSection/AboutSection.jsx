import React from 'react'
import {Element} from "react-scroll"
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import "./aboutSection.css"
import AboutImg from "../../../assets/illustrations/rocket_launch_.png"

const AboutSection = () => {
  return (
    <Element className='about-container'>
        <SectionTitle>More About Beema</SectionTitle>
        <div className="about-content">
            <p className="about-text">
                Beema is about designing building and deliverying best quality 
                software for your campany<br/><br/>
                We make sure that you get the best software inferstracture and set of applications
                to ensure the best experience of your clients<br/><br/>
                so whether you are handling thousands of payments transactions or you are just starting 
                out, You are in the right place
            </p>
            <img src={AboutImg} alt="" className='about-img' />
        </div>
    </Element>
  )
}

export default AboutSection
