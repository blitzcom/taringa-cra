import _ from 'lodash'
import React, { Component } from 'react'
import classNames from 'classnames'

import './StoryMedium.css'
import Action from '../../common/Action'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'
import StoryOwner from './StoryOwner'

const Placeholder = () => {
  return (
    <div className="StoryMedium-animated-background">
      <div className="StoryMedium-score-gap ph" />
      <div className="StoryMedium-thumbnail-gap ph" />
      <div className="StoryMedium-title-gap ph" />
      <div className="StoryMedium-title-edge ph" />
      <div className="StoryMedium-meta-gap ph" />
      <div className="StoryMedium-meta-edge ph" />
    </div>
  )
}

class StoryMedium extends Component {
  static Placeholder = Placeholder

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps)
  }

  render() {
    const {
      channel,
      comments,
      created,
      downvotes,
      icon,
      isPreviewOpen,
      onTogglePreview,
      owner,
      preview,
      shares,
      thumbnail,
      title,
      upvotes,
    } = this.props

    const previewIconClass = classNames('fa', {
      'fa-expand': !isPreviewOpen,
      'fa-compress': isPreviewOpen,
    })

    return (
      <div className="d-flex">
        <div
          className="text-center border-right pr-2"
          style={{ padding: '1px 0' }}
        >
          <Action icon="fa fa-arrow-up" />

          <div
            className="my-0 small font-weight-bold"
            style={{
              minWidth: 28,
            }}
          >
            {(upvotes - downvotes).humanize()}
          </div>

          <Action icon="fa fa-arrow-down" />
        </div>

        <StoryThumbnail
          className="mx-2 mx-md-4 d-flex d-md-none"
          icon={icon}
          size={48}
          style={{ fontSize: '120%' }}
          thumbnail={thumbnail}
        />

        <StoryThumbnail
          className="mx-2 mx-md-4 d-none d-md-flex"
          icon={icon}
          style={{ fontSize: '200%' }}
          thumbnail={thumbnail}
        />

        <div>
          {title && <StoryTitle className="m-0">{title}</StoryTitle>}

          <StoryOwner
            channelName={channel.channelType === 'public' ? channel.name : ''}
            channelTitle={channel.title}
            className="text-secondary small mb-2"
            created={created}
            formatter={Intl.ES()}
            owner={owner}
          >
            Posteado por
          </StoryOwner>

          <p className="m-0">
            {preview && (
              <Action
                className="mr-3 mr-md-4"
                icon={previewIconClass}
                onClick={onTogglePreview}
              />
            )}

            <Action className="mr-3 mr-md-4" icon="far fa-comment">
              {comments.humanize()}
            </Action>

            <Action icon="fa fa-retweet">{shares.humanize()}</Action>
          </p>
        </div>
      </div>
    )
  }
}

export default StoryMedium
