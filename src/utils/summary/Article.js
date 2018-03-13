import Summary from './Summary'

class Article extends Summary {
  getIcon() {
    return 'far fa-file-alt'
  }

  getPreview() {
    const image = this.getFirstLinkImage() || this.getFirstSummaryImage()

    if (image) {
      const { url } = image

      return url
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
