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
    const props = {
      url: 'https://placehold.it/1000x720',
      height: 720,
      width: 1000,
    }

    const wrapper = shallow(<Image {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders custom img', () => {
    const props = {
      url: 'https://placehold.it/1000x720',
      height: 720,
      width: 1000,
    }

    const wrapper = shallow(
      <Image {...props}>
        <div>foobar</div>
      </Image>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
