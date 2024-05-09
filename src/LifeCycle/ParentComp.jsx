import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       first: 'Nochange'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        first: 'Nochange'
      })
    }, 2000)
  }

  render() {
      console.log('-----Parent Comp render-----')
    return (
      <div>
        <MemoComp name={this.state.first} />
        <PureComp name={this.state.first} />
        <RegularComp name={this.state.first} />
      </div>
    )
  }
}

export default ParentComp