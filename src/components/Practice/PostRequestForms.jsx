import React, { Component } from 'react'
import axios from 'axios'
class PostRequestForms extends Component {
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

    this.setState({
      userId: '',
      title: '',
      body: ''
    })
  }

  render() {
    const { userId, title, body } = this.state
    return (
      <div className='container mt-5'>
        <h2>Post Request Forms</h2>
        <p>sign into your Account</p>
        <form onSubmit={this.submitHandler}>
          <div className='form-group'>
            <input
              className='form-control'
              type="text"
              placeholder='userId'
              name="userId"
              value={userId}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              placeholder='body'
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
              required
            />
          </div>

          <div className='form-group'>
            <input
              className='form-control'
              type="text"
              placeholder='title'
              name="title"
              value={title}
              onChange={this.changeHandler}
              required
            />
          </div>
          <button className="btn btn-primary mt-3 btn-lg btn-block" type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default PostRequestForms
