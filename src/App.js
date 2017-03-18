import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Masonry from './components/Masonry/Masonry';
import Fluid from './components/Fluid/Fluid';
import NotFound from './components/NotFound/NotFound';
import './css/App.css';

const Container = (props) => <div>
  <Header></Header>
  {props.children}
</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
          
            // Main routes
            <IndexRoute component={Home} />
            <Route path='Masonry' component={Masonry} />
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