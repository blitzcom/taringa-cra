import React from 'react'

const StoryTitle = ({ children, ...props }) => {
  return <p {...props}>{children}</p>
}

export default StoryTitle
