import React from 'react'
import "./reviewSection.css"
import { Element } from 'react-scroll'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User1Img from "../../../assets/pictures/profile_picture_1.jpg"
import User2Img from "../../../assets/pictures/profile_picture_2.jpg"
import User3Img from "../../../assets/pictures/profile_picture_3.jpg"
import User4Img from "../../../assets/pictures/profile_picture_4.jpeg"
import ReviewCard from '../../../components/reviewCard/ReviewCard';
import Slider from "react-slick"

const data = [
  {
    text:"I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us",
    imgUrl:User1Img,
    name:"John coner"
  },
  {
    text:"I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us",
    imgUrl: User2Img,
    name:"John coner"
  },
  {
    text:"I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us",
    imgUrl:User3Img,
    name:"John coner"
  },
  {
    text:"I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us",
    imgUrl:User4Img,
    name:"John coner"
  },
]
const ReviewsSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1436,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
    ]
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  
  return (
    <Element style={{height: "800px", display: "flex", flexDirection:"column"}}>
        <SectionTitle>What others are saying<br /> about us</SectionTitle>
        <span style={{display:"flex", height:"3em"}}></span>
        <div className="container-slider">
          <div style={{marginTop:"3rem"}}>
            <Slider {...settings}>
            {
              data.map((item) => (
                <ReviewCard reviewText={item.text} username={item.name} userImgUrl={item.imgUrl}/>
              ))
            }
            </Slider>
          </div>
        </div>
    </Element>
  )
}

export default ReviewsSection
