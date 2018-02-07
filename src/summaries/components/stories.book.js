import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Score from './Score'
import { Summaries } from './Summaries'
import Summary from './Summary'

import { SummaryShout } from './data'

storiesOf('Score', module)
  .add('default', () => <Score />)
  .add('with votes', () => <Score downvotes={2500} upvotes={5500}/>)
  .add('with vote up', () => <Score downvotes={2500} upvotes={5500} voted={1}/>)
  .add(
    'with vote down',
    () => <Score downvotes={2500} upvotes={5500} voted={-1}/>
  )
  .add('voting',() => <Score downvotes={2500} upvotes={5500} isVoting/>)

storiesOf('Summaries', module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {story()}
        </div>
      </div>
    </div>
  ))
  .add('default', () => <Summaries />)
  .add(
    'listing',
    () => <Summaries status="success" summaries={[SummaryShout]} />
  )
  .add(
    'loading',
    () => <Summaries status="fetching" summaries={[SummaryShout]} />
  )
  .add(
    'with error',
    () => <Summaries status="failure" summaries={[SummaryShout]} />
  )
  .add(
    'with error and no summaries',
    () => <Summaries status="failure" />
  )


storiesOf('Summary', module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {story()}
        </div>
      </div>
    </div>
  ))
  .add('with placeholder', () => <Summary isPlaceholder />)
  .add('shout', () => <Summary {...SummaryShout} />)
  .add('shout with preview', () => <Summary {...SummaryShout} previewIsOpen />)
