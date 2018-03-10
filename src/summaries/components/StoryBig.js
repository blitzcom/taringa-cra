import React from 'react'

import './StoryBig.css'
import Action from '../../common/Action'
import StoryTitle from './StoryTitle'
import StoryOwner from './StoryOwner'

const StoryBig = ({
  channel,
  channelName,
  comments,
  created,
  isPlaceholder,
  owner,
  preview,
  score,
  shares,
  slug,
  thumbnail,
  title,
}) => {
  if (isPlaceholder) {
    return (
      <div className="list-group-item p-2">
        <div className="StoryBig-animated-background">
          <div className="StoryBig-score-gap ph" />
          <div className="StoryBig-meta-gap ph" />
          <div className="StoryBig-meta-edge ph" />
          <div className="StoryBig-title-gap ph" />
          <div className="StoryBig-title-edge ph" />
        </div>
      </div>
    )
  }

  return (
    <div className="d-flex">
      <div className="text-center" style={{ lineHeight: 1.1 }}>
        <Action icon="fa fa-arrow-up" />

        <div
          className="my-2 small font-weight-bold"
          style={{
            minWidth: 28,
          }}
        >
          {score}
        </div>

        <Action icon="fa fa-arrow-down" />
      </div>

      <div className="ml-2">
        <StoryOwner
          channel={channel}
          channelName={channelName}
          className="text-secondary mb-1"
          created={created}
          formatter={Intl.ES()}
          owner={owner}
          style={{ fontSize: '85%' }}
        >
          Posteado por
        </StoryOwner>

        <StoryTitle slug={slug}>{title}</StoryTitle>

        {preview && (
          <p className="mb-2">
            {preview.kind === 'image' && (
              <img
                style={{
                  maxWidth: '100%',
                }}
                src={preview.content}
                alt={title}
              />
            )}

            {preview.kind === 'text' &&
              preview.content !== title &&
              preview.content}
          </p>
        )}

        <p className="m-0">
          <Action
            className="mr-4"
            icon="far fa-comment"
            href={`/story/${slug}`}
          >
            {comments.humanize()}
          </Action>

          <Action className="mr-4" icon="fa fa-retweet">
            {shares.humanize()}
          </Action>
        </p>
      </div>
    </div>
  )
}

StoryBig.defaultProps = {
  comments: 0,
  created: 1513920502005,
  icon: 'fa fa-question',
  owner: 'Taringa',
  score: '0',
  shares: 0,
  thumbnail: '',
  title: 'Taringa Story Big',
  preview: {
    kind: 'text',
    content:
      'Spicy jalapeno bacon ipsum dolor amet shankle tongue brisket, picanha flank hamburger bresaola frankfurter chicken pork andouille swine. Biltong andouille flank short loin jowl sausage pork loin drumstick ham spare ribs pig turducken chicken ribeye.',
  },
  slug: '#',
}

export default StoryBig
