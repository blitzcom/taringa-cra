import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Summaries from '../Summaries'
import { image } from '../data'
import { normalizeStory } from '../../utils'
import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../../settings/constants'

describe('Summaries', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('renders default', () => {
    const wrapper = shallow(<Summaries />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('Failure', () => {
    it('renders error', () => {
      const props = {
        ids: [],
        status: 'failure',
      }

      const wrapper = shallow(<Summaries {...props} />)

      expect(wrapper).toMatchSnapshot()
    })

    it('renders error whan has items', () => {
      const props = {
        ids: [1, 2, 3],
        status: 'failure',
      }

      const wrapper = shallow(<Summaries {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  it('renders summaries', () => {
    const props = {
      ids: [1, 2, 3],
      status: 'success',
    }

    const wrapper = shallow(<Summaries {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  describe('Placeholder', () => {
    it('renders 3 placeholders when size is big', () => {
      const wrapper = shallow(<Summaries status="fetching" size={ITEM_BIG} />)

      expect(wrapper).toMatchSnapshot()
    })

    it('renders 9 placeholders when size is medium', () => {
      const wrapper = shallow(
        <Summaries status="fetching" size={ITEM_MEDIUM} />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('renders 9 placeholders when size is no given nor placeholder count', () => {
      const wrapper = shallow(<Summaries status="fetching" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('renders 19 placeholders when size is small', () => {
      const wrapper = shallow(<Summaries status="fetching" size={ITEM_SMALL} />)

      expect(wrapper).toMatchSnapshot()
    })

    it('renders 1 placeholder when has items and is fetching', () => {
      const props = {
        ids: [1, 2, 3],
        status: 'fetching',
      }

      const wrapper = shallow(<Summaries {...props} />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  it('calls onRetry when has failure', () => {
    const mock = jest.fn()

    const wrapper = shallow(<Summaries status="failure" onRetry={mock} />)

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })
})
