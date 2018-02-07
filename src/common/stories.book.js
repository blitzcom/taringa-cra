import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Action from './Action'
import Alert from './Alert'
import Nav from './Nav'
import { SecondaryNav } from './SecondaryNav'
import ToggleAction from './ToggleAction'

storiesOf('Action', module)
  .add('default', () => <Action>Click me!</Action>)
  .add('with icon', () => <Action icon="comments">Click me!</Action>)

storiesOf('Alert', module)
  .add('default', () => <Alert>I am an alert</Alert>)
  .add('with icon', () => <Alert icon="check">I am an alert</Alert>)
  .add('with success', () => <Alert type="success">I am an alert</Alert>)
  .add('with danger', () => <Alert type="danger">I am an alert</Alert>)
  .add('with warning', () => <Alert type="warning">I am an alert</Alert>)
  .add('with info', () => <Alert type="info">I am an alert</Alert>)

storiesOf('Nav', module).add('default', () => <Nav />)

storiesOf('SecondaryNav', module).add('default', () => <SecondaryNav />)

storiesOf('ToggleAction', module)
  .add('default', () => <ToggleAction>Fullscreen</ToggleAction>)
  .add('toggled', () => <ToggleAction isToggled>Fullscreen</ToggleAction>)
  .add('with icon', () => (
    <ToggleAction activeIcon="compress" inactiveIcon="expand">
      Fullscreen
    </ToggleAction>
  ))
  .add('toggled with icon', () => (
    <ToggleAction isToggled activeIcon="compress" inactiveIcon="expand">
      Fullscreen
    </ToggleAction>
  ))
