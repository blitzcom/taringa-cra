import React from 'react'

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
    </div>
  )
}

export default StoryContent
