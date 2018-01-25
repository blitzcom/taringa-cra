import React from 'react'
import renderer from 'react-test-renderer'

import Alert from '../Alert'

describe('Alert', () => {
  it('renders default', () => {
    const tree = renderer.create(<Alert>I am an alert</Alert>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with icon', () => {
    const tree = renderer
      .create(<Alert icon="check">I am an alert</Alert>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with type', () => {
    const tree = renderer
      .create(
        <Alert type="success" icon="check">
          I am an alert
        </Alert>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
