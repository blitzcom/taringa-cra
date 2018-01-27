import React from 'react'
import _ from 'lodash'

export const MDHeader = item => {
  if (item && item.type && item.type === 'markdown' && item.body) {
    const matches = item.body.match(/^(#+)\s(.*)$/)
    if (matches) {
      const headerLevel = matches[1].length
      const headerText = matches[2]
      const HeaderTag = `h${headerLevel > 6 ? 6 : headerLevel}`

      return <HeaderTag key={item.key}>{headerText}</HeaderTag>
    }
  }

  return item
}

export const MDLink = item => {
  if (item && item.type && item.type === 'markdown' && item.body) {
    const matches = item.body.match(/\[(.+)\]\((.+)\)/)
    if (matches) {
      const label = matches[1]
      const url = matches[2]

      return (
        <a key={item.key} href={url}>
          {label}
        </a>
      )
    }
  }

  return item
}

export const MDFallback = item => {
  if (item && item.type && item.type === 'markdown' && item.body) {
    return item.body
  }

  return item
}

export const Image = item => {
  if (item && item.type && item.type === 'image' && item.url) {
    return (
      <img className="Story-img" key={item.key} alt={item.url} src={item.url} />
    )
  }

  return item
}

export const Link = item => {
  if (item && item.type && item.type === 'link' && item.url) {
    return <a href={item.url}>{item.url}</a>
  }

  return item
}

export class StoryParserEngine {
  constructor(processors) {
    this.processors = processors || []
  }

  reducer(existing, processor) {
    if (processor) {
      return processor(existing || '')
    }

    return existing
  }

  processItem(item, index) {
    return _.reduce(
      this.processors,
      this.reducer,
      _.assign({}, item, { key: index })
    )
  }

  process(content) {
    return _.map(content, this.processItem.bind(this))
  }
}

const tags = [MDHeader, MDLink, Image, Link, MDFallback]

const parserEngine = content => {
  return new StoryParserEngine(tags).process(content)
}

export default parserEngine
