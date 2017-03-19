import React, { Component } from 'react'
import './FlexibleBreadth.css'
import Navigation from '../../components/Navigation/Navigation'

class FlexibleBreadth extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <section className="flexible-breadth">
          <h1>Flexible Breadth</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-gap: 20px;</p></div>
            <div><p>grid-template-columns: 200px 1fr 200px;</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default FlexibleBreadth