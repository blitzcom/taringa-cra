import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import { ITEM_BIG, ITEM_MEDIUM, ITEM_SMALL } from '../../settings/constants'
import { SecondaryNav } from '../SecondaryNav'

describe('Secondary Nav', () => {
  it('exists', () => {
    expect(SecondaryNav).toBeDefined()
  })

  it('renders', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SecondaryNav />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders active on ITEM_BIG', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SecondaryNav itemSize={ITEM_BIG} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders active on ITEM_MEDIUM', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SecondaryNav itemSize={ITEM_MEDIUM} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders active on ITEM_SMALL', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SecondaryNav itemSize={ITEM_SMALL} />
        </MemoryRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles onClick on ITEM_BIG', () => {
    const mock = jest.fn()

    const wrapper = shallow(<SecondaryNav changeItemSize={mock} />)

    wrapper
      .find('button')
      .at(0)
      .simulate('click')
    expect(mock).toBeCalledWith(ITEM_BIG)
  })

  it('handles onClick on ITEM_MEDIUM', () => {
    const mock = jest.fn()

    const wrapper = shallow(<SecondaryNav changeItemSize={mock} />)

    wrapper
      .find('button')
      .at(1)
      .simulate('click')
    expect(mock).toBeCalledWith(ITEM_MEDIUM)
  })

  it('handles onClick on ITEM_SMALL', () => {
    const mock = jest.fn()

    const wrapper = shallow(<SecondaryNav changeItemSize={mock} />)

    wrapper
      .find('button')
      .at(2)
      .simulate('click')
    expect(mock).toBeCalledWith(ITEM_SMALL)
  })

  it('renders filters', () => {
    const filters = [
      {
        displayName: 'Foo',
        exact: true,
        id: 'foo',
        pathname: '/',
      },
      {
        displayName: 'Bar',
        exact: false,
        id: 'bar',
        pathname: '/bar',
      },
    ]

    const wrapper = shallow(<SecondaryNav filters={filters} />)

    expect(wrapper).toMatchSnapshot()
  })
})
