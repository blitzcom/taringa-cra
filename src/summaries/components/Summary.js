import React from 'react'

import './Summary.css'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'


const Summary = ({ size, ...props}) => {
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

export default Summary
