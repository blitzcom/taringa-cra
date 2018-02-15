import _ from 'lodash'
import { createSelector } from 'reselect'

import MarkdownEngine from '../utils/MarkdownEngine'

const storyState = (state, storyId) => state.entities.stories[storyId]
const storyFetchState = (state, storyId) => state.control.storiesFetch[storyId]
const userState = state => state.entities.users

export const storyStateSelector = createSelector(
  storyFetchState,
  state => state || { status: 'fetching', error: '' }
)

export const storySelector = createSelector(
  storyState,
  userState,
  (story, userState) => {
    if (story) {
      const content = MarkdownEngine.Render(story.content)
      const user = userState[story.owner.username]

      return _.assign({}, story, {
        content: content,
        owner: user || story.owner,
      })
    }

    return {}
  }
)
