import React from 'react'
import { renderComponent } from 'recompose'

import branch from '../branch'

const BaseComponent = ({ foo }) => {
  return <p>{foo} in BaseComponent</p>
}

const HighComponent = () => {
  return <p>High Component</p>
}

const LowComponent = () => {
  return <p>Low Component</p>
}

describe('branch', () => {
  it('exists', () => {
    expect(branch).toBeDefined()
  })

  it('renders base componente when has no args', () => {
    const Component = branch()(BaseComponent)
    const wrapper = shallow(<Component foo="foo" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders the first truthy branch (first)', () => {
    const Component = branch(
      [props => props.foo === 'foo', renderComponent(HighComponent)],
      [props => props.foo === 'bar', renderComponent(LowComponent)]
    )(BaseComponent)

    const wrapper = shallow(<Component foo="foo" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders the first truthy branch (second)', () => {
    const Component = branch(
      [props => props.foo === 'foo', renderComponent(HighComponent)],
      [props => props.foo === 'bar', renderComponent(LowComponent)]
    )(BaseComponent)

    const wrapper = shallow(<Component foo="bar" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders BaseComponent if none are truthy', () => {
    const Component = branch(
      [props => props.foo === 'foo', renderComponent(HighComponent)],
      [props => props.foo === 'bar', renderComponent(LowComponent)]
    )(BaseComponent)

    const wrapper = shallow(<Component foo="baz" />)

    expect(wrapper).toMatchSnapshot()
  })
})
