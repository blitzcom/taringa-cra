import React from 'react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'

import './Commentable.css'
import Action from '../../common/Action.js'

const Commentable = ({
  children,
  comment: { body, created, downvotes, upvotes },
  owner,
}) => {
  return (
    <div className="Commentable">
      <div className="Commentable-avatar mr-2 mr-lg-3">
        <img
          alt={owner.username}
          className="rounded Commentable-avatar"
          src={owner.avatar}
        />
      </div>
      <div className="Commentable-content">
        <p className="Commentable-author">
          <Link className="text-dark" to={`/u/${owner.username}`}>
            {owner.username}
          </Link>

          <TimeAgo
            className="Commentable-meta-created"
            date={created}
            formatter={Intl.ES()}
          />
        </p>

        <div
          className="Commentable-body"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <p className="my-1">
          <Action className="mr-3" icon="far fa-thumbs-up">
            {upvotes.humanize()}
          </Action>

          <Action className="mr-3" icon="far fa-thumbs-down">
            {downvotes.humanize()}
          </Action>

          <Action className="d-none d-sm-inline">RESPONDER</Action>
          <Action className="d-sm-none" icon="far fa-comment-alt" />
        </p>

        {children}
      </div>
    </div>
  )
}

Commentable.defaultProps = {
  comment: {
    body: '#BODY',
    create: 0,
    downvotes: 0,
    upvotes: 0,
  },
  owner: {
    avatar: '#AVATAR',
    username: '#USERNAME',
  },
}

export default Commentable
