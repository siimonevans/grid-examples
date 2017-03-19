import React, { Component } from 'react'
import './Responsive.css'
import Navigation from '../../components/Navigation/Navigation'

class Responsive extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <section className="responsive">
          <h1>Responsive</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
            <div><p>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Responsive