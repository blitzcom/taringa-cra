import React from 'react'

import { Filterable } from '../Filterable'

describe('Filterable', () => {
  it('exists', () => {
    expect(Filterable).toBeDefined()
  })

  it('renders null', () => {
    const wrapper = shallow(<Filterable />)

    expect(wrapper).toMatchSnapshot()
  })

  it('calls onDidMount', () => {
    const mock = jest.fn()

    mount(<Filterable onDidMount={mock} />)

    expect(mock).toHaveBeenCalled()
  })
})
