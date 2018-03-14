import React from 'react'

import './StoryChannel.css'

const StoryChannel = ({ details: { channelType, name, title } }) => {
  if (channelType === 'user_feed') {
    return null
  }

  const handleOnClick = e => e.stopPropagation()
  const channelURL = `/c/${name}`

  return (
    <div className="StoryChannel">
      <span>en </span>
      <a href={channelURL} onClick={handleOnClick}>
        {title}
      </a>
    </div>
  )
}

StoryChannel.defaultProps = {
  details: {},
}

export default StoryChannel
