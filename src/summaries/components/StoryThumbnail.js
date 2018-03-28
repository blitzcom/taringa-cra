import React from 'react'
import LazyLoad from 'react-lazyload'

import './StoryThumbnail.css'

const StoryThumbnail = ({ icon, src, ...rest }) => {
  return (
    <div className="StoryThumbnail" {...rest}>
      <LazyLoad height={1} placeholder={<i className={icon} />} debounce once>
        {src ? <img src={src} alt="Thumbnail" /> : <i className={icon} />}
      </LazyLoad>
    </div>
  )
}

StoryThumbnail.defaultProps = {
  icon: 'fa fa-unknown',
  src: null,
}

export default StoryThumbnail
