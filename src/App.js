import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Masonry from './components/Masonry/Masonry'
import Masonry2 from './components/Masonry/Masonry2'
import Fluid from './components/Fluid/Fluid'
import NotFound from './components/NotFound/NotFound'
import './css/App.css'

const Container = (props) => 
  <div className="app-wrapper">
    <Header></Header>
    {props.children}
    <Navigation></Navigation>
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
            <Route path='Fluid' component={Fluid} />

            // 404
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;