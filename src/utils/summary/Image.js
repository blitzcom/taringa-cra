import Summary from './Summary'

class Image extends Summary {
  getPreview() {
    const image = this.getFirstSummaryImage()

    if (image) {
      const { url } = image

      return url
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
