import './App.css';

import React, { Component } from 'react';
import Home from './components/Home'
import Message from './components/Message'
import MyComponent from './components/MyComponent';
import Welcome from './components/Welcome';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ListView from './components/ListView';
import Blog from './components/Blog';
import ClickMe from './components/ClickMe';

class App extends Component {
  
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return (
      <div className="App">
        <ClickMe />

        <Blog posts={posts} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />


        <ListView numbers={numbers} />

        <Home name="Ayon" heroName="Google">
          <p>THis is childrel props</p>
        </Home>
        <Home name="ROcK" heroName="superman">
          <button type="">Button 🦋</button>
        </Home>
        <Home name="Google" heroName="AI"/>

        <Welcome name="Google" heroName="AI" />

        <Message />
        <MyComponent />
        <PostList />
        <PostForm />
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
