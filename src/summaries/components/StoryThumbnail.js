import React from 'react'
import classNames from 'classnames'

import './StoryThumbnail.css'

const StoryThumbnail = ({ className, icon, src }) => {
  const wrapperClass = classNames('StoryThumbnail', className)

  return (
    <div className={wrapperClass}>
      {src ? <img src={src} alt="Thumbnail" /> : <i className={icon} />}
    </div>
  )
}

StoryThumbnail.defaultProps = {
  icon: 'fa fa-unknown',
  src: null,
}

export default StoryThumbnail
