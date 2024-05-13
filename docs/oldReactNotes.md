# 📘 React
> [YT Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=5yO85s7ERDZBhLOv)

Node Fundamentals: 
```bash
npm init -y <or> --yes
```


## React Docs:
**INSTALLATION**
1. Getting Started
1. Add React to a Website
1. Create a New React App
1. CDN Links
1. Release Channels

**MAIN CONCEPTS**
1. Hello World ✅
2. Introducing JSX ✅
3. Rendering Elements ✅ [Link](https://legacy.reactjs.org/docs/rendering-elements.html)
4. Components and Props ✅
5. State and Lifecycle
6. Handling Events ✅
7. Conditional Rendering
8. Lists and Keys ✅
9. Forms
10. Lifting State Up
11. Composition vs Inheritance
12. Thinking In React


1. React is a JavaScript library for Focus on UI. created and maintained by Facebook.
2. **routing and http request are not included in react.**
3. Components based architecture. Only work in View layer. not like a MVC(Angular, JSP Servlets) or MVT(Django) framework.
4. React is declarative: You tell react what you want and react will build the UI. [stackoverflow](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)
  1. react will handle efficiently updating and rendering the components.
  2. DOM updates are handled gracefully in react.
5. seamlessly integrate react into any project. 
  1. just a portion of the page.
  2. `complete page`.
  3. entire application with react.
6. `JavaScript XML (JSX)` is used to write react components. `ES6` is used to write react components.
7. `single page applications (SPA)` are built using react.
9. React uses **Virtual DOM** exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM).

### Pre-requisites
1. `this` keyword in JavaScript.
2. filter, map and reduce in JavaScript.
  ```js
  const nums = [1, 2, 3, 4, 5, 5, 30, 76];
  const evens = nums.filter(n => n % 2 === 0); //  -<or>-

  const evens = nums.filter(function(n) {
    return n % 2 === 0;
  });

  const doubled = nums.map(n => n * 2);

  // .reduce() = reduce the elements of an array to a single value.
  const total = nums.reduce(sum);
  console.log(`$${total.toFixed(2)}`);

  function sum(accumulator, element) {
    return accumulator + element;
  } // 1st iter accumulator = 0, element = 1; 2nd iter accumulator = 1, element = 2; 3rd iter accumulator = 3, element = 3; ...

  const maxVal = nums.reduce((max, value) => {
    return Math.max(max, value);
  })

  ```
3. let & const, arrow functions, template literals [`${num}`], default parameters, object literals, rest and spread operators[...], destructuring, classes, promises, async/await, fetch API, modules, import/export, and more.
  1. Rest and spread operators: `...`
    ```js
    let array1 = ["one", "two", "three", "four"]
    let array2 = ["five", "six", "seven"]

    // Spread operator
    let finalArray = [...array1, ...array2]
    console.log(finalArray) //output: ["one", "two", "three", "four", "five", "six", "seven"]

    // rest operator
    let [first, ...rest] = array1
    console.log(first) //output:  one
    console.log(rest)  // output: ["two", "three", "four"]
    ```

### React Concepts:
1. Fundamentals
2. HTTP (Axios, Fetch API)
3. Routing
4. Redux
5. Hooks
6. Context API
7. Testing
8. Performance
9. Utility Libraries.

#### create a react app
```bash
npx create-react-app my-app
cd my-app
npm start
```

### JSX
```jsx
function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}



interface MyButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a disabled button" disabled={true}/>
    </div>
  );
}
```
```jsx
import React from 'react';

const MyComponent = () => {
  return React.createElement('div', null, React.createElement('h1', null, 'Hello, World!'));
  // indirectly REact libary is used to convert the html tages -> React.createElement() reason we import React from 'react';
};

export default MyComponent;
```
#### Names Replace
1. class -> className
2. for -> htmlFor
3. camelCase property naming convention.
  1. onclick -> onClick
  2. tabindex -> tabIndex


```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
above is same as:
```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
-<or>-

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```


#### objects
Object can store:
1. Functions
1. Other Objects
1. Symbols
1. Arrays
1. Regular Expressions
1. Dates
1. Promises
1. Maps and Sets

```jsx
const element = <h1>Hello, world!</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const obj = {
  greet: function() {
    console.log("Hello!");
  }
};

obj.greet(); // Outputs: Hello!


const obj = {
  nestedObj: {
    key: "value"
  }
};

console.log(obj.nestedObj.key); // Outputs: value


const sym = Symbol("unique");
const obj = {
  [sym]: "Symbol value"
};

console.log(obj[sym]); // Outputs: Symbol value

const obj = {
  arrayProp: [1, 2, 3]
};

console.log(obj.arrayProp[0]); // Outputs: 1


const obj = {
  regex: /\d+/g
};

console.log("123abc456".match(obj.regex)); // Outputs: ["123", "456"]


const obj = {
  currentDate: new Date()
};

console.log(obj.currentDate); // Outputs: Current date and time


const obj = {
  asyncOperation: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1000);
  })
};

obj.asyncOperation.then(result => console.log(result)); // Outputs: Promise resolved


const obj = {
  map: new Map([[1, 'one'], [2, 'two']]),
  set: new Set([1, 2, 3])
};

console.log(obj.map.get(1)); // Outputs: one
console.log(obj.set.has(3)); // Outputs: true
```


### Components
1. Components are the building blocks of a react application.
2. Components are reusable and can be nested inside other components.
3. can be functional or class-based.
4. Types stateful or stateless.
5. Components can be used to pass data from parent to child components.
#### Stateless Functional Components
- Functional components are simple functions that take props as an argument and return JSX.
- Properties(props)  -> js Function -> returns (JSX)

**Shortcut for creating a functional component:**
1. 'rfc', 'rfce', rafce', rafc' -> for creating a functional component.
2. rc -> for creating a class component...
3. 'rconst' -> for creating a constructor.
```js
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

export default MyComponent;
```
#### Class Components
- Class components are ES6 classes that extend from React.Component.
- Properties(props)  -> ES6 Class -> returns (JSX)
- this. keyword
- can maintain thair own data which is known as `state`. Stateful/Smart Components.
- complex UI Logic. lifecycle Hooks.
```js
import React, { Component } from 'react';

class MyComponent extends Component {
    render() {
      return (
        <div>
          <h1>Hello, World!</h1>
        </div>
      );
    }
  }

export default MyComponent;
```


### Props
1. Props are used to pass data from parent to child components.
2. Props are **immutable**.
3. Props are passed as attributes to the component.
4. Props are accessed using `this.props` in class components and `props` in functional components.
5. Props can be used to pass functions as well.
```js
// App.jsx
  
  <Home name="Ayon" heroName="Google">
    <p>THis is childrel props</p>
  </Home>
  <Home name="ROcK" heroName="superman">
    <button type="">Button 🦋</button>
  </Home>

  // class component // directly you can use this.props.<name>
  <Welcome name="Google" heroName="AI" />
  <div>Welcome this is class {this.props.name}</div> 


import React from 'react';

const Home = props => {
    const {name, heroName, children} = props
    return (
        <div>
            <div> Home { name }  =+=  {heroName}🔑</div>
            { children }
        </div>
    )
}

export default Home;
```
```jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  const handleEvent = () => {
    console.log('Button clicked!');
  };

  const callbackFunction = () => {
    console.log('Callback function called!');
  };

  const myStyle = {
    color: 'blue',
    fontSize: '18px',
  };

  const config = {
    isEnabled: true,
  };

  return (
    <div>
      <h1>App Component</h1>
      <MyComponent 
        dataProp="Hello, World!" 
        functionProp={handleEvent} 
        eventHandlerProp={handleEvent}
        booleanProp={true}
        callbackProp={callbackFunction}
        styleProp={myStyle}
        configProp={config}
      >
        <p>This is a child component.</p>
      </MyComponent>
    </div>
  );
};

export default App;

import React from 'react';

const MyComponent = ({ 
  dataProp,
  functionProp,
  children,
  eventHandlerProp,
  booleanProp,
  callbackProp,
  refProp,
  styleProp,
  configProp
}) => {

  const handleClick = () => {
    eventHandlerProp();
  };

  return (
    <div style={styleProp}>
      <p>Data Prop: {dataProp}</p>
      <button onClick={handleClick}>Click Me</button>
      <p>Boolean Prop: {booleanProp ? 'True' : 'False'}</p>
      <p>Config Prop: {configProp.isEnabled ? 'Enabled' : 'Disabled'}</p>
      <div>{children}</div>
    </div>
  );
};

export default MyComponent;
```
SOME GOOD PRACTICES:
```jsx
// App.jsx
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}


// Avatar.jsx
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

// utils.jsx
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
```
### State
1. State is used to store data that can be changed.
2. State is **mutable**.
3. State is accessed using `this.state` in class components.
4. State should be initialized in the constructor.
5. State can be updated using `this.setState()`.
6. State can be passed as props to child components.
```js
  // inside the constructor
    this.state = {
      count: 0
    }

    increment() {
      // this.setState({
      //   count: this.state.count + 1
      // })

      this.setState(prevState => ({
        count: prevState.count + 1
      }))
    }
    
    increment5() {
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    } // for better performance react will set all the calls at onece.



      this.state.count = this.state.count + 1 // this will not work as expected.
      // alwase use this.setState() to update the state. the react will re-render the component and update the UI.
      // calles to setState are asynchronous.
      // to sync the state use callback function.

      this.setState({count: this.state.count + 1}, () => {c.l(count)})



<button onClick={() => this.setState({ count: this.state.count + 1 })}> Count {this.state.count}</button>
<button onClick={() => this.increment()}> Count {this.state.count}</button>
```
```js
import React, { Component } from "react";

// using component state, cause proportye are immutable
class Message extends Component {

    // fast type rconst
    constructor(props) {
        super(props)
        this.state = {
            message: 'Welcome Ayon',
            count: 0
        }
    }

    subscribed(msd) {

        // this setState will all wase runs in the end of the functon call
        // this.setState({
        //     message: 'Thank you for subscribing' + msd + '!',
        //     count: this.state.count + 1
        // },
        // () => {
        //         console.log('callback value',this.state.count)
        //     }
        // )

        this.setState(prevState => ({
            message: 'Thank you for subscribing' + msd + '!',
            count: prevState.count + 1
        }), () => { console.log('callback value', this.state.count) });
        console.log(this.state.count)
    }

    subscribeFive() {
        this.subscribed()
        this.subscribed()
        this.subscribed()
        this.subscribed()
        this.subscribed()
    }

    render() {
        // const {name, heroName, children} = this.props
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <h2>Subscribed Times 🔄️:{this.state.count}</h2>
                <button onClick={() => this.subscribed(' Ayon')}>Subscribe 🍎</button>
                <button onClick={() => this.subscribeFive()}>Subscribe 5 🍎</button>
                {/* Binding Event Handlers  */}
                {/* <button onClick={this.subscribed.bind(this)}>Subscribe 🍎</button> */}
            </div>
        )
    }
}

export default Message;

```
Importent Points:
1. Never modify the state directly. use setState() method.
2. State updates may be asynchronous. insted use the callback function.
3. always make update using prevState.

### Props vs State
1. props get passed to the component whereas state is managed within the component.
2. Function parameters | variables defined in the function body.
3. props are immutable | state is mutable.
4. funk: props.<names>, class: this.props.<name>  | funk: useState Hook, class: this.state.<names>


### Destructuring props and state
```js
const {name, heroName, children} = props/this.props
const {name, heroName, children} = this.state
```

### Event Handlingk: 6. Handling Events
Learn Bound and unBound Event Handlers: binding with it's object like this. some methods cant be performed and which needs current object to be binded with the event handler. `this.handleClick.bind(this);`
1. Event handlers are called when an event is triggered.
2. it's not like will execute like a function eg. funk() this will allwase call whenever you render the component. so use `funk` instead of `funk()`.
```js
function clickHandel() {}
<button onClick={clickHandel}>Subscribe 🍎</button>

clickHandel() {}
<button onClick={this.clickHandel}>Subscribe 🍎</button>


<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn // toggle the state
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```
- Binding Event Handlers
```jsx
import React from 'react';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick = () => {
    console.log('this is:', this);
  };
  render() {

    // onClick={() => this.handleClick() // This syntax ensures `this` is bound within handleClick
    return (
      // <button onClick={this.handleClick}>
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}

export default LoggingButton;

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


export default Toggle;
```

- Passing Arguments to Event Handlers
```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```



#### Binding Event Handlers
1. Binding in the render method. this keyword will not work.





### Conditional Rendering
- Example: search engine, components.
- `if` statements, `&&`, and `? :` operators.
```jsx
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}

function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}

import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}


import { db } from './database.js';
import { Suspense } from 'react';

async function ConferencePage({ slug }) {
  const conf = await db.Confs.find({ slug });
  return (
    <ConferenceLayout conf={conf}>
      <Suspense fallback={<TalksLoading />}>
        <Talks confId={conf.id} />
      </Suspense>
    </ConferenceLayout>
  );
}

async function Talks({ confId }) {
  const talks = await db.Talks.findAll({ confId });
  const videos = talks.map(talk => talk.video);
  return <SearchableVideoList videos={videos} />;
}
```
```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```
```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
```









### List Rendering: 8. Lists and Keys
```js
import React from "react"

const Home = props => {
    const names = ['Ayon', 'Rock', 'Google', 'AI'];
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Ayon',
            age: 24,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Rock',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Google',
            age: 26,
            skill: 'Vue'
        },
        {
            id: 4,
            name: 'AI',
            age: 27,
            skill: 'Node'
        }
    ]
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
            {nameList}
            {persons.map(person => <h2 key={person.id}>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)}
            {persons.map(person => <Person key={person.id} person={person} />)}
        </div>
    )
}

export default Home;
```

#### Keys
- Keys Must Only Be Unique Among Siblings
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: 
- the key attrubute is a special attribute you need to include when creating lists of elements. and we can't access the key attribute in the child component.
- keys are used to give a unique identity to the elements in the list. and when a new list item is added or removed, react uses the key to identify the element and update the DOM efficiently without re-rendering the entire list.
- issues with keys: [Link](https://codepen.io/gopinav/pen/gQpepq)
```
old , new list:
1   -   1
2   -   2
3   -   3
    -   4 (addes this item in the list)


1   -   2 (all will update  due to change in order)
2   -   3 (all will update  due to change in order)
3   -   4 (all will update  due to change in order)
4   -   5 (all will update  due to change in order)

to fix this we use keys.
```
```jsx
function Blog(props) {

  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts} />);
```
#### Extracting Components with Keys
```jsx
function ListItem(props) {
  const value = props.value;
  return (
    // 🟥 Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 🟥 Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

// Correct way
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```
- Keys Must Only Be Unique Among Siblings
```jsx
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Blog posts={posts} />);
```

- Embedding map() in JSX
```jsx
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <>
      <ul>
        {listItems}
      </ul>
    {
      numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )
    }
    </>
  );
}
```



### Styling and CSS Basics

> 1. Can use [ui.shadcn](https://ui.shadcn.com/docs/components/calendar)
1. CSS stylesheets
2. Inline styles
3. CSS modules
4. CSS-in-JS libraries

- myStyle.css
```css
.primary {
  color: orange;
}
.font-xl {
  font-size: 72px;
}
```
```jsx
import React from 'react'
import '../stylesheets/myStyle.css'


const StyleSheet = (props) => {
  
  let className = props.primary ? 'primary' : ''

  return (
    <div className={`${className} font-xl`}>
      <h1>Stylesheet</h1>
    </div>
  )
}

export default StyleSheet

// App.jsx
      <StyleSheet primary={true} />
      <StyleSheet primary={false} />
```

- Inline styles
```jsx
import React from 'react'

const headerStyle = {
  color: 'blue',
  fontSize: '30px'
}

const InlineCSS = () => {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '50px' }}>Inline CSS</h1>
      <div>
          <p
            style={{
              lineHeight: 1.5,
              fontWeight: 300,
              marginBottom: "25px",
              fontSize: "1.375rem"
            }}
          >
            This is one of the best developer blogs on the planet! I read it daily to improve my skills.
          </p>
        </div>
      <h2 style={headerStyle}>headerStyle</h2>
    </div>
  )
}

export default InlineCSS
```


```css
/* appStyles.css */
.error {
  color: red;
}
  /* appStyles.module.css */
.success {
  color: green;
}
```
```jsx
import './stylesheets/appStyles.css';  // this style will apply for all the nested components.
import styles from './stylesheets/appStyle.module.css'; // this style will apply only for the component.
```
```jsx
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
```




```jsx
 const Div:any = styled.div`  
            margin: 20px;  
            border: 5px dashed green;  
            &:hover {  
            background-color: ${(props:any) => props.hoverColor};  
            }  
            `;  
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: palevioletred;  
            `;  
    const Paragraph = styled.p`  
            font-size: 25px;  
            text-align: center;  
            background-Color: lightgreen;  
            `;  

```
Have a look good practices:  [Link](https://github.com/Ayon-SSP/Portfolio_Ayon-ssp/blob/code/src/styles/Footer.js)




#### _mixins.scss
- mixins are used to define styles that can be reused throughout the application.
**Eg:**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```


### Basics of Form Handling
1. The event `e` is automatically passed by JavaScript when an event handler (like `onChange` or `onSubmit`) is triggered. In this case, e represents a synthetic event from React,
```jsx
import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	// onChange={e => setName({ ...name, firstName: e.target.value })}

	submitHandler = e => {
		e.preventDefault() // to avoid page refresh
		console.log(this.state)
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { userId, title, body } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="body"
							value={body}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm
```




### Component Lifecycle Methods
**class components have lifecycle methods.**

w3: [React Component Lifecycle](https://www.w3schools.com/react/react_lifecycle.asp)
1. Mounting
  1. constructor()
  2. static getDerivedStateFromProps()
  3. render()
  4. componentDidMount()
2. Updating
  1. static getDerivedStateFromProps()
  2. shouldComponentUpdate()
  3. render()
  4. getSnapshotBeforeUpdate()
  5. componentDidUpdate()
3. Unmounting
  1. componentWillUnmount()
4. Error Handling
  1. static getDerivedStateFromError()
  2. componentDidCatch()



#### Mounting
1. A: constructor() 
2. A: static getDerivedStateFromProps() returns null if the new props do not require any state update, method is used when state depends on changes in props over time.
3. A: render() 
4. B: constructor() 
5. B: static getDerivedStateFromProps() 
6. B: render() 
7. B: componentDidMount() : invoked ONLY ONCE, invoked immediately after a component and all its children components have been rendered to the DOM. performe side effects: ajax calls, interact with the DOM or set up subscriptions, load data. 
8. A: componentDidMount()    

#### Updating
1. A: static getDerivedStateFromProps() 
2. A: shouldComponentUpdate() : return false if component should not re-render. performance optimization. 
3. A: render() 
4. B: static getDerivedStateFromProps()
5. B: shouldComponentUpdate()
6. B: render()
7. B: getSnapshotBeforeUpdate() : invoked right before the most recently rendered output is committed to the DOM.
8. A: getSnapshotBeforeUpdate()
9. B: componentDidUpdate() : invoked immediately after updating occurs. perform side effects: ajax calls, interact with the DOM or set up subscriptions, load data.
10. A: componentDidUpdate()

#### Unmounting
1. componentWillUnmount() : invoked immediately before a component is unmounted and destroyed. perform cleanup: cancel network requests, remove event listeners, cancel subscriptions.

#### Error Handling
1. static getDerivedStateFromError() : invoked after an error has been thrown by a descendant component. return a value to update state.
2. componentDidCatch() : invoked after an error has been thrown by a descendant component. perform side effects: log the error.




### Fragments
1. some tags can have div tag as a parent tag. so we use fragments to avoid the extra div tag.
```jsx
import React from 'react'

const FragmentDemo = () => {
    return (
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo component</p>
            {
                [1, 2, 3, 4, 5].map(num => (
                    <React.Fragment key={num}>
                        <h1>{num}</h1>
                        <p>{num} is a number</p>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

or can use <> </> instead of <React.Fragment> </React.Fragment>
```

### Pure Components
1. Pure components are similar to functional components.
2. They do not re-render if the state or props have not changed.
3. They do not have access to the lifecycle methods.
4. They are used to improve performance.
```jsx
<ParentComp />

just extend the PureComponent instead of Component.
```

### Memo:
1. pure components for functional components.
```jsx
export default React.memo(MemoComp)
```

### Refs
1. Refs are used to access the DOM nodes or React elements created in the render method.
2. Refs are created using `React.createRef()` and attached to React elements via the ref attribute.
3. Refs are commonly used to focus an input field or to integrate third-party DOM libraries.
4. you can also use callback refs.
5. can also ref to a child component.

```jsx
<RefDemow />
```
##### ref Forwarding Ref
> Refere the video no. 30
1. ref is forwarded to the child component from the parent component.

### Portals & Error Boundaries
TODO: ReactJS Tutorial - 31 - 32
### Higher Order Components
TODO: ReactJS Tutorial - 33 - 35
### Render Props
TODO: ReactJS Tutorial - 36 - 37

### Context
componentA -> passPorpec -> componentB -> passPorpec -> componentC ...
so we use context API to pass the props to the component without passing the props to the parent component.
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.
```jsx 
// userContext.js 
import React from 'react'

const UserContext = React.createContext() // for default value  you can send parameter. React.createContext('default value')
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
```



### React and HTTP
Http Libraries:
1. Axios
2. Fetch API
3. jQuery
4. XMLHttpRequest...
```bash
npm install axios
```
API Endpoint: [jsonplaceholder](https://jsonplaceholder.typicode.com/)
```js
import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      })
  }

  render() {
    const { posts, errorMsg } = this.state
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    )
  }
}

export default PostList
```
```js
import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault() // to avoid page refresh
    console.log(this.state)
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { userId, title, body } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
```

### React Hooks
> [React Hooks](https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/)
1. can't use hooks inside the class components.
2. only call hooks at the top level.
3. Dont call hooks inside loops, conditions or nested functions.
4. 
#### useState Hook
1. insted of setCount(count + 1) -> setCount(prevCount => prevCount + 1)

```js
import React, { useState } from 'react'
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(prevCount => prevCount + 1)



const [name, setName] = useState({ firstName: '', seconeName: '' })
// onChange={e => setName({ e.target.keys: e.target.value })} dont know weather it works.
onChange={e => setName({ ...name, firstName: e.target.value })} // last parameter will overwrite the first parameter.


const [items, setItems] = useState([])

const addItem = () =>{
  // setItems(prevItem => )
  setItems([...items, {
    id: items.length,
    value: Math.floor(Math.random() * 10 + 1)
  }])
}

onClick={addItem}
```

#### useEffect Hook
1. useEffect is a hook that allows you to perform side effects in functional components.
Flow:
1. render the component(Mount): only the body()
2. if any thing from the dependency array changes then useEffect will first run the cleanup code and then run the useEffect code.
      first distroy it self Unmount -> then Mount.
```js
import React, {useState, useEffect} from 'react'
const [count, setCount] = useState(0);
useEffect(() => {
  // the code that we want to run
  document.title = `You clicked ${count} times`
  console.log('useEffect - Updating document title', count)
  return () => {
    // cleanup code
  }
}, [count]) // dependency array
```

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);
```





## Redux
```bash
npm install redux react-redux
```

Redux: 
store -> action -> reducer

Three Principles:
1. Single source of truth
2. State is read-only
3. Changes are made with pure functions

```js
// store.js
import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)

export default store

// cake/cakeReducer.js
import { BUY_CAKE } from './cakeTypes'

const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

export default cakeReducer

// cake/cakeTypes.js
export const BUY_CAKE = 'BUY_CAKE'

// cake/cakeActions.js
import { BUY_CAKE } from './cakeTypes'

export const buyCake = () => {
  return {
    type: BUY_CAKE
  }
}

// cake/CakeContainer.js
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './cakeActions'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)

// App.js
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './redux/cake/CakeContainer'

function App() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  )
}

export default App
```
[Video Link for better understanding](https://youtu.be/_KhGdZEWC4c?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&t=294)

JavaScript App -> Action -> Reducer -> Store -> JavaScript App
           dispatch()    


Done 1- 4 videos Codevolution Redux playlist.