import React from 'react'

import './StoryPreview.css'

const StoryPreview = ({ isOpen, content, ...rest }) => {
  if (isOpen) {
    return (
      <div className="Story-preview" {...rest}>
        <img alt={content} className="img-fluid" src={content} />
      </div>
    )
  }

  return null
}

export default StoryPreview
