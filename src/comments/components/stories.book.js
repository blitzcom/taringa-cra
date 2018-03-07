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
import Comments from './Comments'

storiesOf('Comment', module)
  .addDecorator(story => (
    <div className="col-8">
      <div className="card">
        <div className="card-body">{story()}</div>
      </div>
    </div>
  ))
  .add('default', () => <Comment {...comment} />)
  .add('with reply', () => <Comment {...commentWithReply} />)
  .add('with replies', () => <Comment {...commentWithReplies} />)
  .add('with visible replies', () => (
    <Comment {...commentWithReplies} showReplies />
  ))

storiesOf('Comments', module)
  .addDecorator(story => <div className="col-8">{story()}</div>)
  .add('initial fetching', () => (
    <Comments control={{ status: 'fetching', totalCount: 0 }} />
  ))
  .add('empty', () => (
    <Comments control={{ status: 'success', totalCount: 0 }} />
  ))
  .add('listing one', () => (
    <Comments
      control={{ status: 'success', totalCount: 1 }}
      comments={[comment]}
    />
  ))
  .add('listing two', () => (
    <Comments
      control={{ status: 'success', totalCount: 2 }}
      comments={comments}
    />
  ))
  .add('loading more', () => (
    <Comments
      control={{ status: 'fetching', totalCount: 1 }}
      comments={[comment]}
    />
  ))
  .add('with initial error', () => (
    <Comments control={{ status: 'failure', totalCount: 1 }} />
  ))
  .add('with error', () => (
    <Comments
      control={{ status: 'failure', totalCount: 1 }}
      comments={[comment]}
    />
  ))
