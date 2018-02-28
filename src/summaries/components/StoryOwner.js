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
  const handleOnClick = e => e.stopPropagation()

  return (
    <p {...props}>
      {children}{' '}
      <Link to={`/u/${owner}`} onClick={handleOnClick}>
        {owner}
      </Link>
      {channelName && (
        <span>
          {' en '}
          <Link to={`/c/${channel}`} onClick={handleOnClick}>
            {channelName}
          </Link>
        </span>
      )}{' '}
      <TimeAgo date={created} formatter={formatter} />
    </p>
  )
}

export default StoryOwner
