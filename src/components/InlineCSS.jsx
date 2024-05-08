import React from 'react'

const headerStyle = {
  color: 'blue',
  fontSize: '30px'
}

const InlineCSS = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '50px' }}>Inline CSS</h1>
      <h2 style={headerStyle}>headerStyle</h2>
    </div>
  )
}

export default InlineCSS