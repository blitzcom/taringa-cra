import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'

import './Comment.css'
import Action from '../../common/Action.js'
import { esFormatter } from '../../Utils'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.handleOnClik = this.handleOnClik.bind(this)
    this.state = {
      showReplies: props.showReplies || false,
    }
  }

  handleOnClik() {
    window.scrollTo(0, 0)
  }

  toggleRepliesVisibility(e) {
    e.preventDefault()
    this.setState({ showReplies: !this.state.showReplies })
  }

  renderRepliesToggler() {
    const { showReplies } = this.state
    const { replies } = this.props

    if (replies && replies.items && replies.items.length > 0) {
      const repliesCount = replies.items.length

      return (
        <button
          className="btn btn-link text-dark Comment-replies-toggler mb-2"
          onClick={this.toggleRepliesVisibility.bind(this)}
        >
          {showReplies ? (
            <span>
              {`Ocultar ${repliesCount.pluralize('respuesta', null, true)} `}
              <i className="fa fa-chevron-up" />
            </span>
          ) : (
            <span>
              {`Ver ${repliesCount.pluralize(
                'respuesta',
                null,
                repliesCount === 1
              )} `}
              <i className="fa fa-chevron-down" />
            </span>
          )}
        </button>
      )
    }

    return null
  }

  render() {
    const { showReplies } = this.state
    const { body, created, downvotes, owner, replies, upvotes } = this.props

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
              formatter={esFormatter}
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

          {this.renderRepliesToggler()}

          {showReplies && (
            <div className="Comment-replies mt-2">
              {replies.items.map(r => <Comment key={r.id} {...r} />)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Comment
