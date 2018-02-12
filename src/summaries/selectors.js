import _ from 'lodash'
import { createSelector } from 'reselect'

import { normalizeStory } from './utils'

const summariesState = state => state.entities.summaries
const summariesFetchState = (state, props) => state.feed[props.id]

export const summariesStatusSelector = createSelector(
  summariesFetchState,
  control => {
    if (!control) {
      return { error: '', status: 'fetching', hasMoreContent: true }
    }

    return {
      error: control.error,
      hasMoreContent: control.ids.length < control.totalCount,
      status: control.status,
    }
  }
)

export const summariesSelector = createSelector(
  summariesFetchState,
  summariesState,
  (control, summaries) =>
    control ? _.map(control.ids, id => normalizeStory(summaries[id])) : []
)
