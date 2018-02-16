import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Nav from '../Nav'

describe('Nav', () => {
  it('renders default', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Nav />
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
