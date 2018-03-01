import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Nav from './common/Nav'
import SecondaryNav from './common/SecondaryNav'
import Flashing from './flash/components/Flashing'
import Home from './home/components/Home'
import Story from './stories/components/Story'
import User from './users/components/User'
import Search from './search/components/Search'
import Channel from './channels/components/Channel'
import Global from './global/components/Global'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="sticky-top">
            <Nav />
            <SecondaryNav />
          </div>
          <Flashing />

          <div className="container">
            <Switch>
              <Route path="/c/:channel/:filter?" component={Channel} />
              <Route path="/u/:username/:filter?" component={User} />
              <Route path="/story/:slug" component={Story} />
              <Route path="/search" component={Search} />
              <Route path="/global/:filter?" component={Global} />
              <Route path="/:filter?" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
