import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'
import '../css/action.css'

import { StoryShout } from './data'

import { Stories } from '../stories/components/Stories'
import Story from '../stories/components/Story'
import Score from '../stories/components/Score'
import ToggleAction from '../common/ToggleAction'

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

storiesOf('Story', module)
  .addDecorator(withKnobs)
  .add('shout', () => {
    const downvotes = number('Downvotes', 2500)
    const upvotes = number('Upvotes', 5500)
    const voted = number('Voted', 0)
    const isVoting = boolean('Is Voting', false)

    return (
      <Story
        {...StoryShout}
        downvotes={downvotes}
        isVoting={isVoting}
        onVoteDown={action('onVoteDown')}
        onVoteUp={action('onVoteUp')}
        upvotes={upvotes}
        voted={voted}
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
