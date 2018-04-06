import React from 'react'

import withToggler from '../withToggler'

const BaseComponent = () => {
  return <p>BaseComponent</p>
}

const Toggler = () => {
  return <p>Toggler</p>
}

describe('withToggler', () => {
  it('exists', () => {
    expect(withToggler).toBeDefined()
  })

  it('renders default', () => {
    const Component = withToggler(Toggler)(BaseComponent)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('shows base componente when visible', () => {
    const Component = withToggler(Toggler)(BaseComponent)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()

    wrapper.instance().handleToggleVisibility()
    wrapper.update()

    expect(wrapper).toMatchSnapshot()

    wrapper.instance().handleToggleVisibility()
    wrapper.update()

    expect(wrapper).toMatchSnapshot()
  })
})
