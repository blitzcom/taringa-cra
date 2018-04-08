import React from 'react'
import classNames from 'classnames'

import './Image.css'

const Image = ({ center, children, height, rounded, url, width }) => {
  const wrapperClasses = classNames('Image-wrapper', {
    'Image-wrapper-center': center,
  })

  const imgClasses = classNames('Image-source', {
    rounded: rounded,
  })

  return (
    <div className={wrapperClasses} style={{ maxWidth: width }}>
      <div
        className="Image-placeholder"
        style={{ paddingTop: `${height / width * 100}%` }}
      >
        {children ? (
          children
        ) : (
          <img src={url} alt={url} className={imgClasses} />
        )}
      </div>
    </div>
  )
}

Image.defaultProps = {
  height: 1,
  url: '#IMAGE_URL',
  width: 1,
}

export default Image
