import React from 'react'

import Image from '../Image'

describe('Image', () => {
  it('exists', () => {
    expect(Image).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Image />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders img', () => {
    const wrapper = shallow(
      <Image url="https://placehold.it/1000x720" height={720} width={1000} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
