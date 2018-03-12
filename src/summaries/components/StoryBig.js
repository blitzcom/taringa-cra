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
      comments,
      created,
      downvotes,
      owner,
      preview,
      shares,
      title,
      upvotes,
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
            {(upvotes - downvotes).humanize()}
          </div>

          <Action icon="fa fa-arrow-down" />
        </div>

        <div className="ml-2">
          <StoryOwner
            channelTitle=""
            channelName=""
            className="text-secondary mb-1"
            created={created}
            formatter={Intl.ES()}
            owner={owner}
            style={{ fontSize: '85%' }}
          >
            Posteado por
          </StoryOwner>

          <StoryTitle>{title}</StoryTitle>

          {preview}

          <p className="m-0">
            <Action className="mr-4" icon="far fa-comment">
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
}

export default StoryBig
