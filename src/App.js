import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Channel from './channels/components/Channel'
import Channels from './channels/components/Channels'
import Flashing from './flash/components/Flashing'
import Global from './global/components/Global'
import Home from './home/components/Home'
import Nav from './common/Nav'
import Search from './search/components/Search'
import SecondaryNav from './common/SecondaryNav'
import Story from './stories/components/Story'
import User from './users/components/User'
import history from './history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
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
              <Route path="/channels/:filter?" component={Channels} />
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
