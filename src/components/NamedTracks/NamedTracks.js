import React, { Component } from 'react'
import './NamedTracks.css'
import Navigation from '../../components/Navigation/Navigation'

class NamedTracks extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <section className="named-tracks">
          <h1>Named Tracks</h1>
          <ul>
            <li id="area-title"></li>
            <li id="area-nav"></li>
            <li id="area-main"></li>
            <li id="area-footer"></li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-gap: 20px;</p></div>
            <div><p>grid-template-rows: [top] 100px [area-main] 1fr [area-footer] 50px [bottom];</p></div>
            <div><p>grid-template-columns: [left area-nav] 200px [middle area-main] 1fr [right];</p></div>

            <h4>li#area-title</h4>
            <div><p>grid-column: left / right;</p></div>
            <div><p>grid-row: top;</p></div>

            <h4>li#area-nav</h4>
            <div><p>grid-column: area-nav;</p></div>
            <div><p>grid-row: area-main / bottom;</p></div>

            <h4>li#area-main</h4>
            <div><p>grid-column: area-main;</p></div>
            <div><p>grid-row: area-main;</p></div>

            <h4>li#area-footer</h4>
            <div><p>grid-column: middle;</p></div>
            <div><p>grid-row: area-footer;</p></div>

          </div>
        </section>
      </div>
    )
  }
}

export default NamedTracks