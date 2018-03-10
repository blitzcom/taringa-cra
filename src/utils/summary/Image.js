import React from 'react'
import Summary from './Summary'

class Image extends Summary {
  getPreview() {
    const url = this.summary.summary.images.slice[0].url
    return <img alt={url} className="img-fluid" src={url} />
  }

  getPreviewKind() {
    return this.summary.summary.images.amount > 0 ? 'image' : null
  }

  getTitle() {
    return this.summary.summary.excerpt || this.summary.title
  }

  getIcon() {
    return 'far fa-image'
  }
}

export default Image
