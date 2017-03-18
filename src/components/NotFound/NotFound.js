import React, { Component } from 'react'
import { Link } from 'react-router'
import './NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper not-found">
        <h1>Page not found :(</h1>
        <p>
          Oh dear, it looks like this page no longer exists. <Link to='/'>Click here</Link> to go to the homepage.
        </p>
      </div>
    )
  }
}

export default NotFound