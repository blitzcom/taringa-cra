import React from 'react'

import StoryChannel from '../StoryChannel'

describe('StoryChannel', () => {
  it('exists', () => {
    expect(StoryChannel).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<StoryChannel />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders channel details', () => {
    const details = {
      name: 'foo',
      title: 'Foo',
    }

    const wrapper = shallow(<StoryChannel details={details} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('does not render if channel type is user_feed', () => {
    const details = {
      channelType: 'user_feed',
      name: 'foo',
      title: 'Foo',
    }

    const wrapper = shallow(<StoryChannel details={details} />)

    expect(wrapper).toMatchSnapshot()
  })
})
