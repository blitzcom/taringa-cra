import Summary from './Summary'

class Image extends Summary {
  getTitle() {
    return this.summary.summary.excerpt || this.summary.title
  }

  getIcon() {
    return 'far fa-image'
  }
}

export default Image
