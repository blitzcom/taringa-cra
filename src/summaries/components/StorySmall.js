import React from 'react'

import './StorySmall.css'
import StoryTitle from './StoryTitle'
import StoryThumbnail from './StoryThumbnail'
import StoryButton from './StoryButton'
import StoryOwner from './StoryOwner'
import { shortESFormatter } from '../../Utils'

const StorySmall = ({
  comments,
  created,
  icon,
  isPlaceholder,
  owner,
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

  return (
    <div className="list-group-item p-2">
      <div className="d-flex align-items-baseline">
        <StoryThumbnail
          className="mr-4"
          icon={icon}
          size={30}
          slug={slug}
          style={{ fontSize: '70%' }}
        />

        <button
          className="btn btn-score"
        >
          <i className="fa fa-chevron-up" />
        </button>

        <div
          className="small text-center font-weight-bold"
          style={{ minWidth: 36 }}
        >
          {score}
        </div>

        <button
          className="btn btn-score mr-4"
        >
          <i className="fa fa-chevron-down" />
        </button>

        <StoryTitle
          className="my-0 mr-1 text-nowrap text-truncate"
          slug={slug}
          style={{ fontSize: '90%' }}
        >
          {title ? title : 'Ver más'}
        </StoryTitle>

        <StoryOwner
          className="mr-2 mb-0 text-secondary small text-nowrap"
          created={created}
          formatter={shortESFormatter}
          owner={owner}
          style={{ flex: 1 }}
        >
          Por
        </StoryOwner>

        <StoryButton
          className="btn-story-compact"
          count={comments}
          icon="fa fa-comments"
          isLink
          to={`/story/${slug}`}
          wrapperStyle={{ minWidth: 50 }}
        />
      </div>
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
    content: 'Spicy jalapeno bacon ipsum dolor amet shankle tongue brisket, picanha flank hamburger bresaola frankfurter chicken pork andouille swine. Biltong andouille flank short loin jowl sausage pork loin drumstick ham spare ribs pig turducken chicken ribeye.'
  },
  slug: '#',
}

export default StorySmall
