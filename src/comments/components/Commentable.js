import React, { PureComponent } from 'react'
import TimeAgo from 'react-timeago'

import './Commentable.css'
import Action from '../../common/Action.js'
import Avatar from '../../users/components/Avatar'
import UsernameLink from '../../users/components/UsernameLink'

class Commentable extends PureComponent {
  render() {
    const { body, children, created, downvotes, owner, upvotes } = this.props

    return (
      <div className="Commentable">
        <div className="Commentable-avatar mr-2 mr-lg-3">
          <Avatar id={owner} />
        </div>
        <div className="Commentable-content">
          <p className="Commentable-author">
            <UsernameLink className="text-dark" id={owner} />

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
}

Commentable.defaultProps = {
  body: '#BODY',
  created: 0,
  downvotes: 0,
  owner: '#OWNER',
  upvotes: 0,
}

export default Commentable
