import React from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'

const StoryOwner = ({
  children,
  created,
  formatter,
  owner,
  ...props
}) => {
  return (
    <p {...props}>
      {children}&nbsp;
      <Link to={`/user/${owner}`}>{owner}</Link>&nbsp;
      <TimeAgo
        date={created}
        formatter={formatter}
      />
    </p>
  )
}

export default StoryOwner
