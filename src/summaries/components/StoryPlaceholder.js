import React, { Fragment } from 'react'

import './StoryPlaceholder.css'

const StoryPlaceholder = () => {
  return (
    <Fragment>
      <div className="StoryMedium-animated-background">
        <div className="StoryMedium-score-gap ph" />
        <div className="StoryMedium-thumbnail-gap ph" />
        <div className="StoryMedium-title-gap ph" />
        <div className="StoryMedium-title-edge ph" />
        <div className="StoryMedium-meta-gap ph" />
        <div className="StoryMedium-meta-edge ph" />
      </div>
      <div className="StoryBig-animated-background">
        <div className="StoryBig-score-gap ph" />
        <div className="StoryBig-meta-gap ph" />
        <div className="StoryBig-meta-edge ph" />
        <div className="StoryBig-title-gap ph" />
        <div className="StoryBig-title-edge ph" />
      </div>
      <div className="StorySmall-animated-background">
        <div className="StorySmall-thumbnail-gap ph" />
        <div className="StorySmall-top-gap ph" />
        <div className="StorySmall-bottom-gap ph" />
      </div>
    </Fragment>
  )
}

export default StoryPlaceholder
