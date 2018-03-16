import React from 'react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'
import Action from '../../common/Action.js'

const Commentable = ({
  children,
  comment: { body, created, downvotes, replies, upvotes },
  owner,
}) => {
  return (
    <div className="Comment mb-2 d-flex">
      <div className="Comment-avatar mr-3 mr-lg-4">
        <img
          alt={owner.username}
          className="rounded Comment-avatar"
          src={owner.avatar}
        />
      </div>
      <div className="Comment-content">
        <h6 className="Comment-author">
          <Link
            className="text-dark"
            onClick={this.handleOnClik}
            to={`/u/${owner.username}`}
          >
            {owner.username}
          </Link>

          <TimeAgo
            className="Comment-meta-created"
            date={created}
            formatter={Intl.ES()}
          />
        </h6>

        <div
          className="Comment-body"
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
    body: '',
    create: 0,
    downvotes: 0,
    replies: null,
    upvotes: 0,
  },
  owner: {},
}

export default Commentable
