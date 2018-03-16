import React from 'react'

import Replies from '../Replies'

describe('Replies', () => {
  it('exists', () => {
    expect(Replies).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Replies />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders toggler when has more than item', () => {
    const props = {
      items: ['foo'],
      totalCount: 1,
    }

    const wrapper = shallow(<Replies {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders items on toggle visibility', () => {
    const props = {
      items: ['foo', 'bar'],
      totalCount: 2,
    }

    const wrapper = shallow(<Replies {...props} />)
    expect(wrapper).toMatchSnapshot()

    wrapper.find('button.Commentable-replies-toggler').simulate('click')

    expect(wrapper).toMatchSnapshot()

    wrapper.find('button.Commentable-replies-toggler').simulate('click')

    expect(wrapper).toMatchSnapshot()
  })
})
