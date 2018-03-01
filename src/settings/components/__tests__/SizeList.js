import React from 'react'

import SizeList from '../SizeList'

describe('Size List', () => {
  it('exists', () => {
    expect(SizeList).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<SizeList />)

    expect(wrapper).toMatchSnapshot()
  })
})
