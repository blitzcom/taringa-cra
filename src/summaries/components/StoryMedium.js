import React, { Component } from 'react'
import classNames from 'classnames'

import './StoryMedium.css'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'
import StoryButton from './StoryButton'
import StoryOwner from './StoryOwner'
import { esFormatter } from '../../Utils'
import withPreview from './withPreview'

const StoryMedium = ({
  channel,
  channelName,
  comments,
  created,
  icon,
  isPlaceholder,
  isPreviewOpen,
  onTogglePreview,
  owner,
  preview: { kind },
  score,
  shares,
  slug,
  thumbnail,
  title,
}) => {
  if (isPlaceholder) {
    return (
      <div className="list-group-item p-2">
        <div className="StoryMedium-animated-background">
          <div className="StoryMedium-score-gap ph" />
          <div className="StoryMedium-thumbnail-gap ph" />
          <div className="StoryMedium-title-gap ph" />
          <div className="StoryMedium-title-edge ph" />
          <div className="StoryMedium-meta-gap ph" />
          <div className="StoryMedium-meta-edge ph" />
        </div>
      </div>
    )
  }

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
        <button className="btn btn-score">
          <i className="fa fa-chevron-up" />
        </button>

        <div
          className="my-0 small font-weight-bold"
          style={{
            minWidth: 28,
          }}
        >
          {score}
        </div>

        <button className="btn btn-score">
          <i className="fa fa-chevron-down" />
        </button>
      </div>

      <StoryThumbnail
        className="mx-4"
        icon={icon}
        slug={slug}
        style={{ fontSize: '200%' }}
        thumbnail={thumbnail}
      />

      <div>
        {title && <StoryTitle className="m-0">{title}</StoryTitle>}

        <StoryOwner
          channel={channel}
          channelName={channelName}
          className="text-secondary small mb-2"
          created={created}
          formatter={esFormatter}
          owner={owner}
        >
          Posteado por
        </StoryOwner>

        <p className="m-0">
          {kind === 'image' && (
            <StoryButton
              icon={previewIconClass}
              onClick={onTogglePreview}
              wrapperStyle={{ minWidth: 40 }}
            />
          )}

          <StoryButton
            count={comments}
            icon="fa fa-comments"
            isLink
            to={`/story/${slug}`}
          />

          <StoryButton icon="fa fa-retweet" count={shares} />
        </p>
      </div>
    </div>
  )
}

StoryMedium.defaultProps = {
  comments: 0,
  created: 1513920502005,
  icon: 'fa fa-question',
  owner: 'Taringa',
  score: '0',
  shares: 0,
  thumbnail: '',
  title: 'Taringa Story Medium',
  preview: {
    kind: 'text',
    content:
      'Spicy jalapeno bacon ipsum dolor amet shankle tongue brisket, picanha flank hamburger bresaola frankfurter chicken pork andouille swine. Biltong andouille flank short loin jowl sausage pork loin drumstick ham spare ribs pig turducken chicken ribeye.',
  },
  slug: '#',
}

const getContent = props => (props.preview ? props.preview.content : null)

export default withPreview(getContent)(StoryMedium)
