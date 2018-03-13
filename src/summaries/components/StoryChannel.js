import React from 'react'

import './StoryChannel.css'

const StoryChannel = ({ children }) => {
  const handleOnClick = e => e.stopPropagation()
  const channelURL = `/c/${children}`

  return (
    <div className="StoryChannel">
      <span>en </span>
      <a href={channelURL} onClick={handleOnClick}>
        {children}
      </a>
    </div>
  )
}

export default StoryChannel
