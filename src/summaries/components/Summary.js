import React from 'react'

import './Summary.css'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import Story from './Story'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'

const Summary = ({ size, history, ...props }) => {
  const getStoryContent = () => {
    switch (size) {
      case ITEM_BIG:
        return <StoryBig {...props} />
      case ITEM_SMALL:
        return <StorySmall {...props} />
      case ITEM_MEDIUM:
      default:
        return <StoryMedium {...props} />
    }
  }

  if (props.isPlaceholder) {
    return getStoryContent()
  }

  return (
    <Story history={history} slug={props.slug}>
      {getStoryContent()}
    </Story>
  )
}

export default Summary
