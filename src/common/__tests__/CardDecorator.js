import React from 'react'

import CardDecorator from '../CardDecorator'

describe('CardDecorator', () => {
  it('exists', () => {
    expect(CardDecorator).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<CardDecorator />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders with custom params', () => {
    const wrapper = shallow(
      <CardDecorator
        avatar="https://placehold.it/64"
        className="foo"
        cover="https://placehold.it/600x200"
        placeholder={false}
      >
        bar
      </CardDecorator>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
