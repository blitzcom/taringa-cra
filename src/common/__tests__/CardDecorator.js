import React from 'react'

import CardDecorator from '../CardDecorator'
import history from '../../history'

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

  it('renders as a link', () => {
    const wrapper = shallow(
      <CardDecorator
        avatar="https://placehold.it/64"
        cover="https://placehold.it/600x200"
        link={true}
        placeholder={false}
        to="/foo"
      >
        bar
      </CardDecorator>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('handles link onClick', () => {
    history.push = jest.fn().mockImplementation(f => {})

    const wrapper = shallow(
      <CardDecorator
        avatar="https://placehold.it/64"
        cover="https://placehold.it/600x200"
        link={true}
        placeholder={false}
        to="/foo"
      >
        bar
      </CardDecorator>
    )

    wrapper.find('.card.link').simulate('click')

    expect(history.push).toHaveBeenCalled()
  })
})
