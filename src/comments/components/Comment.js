import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'

import './Comment.css'
import Action from '../../common/Action.js'
import { esFormatter, humanizeNum } from '../../Utils'
import { pluralize } from '../../utils/StringHelpers'

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
          className="btn btn-link text-dark Comment-replies-toggler"
          onClick={this.toggleRepliesVisibility.bind(this)}
        >
          {showReplies ? (
            <span>
              {`Ocultar ${pluralize(repliesCount, 'respuesta', null, true)} `}
              <i className="fa fa-chevron-up" />
            </span>
          ) : (
            <span>
              {`Ver ${pluralize(
                repliesCount,
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
      <div className="Comment mb-4 d-flex">
        <div className="Comment-avatar mr-3">
          <img
            src={owner.avatar}
            className="rounded Comment-avatar"
            alt={owner.username}
          />
        </div>
        <div className="Comment-content">
          <h6 className="Comment-author">
            <Link to={`/u/${owner.username}`} onClick={this.handleOnClik}>
              {owner.username}
            </Link>

            <TimeAgo
              date={created}
              formatter={esFormatter}
              className="Comment-meta-created"
            />
          </h6>

          <div
            className="Comment-body mb-3"
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <p className="mb-1">
            <Action className="mr-3" icon="far fa-thumbs-up">
              {humanizeNum(upvotes)}
            </Action>

            <Action className="mr-3" icon="far fa-thumbs-down">
              {humanizeNum(downvotes)}
            </Action>

            <Action className="d-none d-sm-inline">RESPONDER</Action>
            <Action className="d-sm-none" icon="far fa-comment-alt" />
          </p>

          {this.renderRepliesToggler()}

          {showReplies && (
            <div className="Comment-replies mt-4">
              {replies.items.map(r => <Comment key={r.id} {...r} />)}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Comment
