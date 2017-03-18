import React, { Component } from 'react'
import './ExplicitlyPlaced.css'
import Navigation from '../../components/Navigation/Navigation'

class ExplicitlyPlaced extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation></Navigation>
        <section className="explicitly-placed">
          <h1>Explicitly Placed</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>max-width: 600px;</p></div>
            <div><p>grid-gap: 20px;</p></div>
            <div><p>grid-template-columns: repeat(4, 1fr);</p></div>

            <h4>li:nth-child(1)</h4>
            <div><p>grid-column: 2 / 3;</p></div>
            <div><p>grid-row: 1 / 2;</p></div>

            <h4>li:nth-child(2)</h4>
            <div><p>grid-column: 4 / 5;</p></div>
            <div><p>grid-row: 2 / 3;</p></div>

            <h4>li:nth-child(3)</h4>
            <div><p>grid-column: 3 / 4;</p></div>
            <div><p>grid-row: 3 / 4;</p></div>

            <h4>li:nth-child(4)</h4>
            <div><p>grid-column: 1 / 2;</p></div>
            <div><p>grid-row: 5 / 6;</p></div>

            <h4>li:nth-child(5)</h4>
            <div><p>grid-column: 4 / 5;</p></div>
            <div><p>grid-row: 5 / 6;</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default ExplicitlyPlaced