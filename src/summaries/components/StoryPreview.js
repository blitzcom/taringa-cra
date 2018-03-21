import React from 'react'

import './StoryPreview.css'

const StoryPreview = ({ url }) => {
  return (
    <div className="StoryPreview">
      <img src={url} alt={url} className="img-fluid" />
    </div>
  )
}

export default StoryPreview
