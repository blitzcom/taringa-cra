import React from 'react'

import Button from '../Button'
import { ITEM_BIG, ITEM_MEDIUM } from '../../constants'

describe('Button', () => {
  it('exists', () => {
    expect(Button).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toMatchSnapshot()
  })

  it('sets icon', () => {
    const wrapper = shallow(<Button icon="fa fa-circle" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('sets size', () => {
    const wrapper = shallow(<Button size="foobar" active="foobar" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('sets active class', () => {
    const wrapper = shallow(<Button size={ITEM_BIG} />)

    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ size: ITEM_MEDIUM })

    expect(wrapper).toMatchSnapshot()
  })

  it('handles onChangeSize', () => {
    const mock = jest.fn()

    const wrapper = shallow(<Button onChangeSize={mock} />)

    wrapper.find('button').simulate('click')

    expect(mock).toHaveBeenCalled()
  })
})
