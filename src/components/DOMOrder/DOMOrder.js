import React, { Component } from 'react'
import './DOMOrder.css'
import Navigation from '../../components/Navigation/Navigation'

class DOMOrder extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <section className="dom-order">
          <h1>DOM Order</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-gap: 10px;</p></div>
            <div><p>grid-template-rows: 30px;</p></div>

            <h4>li:nth-child(1)</h4>
            <div><p>grid-column: 1;</p></div>
            <div><p>grid-row: 1;</p></div>

            <h4>li:nth-child(2)</h4>
            <div><p>grid-column: 1;</p></div>
            <div><p>grid-row: 2;</p></div>
            <div><p>margin: 20px 20px 0 20px;</p></div>

            <h4>li:nth-child(3)</h4>
            <div><p>grid-column: 1;</p></div>
            <div><p>grid-row: 1 / span 2;</p></div>
            <div><p>margin: 40px 60px 30px 60px;</p></div>

          </div>
        </section>
      </div>
    )
  }
}

export default DOMOrder