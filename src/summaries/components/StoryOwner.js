import React from 'react'

import './StoryOwner.css'

const StoryOwner = ({ children }) => {
  const handleOnClick = e => e.stopPropagation()

  const ownerURL = `/u/${children}`

  return (
    <div className="StoryOwner">
      <span>Por </span>
      <a href={ownerURL} onClick={handleOnClick}>
        {children}
      </a>
    </div>
  )
}

export default StoryOwner
