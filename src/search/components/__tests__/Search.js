import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Search } from '../Search'

describe('Search', () => {
  it('exists', () => {
    expect(Search).toBeDefined()
  })

  it('renders', () => {
    const tree = shallow(<Search />)
    expect(tree).toMatchSnapshot()
  })
})
