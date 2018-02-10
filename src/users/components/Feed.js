import React from 'react'

import Card from './Card'

const Feed = props => {
  return (
    <div className="row">
      <div className="col-8">

      </div>
      <div className="col-4">
        <Card status="fetching" />
      </div>
    </div>
  )
}

export default Feed
