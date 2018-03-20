import React from 'react'

import TabButton from '../TabButton'

describe('TabButton', () => {
  it('exists', () => {
    expect(TabButton).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<TabButton />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with additional classnames', () => {
    const wrapper = shallow(<TabButton className="foo" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders active class when is active', () => {
    const wrapper = shallow(<TabButton isActive />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders totalCount next to label', () => {
    const wrapper = shallow(<TabButton label="foo" totalCount={10} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('handles onClick', () => {
    const mock = jest.fn()
    const wrapper = shallow(<TabButton id="foo" onClick={mock} />)

    wrapper.find('a').simulate('click')

    expect(mock).toHaveBeenCalledWith('foo')
  })
})
