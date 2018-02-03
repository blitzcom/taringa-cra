import React from 'react'
import { Route } from 'react-router-dom'

import Card from '../../users/components/Card'
import Summaries from '../../summaries/components/Summaries'

const ListingRoute = ({ component: Component, id, url, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} url={url} id={id} />}
  />
)

const Home = props => (
  <div className="row">
    <div className="col-8">
      <ListingRoute
        component={Summaries}
        exact
        id="trending"
        path="/"
        url="/feed/global"
      />
      <ListingRoute
        component={Summaries}
        id="recents"
        path="/recents"
        url="/feed"
      />
      <ListingRoute
        component={Summaries}
        id="tops"
        path="/tops"
        url="/feed/global/tops/week"
      />
    </div>

    <div className="col-4">
      <Card status="fetching" />
    </div>
  </div>
)

export default Home
