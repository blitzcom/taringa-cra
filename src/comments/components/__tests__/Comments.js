import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import { Comments } from '../Comments'
import { comment, comments } from '../comment.data'

describe('Comments', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('exists', () => {
    expect(Comments).toBeDefined()
  })

  it('renders idle', () => {
    const tree = renderer.create(<Comments canRender={false} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders empty', () => {
    const tree = renderer.create(
      <Comments
        totalCount={0}
        status="success"
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders listing', () => {
    const tree = renderer.create(
      <Comments
        totalCount={1}
        status="success"
        comments={[comment]}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders listing with more than one', () => {
    const tree = renderer.create(
      <Comments
        totalCount={2}
        status="success"
        comments={comments}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders listing with loading more', () => {
    const tree = renderer.create(
      <Comments
        totalCount={2}
        status="fetching"
        comments={[comment]}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders listing with error', () => {
    const tree = renderer.create(
      <Comments
        totalCount={1}
        status="failure"
        comments={[comment]}
      />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
