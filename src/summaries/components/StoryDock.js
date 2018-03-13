import React, { Fragment } from 'react'

import './StoryDock.css'
import Action from '../../common/Action'
import StoryThumbnail from './StoryThumbnail'
import StoryTitle from './StoryTitle'
import StoryOwner from './StoryOwner'
import StoryChannel from './StoryChannel'

const StoryDock = ({
  channel,
  comments,
  downvotes,
  icon,
  owner,
  thumbnail,
  title,
  upvotes,
  shares,
}) => {
  return (
    <Fragment>
      <div className="StoryDock-Voting">
        <Action icon="fa fa-arrow-up" />

        <div className="StoryDock-Votes">
          {(upvotes - downvotes).humanize()}
        </div>

        <Action icon="fa fa-arrow-down" />
      </div>

      <StoryThumbnail icon={icon} src={thumbnail} />

      <div className="StoryRight">
        <StoryTitle>{title}</StoryTitle>

        <div className="StoryMeta">
          <StoryOwner>{owner}</StoryOwner>
          <StoryChannel>{channel}</StoryChannel>
        </div>

        <div className="StoryActions">
          <Action className="StoryAction-comments" icon="far fa-comment">
            {comments.humanize()}
          </Action>

          <Action className="StoryAction-shares" icon="fa fa-retweet">
            {shares.humanize()}
          </Action>
        </div>
      </div>
    </Fragment>
  )
}

StoryDock.defaultProps = {
  comments: 0,
  downvotes: 0,
  shares: 0,
  upvotes: 0,
}

export default StoryDock
