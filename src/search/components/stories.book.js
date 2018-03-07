import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { SearchInput } from './SearchInput'
import User from './User'
import { user as userSample } from './data'

storiesOf('Search Input', module)
  .addDecorator(story => <div className="col-8 my-4 bg-dark">{story()}</div>)
  .add('default', () => (
    <SearchInput onChange={action('onChange')} onClear={action('onClear')} />
  ))
  .add('searching', () => <SearchInput isSearching />)

storiesOf('Search User', module)
  .addDecorator(story => (
    <div className="col-8">
      <div className="row">{story()}</div>
    </div>
  ))
  .add('default', () => <User {...userSample} />)
