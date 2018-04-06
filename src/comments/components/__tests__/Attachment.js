import React from 'react'

import Attachment from '../Attachment'
import { ImageAttachment, LinkAttachment } from '../Attachment'

describe('Attachment', () => {
  it('exists', () => {
    expect(Attachment).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<Attachment />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders image attachment', () => {
    const props = {
      type: 'image',
      url: 'https://placehold.it/300',
    }

    const wrapper = shallow(<Attachment {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders link attachment', () => {
    const props = {
      type: 'link',
      videoId: 'foobar',
    }

    const wrapper = shallow(<Attachment {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Image Attachment', () => {
  it('exists', () => {
    expect(ImageAttachment).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<ImageAttachment />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders image', () => {
    const wrapper = shallow(<ImageAttachment url="https://placehold.it/300" />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Link Attachment', () => {
  it('exists', () => {
    expect(LinkAttachment).toBeDefined()
  })

  it('renders default', () => {
    const wrapper = shallow(<LinkAttachment />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders video', () => {
    const wrapper = shallow(<LinkAttachment videoId="foobar" />)

    expect(wrapper).toMatchSnapshot()
  })
})
