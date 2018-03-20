import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Search from '../Search'

describe('Search', () => {
  it('exists', () => {
    expect(Search).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper).toMatchSnapshot()
  })

  it('changes tabs', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.state()).toEqual({
      activeTab: 'stories',
    })

    wrapper.instance().handleTabClick('users')

    expect(wrapper.state()).toEqual({
      activeTab: 'users',
    })
  })
})
