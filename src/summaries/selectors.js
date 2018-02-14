import _ from 'lodash'
import { createSelector } from 'reselect'

import { normalizeStory } from './utils'

const summariesState = state => state.entities.summaries
const summariesFetchState = (state, id) => state.feed[id]

export const summariesStatusSelector = createSelector(
  summariesFetchState,
  control => {
    let hasMoreContent = true

    if (control && control.totalCount && control.ids) {
      hasMoreContent = control.ids.length < control.totalCount
    } else if (control && control.count) {
      hasMoreContent = control.count < 500
    }

    return _.assign({}, { error: '', status: 'fetching' }, control, {
      hasMoreContent,
    })
  }
)

export const summariesSelector = createSelector(
  summariesFetchState,
  summariesState,
  (control, summaries) =>
    control ? _.map(control.ids, id => normalizeStory(summaries[id])) : []
)
