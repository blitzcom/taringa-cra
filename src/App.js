import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './App.css'
import Nav from './common/Nav'
import SecondaryNav from './common/SecondaryNav'
import Home from './home/components/Home'
import Story from './stories/components/Story'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="sticky-top">
            <Nav/>
            <SecondaryNav/>
          </div>

          <div className="container">
            <Switch>
              <Route path="/story/:slug" component={Story} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
