// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div>MyComponent</div>
//   )
// }

// export default MyComponent;



import React, { Component } from 'react'

export class MyComponent extends Component {

  constructor() {
    super();
    // Add your constructor logic here
    this.state = {
      message: 'Welcome Ayon',
      count: 0
    }
  }

  render() {
    return (
      <>
        <div>MyComponent</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}> Count {this.state.count}</button>
      </>
    )
  }
}

export default MyComponent;