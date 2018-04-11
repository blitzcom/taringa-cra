import React from 'react'

import Failure from '../Failure'

describe('Failure', () => {
  it('exists', () => {
    expect(Failure).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<Failure />)

    expect(wrapper).toMatchSnapshot()
  })
})
