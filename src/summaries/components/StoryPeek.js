import React from 'react'

import './StoryPeek.css'

const StoryPeek = ({ excerpt, preview }) => {
  return (
    <div className="StoryPeek">
      {excerpt && <p>{excerpt}</p>}
      {preview && <img src={preview} alt={preview} className="img-fluid" />}
    </div>
  )
}

export default StoryPeek
