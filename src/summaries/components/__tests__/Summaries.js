import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Summaries from '../Summaries'
import { image } from '../data'
import { normalizeStory } from '../../utils'

describe('Summaries', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('renders default', () => {
    const wrapper = shallow(<Summaries />)

    expect(wrapper).toMatchSnapshot()
  })

  it('changes placeholder count', () => {
    const wrapper = shallow(
      <Summaries status="fetching" placeholderCount={10} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders error', () => {
    const wrapper = shallow(<Summaries status="failure" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders summaries', () => {
    const wrapper = shallow(
      <Summaries status="success" items={[normalizeStory(image)]} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('calls onLoad', () => {
    const mock = jest.fn()

    mount(<Summaries onLoad={mock} />)

    expect(mock).toHaveBeenCalled()
  })

  it('calls onRetry when has failure', () => {
    const mock = jest.fn()

    const wrapper = shallow(<Summaries status="failure" onRetry={mock} />)

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })
})
