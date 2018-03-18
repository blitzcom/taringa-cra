import Summary from './Summary'

class Text extends Summary {
  getPreview() {
    const image = this.getFirstSummaryImage()

    if (image) {
      const { url } = image

      return url
    }

    return null
  }

  getTitle() {
    return this.summary.summary.excerpt || this.summary.title
  }

  getIcon() {
    return 'far fa-comment'
  }
}

export default Text
