import React from 'react'
import TimeAgo from 'react-timeago'

import './Shout.css'
import Score from './Score'
import Action from '../../common/Action'
import { humanizeNum, esFormatter } from '../../Utils'

const Post = props => {
  return (
    <div className="Shout">
      <div className="Shout-head">
        <Score
          downvotes={props.downvotes}
          onVoteDown={props.onVoteDown}
          onVoteUp={props.onVoteUp}
          upvotes={props.upvotes}
          voted={props.voted}
          isVoting={props.isVoting}
        />

        <a className="Shout-thumbnail" href="/">
          {
            props.classic.images && (
              <img
                src={props.classic.images['1:1'].url}
                alt="Thumbnail"
              />
            )
          }
        </a>

        <div className="Shout-info">
          <a
            className="Shout-title text-dark"
            href={`/story/${props.slug}`}
          >
            { props.title }
          </a>

          <p className="Shout-meta">
            Posteado por
            <a href={`/user/${props.owner.username}`}>
              {props.owner.username}
            </a>
            <TimeAgo
              date={props.created}
              formatter={esFormatter}
            />
          </p>

          <div className="Shout-actions">
            <Action icon="comments" title="Comentar">
              { humanizeNum(props.comments) } comentarios
            </Action>

            <Action icon="retweet" title="Compartir">
              { humanizeNum(props.shares) }
            </Action>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
