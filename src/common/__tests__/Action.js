import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Action from '../Action'

describe('Action', () => {
  it('renders default', () => {
    const tree = renderer.create(<Action>click me</Action>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with icon', () => {
    const tree = renderer
      .create(<Action icon="comments">click me</Action>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles onClick', () => {
    const mock = jest.fn()

    const action = shallow(<Action onClick={mock} />)
    action.find('button').simulate('click')
    expect(mock).toBeCalled()
  })
})
