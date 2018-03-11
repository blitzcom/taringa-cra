import React, { Component } from 'react'

import './StoryBig.css'
import Action from '../../common/Action'
import StoryTitle from './StoryTitle'
import StoryOwner from './StoryOwner'

const Placeholder = () => {
  return (
    <div className="StoryBig-animated-background">
      <div className="StoryBig-score-gap ph" />
      <div className="StoryBig-meta-gap ph" />
      <div className="StoryBig-meta-edge ph" />
      <div className="StoryBig-title-gap ph" />
      <div className="StoryBig-title-edge ph" />
    </div>
  )
}

class StoryBig extends Component {
  static Placeholder = Placeholder

  render() {
    const {
      channelName,
      channelTitle,
      comments,
      created,
      owner,
      preview,
      score,
      shares,
      slug,
      title,
    } = this.props

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
            channelTitle={channelTitle}
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

          {preview}

          <p className="m-0">
            <Action
              className="mr-4"
              icon="far fa-comment"
              href={`/story/${slug}`}
            >
              {comments}
            </Action>

            <Action className="mr-4" icon="fa fa-retweet">
              {shares}
            </Action>
          </p>
        </div>
      </div>
    )
  }
}

export default StoryBig
