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
    const wrapper = shallow(<Comments canRender={false} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders empty', () => {
    const wrapper = shallow(<Comments totalCount={0} status="success" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing', () => {
    const wrapper = shallow(
      <Comments totalCount={1} status="success" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing with more than one', () => {
    const wrapper = shallow(
      <Comments totalCount={2} status="success" comments={comments} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing with loading more', () => {
    const wrapper = shallow(
      <Comments totalCount={2} status="fetching" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing with error', () => {
    const wrapper = shallow(
      <Comments totalCount={1} status="failure" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
