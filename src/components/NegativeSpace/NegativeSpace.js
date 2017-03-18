import React, { Component } from 'react'
import './NegativeSpace.css'
import Navigation from '../../components/Navigation/Navigation'

class NegativeSpace extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation></Navigation>
        <section className="negative-space">
          <h1>Negative Space</h1>
          <ul>
            <li>
              <h1>Lorem ipsum</h1>
              <p>
                Vivamus sit amet nulla sit amet tellus consectetur luctus non in quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras et ipsum non lectus congue varius sed eu nunc. Maecenas consectetur ante pretium eros auctor.
              </p>
            </li>
          </ul>
          <div className="explanation">
            <h4>ul</h4>
            <div><p>display: grid;</p></div>
            <div><p>grid-template-columns: 1fr 1fr</p></div>

            <h4>li</h4>
            <div><p>grid-column-start: 2;</p></div>
          </div>
        </section>
      </div>
    )
  }
}

export default NegativeSpace