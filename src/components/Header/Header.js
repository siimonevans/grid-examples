import React, { Component } from 'react';
import { Link } from 'react-router'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <Link to='/' className="header__logo">CSS Grid</Link>
          <Link to='/Masonry' className="header__link">Masonry</Link>
          <Link to='/Fluid' className="header__link">Fluid</Link>
          <Link to='/Masonry' className="header__link">Responsive</Link>
          <Link to='/Masonry' className="header__link">Overlap</Link>
          <Link to='/Masonry' className="header__link">Explicitly placed</Link>
        </div>
      </div>
    )
  }
}

export default Header