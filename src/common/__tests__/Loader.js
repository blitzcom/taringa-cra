import React from 'react'

import Loader from '../Loader'

describe('Loader', () => {
  it('exists', () => {
    expect(Loader).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Loader />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with classes', () => {
    const wrapper = shallow(<Loader className="my-4" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with different size', () => {
    const wrapper = shallow(<Loader size="fa-2x" />)

    expect(wrapper).toMatchSnapshot()
  })
})
