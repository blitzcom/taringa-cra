import React from 'react'
import LazyLoad from 'react-lazyload'

import './LazyLoadImage.css'
import Image from './Image'

const LazyLoadImage = ({ url, ...rest }) => {
  return (
    <Image {...rest}>
      <LazyLoad
        debounce
        once
        placeholder={<div className="LazyLoad-placeholder" />}
      >
        <img src={url} alt={url} className="Image-source rounded" />
      </LazyLoad>
    </Image>
  )
}

LazyLoadImage.defaultProps = {
  url: '#IMAGE_URL',
}

export default LazyLoadImage
