import React from 'react'

import User from '../User'

describe('User', () => {
  it('exists', () => {
    expect(User).toBeDefined()
  })

  it('renders', () => {
    const match = {
      params: {
        filter: 'hot',
        username: 'foobar',
      },
    }

    const wrapper = shallow(<User match={match} />)

    expect(wrapper).toMatchSnapshot()
  })
})
