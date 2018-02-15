import React from 'react'

import SearchGroup from '../SearchGroup'

describe('Serach Group', () => {
  it('exists', () => {
    expect(SearchGroup).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer
      .create(
        <SearchGroup title="foo" className="bar">
          baz
        </SearchGroup>
      ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  describe('wrapper', () => {
    it('renders', () => {
      const tree = renderer
        .create(
          <SearchGroup title="foo" className="bar" wrapper>
            baz
          </SearchGroup>
        ).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
