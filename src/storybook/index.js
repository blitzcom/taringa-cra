import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'

import Nav from '../common/Nav'
import Story from '../stories/components/Story'

storiesOf('Nav', module).add('default', () => <Nav />)

storiesOf('Story', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const score = text('Score', '15.9k')
    const title = text(
      'Title',
      'Spicy jalapeno bacon ipsum dolor amet kielbasa sausage meatloaf'
    )

    return (
      <Story
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        score={score}
        title={title}
      />
    )
  })
