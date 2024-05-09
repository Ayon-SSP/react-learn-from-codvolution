import React, { Component } from 'react'
import LifeCycleA from './LifeCycleA'

export class Main extends Component {
  render() {
    return (
      <div>
        <h5>In Main:</h5>
        <LifeCycleA />
      </div>
    )
  }
}

export default Main