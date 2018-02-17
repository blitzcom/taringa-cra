import React from 'react'

import { SearchInput } from '../SearchInput'

jest.useFakeTimers()

describe('Search Input', () => {
  it('exists', () => {
    expect(SearchInput).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer.create(<SearchInput />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders spinner', () => {
    const tree = renderer.create(<SearchInput isSearching />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles input with 250ms debounce', () => {
    const mock = jest.fn()

    const props = {
      location: {
        pathname: '/search',
      },
      history: {
        push: () => {},
      },
    }

    const wrapper = mount(<SearchInput onChange={mock} {...props} />)
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

    const wrapper = mount(<SearchInput onClear={mock} />)

    wrapper.setState({ value: 'foo' })

    expect(wrapper).toMatchSnapshot()

    wrapper
      .find('button')
      .at(1)
      .simulate('click')

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.instance().input).toBe(document.activeElement)
    expect(mock).toBeCalled()
  })

  it('handles search on click', () => {
    const mock = jest.fn()

    const wrapper = shallow(<SearchInput onChange={mock} />)

    wrapper.setState({ value: 'foo' })
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(mock).toBeCalledWith('foo')
  })

  describe('redirect to search page', () => {
    describe('when is on search route', () => {
      it('ignores redirect', () => {
        const mock = jest.fn()

        const props = {
          location: {
            pathname: '/search',
          },
          history: {
            push: mock,
          },
        }

        const wrapper = mount(<SearchInput {...props} />)
        const event = { target: { value: 'foo' } }

        wrapper.find('input').simulate('change', event)

        expect(setTimeout).toBeCalledWith(expect.any(Function), 250)

        jest.runAllTimers()

        expect(mock).not.toBeCalled()
      })
    })

    describe('when is on any other route', () => {
      it('redirects to /search', () => {
        const mock = jest.fn()

        const props = {
          location: {
            pathname: '/',
          },
          history: {
            push: mock,
          },
        }

        const wrapper = mount(<SearchInput {...props} />)
        const event = { target: { value: 'foo' } }

        wrapper.find('input').simulate('change', event)

        expect(setTimeout).toBeCalledWith(expect.any(Function), 250)

        jest.runAllTimers()

        expect(mock).toBeCalledWith('/search')
      })
    })
  })
})
