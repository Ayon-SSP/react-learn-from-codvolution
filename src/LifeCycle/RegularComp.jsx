import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log('****Regular Comp render****')
    return (
      <div>
        RegularComp
        {this.props.name}
      </div>
    )
  }
}

export default RegularComp