import React from 'react'

import { UsernameLink } from '../UsernameLink'

describe('Username Link', () => {
  it('exists', () => {
    expect(UsernameLink).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<UsernameLink />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders username', () => {
    const wrapper = shallow(<UsernameLink username="foo" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with addition class', () => {
    const wrapper = shallow(<UsernameLink className="bar" username="foo" />)

    expect(wrapper).toMatchSnapshot()
  })
})
