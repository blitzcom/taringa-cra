import React from 'react'

import Votes from '../Votes'

describe('Votes', () => {
  it('exists', () => {
    expect(Votes).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Votes />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calculates votes', () => {
    const wrapper = shallow(<Votes upvotes={10000} downvotes={2500} />)
    expect(wrapper).toMatchSnapshot()
  })
})
