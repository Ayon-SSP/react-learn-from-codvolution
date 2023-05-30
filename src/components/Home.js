import React from "react";

// function Home() {
//     return <div> Home 🔑</div>
// }

const Home = (props) => {
    return (
        <div>
            <div> Home { props.name }  =+=  {props.heroName}🔑</div>
            { props.children }
        </div>
    )
}

export default Home;
