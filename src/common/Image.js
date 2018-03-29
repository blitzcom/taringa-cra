import React from 'react'
import LazyLoad from 'react-lazyload'

import './Image.css'

const Image = ({ height, url, width }) => {
  if (url && height && width) {
    return (
      <div className="Image-wrapper" style={{ maxWidth: width }}>
        <div
          className="Image-placeholder"
          style={{ paddingTop: `${height / width * 100}%` }}
        >
          <LazyLoad
            debounce
            once
            placeholder={<div className="LazyLoad-placeholder" />}
          >
            <img src={url} alt={url} className="Image-source" />
          </LazyLoad>
        </div>
      </div>
    )
  }

  return null
}

export default Image
