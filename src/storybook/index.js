import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'
import '../css/action.css'

import Nav from '../common/Nav'

import { StoryShout } from './data'
import Story from '../stories/components/Story'


storiesOf('Nav', module).add('default', () => <Nav />)

storiesOf('Story', module)
  .add('shout', () => {
    return (
      <Story
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        {...StoryShout}
      />
    )
  })
