import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { Search } from '../Search'
import { user as userSample } from '../data'
import { image as summary } from '../../../summaries/components/data'
import { normalizeStory } from '../../../summaries/utils'

describe('Search', () => {
  it('exists', () => {
    expect(Search).toBeDefined()
  })

  it('renders', () => {
    const tree = shallow(<Search />)
    expect(tree).toMatchSnapshot()
  })

  it('clears on component will unmoun', () => {
    const mock = jest.fn()
    const wrapper = mount(<Search clear={mock} />)
    wrapper.unmount()
    expect(mock).toBeCalled()
  })

  describe('Title', () => {
    const wrapper = shallow(<Search />)

    describe('when is idle', () => {
      it('renders message', () => {
        const stories = {
          status: 'success',
        }

        const users = {
          status: 'success',
        }

        wrapper.setProps({ stories, users })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when has failure', () => {
      it('renders message', () => {
        const stories = {
          status: 'failure',
        }

        const users = {
          status: 'failure',
        }

        wrapper.setProps({ stories, users })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when is fetching', () => {
      it('renders message', () => {
        const stories = {
          status: 'fetching',
        }

        const users = {
          status: 'fetching',
        }

        const search = {
          status: 'fetching',
        }

        wrapper.setProps({ stories, users, search })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when has items stories', () => {
      it('renders message', () => {
        const stories = {
          status: 'success',
        }

        const users = {
          status: 'success',
          items: [userSample],
        }

        const search = {
          status: 'success',
        }

        wrapper.setProps({ stories, users, search })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when has users', () => {
      it('renders message', () => {
        const stories = {
          items: [normalizeStory(summary)],
          status: 'success',
        }

        const users = {
          status: 'success',
        }

        const search = {
          status: 'success',
        }

        wrapper.setProps({ stories, users, search })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when has users and stories', () => {
      it('renders message', () => {
        const stories = {
          items: [normalizeStory(summary)],
          status: 'success',
        }

        const users = {
          items: [userSample],
          status: 'success',
        }

        const search = {
          status: 'success',
        }

        wrapper.setProps({ stories, users, search })
        expect(wrapper).toMatchSnapshot()
      })
    })

    describe('when has users and stories and is fetching', () => {
      it('renders message', () => {
        const stories = {
          items: [normalizeStory(summary)],
          status: 'fetching',
        }

        const users = {
          items: [userSample],
          status: 'fetching',
        }

        const search = {
          status: 'fetching',
        }

        wrapper.setProps({ stories, users, search })
        expect(wrapper).toMatchSnapshot()
      })
    })
  })
})
