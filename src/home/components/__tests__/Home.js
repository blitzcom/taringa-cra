import React from 'react'

import { Home } from '../Home'

describe('Home', () => {
  it('exists', () => {
    expect(Home).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Home />)

    expect(wrapper).toMatchSnapshot()
  })
})
