import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { user } from './user.data'
import UserCard from './UserCard'

storiesOf('User', module)
  .addDecorator(story => <div className="col-4">{story()}</div>)
  .add('default', () => (
    <UserCard user={user} control={{ status: 'success' }} />
  ))
  .add('with placeholder', () => <UserCard control={{ status: 'fetching' }} />)
