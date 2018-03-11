import React, { Fragment } from 'react'
import Summary from './Summary'

class Article extends Summary {
  getIcon() {
    return 'far fa-file-alt'
  }

  getPreview() {
    const image = this.getFirstLinkImage() || this.getFirstSummaryImage()

    if (image) {
      const { url, width, height } = image

      return (
        <Fragment>
          <p className="text-secondary">{this.getExcerpt()}</p>
          <img
            alt={url}
            className="img-fluid"
            height={height}
            src={url}
            width={width}
          />
        </Fragment>
      )
    }

    return null
  }

  getTitle() {
    return super.getTitle()
  }

  getArticleThumbnail() {
    return this.summary.summary.link &&
      this.summary.summary.link.images.length > 0
      ? this.summary.summary.link.images[0]
      : null
  }

  getThumbnail() {
    return super.getThumbnail() || this.getArticleThumbnail()
  }
}

export default Article
