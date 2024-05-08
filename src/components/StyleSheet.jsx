import React from 'react'
import '../stylesheets/myStyle.css'


const StyleSheet = (props) => {
  
  let className = props.primary ? 'primary' : ''

  return (
    <div className={`${className} font-xl`}>
      <h1>Stylesheet</h1>
    </div>
  )
}

export default StyleSheet