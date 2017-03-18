import React, { Component } from 'react'
import './Fluid.css'
import Navigation from '../../components/Navigation/Navigation'

class Fluid extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation></Navigation>
        <section className="fluid">
          <h1>Fluid</h1>
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
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-gap: 20px;</p></div>
            <div><p>grid-template-columns: repeat(7, 1fr);</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Fluid