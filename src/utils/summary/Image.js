import Summary from './Summary'

class Image extends Summary {
  getPreview() {
    return this.summary.summary.images.slice[0].url
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
