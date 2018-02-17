import React from 'react'

import SearchGroup from '../SearchGroup'

describe('Serach Group', () => {
  it('exists', () => {
    expect(SearchGroup).toBeDefined()
  })

  it('renders nothing when has no matches', () => {
    const tree = renderer.create(<SearchGroup>baz</SearchGroup>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders when has matches', () => {
    const tree = renderer
      .create(
        <SearchGroup matches={5} title="foo" className="bar">
          baz
        </SearchGroup>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
