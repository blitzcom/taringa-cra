import React, { Component } from 'react'
import TimeAgo from 'react-timeago'
import { Link } from 'react-router-dom'

import './Comment.css'
import { esFormatter, humanizeNum } from '../../Utils'

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
      const showRepliesLabel =
        repliesCount > 1 ? `Ver ${repliesCount} respuestas` : 'Ver respuesta'

      return (
        <button
          className="btn btn-link text-dark Comment-replies-toggler"
          onClick={this.toggleRepliesVisibility.bind(this)}
        >
          {showReplies ? (
            <span>
              Ocultar respuestas <i className="fa fa-chevron-up" />
            </span>
          ) : (
            <span>
              {showRepliesLabel} <i className="fa fa-chevron-down" />
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
            <button className="btn btn-sm btn-light mr-3">RESPONDER</button>

            <button className="btn btn-sm btn-light mr-3">
              <i className="far fa-thumbs-up" />{' '}
              {upvotes > 0 && humanizeNum(upvotes)}
            </button>

            <button className="btn btn-sm btn-light mr-3">
              <i className="far fa-thumbs-down" />{' '}
              {downvotes > 0 && humanizeNum(downvotes)}
            </button>
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
