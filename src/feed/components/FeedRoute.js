import React from 'react'
import { Route } from 'react-router-dom'

import Feed from './Feed'

const FeedRoute = ({ id, url, ...rest }) => {
  return (
    <Route {...rest} render={props => <Feed {...props} url={url} id={id} />} />
  )
}

export default FeedRoute
