import React from 'react'

import './StoryPreview.css'

const StoryPreview = ({ src }) => {
  return (
    <div className="StoryPreview">
      <img src={src} alt={src} className="img-fluid" />
    </div>
  )
}

export default StoryPreview
