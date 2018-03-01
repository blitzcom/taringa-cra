import React from 'react'

import Filters from '../Filters'

describe('Filters', () => {
  it('exists', () => {
    expect(Filters).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Filters />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with additional classes', () => {
    const wrapper = shallow(<Filters className="foobar" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with additional props', () => {
    const wrapper = shallow(<Filters id="foobar" />)

    expect(wrapper).toMatchSnapshot()
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

    const wrapper = shallow(<Filters items={filters} />)

    expect(wrapper).toMatchSnapshot()
  })
})
