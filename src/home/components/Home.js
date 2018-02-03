import React from 'react'
import { Route } from 'react-router-dom'

import Card from '../../users/components/Card'
import Summaries from '../../summaries/components/Summaries'
import * as actions from '../../summaries/actions'

const ListingRoute = ({ component: Component, loadMore, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} loadMore={loadMore} />
    )}
  />
)

const Home = props => (
  <div className="row">
    <div className="col-8">
      <ListingRoute
        component={Summaries}
        exact
        loadMore={actions.fetch}
        path="/"
      />
      <ListingRoute
        path="/recents"
        component={Summaries}
        loadMore={actions.fetch}
      />
      <ListingRoute
        path="/tops"
        component={Summaries}
        loadMore={actions.fetch}
      />
    </div>

    <div className="col-4">
      <Card status="fetching" />
    </div>
  </div>
)

export default Home
