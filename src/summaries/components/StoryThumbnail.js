import React from 'react'
import LazyLoad from 'react-lazyload'

import './StoryThumbnail.css'

const StoryThumbnail = ({ icon, src, ...rest }) => {
  return (
    <div className="StoryThumbnail" {...rest}>
      {src ? (
        <LazyLoad height={1} offset={100} once>
          <img src={src} alt="Thumbnail" />
        </LazyLoad>
      ) : (
        <i className={icon} />
      )}
    </div>
  )
}

StoryThumbnail.defaultProps = {
  icon: 'fa fa-unknown',
  src: null,
}

export default StoryThumbnail
