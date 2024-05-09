import React, { Component } from 'react'
import axios from 'axios'


export class GetRequest extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      error: ''
    }
  }

  getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(response => {
        console.log(response)
        this.setState({ posts: response.data, error: '' })
      })
      .catch(error => {
        console.log(error)
        this.setState({ posts: [], error: error.message })
      })
  }

  render() {
    const posts = this.state.posts
    return (
      <>
        <div className="component mt-5">

          <button className='btn btn-success mt-3' onClick={this.getPosts}>Get Posts</button>
          <div className="mt-3">
            {
              posts.length
                ? posts.map(post => <div key={post.id}>{post.email}</div>)
                : this.state.error ? 'error' : 'loading...'
            }
          </div>

        </div>
      </>
    )
  }
}

export default GetRequest