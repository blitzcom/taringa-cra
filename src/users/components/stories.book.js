import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { user } from './user.data'
import Card from './Card'

storiesOf('User', module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-4">{story()}</div>
      </div>
    </div>
  ))
  .add('default', () => <Card {...user} />)
  .add('with placeholder', () => <Card status="fetching" />)
