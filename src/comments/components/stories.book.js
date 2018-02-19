import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import {
  comment,
  commentWithReplies,
  commentWithReply,
  comments,
} from './comment.data'
import Comment from './Comment'
import { Comments } from './Comments'

storiesOf('Comment', module)
  .add('default', () => <Comment {...comment} />)
  .add('with reply', () => <Comment {...commentWithReply} />)
  .add('with replies', () => <Comment {...commentWithReplies} />)
  .add('with visible replies', () => (
    <Comment {...commentWithReplies} showReplies />
  ))

storiesOf('Comments', module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-8">{story()}</div>
      </div>
    </div>
  ))
  .add('initial fetching', () => <Comments />)
  .add('empty', () => <Comments totalCount={0} status="success" />)
  .add('listing one', () => (
    <Comments totalCount={1} status="success" comments={[comment]} />
  ))
  .add('listing two', () => (
    <Comments totalCount={2} status="success" comments={comments} />
  ))
  .add('listing two and load more', () => (
    <Comments totalCount={3} status="success" comments={comments} />
  ))
  .add('loading more', () => (
    <Comments totalCount={1} status="fetching" comments={[comment]} />
  ))
  .add('with initial error', () => <Comments totalCount={1} status="failure" />)
  .add('with error', () => (
    <Comments totalCount={1} status="failure" comments={[comment]} />
  ))
