import React, { Fragment } from 'react'
import classNames from 'classnames'

import './Summary.css'
import history from '../../history'

import Action from '../../common/Action'
import StoryChannel from './StoryChannel'
import StoryOwner from './StoryOwner'
import StoryPeek from './StoryPeek'
import StoryPlaceholder from './StoryPlaceholder'
import StoryPreview from './StoryPreview'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'

class Summary extends React.PureComponent {
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

    this.setState({ isPreviewOpen: !this.state.isPreviewOpen })
  }

  handleClick(e) {
    const { isPlaceholder, slug } = this.props

    if (isPlaceholder && slug) {
      return
    }

    history.push(`/story/${slug}`)
  }

  renderContent() {
    const { isPreviewOpen } = this.state
    const {
      channel,
      comments,
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

    return (
      <Fragment>
        <div className="StoryDock-Voting">
          <Action icon="fa fa-arrow-up" />

          <div className="StoryDock-Votes">
            {(upvotes - downvotes).humanize()}
          </div>

          <Action icon="fa fa-arrow-down" />
        </div>

        <StoryThumbnail
          icon={icon}
          src={thumbnail}
          onClick={this.handleTogglePreview}
        />

        <div className="StoryRight">
          <StoryTitle>{title}</StoryTitle>

          <div className="StoryMeta">
            <StoryOwner>{owner}</StoryOwner>
            <StoryChannel>{channel}</StoryChannel>
          </div>

          <StoryPeek preview={preview} excerpt={excerpt} />

          <div className="StoryActions">
            <Action className="StoryAction-comments" icon="far fa-comment">
              {comments.humanize()}
            </Action>

            <Action className="StoryAction-shares" icon="fa fa-retweet">
              {shares.humanize()}
            </Action>
          </div>
        </div>

        {isPreviewOpen && <StoryPreview src={preview} />}
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
  downvotes: 0,
  isPlaceholder: false,
  preview: '',
  shares: 0,
  upvotes: 0,
}

export default Summary
