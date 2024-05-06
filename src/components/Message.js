import React, { Component } from "react";

// function Home() {
//     return <div> Home 🔑</div>
// }



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