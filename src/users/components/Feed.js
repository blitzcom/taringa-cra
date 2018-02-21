import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { userSelector } from '../selectors'
import withSummaries from '../../summaries/components/withSummaries'

const getId = props => props.match.params.username

const getUrl = props => `/user/${getId(props)}/feed`

const UserFeed = withSummaries(getId, getUrl, true)()

const Feed = props => {
  return (
    <div className="row">
      <div className="col-8">
        <UserFeed />
      </div>
      <div className="col-4">
        <Card {...props.user} />
      </div>
    </div>
  )
}

export default connect((state, props) => {
  return {
    user: userSelector(state, props),
  }
})(Feed)
