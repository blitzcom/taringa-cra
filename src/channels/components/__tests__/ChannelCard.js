import React from 'react'

import ChannelCard from '../ChannelCard'

describe('Channel Card', () => {
  it('exists', () => {
    expect(ChannelCard).toBeDefined()
  })

  it('renders', () => {
    const control = {
      status: 'success',
    }

    const channel = {
      background: 'bar',
      description: 'lorem',
      thumbnail: 'foo',
      title: 'baz',
    }

    const wrapper = shallow(<ChannelCard control={control} channel={channel} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders placeholder', () => {
    const control = {
      status: 'fetching',
    }

    const wrapper = shallow(<ChannelCard control={control} />)

    expect(wrapper).toMatchSnapshot()
  })
})
