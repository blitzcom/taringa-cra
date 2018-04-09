import React from 'react'

import './StoryTitle.css'

const StoryTitle = ({ children }) => {
  return (
    <p className="StoryTitle" title={children}>
      {children}
    </p>
  )
}

export default StoryTitle
