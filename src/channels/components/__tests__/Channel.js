import React from 'react'

import Channel from '../Channel'

describe('Channel', () => {
  it('exists', () => {
    expect(Channel).toBeDefined()
  })

  it('renders', () => {
    const match = {
      params: {
        channel: 'foo',
        filter: 'hot',
      },
    }

    const wrapper = shallow(<Channel match={match} />)

    expect(wrapper).toMatchSnapshot()
  })
})
