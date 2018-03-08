import _ from 'lodash'
import React from 'react'

import './Summary.css'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import Story from './Story'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'

class Summary extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps)
  }

  render() {
    const { size, slug, ...rest } = this.props

    const getStoryContent = () => {
      switch (size) {
        case ITEM_BIG:
          return <StoryBig {...rest} />
        case ITEM_SMALL:
          return <StorySmall {...rest} />
        case ITEM_MEDIUM:
        default:
          return <StoryMedium {...rest} />
      }
    }

    if (rest.isPlaceholder) {
      return getStoryContent()
    }

    return <Story slug={slug}>{getStoryContent()}</Story>
  }
}

export default Summary
