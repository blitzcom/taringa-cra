import React from 'react'
import LazyLoad from 'react-lazyload'

import './StoryPeek.css'

const StoryPeek = ({ excerpt, url, height, width }) => {
  return (
    <div className="StoryPeek">
      {excerpt && <p>{excerpt}</p>}
      {url && (
        <LazyLoad
          height={0}
          placeholder={
            <img
              alt="placeholder-img"
              src={`https://placehold.it/${width}x${height}/ffffff/ffffff`}
              className="img-fluid"
            />
          }
          once
          debounce
        >
          <img src={url} alt={url} className="img-fluid" />
        </LazyLoad>
      )}
    </div>
  )
}

export default StoryPeek
