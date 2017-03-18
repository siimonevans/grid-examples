import React, { Component } from 'react'
import './Masonry.css'
import Navigation from '../../components/Navigation/Navigation'

class Masonry extends Component {
  render() {

    return (
      <div className="wrapper">
        <Navigation></Navigation>
        <section className="masonry-1">
          <h1>Masonry I</h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-gap: 10px;</p></div>
            <div><p>grid-template-columns: 0.3fr 0.3fr;</p></div>

            <h4>li:nth-child(1)</h4>
            <div><p>grid-column: 1 / 3;</p></div>
            <div><p>grid-row: 1;</p></div>

            <h4>li:nth-child(2)</h4>
            <div><p>grid-column: 3;</p></div>
            <div><p>grid-row: 1 / 3;</p></div>

            <h4>li:nth-child(3)</h4>
            <div><p>grid-column: 1;</p></div>
            <div><p>grid-row: 2;</p></div>

            <h4>li:nth-child(4)</h4>
            <div><p>grid-column: 2;</p></div>
            <div><p>grid-row: 2;</p></div>

          </div>
        </section>

      </div>
    )
  }
}

export default Masonry