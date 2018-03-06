import React from 'react'
import { humanizeNum } from '../../Utils'

import './StoryContent.css'

const StoryContent = ({
  comments,
  content,
  downvotes,
  status,
  title,
  upvotes,
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
      <div className="card-footer bg-transparent">
        <button className="btn btn-light btn-sm mr-4">
          <i className="fa fa-arrow-up" /> {upvotes > 0 && humanizeNum(upvotes)}
        </button>

        <button className="btn btn-light btn-sm mr-4">
          <i className="fa fa-arrow-down" />{' '}
          {downvotes > 0 && humanizeNum(downvotes)}
        </button>

        <button className="btn btn-light btn-sm">
          <i className="far fa-comment" />{' '}
          {comments > 0 && humanizeNum(comments)}
        </button>
      </div>
    </div>
  )
}

export default StoryContent
