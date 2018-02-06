import _ from 'lodash'
import { createSelector } from 'reselect'

import MarkdownEngine from '../utils/MarkdownEngine'

const storyState = (state, storyId) => state.entities.stories[storyId]
const storyFetchState = (state, storyId) => state.control.storiesFetch[storyId]

export const storyStateSelector = createSelector(
  storyFetchState,
  state => state || { status: 'fetching', error: '' }
)

export const storySelector = createSelector(storyState, story => {
  if (story) {
    const content = MarkdownEngine.Render(story.content)
    return _.assign({}, story, { content: content })
  }

  return {}
})
