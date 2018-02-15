import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import User from '../User'
import { user as userSample } from '../data'

describe('Search User', () => {
  it('exists', () => {
    expect(User).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <User {...userSample} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
