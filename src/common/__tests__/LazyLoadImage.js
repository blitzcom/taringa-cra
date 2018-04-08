import React from 'react'

import LazyLoadImage from '../LazyLoadImage'

describe('LazyLoadImage', () => {
  it('exists', () => {
    expect(LazyLoadImage).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<LazyLoadImage />)

    expect(wrapper).toMatchSnapshot()
  })
})
