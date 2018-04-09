import React from 'react'

import StoryTitle from '../StoryTitle'

describe('StoryTitle', () => {
  it('exists', () => {
    expect(StoryTitle).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<StoryTitle>foobar</StoryTitle>)

    expect(wrapper).toMatchSnapshot()
  })
})
