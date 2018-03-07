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

  it('renders intial fetching', () => {
    const wrapper = shallow(<Comments />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders empty', () => {
    const control = {
      status: 'success',
      totalCount: 0,
    }

    const wrapper = shallow(<Comments control={control} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing one', () => {
    const control = {
      totalCount: 1,
      status: 'success',
    }

    const wrapper = shallow(<Comments control={control} comments={[comment]} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two', () => {
    const control = {
      totalCount: 2,
      status: 'success',
    }

    const wrapper = shallow(<Comments control={control} comments={comments} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders listing two and load more', () => {
    const control = {
      totalCount: 3,
      status: 'success',
    }

    const wrapper = shallow(<Comments control={control} comments={comments} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders loading more', () => {
    const control = {
      totalCount: 1,
      status: 'fetching',
    }

    const wrapper = shallow(<Comments control={control} comments={[comment]} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with initial error', () => {
    const control = {
      totalCount: 1,
      status: 'failure',
    }

    const wrapper = shallow(<Comments control={control} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with error', () => {
    const control = {
      totalCount: 1,
      status: 'failure',
    }

    const wrapper = shallow(<Comments control={control} comments={[comment]} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('handles load more when has failure', () => {
    const mock = jest.fn()
    const control = {
      status: 'failure',
      totalCount: 3,
    }

    const wrapper = shallow(
      <Comments comments={comments} control={control} onRetry={mock} />
    )

    wrapper.find('button').simulate('click')

    expect(mock).toBeCalled()
  })
})
