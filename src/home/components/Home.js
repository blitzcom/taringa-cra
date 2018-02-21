import React from 'react'
import { Route } from 'react-router-dom'

import HomeFeed from './HomeFeed'
import Ad from '../../ads/components/Ad'

const SummariesRoute = ({ id, url, ...rest }) => (
  <Route
    {...rest}
    render={props => <HomeFeed {...props} url={url} id={id} />}
  />
)

const Home = props => (
  <div className="row">
    <div className="col-8">
      <SummariesRoute exact id="trending" path="/" url="/feed/global" />

      <SummariesRoute id="recents" path="/recents" url="/feed" />

      <SummariesRoute id="tops" path="/tops" url="/feed/global/tops/week" />
    </div>

    <div className="col-4">
      <Ad />
    </div>
  </div>
)

export default Home
