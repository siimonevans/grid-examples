import React, { Component } from 'react'
import './Masonry.css'
import Navigation from '../../components/Navigation/Navigation'

class Masonry3 extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <section className="masonry-3">
          <h1>Masonry III</h1>
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
              <div><p>grid-template-columns: 1fr 0.5fr 1fr 2fr 1fr;</p></div>

              <h4>li:nth-child(1)</h4>
              <div><p>grid-column: 1;</p></div>
              <div><p>grid-row: 1;</p></div>

              <h4>li:nth-child(2)</h4>
              <div><p>grid-column: 2 / span 2;</p></div>
              <div><p>grid-row: 1 / span 2;</p></div>

              <h4>li:nth-child(3)</h4>
              <div><p>grid-row: 1 / span 4;</p></div>

              <h4>li:nth-child(11)</h4>
              <div><p>grid-column: 1 / span 3;</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Masonry3