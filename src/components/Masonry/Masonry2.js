import React, { Component } from 'react'
import './Masonry.css'

class Masonry2 extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="masonry-2">
          <h1>Masonry II</h1>
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
            <div><p>grid-gap: 20px;</p></div>

            <h4>li:nth-child(1)</h4>
            <div><p>grid-column: 1 / 4;</p></div>
            <div><p>grid-row: row;</p></div>

            <h4>li:nth-child(2)</h4>
            <div><p>grid-column: 4 / 8;</p></div>
            <div><p>grid-row: row;</p></div>

            <h4>li:nth-child(3)</h4>
            <div><p>grid-column: 1 / 3;</p></div>
            <div><p>grid-row: row 2;</p></div>

            <h4>li:nth-child(4)</h4>
            <div><p>grid-column: 3 / 8;</p></div>
            <div><p>grid-row: row 2;</p></div>

            <h4>li:nth-child(5)</h4>
            <div><p>grid-column: 1 / 8;</p></div>
            <div><p>grid-row: row 3;</p></div>

          </div>
        </section>
      </div>
    )
  }
}

export default Masonry2