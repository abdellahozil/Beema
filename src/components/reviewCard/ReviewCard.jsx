import React from 'react'
import "./reviewCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = (props) => {
  const { reviewText, username, userImgUrl } = props;
  return (
    <div className="card-container">
      <div className="quote-icon">
        <FontAwesomeIcon icon={faQuoteLeft}/>
      </div>
      <span style={{display:"flex", height: "6em"}}></span>
      <p className="review-text">{reviewText}</p>
      <span style={{display:"flex", height:"7em"}}></span>
      <span className="line"></span>
      <div className="user-detail">
        <img src={userImgUrl} alt="" className="user-img" />
        <span className="user-name">{username}</span>
      </div>
    </div>
  )
}

export default ReviewCard
