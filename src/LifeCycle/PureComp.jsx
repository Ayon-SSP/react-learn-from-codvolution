import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {

  render() {
    console.log('Pure Comp render')
    return (
      <div>
        PureComp
        {this.props.name}
      </div>
    )
  }
}

export default PureComp