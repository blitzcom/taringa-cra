import Summary from './Summary'

class Link extends Summary {
  getIcon() {
    return 'fa fa-link'
  }

  getTitle() {
    return this.summary.summary.link.title || super.getTitle()
  }

  getThumbnail() {
    return this.summary.summary.link.images.length > 0
      ? this.summary.summary.link.images[0]
      : null
  }

  getExcerpt() {
    return this.summary.summary.link.description
  }
}

export default Link
