import React from 'react'

import SearchInput from '../SearchInput'

jest.useFakeTimers()

describe('Search Input', () => {
  it('exists', () => {
    expect(SearchInput).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer
      .create(<SearchInput/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders spinner', () => {
    const tree = renderer
      .create(<SearchInput isSearching/>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles input with 250ms debounce', () => {
    const mock = jest.fn()

    const wrapper = mount(<SearchInput onChange={mock} />)
    const event = { target: { value: 'foo' } }

    wrapper.find('input').simulate('change', event)

    expect(setTimeout).toBeCalledWith(expect.any(Function), 250)

    jest.runAllTimers()

    expect(mock).toBeCalledWith('foo')
  })

  it('shows clear button', () => {
    const wrapper = shallow(<SearchInput />)
    expect(wrapper).toMatchSnapshot()
    wrapper.setState({ value: 'foo' })
    expect(wrapper).toMatchSnapshot()
  })

  it('clears search input', () => {
    const mock = jest.fn()

    const wrapper = shallow(<SearchInput onClear={mock} />)
    wrapper.setState({ value: 'foo' })
    expect(wrapper).toMatchSnapshot()
    wrapper.find('button').at(1).simulate('click')
    expect(wrapper).toMatchSnapshot()
  })
})
