import './App.css';

import React, { Component } from 'react';
// import Home from './components/Home'
// import Message from './components/Message'
// import MyComponent from './components/MyComponent';
// import Welcome from './components/Welcome';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import ListView from './components/ListView';
// import Blog from './components/Blog';
// import ClickMe from './components/ClickMe';
// import Avatar from './components/Avatar';
// import { getImageUrl } from './components/utils';
// import Condition from './components/Condition';
// import StyleSheet from './components/StyleSheet';
// import './stylesheets/myStyle.css';
// import InlineCSS from './components/InlineCSS';
// import './stylesheets/appStyles.css';
// import styles from './stylesheets/appStyle.module.css';
// import HTTPRequests from './components/HTTPRequests';
// import GetPost from './components/GetPost';
// import Main from './LifeCycle/Main';
// import ParentComp from './LifeCycle/ParentComp';
// import RefDemo from './LifeCycle/RefDemo';
// import ContextMain from './Context/ContextMain';
// import { UserProvider } from './Context/userContext';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HooksDocs from './Hooks/HooksDocs';
// import ClassCounterOne from './Hooks/ClassCounterOne';
// import Flex from './components/CSSFlex/Flex';
import TodoApp from './TodoApp/TodoApp';





class App extends Component {

  render() {

    return (
      <div className="App">
        {/* <h1> Hay 🙋‍♂️</h1> */}

        {/* <Flex /> */}


        <TodoApp />









      </div>
    )

  }
}

// const cardStyle = {
//   border: '1px solid #ccc',
//   borderRadius: '4px',
//   padding: '10px',
//   margin: '10px',
//   width: '200px',
//   display: 'inline-block'
// };

// const Card = ({ children }) => (
//   <div className="card">
//     {children}
//   </div>
// );

// // create a arrow function which returns all this components
// const Practice = () => {
//   const numbers = [1, 2, 3, 4, 5];
//   const posts = [
//     { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//     { id: 2, title: 'Installation', content: 'You can install React from npm.' }
//   ];
//   return (
//     <div>
//       <HooksDocs />
//       <ClassCounterOne />

//       <BrowserRouter>
//         <UserProvider value="Ayon">
//           <ContextMain />
//         </UserProvider>
//         <Routes>
//           <Route path="/user" element={<Practice />} />
//           {/* now create a nested route's with the endpoint should be /user/delete, /user/create, /user/update */}
//           <Route path="/user/delete" element={<h1>Delete Page</h1>} />
//           <Route path="/user/create" element={<h1>Create Page</h1>} />
//           <Route path="/user/update" element={<h1>Update Page</h1>} />
//           <Route path="/user/*" element={<h1>Not Found</h1>} />
//           <Route path="/error" element={<h1>Error Page</h1>} />
//         </Routes>
//       </BrowserRouter>

//       <RefDemo />
//       <ParentComp />
//       <Main />
//       <HTTPRequests />
//       <GetPost />

//       <InlineCSS />

//       <h1 className="error">Error</h1>
//       <h1 className={styles.success}>Success</h1>

//       <StyleSheet primary={true} />
//       <StyleSheet primary={false} />

//       <Condition />

//       <Card>
//         <Avatar
//           size={100}
//           person={{
//             name: 'Aklilu Lemma',
//             imageId: 'OKS67lh'
//           }}
//         />
//       </Card>

//       <ClickMe />

//       <Blog posts={posts} />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />


//       <ListView numbers={numbers} />

//       <Home name="Ayon" heroName="Google">
//         <p>THis is childrel props</p>
//       </Home>
//       <Home name="ROcK" heroName="superman">
//         <button type="">Button 🦋</button>
//       </Home>
//       <Home name="Google" heroName="AI" />

//       <Welcome name="Google" heroName="AI" />

//       <Message />
//       <MyComponent />
//       <PostList />
//       <PostForm />

//       <Card>
//         <Avatar
//           size={100}
//           person={{
//             name: 'Aklilu Lemma',
//             imageId: 'OKS67lh'
//           }}
//         />
//       </Card>


//     </div>
//   )

// }

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
