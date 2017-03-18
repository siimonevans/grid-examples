import React, { Component } from 'react'
import './Overlap.css'

class Overlap extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="overlap">
          <h1>Overlap</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-template-columns: 0.8fr 0.4fr 0.4fr 0.6fr 1.2fr;</p></div>

            <h4>li:nth-child(1)</h4>
            <div><p>grid-column: 1 / span 2;</p></div>
            <div><p>grid-row: 1 / span 2;</p></div>
            <div><p>z-index: 2;</p></div>

            <h4>li:nth-child(2)</h4>
            <div><p>grid-column: 2 / span 3;</p></div>
            <div><p>grid-row: 2 / span 4;</p></div>

            <h4>li:nth-child(3)</h4>
            <div><p>grid-column: 4 / span 2;</p></div>
            <div><p>grid-row: 4 / span 3;</p></div>
            <div><p>z-index: 2;</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Overlap