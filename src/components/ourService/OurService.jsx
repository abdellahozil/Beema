import React from 'react'
import "./ourService.css"

const OurService = (props) => {
    const {imgUrl, title, description,isReversed, flexService} = props
  return (
    <div className={`service-container ${flexService}`} style={{flexDirection: isReversed}} >
      <div className="description-container">
        <h2 className="title">{title}</h2>
        <p className="details">{description}</p>
      </div>
      <img src={imgUrl} alt="" className='service-img'/>
    </div>
  )
}

export default OurService
