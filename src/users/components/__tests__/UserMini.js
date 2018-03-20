import React from 'react'

import { UserMini } from '../UserMini'


describe('UserMini', () => {
  it('exists', () => {
    expect(UserMini).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<UserMini />)
    expect(wrapper).toMatchSnapshot()
  })
})
