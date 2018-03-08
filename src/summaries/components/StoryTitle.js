import React from 'react'

const StoryTitle = ({ children, ...props }) => {
  return (
    <p {...props} style={{ wordBreak: 'break-word' }}>
      {children}
    </p>
  )
}

export default StoryTitle
