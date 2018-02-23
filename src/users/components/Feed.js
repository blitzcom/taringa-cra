import React from 'react'

import UserCard from './UserCard'
import withSummaries from '../../summaries/components/withSummaries'

const getId = props => props.match.params.username
const getUrl = props => `/user/${getId(props)}/feed`

const UserFeed = withSummaries(getId, getUrl)()

const Feed = props => {
  return (
    <div className="row">
      <div className="col-8">
        <UserFeed />
      </div>
      <div className="col-4">
        <UserCard id={props.match.params.username} />
      </div>
    </div>
  )
}

export default Feed
