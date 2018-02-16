import React from 'react'
import { Route } from 'react-router-dom'

import Card from '../../users/components/Card'
import Summaries from '../../summaries/components/Summaries'

const SummariesRoute = ({ id: providedId, url, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      let id = providedId

      if (!providedId && 'id' in props.match.params) {
        id = props.match.params.id
      }

      return <Summaries {...props} url={url} id={id} />
    }}
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
      <Card status="fetching" />
    </div>
  </div>
)

export default Home
