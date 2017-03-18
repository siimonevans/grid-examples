import React, { Component } from 'react'
import { Link } from 'react-router'
import Support from '../../components/Support/Support'
import './Home.css'

class Home extends Component {
  componentDidMount() {
    function addClassWithDelay(targetElements, addClass, timing) {
      for (let i = 0; i < targetElements.length; i++) {
        (function (i) {
          setTimeout(function () {
            targetElements[i].className += addClass
          }, timing * i)
        })(i)
      }
    }

    const homeTiles = document.getElementById('home-grid').querySelectorAll('a');  
    addClassWithDelay(homeTiles, 'fade-in', 80);
  }

  render() {
    return (
      <div className="wrapper">
        <h1>CSS Grid examples</h1>
        <Support></Support>
        <div className="home-grid" id="home-grid">
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