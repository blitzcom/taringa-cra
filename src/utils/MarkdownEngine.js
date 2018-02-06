import _ from 'lodash'

class MarkdownEngine {
  processHashtags(body) {
    return body.replace(
      /<hashtag tag="(.+?)" \/>/g,
      '[#$1](/hashtags/$1)'
    )
  }

  processMentions(body) {
    return body.replace(
      /<mention user="(.+?)" \/>/g,
      '[@$1](/user/$1)'
    )
  }

  preRender(body) {
    return _.reduce(
      [this.processHashtags, this.processMentions],
      (md, processor) => {
        if (processor) {
          return processor(md)
        }

        return md
      },
      body
    )
  }

  render(content) {
    return _.reduce(content, (markdown, next) => {
      switch (next.type) {
        case 'markdown':
          console.log(next.body)
          return markdown + '\n' + this.preRender(next.body)
        case 'image':
          const image = `![${next.url}](${next.url})`
          return markdown + image
        default:
          return markdown
      }
    }, '')
  }

  static Render(content) {
    const engine = new MarkdownEngine()
    return engine.render(content)
  }
}

export default MarkdownEngine
