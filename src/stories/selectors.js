import _ from 'lodash'
import { createSelector } from 'reselect'
import { slugToId } from '../utils/slug'

import parserEngine from '../utils/StoryParserEngine'

const storyState = (state, props) => {
  const id = slugToId(props.match.params.slug)
  return state.entities.stories[id]
}

const storyFetchState = (state, props) => {
  const id = slugToId(props.match.params.slug)
  return state.control.storiesFetch[id]
}

export const storySelector = createSelector(
  storyState,
  storyFetchState,
  (story, control) => {
    if (control) {
      let data = {}

      if (story) {
        data = _.assign({}, story, {
          content: parserEngine(story.content),
        })
      }

      return _.assign({}, { control, data })
    }

    return null
  }
)
