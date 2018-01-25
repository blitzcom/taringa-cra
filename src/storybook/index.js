import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'

import { StoryShout } from './data'

import { Stories } from '../stories/components/Stories'
import Story from '../stories/components/Story'

storiesOf('Stories', module).add('loading', () => {
  return <Stories status="fetching" />
})

storiesOf('Stories', module).add('listing', () => {
  const items = _.times(10, i => _.assign({}, StoryShout, { id: i }))

  return <Stories stories={items} />
})

storiesOf('Stories', module).add('with error', () => {
  return <Stories error="Network Error" status="failure" />
})
