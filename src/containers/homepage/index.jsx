import React from 'react'
import TopContainer from './topContainer/TopContainer'
import "./index.css"
import ServicesSection from './servicesSection/ServicesSection'
import ReviewsSection from './reviexsSection/ReviewsSection'
import AboutSection from './moreBoutSection/AboutSection'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {
  return (
    <div className='page-container'>
      <TopContainer></TopContainer>
      <span style={{display:"flex", height:"30px"}}></span>
      <ServicesSection></ServicesSection>
      <span style={{display:"flex", height:"30px"}}></span>
      <ReviewsSection></ReviewsSection>
      <AboutSection/>
      <span style={{display:"flex", height:"50px"}}></span>
      <Footer></Footer>
    </div>
  )
}

export default Homepage
