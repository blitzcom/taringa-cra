import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'
import '../css/action.css'

import { StoryShout } from './data'

import Nav from '../common/Nav'
import Story from '../stories/components/Story'
import Score from '../stories/components/Score'

storiesOf('Nav', module).add('default', () => <Nav />)

storiesOf('Story', module).add('shout', () => {
  return (
    <Story
      onVoteDown={action('onVoteDown')}
      onVoteUp={action('onVoteUp')}
      {...StoryShout}
    />
  )
})

storiesOf('Score', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const downvotes = text('Downvotes', 2500)
    const upvotes = text('Upvotes', 5500)

    return (
      <Score
        downvotes={downvotes}
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
      />
    )
  })

storiesOf('Score', module)
  .addDecorator(withKnobs)
  .add('voted up', () => {
    const downvotes = text('Downvotes', 2500)
    const upvotes = text('Upvotes', 5500)

    return (
      <Score
        downvotes={downvotes}
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
        voted={1}
      />
    )
  })

storiesOf('Score', module)
  .addDecorator(withKnobs)
  .add('voted down', () => {
    const downvotes = text('Downvotes', 2500)
    const upvotes = text('Upvotes', 5500)

    return (
      <Score
        downvotes={downvotes}
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
        voted={-1}
      />
    )
  })

storiesOf('Score', module)
  .addDecorator(withKnobs)
  .add('is voting', () => {
    const downvotes = text('Downvotes', 2500)
    const upvotes = text('Upvotes', 5500)

    return (
      <Score
        downvotes={downvotes}
        isVoting
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
      />
    )
  })
