import React from 'react'

import Global from '../Global'

describe('Global', () => {
  it('exists', () => {
    expect(Global).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Global />)

    expect(wrapper).toMatchSnapshot()
  })
})
