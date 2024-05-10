// import React, { useRef } from 'react';

// function MyComponent() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     // Focus on the input element
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// }

// export default MyComponent;




import React, { Component } from 'react'
import InputRef from './InputRef'




export class RefDemo extends Component {
  
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setCbRef = (element) => {
      this.cbRef = element
    }
    this.compoentRef = React.createRef()
  }

  componentDidMount() {
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
    // -<or>-
    if(this.cbRef) {
      this.cbRef.focus()
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  clickHandlerComp = () => {
    this.compoentRef.current.focusInput()
  }


  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>


        <InputRef ref={this.compoentRef} />
        <button onClick={this.clickHandlerComp}>Focus Input</button>
      </div>
    )
  }
}

export default RefDemo



