import React from 'react'

const StoryTitle = ({ children, ...props }) => {
  return (
    <p {...props} style={{ wordBreak: 'break-all' }}>
      {children}
    </p>
  )
}

export default StoryTitle
