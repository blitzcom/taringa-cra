import React from 'react'

import StoryContent from '../StoryContent'

describe('Story Content', () => {
  it('exists', () => {
    expect(StoryContent).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<StoryContent />)

    expect(wrapper).toMatchSnapshot()
  })
})
