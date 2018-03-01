import React from 'react'

import Filter from '../Filter'

describe('Filter', () => {
  it('exists', () => {
    expect(Filter).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Filter />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with props', () => {
    const wrapper = shallow(<Filter displayName="foo" exact pathname="/bar" />)

    expect(wrapper).toMatchSnapshot()
  })
})
