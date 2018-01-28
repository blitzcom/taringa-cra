import React from 'react'
import TimeAgo from 'react-timeago'

import './Comment.css'
import { esFormatter } from '../../Utils'

const Comment = props => {
  return (
    <div className="Comment mb-4 d-flex">
      <div className="Comment-avatar mr-3">
        <img
          src={props.owner.avatar}
          className="rounded Comment-avatar"
          alt={props.owner.nickname}
        />
      </div>
      <div className="Comment-content">
        <h6 className="Comment-author">
          <a href="/">
            {props.owner.username}
          </a>
          <TimeAgo
            date={props.created}
            formatter={esFormatter}
            className="Comment-meta-created"
          />
        </h6>

        <div
          className="Comment-body"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {
          (
            props.replies &&
            props.replies.items &&
            props.replies.items.length > 0
          ) && (
            <div className="Comment-replies mt-4">
              {props.replies.items.map(r => <Comment key={r.id} {...r} />)}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Comment
