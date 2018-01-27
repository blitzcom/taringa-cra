import React from 'react'
import parserEngine, * as tags from '../StoryParserEngine'

describe('Story Parser', () => {
  it('parses content', () => {
    const content = [
      {
        body: "## ¡BIENVENIDOS A MI POST!",
        type: "markdown"
      }
    ]

    expect(parserEngine(content)).toEqual([
      <h2 key={0}>
        ¡BIENVENIDOS A MI POST!
      </h2>
    ])
  })
})

describe('Markdown Header', () => {
  it('returns item if no type prop', () => {
    expect(tags.MDFallback({})).toEqual({})
  })

  it('returns item if wrong type', () => {
    expect(tags.MDFallback({ type: 'image' })).toEqual({ type: 'image' })
  })

  it('returns item if no body', () => {
    expect(tags.MDFallback({ type: 'markdown' })).toEqual({ type: 'markdown' })
  })

  it('returns item if other primitive type', () => {
    expect(tags.MDFallback('foo')).toEqual('foo')
  })

  it('returns link', () => {
    const item = { type: 'markdown', 'body': '[foo](bar.com)' }

    expect(tags.MDLink(item)).toEqual(
      <a href="bar.com">foo</a>
    )
  })

  it('returns item if no header', () => {
    expect(tags.MDHeader({ type: 'markdown', body: 'content'})).toEqual({
      type: 'markdown',
      body: 'content',
    })
  })

  it('returns header tag', () => {
    expect(tags.MDHeader({ type: 'markdown', body: '# content'})).toEqual(
      <h1>content</h1>
    )
  })

  it('returns header tag less than 6', () => {
    expect(tags.MDHeader({ type: 'markdown', body: '####### content'})).toEqual(
      <h6>content</h6>
    )
  })

})

describe('Markdown Link', () => {
  it('returns item if no type prop', () => {
    expect(tags.MDFallback({})).toEqual({})
  })

  it('returns item if wrong type', () => {
    expect(tags.MDFallback({ type: 'image' })).toEqual({ type: 'image' })
  })

  it('returns item if no body', () => {
    expect(tags.MDFallback({ type: 'markdown' })).toEqual({ type: 'markdown' })
  })

  it('returns item if other primitive type', () => {
    expect(tags.MDFallback('foo')).toEqual('foo')
  })

  it('returns link', () => {
    const item = { type: 'markdown', 'body': '[foo](bar.com)' }

    expect(tags.MDLink(item)).toEqual(
      <a href="bar.com">foo</a>
    )
  })

  it('returns item if no link', () => {
    const item = { type: 'markdown', 'body': 'foobar' }

    expect(tags.MDLink(item)).toEqual(item)
  })
})

describe('Markdown fallback', () => {
  it('returns item if no type prop', () => {
    expect(tags.MDFallback({})).toEqual({})
  })

  it('returns item if wrong type', () => {
    expect(tags.MDFallback({ type: 'image' })).toEqual({ type: 'image' })
  })

  it('returns item if no body', () => {
    expect(tags.MDFallback({ type: 'markdown' })).toEqual({ type: 'markdown' })
  })

  it('returns item if other primitive type', () => {
    expect(tags.MDFallback('foo')).toEqual('foo')
  })

  it('returns body', () => {
    const item = { type: 'markdown', body: 'foobar' }
    expect(tags.MDFallback(item)).toEqual(item.body)
  })
})

describe('Image', () => {
  it('returns item if no type prop', () => {
    expect(tags.Image({})).toEqual({})
  })

  it('returns item if wrong type', () => {
    expect(tags.Image({ type: 'markdown' })).toEqual({ type: 'markdown' })
  })

  it('returns item if no url', () => {
    expect(tags.Image({ type: 'image' })).toEqual({ type: 'image' })
  })

  it('returns item if other primitive type', () => {
    expect(tags.Image('foo')).toEqual('foo')
  })

  it('returns img', () => {
    const item = { type: 'image', url: 'foo.com/bar.jpg' }

    expect(tags.Image(item)).toEqual(
      <img className="Story-img" src="foo.com/bar.jpg" alt="foo.com/bar.jpg" />
    )
  })
})

describe('Link', () => {
  it('returns item if no type prop', () => {
    expect(tags.Link({})).toEqual({})
  })

  it('returns item if wrong type', () => {
    expect(tags.Link({ type: 'markdown' })).toEqual({ type: 'markdown' })
  })

  it('returns item if no url', () => {
    expect(tags.Link({ type: 'link' })).toEqual({ type: 'link' })
  })

  it('returns item if other primitive type', () => {
    expect(tags.Link('foo')).toEqual('foo')
  })

  it('returns link', () => {
    const item = { type: 'link', url: 'foo.com/bar.jpg' }

    expect(tags.Link(item)).toEqual(
      <a href="foo.com/bar.jpg">foo.com/bar.jpg</a>
    )
  })
})
