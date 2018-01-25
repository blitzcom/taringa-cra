import React from 'react'
import renderer from 'react-test-renderer'

import Nav from '../Nav'

describe('Nav', () => {
  it('renders default', () => {
    const tree = renderer.create(<Nav />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
