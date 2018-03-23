import React from 'react'

import { SearchInput } from '../SearchInput'

describe('Search Input', () => {
  it('exists', () => {
    expect(SearchInput).toBeDefined()
  })

  it('renders', () => {
    const history = {
      createHref: () => {},
      location: { pathname: '/' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const tree = shallow(<SearchInput />, options)

    expect(tree).toMatchSnapshot()
  })

  it('renders spinner', () => {
    const history = {
      createHref: () => {},
      location: { pathname: '/' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const tree = shallow(<SearchInput isSearching />, options)

    expect(tree).toMatchSnapshot()
  })

  it('fires search when press enter key', () => {
    const mock = jest.fn()

    const history = {
      createHref: () => {},
      location: { pathname: '/search' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const wrapper = mount(<SearchInput onChange={mock} />, options)
    const event = { target: { value: 'foo' } }

    wrapper.find('input').simulate('change', event)
    wrapper.find('input').simulate('keyUp', { which: 13 })

    expect(mock).toBeCalledWith('foo')
  })

  it('clears when press esc key and has content', () => {
    const mock = jest.fn()

    const history = {
      createHref: () => {},
      location: { pathname: '/search' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const wrapper = mount(<SearchInput onClear={mock} />, options)
    wrapper.find('input').simulate('keyUp', { which: 27 })

    expect(mock).not.toHaveBeenCalled()

    const event = { target: { value: 'foo' } }
    wrapper.find('input').simulate('change', event)
    wrapper.find('input').simulate('keyUp', { which: 27 })

    expect(mock).toHaveBeenCalled()
  })

  it('shows clear button', () => {
    const history = {
      createHref: () => {},
      location: { pathname: '/search' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const wrapper = shallow(<SearchInput />, options)
    expect(wrapper).toMatchSnapshot()
    wrapper.setState({ value: 'foo' })
    expect(wrapper).toMatchSnapshot()
  })

  it('clears search input', () => {
    const mock = jest.fn()

    const history = {
      createHref: () => {},
      location: { pathname: '/search' },
      push: () => {},
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const wrapper = mount(<SearchInput onClear={mock} />, options)

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
    const mockRedirect = jest.fn()

    const history = {
      createHref: () => {},
      location: { pathname: '/' },
      push: mockRedirect,
      replace: () => {},
    }

    const options = {
      context: { router: { history } },
    }

    const wrapper = shallow(<SearchInput onChange={mock} />, options)

    wrapper.setState({ value: 'foo' })
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(mock).toBeCalledWith('foo')
    expect(mockRedirect).toBeCalled()
  })

  describe('redirect to search page', () => {
    describe('when is on search route', () => {
      it('ignores redirect', () => {
        const mock = jest.fn()

        const history = {
          createHref: () => {},
          location: { pathname: '/search' },
          push: mock,
          replace: () => {},
        }

        const options = {
          context: { router: { history } },
        }

        const wrapper = mount(<SearchInput />, options)
        const event = { target: { value: 'foo' } }

        wrapper.find('input').simulate('change', event)
        wrapper.find('input').simulate('keyUp', { which: 13 })

        expect(mock).not.toBeCalled()
      })
    })

    describe('when is on any other route', () => {
      it('redirects to /search', () => {
        const mock = jest.fn()

        const history = {
          createHref: () => {},
          location: { pathname: '/' },
          push: mock,
          replace: () => {},
        }

        const options = {
          context: { router: { history } },
        }

        const wrapper = mount(<SearchInput />, options)
        const event = { target: { value: 'foo' } }

        wrapper.find('input').simulate('change', event)
        wrapper.find('input').simulate('keyUp', { which: 13 })

        expect(mock).toBeCalledWith('/search')
      })
    })
  })
})
