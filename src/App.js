import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/Home/Home'
import Masonry from './components/Masonry/Masonry'
import Masonry2 from './components/Masonry/Masonry2'
import Masonry3 from './components/Masonry/Masonry3'
import Fluid from './components/Fluid/Fluid'
import Responsive from './components/Responsive/Responsive'
import Overlap from './components/Overlap/Overlap'
import ExplicitlyPlaced from './components/ExplicitlyPlaced/ExplicitlyPlaced'
import NegativeSpace from './components/NegativeSpace/NegativeSpace'
import FlexibleBreadth from './components/FlexibleBreadth/FlexibleBreadth'
import NamedTracks from './components/NamedTracks/NamedTracks'
import DOMOrder from './components/DOMOrder/DOMOrder'
import NotFound from './components/NotFound/NotFound'
import './css/App.css'

const Container = (props) => 
  <div className="app-wrapper">
    {props.children}
  </div>

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
          
            // Main routes
            <IndexRoute component={Home} />
            <Route path='Masonry' component={Masonry} />
            <Route path='Masonry2' component={Masonry2} />
            <Route path='Masonry3' component={Masonry3} />
            <Route path='Fluid' component={Fluid} />
            <Route path='Responsive' component={Responsive} />
            <Route path='Overlap' component={Overlap} />
            <Route path='ExplicitlyPlaced' component={ExplicitlyPlaced} />
            <Route path='NegativeSpace' component={NegativeSpace} />
            <Route path='FlexibleBreadth' component={FlexibleBreadth} />
            <Route path='NamedTracks' component={NamedTracks} />
            <Route path='DOMOrder' component={DOMOrder} />

            // 404
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;