import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Search from '../Search'

describe('Search', () => {
  it('exists', () => {
    expect(Search).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
