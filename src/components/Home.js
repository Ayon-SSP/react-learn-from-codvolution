import React from "react";
/*
Shortcut for creating a functional component:
1. 'rfc', 'rfce', rafce'
2. 'rconst'
3. 'rconst' with destructuring


*/
// function Home() {
//     return <div> Home 🔑</div>
// }

// const Home = (props) => {
//     return (
//         <div>
//             <div> Home { props.name }  =+=  {props.heroName}🔑</div>
//             { props.children }
//         </div>
//     )
// }

// -or-
// Destrcuturing props
// const Home = ({name, heroName, children}) => {
//     return (
//         <div>
//             <div> Home { name }  =+=  {heroName}🔑</div>
//             { children }
//         </div>
//     )
// }
// -or-

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