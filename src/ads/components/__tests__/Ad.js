import React from 'react'
import Ad from '../Ad'

describe('Ad', () => {
  it('exists', () => {
    expect(Ad).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Ad />)

    expect(wrapper).toMatchSnapshot()
  })
})
