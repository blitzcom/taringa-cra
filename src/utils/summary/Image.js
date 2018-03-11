import React from 'react'
import Summary from './Summary'

class Image extends Summary {
  getPreview() {
    const image = this.getFirstSummaryImage()

    if (image) {
      const { url, width, height } = image

      return (
        <img
          alt={url}
          className="img-fluid"
          height={height}
          src={url}
          width={width}
        />
      )
    }

    return null
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
