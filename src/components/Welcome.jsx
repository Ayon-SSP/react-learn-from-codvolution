import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <div>Welcome this is class {this.props.name}</div>
    )
  }
}

export default Welcome