import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Nav from '../Nav'

window.$ = () => {}

describe('Nav', () => {
  it('exists', () => {
    expect(Nav).toBeDefined()
  })

  it('renders default', () => {
    const tree = shallow(<Nav />)
    expect(tree).toMatchSnapshot()
  })
})
