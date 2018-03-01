import React from 'react'

import { SecondaryNav } from '../SecondaryNav'

describe('Secondary Nav', () => {
  it('exists', () => {
    expect(SecondaryNav).toBeDefined()
  })

  it('renders', () => {
    const wrapper = shallow(<SecondaryNav />)

    expect(wrapper).toMatchSnapshot()
  })
})
