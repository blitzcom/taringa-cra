import React from 'react'

import Story from '../Story'

describe('Story', () => {
  it('exists', () => {
    expect(Story).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Story />)

    expect(wrapper).toMatchSnapshot()
  })
})
