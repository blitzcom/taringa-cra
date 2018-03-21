import Summary from './Summary'

class Text extends Summary {
  getTitle() {
    return this.summary.summary.excerpt || this.summary.title
  }

  getIcon() {
    return 'far fa-comment'
  }
}

export default Text
