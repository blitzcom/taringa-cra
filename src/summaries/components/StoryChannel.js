import React from 'react'
import { Link } from 'react-router-dom'

import './StoryChannel.css'

const StoryChannel = ({ details: { channelType, name, title } }) => {
  if (channelType === 'user_feed') {
    return null
  }

  const handleOnClick = e => e.stopPropagation()

  return (
    <div className="StoryChannel">
      <span>en </span>
      <Link to={`/c/${name}`} onClick={handleOnClick}>
        {title}
      </Link>
    </div>
  )
}

StoryChannel.defaultProps = {
  details: {
    channelType: '#CHANNEL_TYPE',
    name: '#CHANNEL_NAME',
    title: '#CHANNEL_TITLE',
  },
}

export default StoryChannel
