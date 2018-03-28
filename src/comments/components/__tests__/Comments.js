import React from 'react'

import Comments from '../Comments'
import { comment, comments } from '../comment.data'

describe('Comments', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('exists', () => {
    expect(Comments).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Comments />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing one', () => {
    const items = ['foo']
    const wrapper = shallow(<Comments items={items} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two', () => {
    const items = ['foo', 'bar']
    const wrapper = shallow(<Comments items={items} />)

    expect(wrapper).toMatchSnapshot()
  })
})
