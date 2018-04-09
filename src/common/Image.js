import React from 'react'

import './Image.css'

const Image = ({ children, height, url, width }) => {
  return (
    <div className="Image-wrapper" style={{ maxWidth: width }}>
      <div
        className="Image-placeholder"
        style={{ paddingTop: `${height / width * 100}%` }}
      >
        {children ? (
          children
        ) : (
          <img src={url} alt={url} className="Image-source" />
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
