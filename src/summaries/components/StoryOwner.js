import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

const StoryOwner = ({
  channel,
  channelName,
  children,
  created,
  formatter,
  owner,
  ...props
}) => {
  return (
    <p {...props}>
      {children} <Link to={`/u/${owner}`}>{owner}</Link>
      {' en '}
      <Link to={`/c/${channel}`}>{channelName}</Link>{' '}
      <TimeAgo date={created} formatter={formatter} />
    </p>
  )
}

export default StoryOwner
