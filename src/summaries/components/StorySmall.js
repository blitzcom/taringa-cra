import React from 'react'

import './StorySmall.css'
import Action from '../../common/Action'
import withPreview from './withPreview'
import StoryTitle from './StoryTitle'
import StoryThumbnail from './StoryThumbnail'
import StoryOwner from './StoryOwner'
import { shortESFormatter, humanizeNum } from '../../Utils'

const StorySmall = ({
  channel,
  channelName,
  comments,
  created,
  icon,
  isPlaceholder,
  isPreviewOpen,
  onTogglePreview,
  owner,
  preview,
  score,
  slug,
  title,
}) => {
  if (isPlaceholder) {
    return (
      <div className="list-group-item p-2">
        <div className="StorySmall-animated-background">
          <div className="StorySmall-thumbnail-gap ph" />
          <div className="StorySmall-top-gap ph" />
          <div className="StorySmall-bottom-gap ph" />
        </div>
      </div>
    )
  }

  const handleClick = e => {
    e.preventDefault()
    e.stopPropagation()

    if (preview && preview.kind === 'image') {
      onTogglePreview(e)
    }
  }

  return (
    <div className="d-flex align-items-baseline">
      <StoryThumbnail
        className="mr-4"
        icon={isPreviewOpen ? 'fa fa-compress' : icon}
        size={30}
        slug={slug}
        style={{ fontSize: '70%' }}
        onClick={handleClick}
      />

      <Action icon="fa fa-arrow-up" />

      <div
        className="small text-center font-weight-bold"
        style={{ minWidth: 36 }}
      >
        {score}
      </div>

      <Action className="mr-4" icon="fa fa-arrow-down" />

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
        channel={channel}
        channelName={channelName}
        className="mr-2 mb-0 text-secondary small text-nowrap"
        created={created}
        formatter={shortESFormatter}
        owner={owner}
        style={{ flex: 1 }}
      >
        Por
      </StoryOwner>

      <Action icon="far fa-comment">{humanizeNum(comments)}</Action>
    </div>
  )
}

StorySmall.defaultProps = {
  comments: 0,
  created: 1513920502005,
  icon: 'fa fa-question',
  owner: 'Taringa',
  score: '0',
  shares: 0,
  thumbnail: '',
  title: 'Taringa Small Story',
  preview: {
    kind: 'text',
    content:
      'Spicy jalapeno bacon ipsum dolor amet shankle tongue brisket, picanha flank hamburger bresaola frankfurter chicken pork andouille swine. Biltong andouille flank short loin jowl sausage pork loin drumstick ham spare ribs pig turducken chicken ribeye.',
  },
  slug: '#',
}

export default withPreview()(StorySmall)
