import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import ToggleAction from '../ToggleAction'

describe('Toggle Action', () => {
  it('renders default', () => {
    const tree = renderer
      .create(<ToggleAction>Fullscreen</ToggleAction>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders toggled', () => {
    const tree = renderer
      .create(<ToggleAction isToggled>Fullscreen</ToggleAction>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with icons', () => {
    const tree = renderer
      .create(
        <ToggleAction activeIcon="compress" inactiveIcon="expand">
          Fullscreen
        </ToggleAction>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders toggled with icons', () => {
    const tree = renderer
      .create(
        <ToggleAction activeIcon="compress" inactiveIcon="expand" isToggled>
          Fullscreen
        </ToggleAction>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('handles onClick', () => {
    const mock = jest.fn()

    const toggle = shallow(<ToggleAction onClick={mock} />)

    toggle.find('button').simulate('click')
    expect(mock).toBeCalled()
  })
})
