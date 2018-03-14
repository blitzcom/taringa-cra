import React from 'react'

import './StoryContent.css'
import Action from '../../common/Action'

const StoryContent = ({
  control: { status },
  story: { comments, content, downvotes, title, upvotes },
}) => {
  if (status === 'fetching') {
    return (
      <div className="StoryContent-ph card">
        <div className="StoryContent-animated-background">
          <div className="StoryContent-title-gap ph" />
          <div className="StoryContent-subtitle-gap ph" />
          <div className="StoryContent-content-gap ph" />
          <div className="StoryContent-meta-extra ph" />
        </div>
      </div>
    )
  }

  return (
    <div className="card Story-body">
      <div className="card-body">
        {title && <h4 className="card-title ">{title}</h4>}
        {content}
      </div>
      <div className="card-footer bg-light">
        <Action className="mr-4" icon="fa fa-arrow-up">
          {upvotes.humanize()}
        </Action>

        <Action className="mr-4" icon="fa fa-arrow-down">
          {downvotes.humanize()}
        </Action>

        <Action icon="far fa-comment">{comments.humanize()}</Action>
      </div>
    </div>
  )
}

StoryContent.defaultProps = {
  control: { status: 'fetching' },
  story: { comments: [], content: null, downvotes: 0, title: '', upvotes: 0 },
}

export default StoryContent
