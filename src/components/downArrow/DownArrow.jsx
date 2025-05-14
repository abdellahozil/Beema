import React from 'react';
import "./downArrow.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"


const DownArrow = () => {
  return (
    <div className='arrow-container'>
      <div className="arrow-icon">
        <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default DownArrow
