import React from 'react'

import { Replies } from '../Replies'

describe('Replies', () => {
  it('exists', () => {
    expect(Replies).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Replies />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with items', () => {
    const props = {
      items: ['foo', 'bar'],
      totalCount: 2,
    }

    const wrapper = shallow(<Replies {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
