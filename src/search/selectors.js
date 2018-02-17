import _ from 'lodash'
import { createSelector } from 'reselect'

import { normalizeStory } from '../summaries/utils'

const storiesState = state => state.search.stories
const usersState = state => state.search.users

export const storiesSelector = createSelector(storiesState, stories => {
  if (stories.items) {
  }

  return _.assign({}, stories, {
    items: _.map(stories.items, i => normalizeStory(i)),
  })
})

export const usersSelector = createSelector(usersState, users => users)
