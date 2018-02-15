import React from 'react'

import Search from '../Search'

describe('Search', () => {
  it('exists', () => {
    expect(Search).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer.create(<Search />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
