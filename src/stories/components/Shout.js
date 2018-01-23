import React, { Component } from 'react'
import TimeAgo from 'react-timeago'

import './Shout.css'
import Score from './Score'
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
              <button
                className="btn btn-action"
                onClick={this.togglePreview.bind(this)}
                title="Expandir"
              >
                <i className="fa fa-expand"/>
              </button>

              <button
                className="btn btn-action"
                title="Comentarios"
              >
                <i className="fa fa-comments"/>
                {humanizeNum(this.props.comments)} comentarios
              </button>

              <button
                className="btn btn-action"
                title="Compartir"
              >
                <i className="fa fa-retweet"/>
                {humanizeNum(this.props.shares)}
              </button>
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
