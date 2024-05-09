import React, { Component } from 'react'
import axios from 'axios'

class HTTPRequests extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    // promise based http client for the browser and node.js
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_per_page=25')
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        List of posts 1
        {posts.length
					? posts.map(post => <div key={post.id}>{post.title}</div>)
          : null}
      </div>
    )
  }
}

export default HTTPRequests