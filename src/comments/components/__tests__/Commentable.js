import React from 'react'

import Commentable from '../Commentable'

describe('Commentable', () => {
  it('exists', () => {
    expect(Commentable).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Commentable />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with given comment', () => {
    const comment = {
      body: 'foo',
      create: 1513924592705,
      downvotes: 2,
      upvotes: 5,
    }

    const wrapper = shallow(<Commentable comment={comment} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with user', () => {
    const owner = {
      avatar: 'bar',
      username: 'foo',
    }

    const wrapper = shallow(<Commentable owner={owner} />)

    expect(wrapper).toMatchSnapshot()
  })
})
