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

  it('renders intial fetching', () => {
    const wrapper = shallow(<Comments />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders empty', () => {
    const wrapper = shallow(<Comments totalCount={0} status="success" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing one', () => {
    const wrapper = shallow(
      <Comments totalCount={1} status="success" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two', () => {
    const wrapper = shallow(
      <Comments totalCount={2} status="success" comments={comments} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two and load more', () => {
    const wrapper = shallow(
      <Comments totalCount={3} status="success" comments={comments} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders loading more', () => {
    const wrapper = shallow(
      <Comments totalCount={1} status="fetching" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with initial error', () => {
    const wrapper = shallow(<Comments totalCount={1} status="failure" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with error', () => {
    const wrapper = shallow(
      <Comments totalCount={1} status="failure" comments={[comment]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('handles load more', () => {
    const mock = jest.fn()

    const wrapper = shallow(
      <Comments
        totalCount={3}
        loadMore={mock}
        status="success"
        comments={comments}
      />
    )

    wrapper.find('button').simulate('click')

    expect(mock).toBeCalled()
  })

  it('handles load more when has failure', () => {
    const mock = jest.fn()

    const wrapper = shallow(
      <Comments
        totalCount={3}
        loadMore={mock}
        status="failure"
        comments={comments}
      />
    )

    wrapper.find('button').simulate('click')

    expect(mock).toBeCalled()
  })
})
