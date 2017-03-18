import React, { Component } from 'react'
import './Support.css'

class Support extends Component {
  render() {
    return (
      <p className="no-support">
        Oh dear, your browser doesn't support CSS grid yet. It shipped in Firefox 52 on 7th March 2017, Chrome 57 on 10th March, and will ship in Safari soon. If you are in fact using a supported browser, you may need to force-upgrade.
      </p>
    )
  }
}

export default Support