import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <button className='button-wrapper'>{props.children}</button>
  )
}

export default Button
