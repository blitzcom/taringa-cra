import React from 'react'
import { Link } from 'react-router-dom'

import './StoryOwner.css'

const StoryOwner = ({ children }) => {
  const handleOnClick = e => e.stopPropagation()

  return (
    <div className="StoryOwner">
      <span>Por </span>
      <Link to={`/u/${children}`} onClick={handleOnClick}>
        {children}
      </Link>
    </div>
  )
}

StoryOwner.defaultProps = {
  children: '#USER',
}

export default StoryOwner
