import './App.css';

import React, { Component } from 'react';
import Home from './components/Home'
import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home name="Ayon" heroName="Google">
          <p>THis is childrel props</p>
        </Home>
        <Home name="ROcK" heroName="superman">
          <button type="">Button 🦋</button>
        </Home>
        <Home name="Google" heroName="AI"/>

        <Message />

      </div>
    )

  }
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hellow world!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
