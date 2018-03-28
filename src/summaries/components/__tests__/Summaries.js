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

  it('renders summaries', () => {
    const props = {
      items: [1, 2, 3],
      status: 'success',
    }

    const wrapper = shallow(<Summaries {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
