import _ from 'lodash'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import queryString from 'query-string'
import YouTube from 'react-youtube'

class MarkdownEngine {
  constructor() {
    this.mapEntities = this.mapEntities.bind(this)
  }

  processHashtags(body) {
    return body.replace(/<hashtag tag="(.+?)" \/>/g, '[#$1](/hashtags/$1)')
  }

  processMentions(body) {
    return body.replace(/<mention user="(.+?)" \/>/g, '[@$1](/user/$1)')
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

  getVideoId(url) {
    const { query } = queryString.parseUrl(url)
    return query.v
  }

  mapLinkEntity(entity, i) {
    switch (entity.resourceType) {
      case 'video.other':
        const id = this.getVideoId(entity.url)
        if (id) {
          return (
            <div className="text-center" key={i}>
              <YouTube key={i} videoId={id} />
            </div>
          )
        }
        return null
      default:
        return null
    }
  }

  mapEntities(entity, i) {
    switch (entity.type) {
      case 'markdown':
        return <ReactMarkdown key={i} source={this.preRender(entity.body)} />
      case 'image':
        return (
          <img
            alt={entity.url}
            height={entity.height}
            key={i}
            src={entity.url}
            width={entity.width}
          />
        )
      case 'html':
        return <div key={i} dangerouslySetInnerHTML={{ __html: entity.body }} />
      case 'link':
        return this.mapLinkEntity(entity, i)
      default:
        return null
    }
  }

  render(content) {
    return _.map(content, this.mapEntities)
  }

  static Render(content) {
    const engine = new MarkdownEngine()
    return engine.render(content)
  }
}

export default MarkdownEngine
