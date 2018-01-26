import React from 'react'
import renderer from 'react-test-renderer'

import { SummaryShout } from '../data'
import Shout from '../Shout'

describe('Shout', () => {
  beforeEach(() => {
    Date.now = jest.fn(() => 1513924592705)
  })

  it('renders default', () => {
    const data = SummaryShout
    data.summary.images.amount = 0

    const tree = renderer.create(<Shout {...SummaryShout} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with image thumbnail', () => {
    const data = SummaryShout
    data.summary.images.amount = 1

    const tree = renderer.create(<Shout {...SummaryShout} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with image thumbnail and preview', () => {
    const data = SummaryShout
    data.summary.images.amount = 1

    const tree = renderer
      .create(<Shout {...SummaryShout} previewIsOpen />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
