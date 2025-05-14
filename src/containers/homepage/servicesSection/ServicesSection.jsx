import React from 'react'
import {Element} from "react-scroll"
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import OurService from '../../../components/ourService/OurService'
import Service1Img from "../../../assets/illustrations/web_development_.png"
import Service2Img from "../../../assets/illustrations/mobile_phone.png"
import Service3Img from "../../../assets/illustrations/bug_fixed.png"
const ServicesSection = () => {
  return (
    <Element name='services' style={{width:"100%", minHeight:"500px", display:"flex", flexDirection:"column"}}>
        <SectionTitle>Best Quality Software</SectionTitle>
        <span style={{display:"flex", height:"3em"}}></span>
        <OurService 
          title="Fully integrated services"
          description="we build and deliver fully integrated web apps with customized control panels that fit with your company needs"
          imgUrl={Service1Img}
          isReversed=""
          flexService=""
        ></OurService>
        <OurService 
          title="Mobile optimized"
          description="we build and deliver fully integrated web apps with customized control panels that fit with your company needs"
          imgUrl={Service2Img}
          isReversed="row-reverse"
          flexService="flex-service"
        ></OurService>
        <OurService 
          title="Quality is our priority"
          description="we build and deliver fully integrated web apps with customized control panels that fit with your company needs"
          imgUrl={Service3Img}
          isReversed=""
          flexService=""
        ></OurService>
    </Element>
  )
}

export default ServicesSection
