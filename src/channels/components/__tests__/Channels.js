import React from 'react'

import Channels from '../Channels'

describe('Channels', () => {
  it('exists', () => {
    expect(Channels).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Channels />)

    expect(wrapper).toMatchSnapshot()
  })
})
