import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

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
    const tree = renderer.create(<Comment {...comment} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with reply', () => {
    const tree = renderer.create(<Comment {...commentWithReply} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with replies', () => {
    const tree = renderer.create(<Comment {...commentWithReplies} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with visible replies', () => {
    const tree = renderer
      .create(<Comment {...commentWithReplies} showReplies />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
