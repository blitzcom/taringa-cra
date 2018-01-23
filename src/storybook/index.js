import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'
import '../css/action.css'

import { StoryShout } from './data'

import Nav from '../common/Nav'
import Story from '../stories/components/Story'
import Score from '../stories/components/Score'
import Action from '../common/Action'
import ToggleAction from '../common/ToggleAction'

storiesOf('Nav', module).add('default', () => <Nav />)

storiesOf('Story', module)
  .addDecorator(withKnobs)
  .add('shout', () => {
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)
    const voted = number('Voted', 0)
    const isVoting = boolean('Is Voting', false)

    return (
      <Story
        downvotes={downvotes}
        isVoting={isVoting}
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
        voted={voted}
        {...StoryShout}
      />
    )
  })

storiesOf('Score', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)

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
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)

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
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)

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
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)

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

storiesOf('Action', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const icon = text('Icon', 'comments')

    return (
      <Action
        icon={icon}
      >
        comments
      </Action>
    )
  })

storiesOf('ToggleAction', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const props = {
      activeIcon: text('Active Icon', 'compress'),
      inactiveIcon: text('Inactive Icon', 'expand'),
      isActive: boolean('Is Active', false),
    }

    return (
      <ToggleAction {...props}>
        { text('Children', '1 comment') }
      </ToggleAction>
    )
  })
