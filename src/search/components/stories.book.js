import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SearchInput from './SearchInput'

storiesOf('Search Input', module)
  .addDecorator(story => (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-8 my-4">
          {story()}
        </div>
      </div>
    </div>
  ))
  .add('default', () => (
    <SearchInput onChange={action('onChange')} onClear={action('onClear')} />
  ))
  .add('searching', () => <SearchInput isSearching />)
