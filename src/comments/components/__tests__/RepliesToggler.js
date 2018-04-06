import React from 'react'

import RepliesToggler from '../RepliesToggler'

describe('Replies Toggler', () => {
  it('exists', () => {
    expect(RepliesToggler).toBeDefined()
  })

  it('renders nothing if totalCount is zero', () => {
    const wrapper = shallow(<RepliesToggler />)

    expect(wrapper).toMatchSnapshot()
  })

  it('changes message on visibility', () => {
    const wrapper = shallow(<RepliesToggler totalCount={1} />)

    expect(wrapper).toMatchSnapshot()
    wrapper.setProps({ isVisible: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('handles onToggleVisibility', () => {
    const mock = jest.fn()

    const wrapper = shallow(
      <RepliesToggler totalCount={1} onToggleVisibility={mock} />
    )

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })
})
