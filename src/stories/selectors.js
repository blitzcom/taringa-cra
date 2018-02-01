import _ from 'lodash'
import { createSelector } from 'reselect'

import parserEngine from '../utils/StoryParserEngine'

const storyState = (state, storyId) => state.entities.stories[storyId]
const storyFetchState = (state, storyId) => state.control.storiesFetch[storyId]

export const storyStateSelector = createSelector(
  storyFetchState,
  state => state || { status: 'fetching', error: '' }
)

export const storySelector = createSelector(storyState, story => {
  if (story) {
    return _.assign({}, story, { content: parserEngine(story.content) })
  }

  return {}
})
