import React from 'react'

import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('exists', () => {
    expect(Avatar).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Avatar />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with props', () => {
    const wrapper = shallow(
      <Avatar avatar="baz" firstname="foo" lastname="bar" />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
