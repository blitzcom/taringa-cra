import React from 'react'

import Tab from '../Tab'

describe('Tab', () => {
  it('exists', () => {
    expect(Tab).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Tab />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders loader when is fetching', () => {
    const props = {
      status: 'fetching',
    }

    const wrapper = shallow(<Tab {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders children when has success', () => {
    const props = {
      children: 'foo',
      status: 'success',
      totalCount: 2,
    }

    const wrapper = shallow(<Tab {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders empty slate when has success and no items', () => {
    const props = {
      status: 'success',
      totalCount: 0,
    }

    const wrapper = shallow(<Tab {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders message when has failure', () => {
    const props = {
      status: 'failure',
    }

    const wrapper = shallow(<Tab {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
