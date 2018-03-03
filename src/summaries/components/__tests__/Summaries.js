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
      const wrapper = shallow(<Summaries status="failure" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('renders error whan has items', () => {
      const wrapper = shallow(
        <Summaries status="failure" items={[normalizeStory(image)]} />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })

  it('renders summaries', () => {
    const wrapper = shallow(
      <Summaries status="success" items={[normalizeStory(image)]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  describe('Placeholder', () => {
    it('renders given placeholders', () => {
      const wrapper = shallow(
        <Summaries status="fetching" placeholderCount={10} />
      )

      expect(wrapper).toMatchSnapshot()
    })

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
      const wrapper = shallow(
        <Summaries status="fetching" items={[normalizeStory(image)]} />
      )

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
