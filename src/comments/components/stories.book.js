import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

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
  .add(
    'with visible replies',
    () => <Comment {...commentWithReplies} showReplies />
  )

storiesOf('Comments', module)
  .add('idle', () => <Comments canRender={false} />)
  .add('empty', () => <Comments totalCount={0} status="success" />)
  .add(
    'listing',
    () => <Comments totalCount={1} status="success" comments={[comment]} />
  )
  .add(
    'listing with two',
    () => <Comments totalCount={2} status="success" comments={comments} />
  )
  .add(
    'with load more',
    () => <Comments totalCount={1} status="fetching" comments={[comment]} />
  )
  .add(
    'with error',
    () => <Comments totalCount={1} status="failure" comments={[comment]} />
  )
