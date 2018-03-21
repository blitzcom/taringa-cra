import React from 'react'
import LazyLoad from 'react-lazyload'

import './StoryPeek.css'

const StoryPeek = ({ excerpt, url, height }) => {
  return (
    <div className="StoryPeek">
      {excerpt && <p>{excerpt}</p>}
      {url && (
        <LazyLoad height={height} once>
          <img src={url} alt={url} height={height} className="img-fluid" />
        </LazyLoad>
      )}
    </div>
  )
}

export default StoryPeek
