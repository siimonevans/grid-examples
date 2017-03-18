import React, { Component } from 'react';
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="wrapper">
          <Link to='/' className="navigation__logo">CSS Grid</Link>
          <Link to='/Masonry' className="navigation__link">Masonry</Link>
          <Link to='/Fluid' className="navigation__link">Fluid</Link>
          <Link to='/Masonry' className="navigation__link">Responsive</Link>
          <Link to='/Masonry' className="navigation__link">Overlap</Link>
          <Link to='/Masonry' className="navigation__link">Explicitly placed</Link>
        </div>
      </div>
    )
  }
}

export default Navigation