import React from 'react'
import _ from 'lodash'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react'

import 'bootstrap/dist/css/bootstrap.css'
import '../fontawesome-all.css'
import '../css/action.css'

import { StoryShout } from './data'

import Alert from '../common/Alert'
import Nav from '../common/Nav'
import { Stories } from '../stories/components/Stories'
import Story from '../stories/components/Story'
import Score from '../stories/components/Score'
import Action from '../common/Action'
import ToggleAction from '../common/ToggleAction'
import Paginator from '../common/Paginator'

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const currentPage = number('Current Page', 2)
    const isLastPage = boolean('Is Last Page', false)

    return (
      <Paginator
        onClickNext={action('onClickNext')}
        onClickPrevious={action('onClickPrevious')}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />
    )
  })

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .add('first page', () => {
    const currentPage = number('Current Page', 1)
    const isLastPage = boolean('Is Last Page', false)

    return (
      <Paginator
        onClickNext={action('onClickNext')}
        onClickPrevious={action('onClickPrevious')}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />
    )
  })

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .add('last page', () => {
    const currentPage = number('Current Page', 2)
    const isLastPage = boolean('Is Last Page', true)

    return (
      <Paginator
        onClickNext={action('onClickNext')}
        onClickPrevious={action('onClickPrevious')}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />
    )
  })

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .add('one page', () => {
    const currentPage = number('Current Page', 1)
    const isLastPage = boolean('Is Last Page', true)

    return (
      <Paginator
        onClickNext={action('onClickNext')}
        onClickPrevious={action('onClickPrevious')}
        currentPage={currentPage}
        isLastPage={isLastPage}
      />
    )
  })

storiesOf('Paginator', module)
  .addDecorator(withKnobs)
  .add('is loading', () => {
    const currentPage = number('Current Page', 2)
    const isLastPage = boolean('Is Last Page', false)

    return (
      <Paginator
        onClickNext={action('onClickNext')}
        onClickPrevious={action('onClickPrevious')}
        currentPage={currentPage}
        isLastPage={isLastPage}
        isLoading
      />
    )
  })

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Alert type={text('Type', 'success')}>
        {text('Children', 'I am an alert')}
      </Alert>
    )
  })

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('with Icon', () => {
    return (
      <Alert type={text('Type', 'success')} icon={text('Icon', 'check')}>
        {text('Children', 'I am an alert')}
      </Alert>
    )
  })

storiesOf('Nav', module).add('default', () => <Nav />)

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
    return <Action onClick={action('onClick')}>comments</Action>
  })

storiesOf('Action', module)
  .addDecorator(withKnobs)
  .add('with icon', () => {
    const icon = text('Icon', 'comments')

    return <Action icon={icon}>comments</Action>
  })

storiesOf('ToggleAction', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ToggleAction>{text('Children', '1 comment')}</ToggleAction>
  })

storiesOf('ToggleAction', module)
  .addDecorator(withKnobs)
  .add('toggled', () => {
    return (
      <ToggleAction isToggled={boolean('Is Toggled', true)}>
        {text('Children', '1 comment')}
      </ToggleAction>
    )
  })

storiesOf('ToggleAction', module)
  .addDecorator(withKnobs)
  .add('toggled with icon', () => {
    return (
      <ToggleAction
        activeIcon={text('Active Icon', 'compress')}
        inactiveIcon={text('Inactive Icon', 'expand')}
        isToggled={boolean('Is Toggled', true)}
      >
        {text('Children', '1 comment')}
      </ToggleAction>
    )
  })
