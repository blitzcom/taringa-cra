import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import TimeAgo from 'react-timeago'
import classNames from 'classnames'

import './Summary.css'

import Action from '../../common/Action'
import StoryChannel from './StoryChannelContainer'
import StoryOwner from './StoryOwner'
import StoryPeek from './StoryPeek'
import StoryPlaceholder from './StoryPlaceholder'
import StoryPreview from './StoryPreview'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'
import Votes from './Votes'

class Summary extends PureComponent {
  static contextTypes = Link.contextTypes

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.handleTogglePreview = this.handleTogglePreview.bind(this)

    this.state = {
      isPreviewOpen: false,
    }
  }

  handleTogglePreview(e) {
    e.preventDefault()
    e.stopPropagation()

    const { preview } = this.props

    if (preview) {
      this.setState({ isPreviewOpen: !this.state.isPreviewOpen })
    }
  }

  handleClick(e) {
    const { isPlaceholder, slug } = this.props

    if (isPlaceholder && slug) {
      return
    }

    const { history } = this.context.router
    history.push(`/story/${slug}`)
  }

  renderContent() {
    const { isPreviewOpen } = this.state
    const {
      channel,
      comments,
      created,
      downvotes,
      excerpt,
      icon,
      owner,
      preview,
      shares,
      thumbnail,
      title,
      upvotes,
    } = this.props

    const togglerIcon = classNames('fa', {
      'fa-expand': !isPreviewOpen,
      'fa-compress': isPreviewOpen,
    })

    return (
      <Fragment>
        <Votes downvotes={downvotes} upvotes={upvotes} />

        <StoryThumbnail
          icon={icon}
          src={thumbnail}
          onClick={this.handleTogglePreview}
        />

        <div className="StoryRight">
          <StoryTitle>{title}</StoryTitle>

          <div className="StoryMeta">
            <StoryOwner>{owner}</StoryOwner>
            <StoryChannel channel={channel} />
            <TimeAgo
              className="StoryTiming"
              date={created}
              formatter={Intl.ESShort()}
            />
          </div>

          <StoryPeek {...preview} excerpt={excerpt} />

          <div className="StoryActions">
            {preview && (
              <Action
                className="StoryAction-preview"
                onClick={this.handleTogglePreview}
                icon={togglerIcon}
              />
            )}

            <Action className="StoryAction-comments" icon="far fa-comment">
              {comments.humanize()}
            </Action>

            <Action className="StoryAction-shares" icon="fa fa-retweet">
              {shares.humanize()}
            </Action>
          </div>
        </div>

        {isPreviewOpen && <StoryPreview {...preview} />}
      </Fragment>
    )
  }

  render() {
    const { isPlaceholder } = this.props

    const classes = classNames('list-group-item Summary', {
      'list-group-item-action': !isPlaceholder,
      interactive: !isPlaceholder,
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        {isPlaceholder ? <StoryPlaceholder /> : this.renderContent()}
      </div>
    )
  }
}

Summary.defaultProps = {
  comments: 0,
  isPlaceholder: false,
  preview: '',
  shares: 0,
}

export default Summary
