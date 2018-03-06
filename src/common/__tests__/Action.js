import React from 'react'

import Action from '../Action'

describe('Action', () => {
  it('exists', () => {
    expect(Action).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Action />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders content', () => {
    const wrapper = shallow(<Action>Foobar</Action>)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders content with icon', () => {
    const wrapper = shallow(<Action icon="fa fa-close">Foobar</Action>)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with additional class', () => {
    const wrapper = shallow(
      <Action className="foo" icon="fa fa-close">
        Foobar
      </Action>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('handles onClick', () => {
    const mock = jest.fn()

    const wrapper = shallow(
      <Action onClick={mock} className="foo" icon="fa fa-close">
        Foobar
      </Action>
    )

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })

  it('passes additional props', () => {
    const wrapper = shallow(
      <Action id="foo-action" className="foo" icon="fa fa-close">
        Foobar
      </Action>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('does not render if children is zero', () => {
    const wrapper = shallow(
      <Action id="foo-action" className="foo" icon="fa fa-close">
        0
      </Action>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
