import React from 'react'

import Reply from '../Reply'

describe('Reply', () => {
  it('exists', () => {
    expect(Reply).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Reply />)

    expect(wrapper).toMatchSnapshot()
  })

  it('passes props', () => {
    const wrapper = shallow(<Reply foo="bar" />)

    expect(wrapper).toMatchSnapshot()
  })
})
