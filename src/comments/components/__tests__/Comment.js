import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Comment from '../Comment'
import { comment, commentWithReply, commentWithReplies } from '../comment.data'

describe('Comment', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('exists', () => {
    expect(Comment).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Comment />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with replies', () => {
    const wrapper = shallow(<Comment id="foo" />)

    expect(wrapper).toMatchSnapshot()
  })
})
