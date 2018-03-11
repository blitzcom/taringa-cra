import React, { Component } from 'react'

import './StorySmall.css'
import Action from '../../common/Action'
import StoryTitle from './StoryTitle'
import StoryThumbnail from './StoryThumbnail'
import StoryOwner from './StoryOwner'

const Placeholder = () => {
  return (
    <div className="StorySmall-animated-background">
      <div className="StorySmall-thumbnail-gap ph" />
      <div className="StorySmall-top-gap ph" />
      <div className="StorySmall-bottom-gap ph" />
    </div>
  )
}

class StorySmall extends Component {
  static Placeholder = Placeholder

  render() {
    const {
      channelTitle,
      channelName,
      comments,
      created,
      icon,
      isPreviewOpen,
      onTogglePreview,
      owner,
      score,
      size,
      slug,
      title,
    } = this.props

    return (
      <div className="d-flex align-items-baseline">
        <StoryThumbnail
          className="d-flex"
          icon={isPreviewOpen ? 'fa fa-compress' : icon}
          size={30}
          slug={slug}
          style={{ fontSize: '70%' }}
          onClick={onTogglePreview}
        />

        <Action className="ml-0 ml-sm-4" icon="fa fa-arrow-up" />

        <div
          className="small text-center font-weight-bold d-none d-sm-block"
          style={{ minWidth: 36 }}
        >
          {score}
        </div>

        <div className="small text-center font-weight-bold d-sm-none">
          {score}
        </div>

        <Action className="mr-0 mr-sm-4" icon="fa fa-arrow-down" />

        {title && (
          <StoryTitle
            className="my-0 mr-1 text-nowrap text-truncate"
            slug={slug}
            style={{ fontSize: '90%' }}
          >
            {title}
          </StoryTitle>
        )}

        <StoryOwner
          channelTitle={channelTitle}
          channelName={channelName}
          className="mr-sm-2 mb-0 text-secondary small text-nowrap"
          created={created}
          formatter={Intl.ESShort()}
          owner={owner}
          size={size}
          style={{ flex: 1 }}
        />

        <Action className="d-none d-sm-block" icon="far fa-comment">
          {comments}
        </Action>
      </div>
    )
  }
}

export default StorySmall
