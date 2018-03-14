import React from 'react'
import classNames from 'classnames'

import './Summary.css'
import history from '../../history'
import StoryPreview from './StoryPreview'
import Action from '../../common/Action'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'
import StoryOwner from './StoryOwner'
import StoryChannel from './StoryChannel'
import StoryPeek from './StoryPeek'

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

  render() {
    const {
      channel,
      comments,
      downvotes,
      excerpt,
      icon,
      isPlaceholder,
      owner,
      preview,
      shares,
      thumbnail,
      title,
      upvotes,
    } = this.props
    const { isPreviewOpen } = this.state

    const classes = classNames('list-group-item Summary', {
      'list-group-item-action': !isPlaceholder,
      interactive: !isPlaceholder,
    })

    return (
      <div className={classes} onClick={this.handleClick}>
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
