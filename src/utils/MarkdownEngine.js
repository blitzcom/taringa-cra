import _ from 'lodash'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import queryString from 'query-string'
import LazyLoad from 'react-lazyload'

import LazyLoadImage from '../common/LazyLoadImage'

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
    if (entity.url.indexOf('youtube') === -1) {
      return null
    }

    const id = this.getVideoId(entity.url)
    const src = `https://www.youtube.com/embed/${id}`

    return (
      <LazyLoad
        debounce
        key={i}
        once
        placeholder={<div className="Attachment-iframe-wrapper" />}
      >
        <div className="Attachment-iframe-wrapper">
          <iframe
            allow="autoplay; encrypted-media"
            className="Attachment-iframe"
            allowFullScreen
            frameBorder="0"
            height="720"
            src={src}
            title={src}
            width="1280"
          />
        </div>
      </LazyLoad>
    )
  }

  mapEntities(entity, i) {
    switch (entity.type) {
      case 'markdown':
        return <ReactMarkdown key={i} source={this.preRender(entity.body)} />
      case 'image':
        return <LazyLoadImage {...entity} key={i} />
      case 'html':
        return <div key={i} dangerouslySetInnerHTML={{ __html: entity.body }} />
      case 'link':
        return this.mapLinkEntity(entity, i)
      default:
        if (process.env.NODE_ENV === 'development') {
          console.log('Unknown entity: %s', entity.type)
        }

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
