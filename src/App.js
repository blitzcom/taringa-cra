import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'
import Nav from './common/Nav'
import Home from './home/components/Home'
import Story from './stories/components/Story'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>

          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/story/:slug" component={Story} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
