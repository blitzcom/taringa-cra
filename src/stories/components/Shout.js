import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import './Shout.css'
import Score from './Score'
import Action from '../../common/Action'
import ToggleAction from '../../common/ToggleAction'
import { humanizeNum, esFormatter } from '../../Utils'

class Shout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previewIsOpen: false
    }
  }

  togglePreview () {
    const { previewIsOpen } = this.state

    this.setState({ previewIsOpen: !previewIsOpen })
  }

  render () {
    const { previewIsOpen } = this.state

    return (
      <div className="Shout">
        <div className="Shout-head">
          <Score
            downvotes={this.props.downvotes}
            onVoteDown={this.props.onVoteDown}
            onVoteUp={this.props.onVoteUp}
            upvotes={this.props.upvotes}
            voted={this.props.voted}
            isVoting={this.props.isVoting}
          />

          <a className="Shout-thumbnail" href="/">
            <img
              src={this.props.summary.images.slice[0].url}
              alt="Thumbnail"
            />
          </a>

          <div className="Shout-info">
            <a
              className="Shout-title text-dark"
              href={`/story/${this.props.slug}`}
            >
              { this.props.summary.excerpt }
            </a>

            <p className="Shout-meta">
              Posteado por
              <a href={`/user/${this.props.owner.username}`}>
                {this.props.owner.username}
              </a>
              <TimeAgo
                date={this.props.created}
                formatter={esFormatter}
              />
            </p>

            <div className="Shout-actions">
              <ToggleAction
                activeIcon="compress"
                inactiveIcon="expand"
                isActive={previewIsOpen}
                onClick={this.togglePreview.bind(this)}
                title="Vista previa"
              />

              <Action icon="comments" title="Comentar">
                { humanizeNum(this.props.comments) } comentarios
              </Action>

              <Action icon="retweet" title="Compartir">
                { humanizeNum(this.props.shares) }
              </Action>
            </div>
          </div>
        </div>
        {
          previewIsOpen && (
            <div className="Shout-preview">
              <img
                src={this.props.summary.images.slice[0].url}
                alt="Preview"
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default Shout
