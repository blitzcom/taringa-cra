import React from 'react'

import './StoryPeek.css'
import LazyLoadImage from '../../common/LazyLoadImage'

const StoryPeek = ({ excerpt, ...rest }) => {
  return (
    <div className="StoryPeek">
      {excerpt && <p>{excerpt}</p>}
      <LazyLoadImage {...rest} />
    </div>
  )
}

export default StoryPeek
