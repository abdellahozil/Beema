import React from 'react'

const SectionTitle = (props) => {
  return (
    <div style={{fontSize:"34px", fontWeight:"800", color:"#000", textAlign:"center", margin:"10px 0"}}>
      {props.children}
    </div>
  )
}

export default SectionTitle
