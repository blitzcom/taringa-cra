import React from 'react'

import './StoryThumbnail.css'

const StoryThumbnail = ({ icon, src, ...rest }) => {
  return (
    <div className="StoryThumbnail" {...rest}>
      {src ? <img src={src} alt="Thumbnail" /> : <i className={icon} />}
    </div>
  )
}

StoryThumbnail.defaultProps = {
  icon: 'fa fa-unknown',
  src: null,
}

export default StoryThumbnail
