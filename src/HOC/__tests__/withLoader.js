import React from 'react'

import withLoader from '../withLoader'

const BaseComponent = () => {
  return <div>BaseComponent</div>
}

describe('withLoader', () => {
  it('exists', () => {
    expect(withLoader).toBeDefined()
  })

  it('renders default', () => {
    const Component = withLoader()(BaseComponent)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders loader given getShowLoader', () => {
    const Component = withLoader(props => props.foo)(BaseComponent)
    const wrapper = shallow(<Component foo={true} />)

    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ foo: false })

    expect(wrapper).toMatchSnapshot()
  })

  it('adds custom className en size to Loader', () => {
    const Component = withLoader(() => true, 'foo', 'bar')(BaseComponent)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ foo: false })

    expect(wrapper).toMatchSnapshot()
  })
})
