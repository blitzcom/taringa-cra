import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import './Comment.css'
import { esFormatter } from '../../Utils'

class Comment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showReplies: props.showReplies || false,
    }
  }

  toggleRepliesVisibility (e) {
    e.preventDefault()
    this.setState({ showReplies: !this.state.showReplies })
  }

  renderRepliesToggler () {
    const { showReplies } = this.state
    const { replies } = this.props

    if (replies && replies.items && replies.items.length > 0) {
      const repliesCount = replies.items.length
      const showRepliesLabel = repliesCount > 1 ?
        `Ver ${repliesCount} respuestas` : 'Ver respuesta'

      return (
        <button
          className="btn btn-link text-dark Comment-replies-toggler"
          onClick={this.toggleRepliesVisibility.bind(this)}
        >
          {
            showReplies ? (
              <span>Ocultar respuestas <i className="fa fa-chevron-up"/></span>
            ) : (
              <span>{showRepliesLabel} <i className="fa fa-chevron-down"/></span>
            )
          }
        </button>
      )
    }

    return null
  }

  render () {
    const { showReplies } = this.state
    const { owner, replies, body, created } = this.props

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
            <a href="/">
              {owner.username}
            </a>
            <TimeAgo
              date={created}
              formatter={esFormatter}
              className="Comment-meta-created"
            />
          </h6>

          <div
            className="Comment-body"
            dangerouslySetInnerHTML={{ __html: body }}
          />

          {this.renderRepliesToggler()}

          {
            (showReplies) && (
              <div className="Comment-replies mt-4">
                {replies.items.map(r => <Comment key={r.id} {...r} />)}
              </div>
            )
          }
        </div>
      </div>
    )
  }

}

export default Comment
