import React from 'react'

import StoryOwner from '../StoryOwner'

describe('StoryOwner', () => {
  it('exists', () => {
    expect(StoryOwner).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<StoryOwner />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders children', () => {
    const wrapper = shallow(<StoryOwner>foo</StoryOwner>)

    expect(wrapper).toMatchSnapshot()
  })
})
