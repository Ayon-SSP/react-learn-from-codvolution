import React, { Component } from 'react'

export class InputRef extends Component {

  constructor(props) {
    super(props)
  
    this.state = {}
    this.inputRef = React.createRef()
  }

  focusInput = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div className='container mt-3'>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default InputRef