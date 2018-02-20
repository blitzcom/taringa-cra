import React from 'react'
import { humanizeNum } from '../../Utils'

import './StoryContent.css'

const StoryContent = props => {
  if (props.status === 'fetching') {
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
        {props.title && <h4 className="card-title ">{props.title}</h4>}
        {props.content}
      </div>
      <div className="card-footer bg-transparent">
        <button className="btn btn-story mr-5">
          <i className="fa fa-chevron-up" />
          {humanizeNum(props.upvotes)}
        </button>

        <button className="btn btn-story mr-5">
          <i className="fa fa-chevron-down" />
          {humanizeNum(props.downvotes)}
        </button>

        <button className="btn btn-story">
          <i className="fa fa-comment" />
          {humanizeNum(props.comments)}
        </button>
      </div>
    </div>
  )
}

export default StoryContent
