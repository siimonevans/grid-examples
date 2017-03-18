import React, { Component } from 'react'
import { Link } from 'react-router'
import Support from '../../components/Support/Support'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>CSS Grids</h1>
        <Support></Support>
        <div className="home-grid">
          <Link to='/Masonry'><div>Masonry I</div></Link>
          <Link to='/Responsive'><div>Responsive</div></Link>
          <Link to='/Fluid'><div>Fluid</div></Link>
          <Link to='/Overlap'><div>Overlap I</div></Link>
          <Link to='/ExplicitlyPlaced'><div>Explicitly Placed</div></Link>
          <Link to='/NegativeSpace'><div>Negative Space</div></Link>
          <Link to='/'><div></div></Link>
          <Link to='/Masonry2'><div>Masonry II</div></Link>
          <Link to='/Masonry3'><div>Masonry III</div></Link>
          <Link to='/Overlap2'><div>Overlap II</div></Link>
          <Link to='/'><div></div></Link>
        </div>
      </div>
    )
  }
}

export default Home