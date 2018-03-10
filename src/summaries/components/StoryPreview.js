import React from 'react'

import './StoryPreview.css'

const StoryPreview = ({ children, ...rest }) => {
  return (
    <div className="Story-preview" {...rest}>
      {children}
    </div>
  )
}

export default StoryPreview
