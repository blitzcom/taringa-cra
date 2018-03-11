import _ from 'lodash'
import React, { Component } from 'react'

import './Summary.css'
import { ITEM_SMALL, ITEM_MEDIUM, ITEM_BIG } from '../../settings/constants'
import Story from './Story'
import StorySmall from './StorySmall'
import StoryMedium from './StoryMedium'
import StoryBig from './StoryBig'
import normalizer from '../../utils/summary'

class Summary extends Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(this.props, nextProps)
  }

  render() {
    const { slug, summary, ...rest } = this.props

    const getStoryContent = (su = {}) => {
      switch (rest.size) {
        case ITEM_BIG:
          return <StoryBig {...rest} {...su} />
        case ITEM_SMALL:
          return <StorySmall {...rest} {...su} />
        case ITEM_MEDIUM:
        default:
          return <StoryMedium {...rest} {...su} />
      }
    }

    if (rest.isPlaceholder) {
      return getStoryContent()
    }

    const su = normalizer.normalize(summary)

    return <Story slug={slug}>{getStoryContent(su)}</Story>
  }
}

export default Summary
