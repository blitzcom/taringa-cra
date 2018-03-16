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
    const wrapper = shallow(<Comments items={items} totalCount={1} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two', () => {
    const items = ['foo', 'bar']
    const wrapper = shallow(<Comments items={items} totalCount={2} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two and load more', () => {
    const items = ['foo', 'bar']
    const wrapper = shallow(
      <Comments status="fetching" items={items} totalCount={2} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with initial error', () => {
    const wrapper = shallow(<Comments status="failure" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with error', () => {
    const items = ['foo']

    const wrapper = shallow(
      <Comments status="failure" items={items} totalCount={1} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('handles load more when has failure', () => {
    const mock = jest.fn()
    const items = ['foo']

    const wrapper = shallow(
      <Comments status="failure" items={items} totalCount={1} onRetry={mock} />
    )

    wrapper.find('button').simulate('click')

    expect(mock).toBeCalled()
  })
})
